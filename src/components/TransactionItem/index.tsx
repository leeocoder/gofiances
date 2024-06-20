import { Feather } from '@expo/vector-icons';

import { Text, View } from 'react-native';

import { styles } from './styles';
import { TransactionTypeEnum } from '../../global/enums/TransactionTypeEnum';
import { theme } from '../../global/styles/theme';

interface Category {
  name: string;
  key: string;
  icon: string;
}

export interface TransactionData {
  transactionType: TransactionTypeEnum;
  title: string;
  amount: string;
  category: Category;
  transactionDate: string;
}

interface Props {
  data: TransactionData;
}

function TransactionItem({
  data: { title, amount, category, transactionDate, transactionType },
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text
        style={[
          styles.amount,
          {
            color:
              transactionType === TransactionTypeEnum.outcome
                ? theme.colors.attention
                : theme.colors.success,
          },
        ]}
      >
        {`${
          transactionType === TransactionTypeEnum.outcome ? '-' : ''
        }${amount}`}
      </Text>
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
