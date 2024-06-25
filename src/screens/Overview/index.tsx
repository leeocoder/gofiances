import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useFocusEffect } from '@react-navigation/native';

import { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import { BorderlessButton, ScrollView } from 'react-native-gesture-handler';
import { PieChart } from 'react-native-gifted-charts';
import { RFValue } from 'react-native-responsive-fontsize';
import { addMonths, format, subMonths } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import HistoryCard from '../../components/HistoryCard';
import { TransactionData } from '../../components/TransactionItem';
import { categories } from '../../global/data/categories.data';
import { globalConfig } from '../../global/data/config';
import { TransactionTypeEnum } from '../../global/enums/TransactionTypeEnum';
import { convertToBRLFormat } from '../../global/helpers/convert-to-brl-format.helper';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { convertToDateFormat } from '../../global/helpers/convert-to-date.helper';

interface TransactionOverviewInterface {
  key: string;
  title: string;
  amount: string;
  color: string;
  percent: number;
  percentFormatted: string;
}

interface TransactionCardsOverviewList
  extends Omit<TransactionData, 'category'> {
  id: string;
  createdAt: string;
  category: string;
}

interface ChartPropsInterface {
  value: number;
  color: string;
  text: string;
}

export default function Overview() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [transactionsOverviewData, setTransactionsOverviewData] = useState<
    TransactionOverviewInterface[]
  >([]);
  const [chartData, setChartData] = useState<ChartPropsInterface[]>([]);

  function handleDateChange(actions: 'next' | 'prev') {
    if (actions === 'next') {
      const newDate = addMonths(selectedDate, 1);
      setSelectedDate(newDate);
    } else {
      const newDate = subMonths(selectedDate, 1);
      setSelectedDate(newDate);
    }
  }

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
      ({ transactionType, createdAt }) => {
        return (
          transactionType === TransactionTypeEnum.outcome &&
          new Date(createdAt).getMonth() === selectedDate.getMonth() &&
          new Date(createdAt).getFullYear() === selectedDate.getFullYear()
        );
      }
    );
    const expenseTotal = outcomeTransactions.reduce(
      (accumulator, { amount }) => {
        return accumulator + Number(amount);
      },
      0
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

      const percent = (categorySum / expenseTotal) * 100;

      if (categorySum > 0) {
        totalByCategory.push({
          key: category.key,
          title: category.name,
          amount: convertToBRLFormat(categorySum),
          color: category.color,
          percent,
          percentFormatted: `${percent.toFixed(0)}%`,
        });
      }
    });
    const data: ChartPropsInterface[] = totalByCategory.map((item) => {
      return {
        value: item.percent,
        color: item.color,
        text: item.percentFormatted,
      };
    });
    setChartData(data);
    setTransactionsOverviewData(totalByCategory);
  }

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [selectedDate])
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Resumo por categoria</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: useBottomTabBarHeight(),
          paddingTop: RFValue(24),

          flex: 1,
          paddingHorizontal: RFValue(24),
          rowGap: RFValue(8),
        }}
      >
        <View style={styles.monthSelect}>
          <BorderlessButton onPress={() => handleDateChange('prev')}>
            <Feather
              name='chevron-left'
              size={24}
              color={theme.colors.title}
            />
          </BorderlessButton>
          <Text style={styles.monthSelectLabel}>
            {new Intl.DateTimeFormat('pt-BR', {
              month: 'long',
              year: 'numeric',
            }).format(new Date(selectedDate))}
          </Text>
          <BorderlessButton onPress={() => handleDateChange('next')}>
            <Feather
              name='chevron-right'
              size={24}
              color={theme.colors.title}
            />
          </BorderlessButton>
        </View>
        <View style={styles.chartContainer}>
          <PieChart
            data={chartData}
            showText={true}
            font={theme.fonts.medium}
            textSize={RFValue(14)}
            textColor={theme.colors.shape}
            donut={true}
          />
        </View>
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
