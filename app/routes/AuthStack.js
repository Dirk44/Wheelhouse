import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

import {
  SignIn,
  SignUp,
  ForgotPassword,
  ConfirmAccount,
  ResetPassword,
  SignOut,
  RentSeries,
} from "../screens";
import { HomePage } from "../screens";
import { HomeStack, Navigator } from ".";

const Stack = createNativeStackNavigator();

const AuthStack = (props) => {
  // const DismissKeyboard = ({ children }) => (
  //   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
  //     {children}
  //   </TouchableWithoutFeedback>
  // );
  return (
    // <DismissKeyboard>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignOut" component={SignOut} />
      <Stack.Screen name="ConfirmAccount" component={ConfirmAccount} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      {/* <Stack.Screen name="Rental" component={RentSeries} /> */}
      <Stack.Screen name="HomePage" component={HomePage} />
    </Stack.Navigator>
    // </DismissKeyboard>
  );
};

module.exports = AuthStack;
