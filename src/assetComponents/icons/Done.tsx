import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgDone(props: SvgProps) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 48 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.3}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20z"
        fill={props.color}
      />
      <Path
        d="M33.538 15.635a2 2 0 112.924 2.73l-14 15a2 2 0 01-2.764.154l-7-6a2 2 0 112.604-3.037l5.544 4.752 12.692-13.599z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgDone;
