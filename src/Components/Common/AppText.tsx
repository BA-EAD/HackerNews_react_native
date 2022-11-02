import * as React from 'react';
import {propOr} from 'ramda';
import {Platform, Text} from 'react-native';
import {Colors, Fonts} from '../../Theme';

const FONT_SIZE = Platform.OS === 'android' ? Fonts.small : Fonts.medium;

type AppTextProps = {
  color?: string;
  paddingTop?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingBottom?: number;
  textAlign?: 'left' | 'right' | 'center' | 'justify';
  fontWeight?: string;
  fontSize?: string | number;
  numberofLine?: number;
  textDecorationSize?: string;
  textTranform?:
    | 'lowercase'
    | 'uppercase'
    | 'full-width'
    | 'inherit'
    | 'capitalize';
  width?: number | 'auto';
  data: string;
  otherStyle?: object;
};

const AppText = (props: AppTextProps) => {
  const {otherStyle, numberofLine = 0} = props;
  const style = {
    paddingTop: propOr(0, 'paddingTop')(props),
    paddingLeft: propOr(0, 'paddingLeft')(props),
    paddingRight: propOr(0, 'paddingRight')(props),
    paddingBottom: propOr(0, 'paddingBottom')(props),
    fontSize: propOr(FONT_SIZE, 'fontSize', props),
    fontWeight: propOr('400', 'fontWeight')(props),
    color: propOr(Colors.primartColor, 'color', props),
    textDecorationLine: propOr('none', 'textDecorationLine')(props),
    textTransform: propOr('none', 'textTransform', props),
    width: propOr('auto', 'width', props),
    textAlign: propOr('auto', 'textAlign', props),
  };
  return (
    <Text style={[style, otherStyle]} numberOfLines={numberofLine}>
      {propOr('', 'data')(props)}
    </Text>
  );
};

export default React.memo(AppText);