import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
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
    fontFamily: theme.fonts.regular,
    color: theme.colors.shape,
    fontSize: RFValue(18),
  },
  categoriesList: {
    flex: 1,
    width: '100%',
  },
  category: {
    padding: RFValue(15),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: RFValue(8),
  },
  categoryLabel: {
    fontFamily: theme.fonts.regular,
    fontSize: RFValue(14),
    lineHeight: RFValue(18),
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: theme.colors.text,
  },
  footer: {
    width: '100%',
    padding: 24,
  },
});
