import { useState } from 'react';
import {
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import { useForm } from 'react-hook-form';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { styles } from './styles';
import Button from '../../components/Form/Button';
import TransactionTypeButton from '../../components/Form/TransactionTypeButton';
import { TransactionTypeEnum } from '../../global/enums/TransactionTypeEnum';
import CategorySelectButton from '../../components/Form/CategorySelectButton';
import CategorySelectModal from '../CategorySelectModal';
import { CategoryInterface } from '../../interfaces/category.interface';
import InputForm from '../../components/Form/InputForm';

interface FormData {
  name: string;
  amount: number;
}

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Tem que ter pelo  3 caracteres o texto')
    .required('O nome é obrigatório'),
  amount: Yup.number()
    .typeError('Informe um valor numérico')
    .positive('O valor não pode ser negativo')
    .required('O valor é obrigatório'),
});

export default function Register() {
  const [selectedTypeTransaction, setSelectedTypeTransaction] =
    useState<TransactionTypeEnum | null>(null);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [category, setCategory] = useState<CategoryInterface | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleSelectedTypeTransaction(type: TransactionTypeEnum) {
    setSelectedTypeTransaction(type);
  }

  function isActive(type: TransactionTypeEnum): boolean {
    return type === selectedTypeTransaction;
  }

  function handleSetIsModalOpen() {
    setIsModalOpen(!isModalOpen);
  }

  function handleRegister(form: FormData) {
    if (!selectedTypeTransaction) {
      Alert.alert('Selecione o tipo da transação');
      return;
    }

    if (!category) {
      Alert.alert('Selecione a categoria');
      return;
    }

    const data = {
      name: form.name,
      amount: form.amount,
      category: category?.key,
      transactionType: selectedTypeTransaction,
    };
    console.log(data);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Cadastro</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.fields}>
            <InputForm
              name='name'
              placeholder='Name'
              control={control}
              autoCapitalize='sentences'
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />

            <InputForm
              name='amount'
              placeholder='Price'
              control={control}
              keyboardType='numeric'
              error={errors.amount && errors.amount.message}
            />
            <View style={styles.transactionTypes}>
              <TransactionTypeButton
                title='Income'
                type={TransactionTypeEnum.income}
                isActive={isActive(TransactionTypeEnum.income)}
                onPress={() =>
                  handleSelectedTypeTransaction(TransactionTypeEnum.income)
                }
              />
              <TransactionTypeButton
                title='Outcome'
                type={TransactionTypeEnum.outcome}
                isActive={isActive(TransactionTypeEnum.outcome)}
                onPress={() =>
                  handleSelectedTypeTransaction(TransactionTypeEnum.outcome)
                }
              />
            </View>
            <CategorySelectButton
              label={category?.name ?? 'Categoria'}
              onPress={handleSetIsModalOpen}
            />
          </View>
          <Button
            labelButton='Enviar'
            onPress={handleSubmit(handleRegister)}
          />
        </View>
        <Modal visible={isModalOpen}>
          <CategorySelectModal
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleSetIsModalOpen}
          />
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
}
