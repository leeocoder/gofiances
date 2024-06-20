import { TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';
import { theme } from '../../../global/styles/theme';

type Props = TextInputProps;

export default function Input({ ...rest }: Props) {
  return (
    <TextInput
      {...rest}
      style={styles.container}
      placeholderTextColor={theme.colors.text}
    />
  );
}
