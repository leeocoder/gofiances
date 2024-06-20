import { Feather } from '@expo/vector-icons';

import { Text, View } from 'react-native';

import { styles } from './styles';

interface Category {
  name: string;
  key: string;
  icon: string;
}

interface Props {
  title: string;
  amount: string;
  category: Category;
  transactionDate: string;
}

function TransactionItem({ title, amount, category, transactionDate }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.amount}>{amount}</Text>
      <View style={styles.footer}>
        <View style={styles.category}>
          <Feather
            style={styles.iconCategory}
            name={category.icon as any}
            size={20}
          />
          <Text style={styles.categoryName}>{category.name}</Text>
        </View>
        <Text style={styles.transactionDate}>{transactionDate}</Text>
      </View>
    </View>
  );
}

export default TransactionItem;
