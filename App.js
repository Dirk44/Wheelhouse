import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Amplify, { Auth } from "aws-amplify";
import config from "./src/aws-exports";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import HomeStack from "./app/routes/drawer";
import SignIn from "./app/screens/signIn";
import Navigator from "./app/routes/drawer";

// console.log(useDeviceOrientation());
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const Stack = createNativeStackNavigator();

const App = () => {
  Auth.signOut();

  let [fontsLoaded] = useFonts({
    HelveticaRegular: require("./app/assets/fonts/Yantramanav-Black.ttf"),
    Helvetica87Bold: require("./app/assets/fonts/Montserrat-Black.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <HomeStack />
    // <NavigationContainer>
    //   <Stack.HomeStack>
    //     <Stack.Screen name="SignIn" component={SignIn} />
    //   </Stack.HomeStack>
    // </NavigationContainer>
  );
};

export default App;
