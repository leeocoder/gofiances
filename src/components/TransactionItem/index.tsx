import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';

function TransactionItem() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desenvolvimento de Site</Text>
      <Text style={styles.amount}>R$ 12.000,00</Text>
      <View style={styles.footer}>
        <View style={styles.category}>
          <Feather
            style={styles.iconCategory}
            name='dollar-sign'
            size={20}
          />
          <Text style={styles.categoryName}>Vendas</Text>
        </View>
        <Text style={styles.transactionDate}>01/04/2021</Text>
      </View>
    </View>
  );
}

export default TransactionItem;
