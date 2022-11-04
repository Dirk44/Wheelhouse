import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ROUTES } from "../constants";
// import { AuthStack } from "../navigation";
import { GoogleSignIn, SignIn, SignOut, HomePage } from "../screens";

const Stack = createStackNavigator();

const HomeSignInStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.HOME}
      screenOptions={{ headerShown: false }}
      // useLegacyImplementation={true}
    >
      <Stack.Screen
        name={ROUTES.HOME}
        component={HomePage}
        // options={{
        //   gestureDirection: "horizontal",
        //   gestureResponseDistance: 50,
        // }}
      />

      {/* <Stack.Screen name={ROUTES.SIGNIN_HOME} component={GoogleSignIn} />
      <Stack.Screen name={ROUTES.SIGNUP_HOME} component={SignOut} /> */}
    </Stack.Navigator>
  );
};

export default HomeSignInStack;
