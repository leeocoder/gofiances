import { Text, View } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';

function TransactionCard() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Entrada</Text>
        <Feather
          name='arrow-up-circle'
          size={40}
          color={theme.colors.success}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.amount}>R$ 17.400,00</Text>
        <Text style={styles.lastTransaction}>
          Última entrada dia 1 de abril
        </Text>
      </View>
    </View>
  );
}

export default TransactionCard;
