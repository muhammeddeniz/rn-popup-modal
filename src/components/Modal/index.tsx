import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Dimensions,
  Animated,
  Platform,
} from 'react-native';

import {
  Close,
  Question,
  Done,
  Success,
  Fail,
  Warning,
} from '../../assetComponents/icons';

import styles, { iconSize } from './styles';

type ModalType = 'Success' | 'Error';

type Props = {
  visible: boolean;
  setVisible: Function;
  title?: string;
  text?: string;
  duration?: number;
  modalType?: ModalType;
  leftButtonText?: string;
  rightButtonText?: string;
  onRightButtonPress?: Function;
};
const { height, width } = Dimensions.get('screen');

const ModalComponent: React.FC<Props> = ({
  visible,
  setVisible,
  title = 'Default',
  text = 'Default',
  duration = 200,
  modalType = 'Success',
  leftButtonText = 'Cancel',
  rightButtonText = 'Default',
  onRightButtonPress = () => {},
}) => {
  const [modal] = useState(new Animated.Value(height));

  function start() {
    Animated.spring(modal, {
      toValue: height * 0.5 - 50,
      useNativeDriver: true,
    }).start();

    const Duration =
      duration > 0 ? duration : duration === -1 ? 9999999999999 : 3000;

    // setInterval(() => {
    // }, [])

    setTimeout(() => {
      // this.runTiming();
      // this.runCurrentTime();
      hide();
    }, Duration);
  }

  function hide() {
    Animated.timing(modal, {
      toValue: height + 200,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setVisible(false);
  }

  useEffect(() => {
    if (visible) start();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  return (
    <View>
      <TouchableOpacity
        style={{
          width: width,
          height: height,
          display: visible ? 'flex' : 'none',
        }}
        onPress={() => hide()}
      />

      <Animated.View
        style={[
          styles.container,
          {
            backgroundColor: '#fff',
            transform: [{ translateY: modal }],
          },
        ]}
      >
        <View style={styles.iconStatus}>
          {modalType === 'Success' ? (
            <Done width={iconSize} height={iconSize} color="#13C39C" />
          ) : (
            <Close width={iconSize} height={iconSize} color="#FB4B4B" />
          )}
        </View>
        <View style={styles.content}>
          <Text style={[styles.title]}>{title}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.leftButton} onPress={hide}>
            <Text style={[styles.buttonText, { color: '#9BA9B9' }]}>
              {leftButtonText}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.rightButton,
              {
                backgroundColor: modalType === 'Error' ? '#FB4B4B' : '#13C39C',
              },
            ]}
            onPress={() => onRightButtonPress()}
          >
            <Text
              style={[
                styles.buttonText,
                {
                  color: '#fff',
                },
              ]}
            >
              {rightButtonText}
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

export default ModalComponent;
