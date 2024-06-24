import { Text, View } from 'react-native';

import { styles } from './styles';

interface Props {
  title: string;
  amount: string;
  color: string;
}
function HistoryCard({ title, amount, color }: Props) {
  return (
    <View style={[styles.container, { borderLeftColor: color }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.amount}>{amount}</Text>
    </View>
  );
}

export default HistoryCard;
