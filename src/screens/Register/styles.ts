import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingBottom: RFValue(25),
  },
  header: {
    backgroundColor: theme.colors.primary,
    width: '100%',
    height: RFValue(113),
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 19,
  },
  title: {
    color: theme.colors.shape,
    fontFamily: theme.fonts.regular,
    fontSize: RFValue(18),
    lineHeight: RFValue(24),
  },
  form: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: RFValue(24),
    paddingTop: RFValue(24),
  },
  transactionTypes: {
    flexDirection: 'row',
    gap: 16,
  },
  fields: {
    rowGap: 16,
  },
});
