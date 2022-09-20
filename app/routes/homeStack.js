import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../screens/HomePage/homePage";
import UpcomingShows from "../screens/upcomingShows";
import WaitList from "../screens/waitList";
import Clips from "../screens/Clips/clips";
import Store from "../screens/store";
import PlayVideoScreen from "../screens/playVideoScreen";
import RentSeries from "../screens/RentSeries/rentSeries";
import GladiatorsLanding from "../screens/GladiatorsLanding/gladiatorsLanding";
import Episodes from "../screens/Episodes/episodes";
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
    </Stack.Navigator>
  );
}

export default HomeStack;
