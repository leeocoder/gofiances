import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  errorMessage: {
    color: theme.colors.attention,
    fontFamily: theme.fonts.regular,
    fontSize: RFValue(14),
    marginTop: RFValue(10),
  },
});
