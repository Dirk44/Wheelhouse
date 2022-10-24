import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
  SignUp,
  SignIn,
  ThankYou,
  LoadingScreen,
} from "../screens";
import { AuthStack } from ".";

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      // initialRouteName="Home"
      screenOptions={{ headerShown: false }}
      useLegacyImplementation={true}
    >
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          gestureDirection: "horizontal",
          gestureResponseDistance: 50,
        }}
      />

      <Stack.Screen name="UpcomingShows" component={UpcomingShows} />
      <Stack.Screen name="Clips" component={Clips} />
      <Stack.Screen name="Gladiators of Steel" component={GladiatorsLanding} />
      <Stack.Screen name="Rental" component={RentSeries} />
      <Stack.Screen name="Episodes" component={Episodes} />
      <Stack.Screen name="Store" component={Store} />
      <Stack.Screen name="WaitList" component={WaitList} />
      <Stack.Screen name="Video" component={PlayVideoScreen} />
      <Stack.Screen name="Play Clips" component={PlayClipsScreen} />
      <Stack.Screen name="CreditCard" component={CreditCard} />
      <Stack.Screen name="ThankYou" component={ThankYou} />
      {/* <Stack.Screen name="LoadingScreen" component={LoadingScreen} /> */}
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}

module.exports = HomeStack;
