import { Text, View } from 'react-native';
import { styles } from './styles';
import HistoryCard from '../../components/HistoryCard';
import { theme } from '../../global/styles/theme';

export default function Overview() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Resumo por categoria</Text>
      </View>
      <View style={{ padding: 10 }}>
        <HistoryCard
          title='Compras'
          amount='R$ 400,00'
          color={theme.colors.secondary}
        />
      </View>
    </View>
  );
}
