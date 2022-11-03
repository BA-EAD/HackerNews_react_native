import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const backArrow = (props: any) => (
  <Svg width={20} height={20} fill="none" viewBox="0 0 16 16" {...props}>
    <Path
      d="M3.828 7H16v2H3.828l5.364 5.364-1.414 1.414L0 8 7.778.222l1.414 1.414L3.828 7Z"
      fill="#4E4B66"
    />
  </Svg>
);

export default backArrow;
