import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    height: RFPercentage(42),
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',

  },
  userWrapper: {
    width: '100%',
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16
  },
  profileImage: {
    width: RFValue(48),
    height: RFValue(48),
    borderRadius: RFValue(10),
    backgroundColor: theme.colors.shape,
    borderWidth: 1,
    borderColor: theme.colors.shape,
    justifyContent: 'center',
    alignItems: 'center'
  },
  greeting: {
    color: theme.colors.shape,
    fontSize: RFValue(18),
    fontFamily: theme.fonts.regular,
    lineHeight: RFValue(24),
  },
  username: {
    color: theme.colors.shape,
    lineHeight: RFValue(24),
    fontSize: RFValue(18),
    fontFamily: theme.fonts.bold
  },
});