import React, { useState, useEffect } from 'react';
import {
  View,
  Animated,
  Text,
  Dimensions,
  Platform,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import styles from './styles';
import {
  Warning,
  Fail,
  Question,
  Success,
  Close,
} from '../../assetComponents/icons';

const { height } = Dimensions.get('screen');

type ToastType = 'Success' | 'Info' | 'Warning' | 'Error';

type Props = {
  showToast: boolean;
  setShowToast: Function;
  type?: ToastType;
  title?: string;
  text?: string;
  backgroundColor?: string;
  duration?: number;
};

export const Toast: React.FC<Props> = ({
  showToast = false,
  setShowToast = () => {},
  type = 'Success',
  title = 'Default',
  text = 'Default',
  backgroundColor = undefined,
  duration = 2000,
  ...props
}) => {
  const [toast] = useState(new Animated.Value(height));

  const BG: string = backgroundColor
    ? backgroundColor
    : type === 'Success'
    ? '#03A65A'
    : type === 'Warning'
    ? '#FC8621'
    : type === 'Error'
    ? '#C72C41'
    : '#0070E0';

  const icon =
    type === 'Success' ? (
      <Success />
    ) : type === 'Error' ? (
      <Fail />
    ) : type === 'Warning' ? (
      <Warning />
    ) : (
      <Question />
    );

  const sourceImg =
    type === 'Success'
      ? require('../../assets/images/bg_green.png')
      : type === 'Error'
      ? require('../../assets/images/bg_red.png')
      : type === 'Info'
      ? require('../../assets/images/bg_blue.png')
      : require('../../assets/images/bg_orange.png');

  function start() {
    Animated.spring(toast, {
      toValue: Platform.OS === 'ios' ? 50 : 10,
      useNativeDriver: true,
    }).start();

    const Duration =
      duration > 0 ? duration : duration === -1 ? 9999999999999 : 3000;

    // setInterval(() => {
    // }, [])

    setTimeout(() => {
      // this.runTiming();
      // this.runCurrentTime();
      hideToast();
    }, Duration);
  }

  useEffect(() => {
    if (showToast) start();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showToast]);

  function hideToast() {
    Animated.timing(toast, {
      toValue: -(height + 200),
      duration: 300,
      useNativeDriver: true,
    }).start();
    setShowToast(false);
  }

  return (
    <Animated.View
      testID="Toast"
      {...props}
      style={[
        styles.toast,
        {
          backgroundColor: BG,
          shadowColor: BG,
          transform: [{ translateY: toast }],
        },
      ]}
    >
      <ImageBackground source={sourceImg} style={styles.backgroundImage}>
        <View testID="leftIconContainer" style={styles.iconStatus}>
          {icon}
        </View>

        <View style={styles.content}>
          <Text testID="title" style={[styles.title]}>
            {title}
          </Text>
          <Text testID="text" style={styles.text}>
            {text}
          </Text>
        </View>

        <TouchableOpacity onPress={hideToast}>
          <Close testID="closeSvg" color="#fff" />
        </TouchableOpacity>
      </ImageBackground>
    </Animated.View>
  );
};

export default Toast;
