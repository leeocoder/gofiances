import { Text, View } from 'react-native';

import { styles } from './styles';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import React from 'react';
import { SvgProps } from 'react-native-svg';

interface Props extends RectButtonProps {
  title: string;
  svg: React.FC<SvgProps>;
}

function SignInButton({ title, svg: Svg, ...rest }: Props) {
  return (
    <RectButton
      {...rest}
      style={styles.button}
    >
      <View style={styles.imageContainer}>
        <Svg />
      </View>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}

export default SignInButton;
