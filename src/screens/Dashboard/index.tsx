import { Feather } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native';
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
import { convertToBRLFormat } from '../../global/helpers/convert-to-brl-format.helper';

export interface TransactionCardsList extends TransactionData {
  id: string;
}

export interface TransactionCardsData {
  incomes: { amount: string };
  expenses: { amount: string };
  total: { amount: string };
}

export default function Dashboard() {
  const collectionKey: string = globalConfig.collectionKey;
  const [transactions, setTransactions] = useState<TransactionCardsList[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [transactionSummary, setTransactionSummary] =
    useState<TransactionCardsData | null>(null);
  let entriesSum: number = 0;
  let expenseSum: number = 0;

  function calcExpenses(data: TransactionCardsList[]): number {
    const expenseSum = data.reduce((accumulator, currentValue) => {
      if (currentValue.transactionType === TransactionTypeEnum.outcome) {
        return accumulator + Number(currentValue.amount);
      } else {
        return accumulator;
      }
    }, 0);
    return expenseSum;
  }

  function calcEntries(data: TransactionCardsList[]): number {
    const entriesSum = data.reduce((accumulator, currentValue) => {
      if (currentValue.transactionType === TransactionTypeEnum.income) {
        return accumulator + Number(currentValue.amount);
      } else {
        return accumulator;
      }
    }, 0);
    return entriesSum;
  }

  async function loadTransactions(): Promise<void> {
    const dataStorage = await AsyncStorage.getItem(collectionKey);
    const currentData = dataStorage ? JSON.parse(dataStorage) : [];
    const mappedData = currentData.map(transactionMapper);
    entriesSum = calcEntries(currentData);
    expenseSum = calcExpenses(currentData);
    setTransactions(mappedData);
    setTransactionSummary({
      incomes: { amount: convertToBRLFormat(entriesSum) },
      expenses: { amount: convertToBRLFormat(expenseSum) },
      total: { amount: convertToBRLFormat(entriesSum - expenseSum) },
    });
    setIsLoading(false);
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
      {isLoading ? (
        <ActivityIndicator
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          color={theme.colors.primary}
          size='large'
        />
      ) : (
        <>
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
              amount={transactionSummary?.incomes.amount ?? '0'}
              lastTransaction='Última entrada dia 13 de abril'
              type={TransactionTypeEnum.income}
            />
            <TransactionCard
              title='Saídas'
              amount={transactionSummary?.expenses.amount ?? '0'}
              lastTransaction='Última saída dia 03 de abril'
              type={TransactionTypeEnum.outcome}
            />
            <TransactionCard
              title='Total'
              amount={transactionSummary?.total.amount ?? '0'}
              lastTransaction='01 à 16 de abril'
              type={TransactionTypeEnum.total}
            />
          </ScrollView>
          <View style={styles.transactions}>
            <Text style={styles.transactionsTitle}>Listagem</Text>
            <FlatList
              data={transactions}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => <TransactionItem data={item} />}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.transactionsList}
            />
          </View>
        </>
      )}
    </View>
  );
}
