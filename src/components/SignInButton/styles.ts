import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.shape,
    height: RFValue(56),
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    padding: RFValue(16),
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    borderRightWidth: 1,
    borderRightColor: theme.colors.background,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: theme.colors.title,
    fontFamily: theme.fonts.medium,
    fontSize: RFValue(14),
  },
});
