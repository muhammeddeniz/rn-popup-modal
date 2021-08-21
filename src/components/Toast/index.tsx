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

enum PopupType {
  success = 'Success',
  info = 'Info',
  warning = 'Warning',
  error = 'Error',
}

type Props = {
  showToast: boolean;
  setShowToast: Function;
  type: PopupType;
  title: string;
  text: string;
  backgroundColor: string;
  duration: number;
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
    : type === PopupType.success
    ? '#03A65A'
    : type === PopupType.warning
    ? '#FC8621'
    : type === PopupType.error
    ? '#C72C41'
    : '#0070E0';

  const icon =
    type === PopupType.success ? (
      <Success />
    ) : type === PopupType.error ? (
      <Fail />
    ) : type === PopupType.warning ? (
      <Warning />
    ) : (
      <Question />
    );

  const sourceImg =
    type === PopupType.success
      ? require('../../assets/images/bg_green.png')
      : type === PopupType.error
      ? require('../../assets/images/bg_red.png')
      : type === PopupType.info
      ? require('../../assets/images/bg_blue.png')
      : require('../../assets/images/bg_orange.png');

  function start() {
    Animated.spring(toast, {
      toValue: Platform.OS === 'ios' ? 50 : 10,
      bounciness: 12,
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
        <View style={styles.iconStatus}>{icon}</View>
        <View style={styles.content}>
          <Text style={[styles.title]}>{title}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>

        <TouchableOpacity onPress={hideToast}>
          <Close color="#fff" />
        </TouchableOpacity>
      </ImageBackground>
    </Animated.View>
  );
};

export default Toast;
