import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.shape,
    width: RFValue(280),
    borderRadius: 5,
    paddingHorizontal: 23,
    paddingVertical: 19,
    paddingBottom: RFValue(40),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: RFValue(33),
  },
  title: {
    color: theme.colors.title,
    fontSize: RFValue(14),
  },
  amount: {
    color: theme.colors.title,
    fontSize: RFValue(32),
    fontFamily: theme.fonts.medium,
    lineHeight: RFValue(35),
  },
  lastTransaction: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
    fontSize: RFValue(12),
  },
});
