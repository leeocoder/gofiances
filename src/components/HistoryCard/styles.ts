import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: RFValue(24),
    paddingVertical: RFValue(12),
    backgroundColor: theme.colors.shape,
    borderRadius: 5,
    borderLeftWidth: 5,
  },
  title: {
    color: theme.colors.title,
    fontFamily: theme.fonts.regular,
    fontSize: RFValue(15),
  },
  amount: {
    color: theme.colors.title,
    fontFamily: theme.fonts.bold,
    fontSize: RFValue(15),
  },
});
