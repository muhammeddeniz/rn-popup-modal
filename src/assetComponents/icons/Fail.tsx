import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgFail(props: SvgProps) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 78 78"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47.806 67.68a4.255 4.255 0 011.06-.48C63.013 62.963 73.32 49.846 73.32 34.32 73.32 15.366 57.955 0 39 0 20.046 0 4.68 15.366 4.68 34.32c0 13.503 7.798 25.184 19.136 30.787.013.006.008.026-.007.025a.013.013 0 00-.013.016l3.108 9.842c.79 2.505 3.74 3.58 5.958 2.173l14.944-9.484z"
        fill="#fff"
      />
      <Path
        d="M48.814 27.638a2.121 2.121 0 000-3l-.452-.452a2.121 2.121 0 00-3 0L39 30.55l-6.362-6.363a2.121 2.121 0 00-3 0l-.451.452a2.121 2.121 0 000 3L35.549 34l-6.362 6.362a2.121 2.121 0 000 3l.451.451a2.121 2.121 0 003 0L39 37.451l6.362 6.362a2.121 2.121 0 003 0l.452-.451a2.121 2.121 0 000-3L42.452 34l6.362-6.362z"
        fill="#AF2D2D"
      />
    </Svg>
  );
}

export default SvgFail;
