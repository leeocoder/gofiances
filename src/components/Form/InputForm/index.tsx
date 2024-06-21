import { Control, Controller } from 'react-hook-form';
import { Text, TextInputProps, View } from 'react-native';

import { theme } from '../../../global/styles/theme';
import Input from '../Input';
import { styles } from './styles';

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error?: string;
}

export default function InputForm({ control, error, name, ...rest }: Props) {
  return (
    <View>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            style={styles.container}
            placeholderTextColor={theme.colors.text}
            {...rest}
          />
        )}
        name={name}
      ></Controller>
      {error && <Text style={styles.errorMessage}>{error}</Text>}
    </View>
  );
}
