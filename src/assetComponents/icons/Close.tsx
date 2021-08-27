import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgClose(props: SvgProps) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 48 48"
      fill="currentColor"
      // @ts-ignore
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.879 16.293a1 1 0 000 1.414l6.364 6.364-6.364 6.364a1 1 0 000 1.414l1.414 1.415a1 1 0 001.414 0l6.364-6.364 6.364 6.364a1 1 0 001.414 0l1.415-1.415a1 1 0 000-1.414l-6.365-6.364 6.364-6.364a1 1 0 000-1.414l-1.414-1.414a1 1 0 00-1.414 0l-6.364 6.364-6.364-6.364a1 1 0 00-1.414 0l-1.414 1.414z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgClose;
