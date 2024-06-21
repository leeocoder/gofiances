import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

interface Props extends RectButtonProps {
  labelButton: string;
}

export default function Button({ labelButton, ...rest }: Props) {
  return (
    <RectButton
      {...rest}
      style={styles.container}
    >
      <Text style={styles.label}>{labelButton}</Text>
    </RectButton>
  );
}
