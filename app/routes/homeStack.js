import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  HomePage,
  UpcomingShows,
  WaitList,
  Clips,
  Store,
  PlayVideoScreen,
  RentSeries,
  GladiatorsLanding,
  Episodes,
  CreditCard,
} from "../screens";
import AuthStack from "./AuthStack";

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
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
      <Stack.Screen name="CreditCard" component={CreditCard} />
    </Stack.Navigator>
  );
}

module.exports = HomeStack;
