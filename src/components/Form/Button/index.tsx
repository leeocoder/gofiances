import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  labelButton: string;
}

export default function Button({ labelButton, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      style={styles.container}
      activeOpacity={0.7}
    >
      <Text style={styles.label}>{labelButton}</Text>
    </TouchableOpacity>
  );
}
