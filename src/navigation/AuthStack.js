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
      {/* <Stack.Screen name={ROUTES.CONFIRM_ACCOUNT} component={ConfirmAccount} />
      <Stack.Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
      <Stack.Screen name={ROUTES.RESET_PASSWORD} component={ResetPassword} /> */}
      {/* <Stack.Screen name={ROUTES.RENTAL_AUTH} component={HomeStack} /> */}
      <Stack.Screen name={ROUTES.HOME_AUTH} component={HomeStack} />
    </Stack.Navigator>
    // </DismissKeyboard>
  );
};

export default AuthStack;
