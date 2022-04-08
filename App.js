import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import HomePage from "./app/screens/HomePage";
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";



export default function App() {

  console.log(useDeviceOrientation());

  return (


    <HomePage />

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
