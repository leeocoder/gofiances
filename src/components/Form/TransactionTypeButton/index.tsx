import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { TransactionTypeEnum } from '../../../global/enums/TransactionTypeEnum';
import { theme } from '../../../global/styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

interface Props extends RectButtonProps {
  title: string;
  isActive: boolean;
  type: TransactionTypeEnum;
}

export default function TransactionTypeButton({
  title,
  type,
  isActive,
  ...rest
}: Props) {
  const setColorBasedOnType = (type: TransactionTypeEnum): string => {
    const mapper: Partial<{ [key in TransactionTypeEnum]: string }> = {
      [TransactionTypeEnum.income]: theme.colors.success,
      [TransactionTypeEnum.outcome]: theme.colors.attention,
    };
    return mapper[type] ?? theme.colors.shape;
  };

  const setIconBasedOnType = (type: TransactionTypeEnum): string => {
    const mapper: Partial<{ [key in TransactionTypeEnum]: string }> = {
      [TransactionTypeEnum.income]: 'arrow-up-circle',
      [TransactionTypeEnum.outcome]: 'arrow-down-circle',
    };
    return mapper[type] ?? 'dollar-sign';
  };

  const setSelectedBgColorBasedOnType = (type: TransactionTypeEnum): string => {
    const mapper: Partial<{ [key in TransactionTypeEnum]: string }> = {
      [TransactionTypeEnum.income]: theme.colors.successLight,
      [TransactionTypeEnum.outcome]: theme.colors.attentionLight,
    };
    return mapper[type] ?? 'dollar-sign';
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isActive
            ? setSelectedBgColorBasedOnType(type)
            : 'transparent',
        },
        {
          borderColor: isActive
            ? setSelectedBgColorBasedOnType(type)
            : styles.container.borderColor,
        },
      ]}
    >
      <RectButton
        {...rest}
        style={styles.buttonWrapper}
      >
        <Feather
          name={setIconBasedOnType(type) as any}
          size={RFValue(20)}
          color={setColorBasedOnType(type)}
        />
        <Text>{title}</Text>
      </RectButton>
    </View>
  );
}
