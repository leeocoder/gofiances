import { Text, View } from 'react-native';

import { styles } from './styles';
import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';

export default function Register() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cadastro</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.fields}>
          <Input placeholder='Nome' />
          <Input placeholder='Email' />
        </View>
        <Button labelButton='Enviar' />
      </View>
    </View>
  );
}
