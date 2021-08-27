import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Modal, Base } from 'rn-toast-modal';

// ...

export default function App() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const showModalFunc = () => setShowModal(true);

  return (
    <Base>
      <View style={styles.container}>
        <TouchableOpacity onPress={showModalFunc}>
          <Text>Call Modal</Text>
        </TouchableOpacity>
      </View>

      <Modal modalType="Error" visible={showModal} setVisible={setShowModal} />
    </Base>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
