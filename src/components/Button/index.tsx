import {
  FlexStyle,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Text from '../Text';

export interface T extends TouchableOpacityProps {
  width?: FlexStyle['width'];
  height?: FlexStyle['height'];
  borderRadius?: ViewStyle['borderRadius'];
  borderWidth?: ViewStyle['borderWidth'];
  borderColor?: ViewStyle['borderColor'];
  backgroundColor?: ViewStyle['backgroundColor'];
  fontWeight?: TextStyle['fontWeight'];
  fontSize?: TextStyle['fontSize'];
  fontColor?: TextStyle['color'];
  margin?: Array<ViewStyle['margin']>;
  padding?: Array<ViewStyle['padding']>;
  align?: FlexStyle['alignItems'];
  justify?: FlexStyle['justifyContent'];
}

const Button = (props: T) => {
  const {
    width = 'auto',
    height = 'auto',
    borderRadius = 8,
    borderWidth,
    borderColor = 'black',
    backgroundColor,
    margin = [0, 0, 0, 0],
    padding = [0, 0, 0, 0],
    fontWeight = 'normal',
    fontSize = 16,
    fontColor = 'black',
    align = 'center',
    justify = 'center',
  } = props;

  const ButtonStyle: StyleProp<ViewStyle> = {
    width,
    height,
    marginTop: margin[0],
    marginRight: margin[1],
    marginBottom: margin[2],
    marginLeft: margin[3],
    paddingTop: padding[0],
    paddingRight: padding[1],
    paddingBottom: padding[2],
    paddingLeft: padding[3],
    backgroundColor,
    borderRadius,
    alignItems: align,
    justifyContent: justify,
    borderWidth,
    borderColor,
  };
  return (
    <TouchableOpacity {...props} style={[ButtonStyle, props.style]}>
      {typeof props.children === 'string' ? (
        <Text color={fontColor} fontWeight={fontWeight} fontSize={fontSize}>
          {props.children}
        </Text>
      ) : (
        <>{props.children}</>
      )}
    </TouchableOpacity>
  );
};

export default React.memo(Button);
