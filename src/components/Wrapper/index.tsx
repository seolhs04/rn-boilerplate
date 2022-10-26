import React from 'react';
import {FlexStyle, StyleProp, View, ViewProps, ViewStyle} from 'react-native';

interface T extends ViewProps {
  width?: FlexStyle['width'];
  height?: FlexStyle['height'];
  margin?: Array<FlexStyle['margin']>;
  padding?: Array<FlexStyle['padding']>;
  row?: boolean;
  align?: FlexStyle['alignItems'];
  justify?: FlexStyle['justifyContent'];
  flex?: FlexStyle['flex'];
  backgroundColor?: ViewStyle['backgroundColor'];
  borderRadius?: ViewStyle['borderRadius'];
}

const Wrapper = (props: T) => {
  const {
    width,
    height,
    margin = [0, 0, 0, 0],
    padding = [0, 0, 0, 0],
    row,
    align,
    justify,
    flex,
    backgroundColor,
    borderRadius,
  } = props;

  const WrapperStyle: StyleProp<FlexStyle | ViewStyle> = {
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
    flexDirection: row ? 'row' : 'column',
    alignItems: align,
    justifyContent: justify,
    flex,
    backgroundColor,
    borderRadius,
  };

  return <View style={[WrapperStyle, props.style]}>{props.children}</View>;
};

export default React.memo(Wrapper);
