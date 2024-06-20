import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../../global/styles/theme';

interface Props {
  label: string;
}

export default function CategorySelect({ label }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
    >
      <Text style={styles.label}>{label}</Text>
      <Feather
        name='chevron-down'
        size={20}
        color={theme.colors.text}
      />
    </TouchableOpacity>
  );
}
