import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    gap: 12,
    borderWidth: 1.5,
    borderColor: theme.colors.text,
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonWrapper: {
    gap: 12,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: RFValue(16),
  },
  label: {
    fontSize: RFValue(14),
    fontFamily: theme.fonts.regular,
  },
});
