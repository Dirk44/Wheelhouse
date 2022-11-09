import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import {
  HomePage,
  SignIn,
  SignUp,
  ForgotPassword,
  ConfirmAccount,
  ResetPassword,
  SignOut,
  RentSeries,
  GoogleSignIn,
} from "../screens";
import HomeStack from "../navigation/homeStack";
import { ROUTES } from "../constants";
import DrawerNav from "./drawer";
import { createAppContainer } from "react-navigation";

const Stack = createStackNavigator();

const AuthStack = () => {
  // const DismissKeyboard = ({ children }) => (
  //   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
  //     {children}
  //   </TouchableWithoutFeedback>
  // );
  return (
    // <DismissKeyboard>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.SIGNIN} component={GoogleSignIn} />
      <Stack.Screen name={ROUTES.SIGNUP} component={GoogleSignIn} />
      <Stack.Screen name={ROUTES.SIGNOUT} component={SignOut} />
      <Stack.Screen name={ROUTES.HOME_AUTH} component={DrawerNav} />
    </Stack.Navigator>
    // </DismissKeyboard>
  );
};

export default AuthStack;
