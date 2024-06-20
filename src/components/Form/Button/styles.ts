import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.secondary,
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    padding: RFValue(16),
  },
  label: {
    color: theme.colors.shape,
    fontFamily: theme.fonts.medium,
    fontSize: RFValue(14),
  },
});
