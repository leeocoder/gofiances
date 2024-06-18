import { Image, View, Text } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userWrapper}>
          <View style={styles.userInfo}>
            <Image
              style={styles.profileImage}
              source={{
                uri: 'https://avatars.githubusercontent.com/u/37962036?v=4',
              }}
            />
            <View>
              <Text style={styles.greeting}>Olá,</Text>
              <Text style={styles.username}>Leonardo</Text>
            </View>
          </View>
          <Feather
            name='power'
            size={24}
            color={theme.colors.secondary}
          />
        </View>
      </View>
    </View>
  );
}
