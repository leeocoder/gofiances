import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    width: '100%',
    height: '70%',
    backgroundColor: theme.colors.primary,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  titleWrapper: {
    alignItems: 'center',
  },
  title: {
    color: theme.colors.shape,
    fontFamily: theme.fonts.medium,
    fontSize: RFValue(30),
    lineHeight: RFValue(40),
    textAlign: 'center',
    marginTop: RFValue(45),
  },
  signInTitle: {
    color: theme.colors.shape,
    fontFamily: theme.fonts.regular,
    textAlign: 'center',
    width: RFValue(200),
    fontSize: RFValue(16),
    marginTop: RFValue(80),
    marginBottom: RFValue(67),
  },
  footer: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
  },
});
