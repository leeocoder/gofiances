import { Text, View } from 'react-native';

import { styles } from './styles';
import Input from '../../components/Form/Input';

export default function Register() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cadastro</Text>
      </View>
      <View style={styles.form}>
        <Input placeholder='Nome' />
        <Input placeholder='Email' />
        <Input placeholder='Senha' />
      </View>
    </View>
  );
}
