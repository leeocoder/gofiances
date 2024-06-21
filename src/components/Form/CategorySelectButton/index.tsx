import { Text } from 'react-native';

import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../../global/styles/theme';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

interface Props extends RectButtonProps {
  label: string;
}

export default function CategorySelectButton({ label, ...rest }: Props) {
  return (
    <RectButton
      style={styles.container}
      activeOpacity={0.5}
      {...rest}
    >
      <Text style={styles.label}>{label}</Text>
      <Feather
        name='chevron-down'
        size={20}
        color={theme.colors.text}
      />
    </RectButton>
  );
}
