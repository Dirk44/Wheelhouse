import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  HomePage,
  UpcomingShows,
  WaitList,
  Clips,
  Store,
  PlayVideoScreen,
  PlayClipsScreen,
  RentSeries,
  GladiatorsLanding,
  Episodes,
  CreditCard,
  ThankYou,
  SignUp,
  SignIn,
  GoogleSignIn,
} from "../screens";
import { ROUTES } from "../constants";
import { AuthStack } from "../navigation";

const Stack = createStackNavigator();

function HomeStack() {
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

      <Stack.Screen name={ROUTES.UPCOMINGSHOWS} component={UpcomingShows} />
      <Stack.Screen name={ROUTES.CLIPS} component={Clips} />
      <Stack.Screen name={ROUTES.GLADIATORS} component={GladiatorsLanding} />
      <Stack.Screen name={ROUTES.RENTAL} component={RentSeries} />
      <Stack.Screen name={ROUTES.EPISODES} component={Episodes} />
      <Stack.Screen name={ROUTES.STORE} component={Store} />
      <Stack.Screen name={ROUTES.WAITLIST} component={WaitList} />
      <Stack.Screen name={ROUTES.VIDEO} component={PlayVideoScreen} />
      <Stack.Screen name={ROUTES.CLIPS_VIDEO} component={PlayClipsScreen} />
      <Stack.Screen name={ROUTES.CREDITCARD} component={CreditCard} />
      <Stack.Screen name={ROUTES.THANKYOU} component={ThankYou} />
      <Stack.Screen name={ROUTES.SIGNUP_HOME} component={GoogleSignIn} />
      <Stack.Screen name={ROUTES.SIGNIN_HOME} component={AuthStack} />
    </Stack.Navigator>
  );
}

export default HomeStack;
