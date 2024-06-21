import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.shape,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    paddingHorizontal: RFValue(16),
    paddingVertical: RFValue(18),
  },
  label: {
    fontFamily: theme.fonts.regular,
    fontSize: RFValue(14),
    color: theme.colors.text,
  },
});
