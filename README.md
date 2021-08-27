# rn-toast-modal

Popup and modal for react native projects

## Installation

```sh
yarn add rn-toast-modal
```

```sh
npm install rn-toast-modal
```

</br>

this package use svg for that make sure you have react-native-svg package.

```sh
yarn add react-native-svg
```

install pods for ios

```sh
cd ios && pod install

```

</br></br>

## Toast

</br>
<table>
    <tr>
    <th style="text-align:center">Success</th>
    <th style="text-align:center">Error</th>
    <th style="text-align:center">Warning</th>
    <th style="text-align:center">Info</th>
    </tr>
    <tr>
       <th>
        <img src="https://raw.githubusercontent.com/ORESoftware/suman/master/images/toast_success.png?raw=true"/>
        </th>
         <th>
        <img src="https://github.com/muhammeddeniz/rn-popup-modal/blob/master/images/toast_error.png?raw=true"/>
        </th>
        <th>
        <img src="https://github.com/muhammeddeniz/rn-popup-modal/blob/master/images/toast_warning.png?raw=true"/>
        </th>
        <th>
        <img src="https://github.com/muhammeddeniz/rn-popup-modal/blob/master/images/toast_info.png?raw=true"/>
        </th>
    </tr>
    <tr></tr>
</table>

</br></br></br>

## Modal

</br>
<table>
    <tr>
    <th style="text-align:center">Success</th>
    <th style="text-align:center">Error</th>
    </tr>
    <tr>
       <th>
        <img src="https://github.com/muhammeddeniz/rn-popup-modal/blob/master/images/modal_success.png?raw=true"/>
        </th>
         <th>
        <img src="https://github.com/muhammeddeniz/rn-popup-modal/blob/master/images/modal_error.png?raw=true"/>
        </th>
    </tr>
    <tr></tr>
</table>

</br></br></br>

## Toast Usage

</br>

```tsx
import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Toast, Base } from 'rn-toast-modal';

// ...

export default function App() {
  const [showToast, setShowToast] = useState<boolean>(false);

  const showToastFunc = () => setShowToast(true);

  return (
    <Base>
      <View style={styles.container}>
        <TouchableOpacity onPress={showToastFunc}>
          <Text>Call Toast</Text>
        </TouchableOpacity>
      </View>

      <Toast type="Info" showToast={showToast} setShowToast={setShowToast} />
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
```

</br>
</br>

Default duration value is 3000ms. If you don`t want to toast disapare set duration props to -1.

```tsx
<Toast
  type="Info"
  showToast={showToast}
  setShowToast={setShowToast}
  duration={-1}
/>
```

</br></br></br>

## Modal Usage

</br>

```tsx
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
```

</br></br></br>

## Toast Props

</br>
<table>
    <tr>
    <th >Name</th>
    <th >Default Value</th>
    <th >Type</th>
    </tr>
     <tr>
       <td>
       title
        </td>
        <td>
        Default
        </td>         
        <td>
         string
        </td>
    </tr>
      <tr>
       <td>
       text
        </td>
        <td>
        Default
        </td>         
        <td>
         string
        </td>
    </tr>
     <tr>
       <td>
       backgroundColor
        </td>
        <td>
        undefined
        </td>         
        <td>
         string
        </td>
    </tr>
      <tr>
       <td>
       duration
        </td>
        <td>
        2000
        </td>         
        <td>
         number
        </td>
    </tr>
    <tr>
       <td>
       showToast
        </td>
        <td>
        false
        </td>         
        <td>
         boolean
        </td>
    </tr>
    <tr>
       <td>
       setShowToast
        </td>
        <td>
        () => {}
        </td>         
        <td>
         Function (useState set function)
        </td>
    </tr>
     <tr>
       <td>
       type
        </td>
        <td>
        "Success"
        </td>         
        <td>
         'Success' | 'Info' | 'Warning' | 'Error'
        </td>
    </tr>
</table>

</br></br></br>

## Modal Props

</br>
<table>
    <tr>
    <th >Name</th>
    <th >Default Value</th>
    <th >Type</th>
    </tr>
     <tr>
       <td>
       title
        </td>
        <td>
        Default
        </td>         
        <td>
         string
        </td>
    </tr>
      <tr>
       <td>
       text
        </td>
        <td>
        Default
        </td>         
        <td>
         string
        </td>
    </tr>
     <tr>
       <td>
       leftButtonText
        </td>
        <td>
        Cancel
        </td>         
        <td>
         string
        </td>
    </tr>
      <tr>
       <td>
       rightButtonText
        </td>
        <td>
        Default
        </td>         
        <td>
         string
        </td>
    </tr>
    <tr>
       <td>
       visible
        </td>
        <td>
        false
        </td>         
        <td>
         boolean
        </td>
    </tr>
    <tr>
       <td>
       setVisible
        </td>
        <td>
        () => {}
        </td>         
        <td>
         Function (useState set function)
        </td>
    </tr>
     <tr>
       <td>
       onRightButtonPress
        </td>
        <td>
        () => {}
        </td>         
        <td>
         Function
        </td>
    </tr>
     <tr>
       <td>
       modalType
        </td>
        <td>
        "Success"
        </td>         
        <td>
         'Success' | 'Error'
        </td>
    </tr>
</table>

</br></br>
</br></br>

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

</br>

## Author

Muhammed Deniz

</br>

## License

MIT
