import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: RFValue(18),
    paddingVertical: RFValue(16),
    fontSize: RFValue(14),
    backgroundColor: theme.colors.shape,
    borderRadius: 5,
    fontFamily: theme.fonts.regular,
    color: theme.colors.title,
  },
});
