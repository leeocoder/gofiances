import { Feather } from '@expo/vector-icons';

import { Image, ScrollView, Text, View } from 'react-native';

import TransactionCard from '../../components/TransactionCard';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { TransactionTypeEnum } from '../../global/enums/TransactionTypeEnum';
import TransactionItem from '../../components/TransactionItem';

export default function Dashboard() {
  const data = [
    {
      title: 'Desenvolvimento de site',
      transactionDate: '13/04/2020',
      amount: 'R$ 12.000,00',
      category: { key: 'shop', icon: 'dollar-sign', name: 'Vendas' },
    },
    {
      title: 'Hamburgueria Pizzy',
      transactionDate: '10/04/2020',
      amount: '- R$ 59,00',
      category: { key: 'shop', icon: 'coffee', name: 'Vendas' },
    },
  ];
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
          <Feather
            name='power'
            size={24}
            color={theme.colors.secondary}
          />
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
        <TransactionItem data={data[0]} />
      </View>
    </View>
  );
}
