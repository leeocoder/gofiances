import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import { useCallback, useState } from 'react';
import { Text, View } from 'react-native';

import HistoryCard from '../../components/HistoryCard';
import { globalConfig } from '../../global/data/config';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { TransactionCardsList } from '../Dashboard';
import { categories } from '../../global/data/categories.data';
import { TransactionData } from '../../components/TransactionItem';
import { TransactionTypeEnum } from '../../global/enums/TransactionTypeEnum';
import { convertToBRLFormat } from '../../global/helpers/convert-to-brl-format.helper';
import { ScrollView } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface TransactionOverviewInterface {
  key: string;
  title: string;
  amount: string;
  color: string;
}

interface TransactionCardsOverviewList
  extends Omit<TransactionData, 'category'> {
  id: string;
  createdAt: string;
  category: string;
}

export default function Overview() {
  const [transactionsOverviewData, setTransactionsOverviewData] = useState<
    TransactionOverviewInterface[]
  >([]);

  async function loadData(): Promise<void> {
    const data = await AsyncStorage.getItem(globalConfig.collectionKey);
    const transactions: TransactionCardsOverviewList[] = data
      ? JSON.parse(data)
      : [];
    setTransactionsOverview(transactions);
  }

  function setTransactionsOverview(
    transactions: TransactionCardsOverviewList[]
  ): void {
    const outcomeTransactions = transactions.filter(
      ({ transactionType }) => transactionType === TransactionTypeEnum.outcome
    );
    const totalByCategory: TransactionOverviewInterface[] = [];
    categories.forEach((category) => {
      let categorySum: number = 0;
      outcomeTransactions.forEach((transaction) => {
        if (
          transaction.category === category.key &&
          Number(transaction.amount) > 0
        ) {
          categorySum += Number(transaction.amount);
        }
      });
      if (categorySum > 0) {
        totalByCategory.push({
          key: category.key,
          title: category.name,
          amount: convertToBRLFormat(categorySum),
          color: category.color,
        });
      }
    });
    setTransactionsOverviewData(totalByCategory);
  }

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Resumo por categoria</Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          padding: RFValue(25),
          rowGap: RFValue(8),
        }}
      >
        {transactionsOverviewData.map(({ title, amount, color }) => (
          <HistoryCard
            key={title}
            title={title}
            amount={amount}
            color={color}
          />
        ))}
      </ScrollView>
    </View>
  );
}
