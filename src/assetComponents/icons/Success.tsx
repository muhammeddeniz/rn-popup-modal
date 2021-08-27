import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSuccess(props: SvgProps) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 78 78"
      fill="currentColor"
      // @ts-ignore
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39 68.64c18.955 0 34.32-15.366 34.32-34.32S57.955 0 39 0C20.046 0 4.68 15.366 4.68 34.32c0 10.673 4.872 20.207 12.512 26.502.013.01.002.03-.013.024a.014.014 0 00-.019.014v10.644c0 2.98 3.14 4.913 5.8 3.572l12.012-6.055a4.256 4.256 0 012.149-.432c.622.034 1.249.051 1.88.051z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50.301 24.346a2.42 2.42 0 01.452 3.39l-12.01 15.747a2.417 2.417 0 01-3.632.242l-7.623-7.644a2.422 2.422 0 113.43-3.42l5.66 5.676 10.325-13.538a2.42 2.42 0 013.398-.453z"
        fill="#004440"
      />
    </Svg>
  );
}

export default SvgSuccess;
