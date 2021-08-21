import React from 'react';
import { View } from 'react-native';

import styles from './styles';

type Props = React.PropsWithChildren<any> & {};

const Root: React.FC<Props> = ({ children, ...props }) => {
  return (
    <View testID="Root" style={styles.container} {...props}>
      {children}
    </View>
  );
};

export default Root;
