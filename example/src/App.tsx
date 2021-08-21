import * as React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Toast, Root } from 'react-native-rn-popup-modal';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const [showToast, setShowToast] = React.useState<boolean>(false);
  const [showToast1, setShowToast1] = React.useState<boolean>(false);
  const [showToast2, setShowToast2] = React.useState<boolean>(false);
  const [showToast3, setShowToast3] = React.useState<boolean>(false);
  const modalRef = React.useRef();

  return (
    <Root>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            setShowToast(true);
          }}
        >
          <Text>Call Toast1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setShowToast1(true);
          }}
        >
          <Text>Call Toast2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setShowToast2(true);
          }}
        >
          <Text>Call Toast3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setShowToast3(true);
          }}
        >
          <Text>Call Toast3</Text>
        </TouchableOpacity>
      </View>

      <Toast showToast={showToast} setShowToast={setShowToast} type="Error" />
      <Toast
        showToast={showToast1}
        setShowToast={setShowToast1}
        type="Success"
      />
      <Toast
        showToast={showToast2}
        setShowToast={setShowToast2}
        type="Warning"
      />
      <Toast
        showToast={showToast3}
        setShowToast={setShowToast3}
        type="Info"
        duration={-1}
      />
    </Root>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
