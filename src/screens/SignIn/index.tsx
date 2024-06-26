import { Text, View } from 'react-native';
import { useContext } from 'react';

import { styles } from './styles';
import AppleSVG from '../../assets/icons/apple-icon.svg';
import GoogleSVG from '../../assets/icons/google-icon.svg';
import LogoSVG from '../../assets/icons/logo-full.svg';
import SignInButton from '../../components/SignInButton';
import { useAuth } from '../../hooks/auth';

export default function SignIn() {
  const { user } = useAuth();
  console.log(user);

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
      <View style={styles.footer}>
        <View style={styles.footerWrapper}>
          <SignInButton
            title='Entrar com o Google'
            svg={GoogleSVG}
          />
          <SignInButton
            title='Entrar com o Apple'
            svg={AppleSVG}
          />
        </View>
      </View>
    </View>
  );
}
