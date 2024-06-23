import { yupResolver } from '@hookform/resolvers/yup';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  Alert,
  Keyboard,
  Modal,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Button from '../../components/Form/Button';
import CategorySelectButton from '../../components/Form/CategorySelectButton';
import InputForm from '../../components/Form/InputForm';
import TransactionTypeButton from '../../components/Form/TransactionTypeButton';
import { TransactionTypeEnum } from '../../global/enums/TransactionTypeEnum';
import { CategoryInterface } from '../../interfaces/category.interface';
import CategorySelectModal from '../CategorySelectModal';
import { styles } from './styles';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { BottomTabNavigatorParams } from '../../global/enums/navigation.type';

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
  type HomeTabNavigationProp = BottomTabNavigationProp<
    BottomTabNavigatorParams,
    'List'
  >;
  const collectionKey: string = '@gofinances:transactions';
  const [selectedTypeTransaction, setSelectedTypeTransaction] =
    useState<TransactionTypeEnum | null>(null);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [category, setCategory] = useState<CategoryInterface | null>(null);
  const navigation = useNavigation<HomeTabNavigationProp>();

  const navigateToFeed = () => {
    navigation.navigate('List');
  };

  const {
    control,
    handleSubmit,
    reset,
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

  async function handleRegister(form: FormData) {
    if (!selectedTypeTransaction) {
      Alert.alert('Selecione o tipo da transação');
      return;
    }

    if (!category) {
      Alert.alert('Selecione a categoria');
      return;
    }

    const newTransaction = {
      name: form.name,
      amount: form.amount,
      category: category?.key,
      transactionType: selectedTypeTransaction,
    };

    try {
      const dataStorage = await AsyncStorage.getItem(collectionKey);
      const currentData = dataStorage ? JSON.parse(dataStorage) : [];
      const dataFormatted = [
        {
          id: String(uuid.v4()),
          ...newTransaction,
          createdAt: new Date(),
        },
        ...currentData,
      ];
      await AsyncStorage.setItem(collectionKey, JSON.stringify(dataFormatted));
      setSelectedTypeTransaction(null);
      setCategory(null);
      reset();
      navigateToFeed();
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível salvar!, tente novamente');
    }
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
