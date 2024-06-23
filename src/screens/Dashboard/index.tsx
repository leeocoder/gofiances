import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useCallback, useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import TransactionCard from '../../components/TransactionCard';
import TransactionItem, {
  TransactionData,
} from '../../components/TransactionItem';
import { globalConfig } from '../../global/data/config';
import { TransactionTypeEnum } from '../../global/enums/TransactionTypeEnum';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { transactionMapper } from '../../mappers/transaction.mapper';
import { useFocusEffect } from '@react-navigation/native';

export interface TransactionCardsList extends TransactionData {
  id: string;
}

export default function Dashboard() {
  const collectionKey: string = globalConfig.collectionKey;
  const [data, setData] = useState<TransactionCardsList[]>([]);

  async function loadTransactions(): Promise<void> {
    const dataStorage = await AsyncStorage.getItem(collectionKey);
    const currentData = dataStorage ? JSON.parse(dataStorage) : [];
    const mappedData = currentData.map(transactionMapper);
    setData(mappedData);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userWrapper}>
          <View style={styles.userInfo}>
            <Image
              style={styles.profileImage}
              source={{
                uri: 'https://avatars.githubusercontent.com/u/37962036?v=4',
              }}
            />
            <View>
              <Text style={styles.greeting}>Olá,</Text>
              <Text style={styles.username}>Leonardo</Text>
            </View>
          </View>
          <BorderlessButton onPress={() => {}}>
            <Feather
              name='power'
              size={24}
              color={theme.colors.secondary}
            />
          </BorderlessButton>
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.transactionCardsWrapper}
        contentContainerStyle={styles.transactionCards}
      >
        <TransactionCard
          title='Entrada'
          amount='R$ 17.400,00'
          lastTransaction='Última entrada dia 13 de abril'
          type={TransactionTypeEnum.income}
        />
        <TransactionCard
          title='Saídas'
          amount='R$ 1.259,00'
          lastTransaction='Última saída dia 03 de abril'
          type={TransactionTypeEnum.outcome}
        />
        <TransactionCard
          title='Total'
          amount='R$ 16.141,00'
          lastTransaction='01 à 16 de abril'
          type={TransactionTypeEnum.total}
        />
      </ScrollView>
      <View style={styles.transactions}>
        <Text style={styles.transactionsTitle}>Listagem</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <TransactionItem data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.transactionsList}
        />
      </View>
    </View>
  );
}
