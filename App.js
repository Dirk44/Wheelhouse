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

import AuthStack from "./app/routes/AuthStack";
import Navigator from "./app/routes/drawer";
import HomePage from "./app/screens/homePage";
import HomeStack from "./app/routes/homeStack";

// console.log(useDeviceOrientation());
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const Stack = createNativeStackNavigator();

const App = () => {
  // Auth.signOut();

  const [auth, setAuth] = useState(null);

  let [fontsLoaded] = useFonts({
    HelveticaRegular: require("./app/assets/fonts/Yantramanav-Black.ttf"),
    Helvetica87Bold: require("./app/assets/fonts/Montserrat-Black.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar barStyle="light-content" translucent={true} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <NavigationContainer>
          {!auth ? <Navigator /> : <AuthStack />}
        </NavigationContainer>
      </TouchableWithoutFeedback>
    </>
    /* <NavigationContainer>
       <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignOut" component={SignOut} />
         <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
         <Stack.Screen name="ConfirmAccount" component={ConfirmAccount} />
         <Stack.Screen name="ResetPassword" component={ResetPassword} />
         <Stack.Screen name="Home" component={HomePage} />
       </Stack.Navigator>
     </NavigationContainer>  */
  );
};

export default App;
