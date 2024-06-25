import { Text, View } from 'react-native';

import { styles } from './styles';
import AppleSVG from '../../assets/icons/apple-icon.svg';
import GoogleSVG from '../../assets/icons/google-icon.svg';
import LogoSVG from '../../assets/icons/logo-full.svg';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleWrapper}>
          <LogoSVG
            width={120}
            height={68}
          />
          {/*  */}
          <Text style={styles.title}>
            Controle suas finanças de forma muito simples
          </Text>
        </View>
        <Text style={styles.signInTitle}>
          Faça seu login com uma das contas abaixo
        </Text>
      </View>
      <View style={styles.footer}></View>
    </View>
  );
}
