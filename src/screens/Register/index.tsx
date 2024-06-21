import { useState } from 'react';
import { Text, View, Modal } from 'react-native';

import { styles } from './styles';
import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import TransactionTypeButton from '../../components/Form/TransactionTypeButton';
import { TransactionTypeEnum } from '../../global/enums/TransactionTypeEnum';
import CategorySelectButton from '../../components/Form/CategorySelectButton';
import CategorySelectModal from '../CategorySelectModal';
import { CategoryInterface } from '../../interfaces/category.interface';

export default function Register() {
  const [selectedTypeTransaction, setSelectedTypeTransaction] =
    useState<TransactionTypeEnum | null>(null);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [category, setCategory] = useState<CategoryInterface | null>(null);

  function handleSelectedTypeTransaction(type: TransactionTypeEnum) {
    setSelectedTypeTransaction(type);
  }

  function isActive(type: TransactionTypeEnum): boolean {
    return type === selectedTypeTransaction;
  }

  function handleSetIsModalOpen() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cadastro</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.fields}>
          <Input placeholder='Nome' />
          <Input placeholder='Email' />
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
        <Button labelButton='Enviar' />
      </View>
      <Modal visible={isModalOpen}>
        <CategorySelectModal
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleSetIsModalOpen}
        />
      </Modal>
    </View>
  );
}
