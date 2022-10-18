import "react-native-gesture-handler";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

// import { AuthStack } from "./app/routes";
import { Navigator, HomeStack, AuthStack } from "./app/routes";
import { HomePage } from "./app/screens";

// console.log(useDeviceOrientation());
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const App = () => {
  // Auth.signOut();

  const [auth, setAuth] = useState(null);

  let [fontsLoaded] = useFonts({
    HelveticaRegular: require("./app/assets/fonts/Yantramanav-Black.ttf"),
    Helvetica87Bold: require("./app/assets/fonts/Montserrat-Black.ttf"),
    Helvetica87Bold: require("./app/assets/fonts/Montserrat-Black.ttf"),
    Helvetica87HeavyCondensed: require("./app/assets/fonts/Helvetica-87-Heavy-Condensed.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="black"
      />
      <DismissKeyboard>
        <NavigationContainer>
          {/* {auth ? <Navigator /> : <AuthStack />} */}
          <Navigator />
        </NavigationContainer>
      </DismissKeyboard>
    </>
  );
};

export default App;
