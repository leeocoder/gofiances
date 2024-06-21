import { Text, TouchableOpacity } from 'react-native';
import { TouchableOpacityProps } from 'react-native-gesture-handler';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  labelButton: string;
  onPress: () => void;
}

export default function Button({ labelButton, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      style={styles.container}
    >
      <Text style={styles.label}>{labelButton}</Text>
    </TouchableOpacity>
  );
}
