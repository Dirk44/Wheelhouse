import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./app/screens/HomePage";
import GladiatorsLandingPage from "./app/screens/gladiatorsLandingPage";
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";

import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)

const Stack = createNativeStackNavigator();

export default function App() {

  console.log(useDeviceOrientation());

  return (

    <GladiatorsLandingPage />

    // <NavigationContainer>
    //   <Stack.Navigator
    // <HomePage />
    // </NavigationContainer>



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
