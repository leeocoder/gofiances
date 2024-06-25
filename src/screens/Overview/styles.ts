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
  monthSelect: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: RFValue(24),
    marginBottom: RFValue(16),
  },
  monthSelectLabel: {
    color: theme.colors.title,
    fontFamily: theme.fonts.bold,
    fontSize: RFValue(16),
    lineHeight: RFValue(20),
  },
  chartContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: RFValue(32),
  },
  loadingContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: RFValue(32),
  },
});
