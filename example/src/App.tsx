import * as React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Toast, Root } from 'react-native-rn-popup-modal';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const [showToast, setShowToast] = React.useState<boolean>(false);
  const modalRef = React.useRef();

  return (
    <Root>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            setShowToast(true);
          }}
        >
          <Text>Call Toast</Text>
        </TouchableOpacity>
      </View>

      <Toast showToast={showToast} setShowToast={setShowToast}></Toast>
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
