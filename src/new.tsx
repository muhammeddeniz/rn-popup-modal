import React, { useState, useEffect } from 'react';
import {
  View,
  Animated,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';

const { width, height } = Dimensions.get('screen');

export const Toast = ({ showToast = false, setShowToast, ...props }) => {
  const [toast] = useState(new Animated.Value(height));
  //   const [time, setTime] = useState(
  //     new Animated.Value(getPercentage(90, width))
  //   );

  function start() {
    Animated.spring(toast, {
      toValue: Platform.OS === 'ios' ? 50 : 10,
      bounciness: 15,
      useNativeDriver: true,
    }).start();

    const duration = 1000 < 0 ? 1000 : 3000;

    // setInterval(() => {

    // }, )

    setTimeout(() => {
      // this.runTiming();
      // this.runCurrentTime();
      hideToast();
    }, duration);
  }

  useEffect(() => {
    if (showToast) {
      start();
    }
  }, [showToast]);

  function hideToast() {
    Animated.timing(toast, {
      toValue: -(height + 150),
      duration: 300,
      useNativeDriver: true,
    }).start();
    setShowToast(false);
  }

  return (
    <Animated.View
      {...props}
      // @ts-ignore
      //   ref={(c) => (this._root = c)}
      style={[
        styles.toast,
        {
          backgroundColor: '#111',
          transform: [{ translateY: toast }],
        },
      ]}
    >
      {/* {icon && <View style={[styles.iconStatus]}>{icon}</View>} */}
      <View style={styles.content}>
        <Text style={[styles.title]}>fldksaj</Text>
        <Text style={styles.subtitle}>flkdsjalk</Text>
      </View>

      <Animated.View
        style={[
          styles.timing,
          {
            width: 1000,
          },
        ]}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    minHeight: 100,
    shadowColor: '#ccc',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
  },
  timing: {
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    height: 10,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  content: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    marginTop: 5,
    fontWeight: '300',
    fontSize: 13,
    color: '#fff',
  },
  img: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
  },
  iconStatus: {
    width: 40,
    height: 40,
    // backgroundColor: '#fff',
    borderRadius: 50,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Toast;
