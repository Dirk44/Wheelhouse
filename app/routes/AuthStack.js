import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

import SignIn from "../screens/signIn";
import SignUp from "../screens/signUp";
import ForgotPassword from "../screens/forgotPassword";
import ConfirmAccount from "../screens/confirmAccount";
import ResetPassword from "../screens/resetPassword";
import SignOut from "../screens/signOut";
import HomePage from "../screens/homePage";

const Stack = createStackNavigator();

const AuthStack = (props) => {
  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignOut" component={SignOut} />
      <Stack.Screen name="ConfirmAccount" component={ConfirmAccount} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  );
};

export default AuthStack;
