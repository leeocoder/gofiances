import { Feather } from '@expo/vector-icons';

import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import TransactionCard from '../../components/TransactionCard';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { TransactionTypeEnum } from '../../global/enums/TransactionTypeEnum';
import TransactionItem, {
  TransactionData,
} from '../../components/TransactionItem';

interface TransactionCardsList extends TransactionData {
  id: number;
}

export default function Dashboard() {
  const data: TransactionCardsList[] = [
    {
      id: 1,
      title: 'Desenvolvimento de site',
      transactionDate: '13/04/2020',
      amount: 'R$ 12.000,00',
      category: { key: 'dollar-sign', icon: 'shopping-bag', name: 'Vendas' },
      transactionType: TransactionTypeEnum.income,
    },
    {
      id: 2,
      title: 'Hamburgueria Pizzy',
      transactionDate: '10/04/2020',
      amount: 'R$ 59,00',
      category: { key: 'coffee', icon: 'coffee', name: 'Alimentação' },
      transactionType: TransactionTypeEnum.outcome,
    },
    {
      id: 3,
      title: 'Consultoria de Marketing',
      transactionDate: '05/05/2020',
      amount: 'R$ 7.500,00',
      category: { key: 'briefcase', icon: 'briefcase', name: 'Consultoria' },
      transactionType: TransactionTypeEnum.income,
    },
    {
      id: 4,
      title: 'Compra de Suprimentos de Escritório',
      transactionDate: '20/04/2020',
      amount: 'R$ 980,00',
      category: { key: 'archive', icon: 'archive', name: 'Escritório' },
      transactionType: TransactionTypeEnum.outcome,
    },
    {
      id: 5,
      title: 'Pagamento de Salários',
      transactionDate: '30/04/2020',
      amount: 'R$ 15.000,00',
      category: { key: 'credit-card', icon: 'credit-card', name: 'Salários' },
      transactionType: TransactionTypeEnum.outcome,
    },
    {
      id: 6,
      title: 'Recebimento de Cliente X',
      transactionDate: '15/05/2020',
      amount: 'R$ 3.200,00',
      category: { key: 'users', icon: 'users', name: 'Clientes' },
      transactionType: TransactionTypeEnum.income,
    },
    {
      id: 7,
      title: 'Supermercado - Compra Mensal',
      transactionDate: '25/05/2020',
      amount: 'R$ 750,00',
      category: {
        key: 'shopping-cart',
        icon: 'shopping-cart',
        name: 'Supermercado',
      },
      transactionType: TransactionTypeEnum.outcome,
    },
    {
      id: 8,
      title: 'Venda de Produtos Artesanais',
      transactionDate: '02/06/2020',
      amount: 'R$ 1.200,00',
      category: { key: 'palette', icon: 'dollar-sign', name: 'Artesanato' },
      transactionType: TransactionTypeEnum.income,
    },
    {
      id: 9,
      title: 'Pagamento de Conta de Luz',
      transactionDate: '18/06/2020',
      amount: 'R$ 180,00',
      category: { key: 'zap', icon: 'zap', name: 'Contas' },
      transactionType: TransactionTypeEnum.outcome,
    },
    {
      id: 10,
      title: 'Aluguel do Mês',
      transactionDate: '05/06/2020',
      amount: 'R$ 2.000,00',
      category: { key: 'home', icon: 'home', name: 'Aluguel' },
      transactionType: TransactionTypeEnum.outcome,
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
