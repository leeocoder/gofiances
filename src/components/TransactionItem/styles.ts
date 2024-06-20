import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.shape,
    borderRadius: 5,
    paddingHorizontal: 25,
    paddingVertical: 17,
  },
  title: {
    fontSize: RFValue(14),
    fontFamily: theme.fonts.regular,
  },
  amount: {
    fontSize: RFValue(20),
    fontFamily: theme.fonts.regular,
    marginTop: 2,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconCategory: {
    color: theme.colors.text,
  },
  categoryName: {
    fontSize: RFValue(14),
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
  },
  transactionDate: {
    fontSize: RFValue(14),
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
  },
});
