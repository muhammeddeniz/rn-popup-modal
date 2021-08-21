import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgWarning(props: SvgProps) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 78 78"
      fill="currentColor"
      //@ts-ignore
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39 68.64c18.954 0 34.32-15.366 34.32-34.32S57.954 0 39 0 4.68 15.366 4.68 34.32c0 8.923 3.405 17.05 8.987 23.154.72.787 1.153 1.8 1.153 2.867v12.846c0 2.95 3.083 4.885 5.739 3.602l16.856-8.137a.013.013 0 000-.023c-.013-.006-.008-.025.006-.025.523.024 1.05.036 1.579.036z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.87 36.565a3 3 0 003 3h.26a3 3 0 003-3V23.087a3 3 0 00-3-3h-.26a3 3 0 00-3 3v13.478zM39 47.913a3.13 3.13 0 100-6.26 3.13 3.13 0 000 6.26z"
        fill="#CC561E"
      />
    </Svg>
  );
}

export default SvgWarning;
