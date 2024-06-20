import { Feather } from '@expo/vector-icons';

import { Text, View } from 'react-native';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { TransactionTypeEnum } from '../../global/enums/TransactionTypeEnum';

interface Props {
  title: string;
  amount: string;
  lastTransaction: string;
  type: TransactionTypeEnum;
}

const iconTypeMapper = {
  [TransactionTypeEnum.income]: 'arrow-up-circle',
  [TransactionTypeEnum.outcome]: 'arrow-down-circle',
  [TransactionTypeEnum.total]: 'dollar-sign',
};

const colorsMapper = {
  [TransactionTypeEnum.income]: theme.colors.success,
  [TransactionTypeEnum.outcome]: theme.colors.attention,
  [TransactionTypeEnum.total]: theme.colors.shape,
};

function TransactionCard({ title, amount, lastTransaction, type }: Props) {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor:
          type === TransactionTypeEnum.total
            ? theme.colors.secondary
            : styles.container.backgroundColor,
      }}
    >
      <View style={styles.header}>
        <Text
          style={{
            ...styles.title,
            color:
              type === TransactionTypeEnum.total
                ? theme.colors.shape
                : styles.title.color,
          }}
        >
          {title}
        </Text>
        <Feather
          name={iconTypeMapper[type] as any}
          size={40}
          color={colorsMapper[type]}
        />
      </View>
      <View>
        <Text
          style={{
            ...styles.amount,
            color:
              type === TransactionTypeEnum.total
                ? theme.colors.shape
                : styles.amount.color,
          }}
        >
          {amount}
        </Text>
        <Text
          style={{
            ...styles.lastTransaction,
            color:
              type === TransactionTypeEnum.total
                ? theme.colors.shape
                : styles.lastTransaction.color,
          }}
        >
          {lastTransaction}
        </Text>
      </View>
    </View>
  );
}

export default TransactionCard;
