import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

function SvgQuestion(props: SvgProps) {
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
        d="M45.571 68.406a4.261 4.261 0 011.578-.74C62.17 64.01 73.32 50.467 73.32 34.32 73.32 15.366 57.954 0 39 0S4.68 15.366 4.68 34.32c0 12.698 6.896 23.785 17.147 29.721a4.264 4.264 0 011.712 1.804l4.742 9.72a4 4 0 006.02 1.428l11.27-8.587z"
        fill="#003371"
      />
      <Circle cx={38.821} cy={46.87} fill="#fff" r={2.435} />
      <Path
        d="M43.63 20.432a10.087 10.087 0 00-13.46 4.49c-.52 1.028.158 2.188 1.272 2.486l.672.18c1.113.298 2.23-.407 2.94-1.316a5.221 5.221 0 016.423-1.473 5.217 5.217 0 01-.63 9.62c-.804.277-1.02.277-1.847.277h-.696a2.087 2.087 0 00-2.087 2.087v3.478c0 1.152.935 2.087 2.087 2.087H39a2.087 2.087 0 002.087-2.087c0-.51.37-.943.86-1.085a10.088 10.088 0 001.683-18.745z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgQuestion;
