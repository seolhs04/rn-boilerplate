import {StyleProp, Text as OriginText, TextProps, TextStyle} from 'react-native';
import React from 'react';

interface T extends TextProps {
  width?: TextStyle['width'];
  height?: TextStyle['height'];
  fontSize?: TextStyle['fontSize'];
  fontWeight?: TextStyle['fontWeight'];
  textAlign?: TextStyle['textAlign'];
  color?: TextStyle['color'];
  margin?: Array<TextStyle['margin']>;
}

const Text = (props: T) => {
  const {fontSize, width, height, fontWeight, color, textAlign, margin = [0, 0, 0, 0]} = props;

  const textStyle: StyleProp<TextStyle> = {
    width,
    height,
    fontSize,
    fontWeight,
    color,
    textAlign,
    marginTop: margin[0],
    marginRight: margin[1],
    marginBottom: margin[2],
    marginLeft: margin[3],
    includeFontPadding: false,
  };
  return (
    <OriginText {...props} style={[textStyle, props.style]}>
      {props.children}
    </OriginText>
  );
};

export default React.memo(Text);
