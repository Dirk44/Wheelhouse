import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../screens/homePage";
import UpcomingShows from "../screens/upcomingShows";
import WaitList from "../screens/waitList";
import Clips from "../screens/clips";
import Store from "../screens/store";
import PlayVideoScreen from "../screens/playVideoScreen";
import RentSeries from "../screens/rentSeries";
import GladiatorsLanding from "../screens/gladiatorsLanding";
import Episodes from "../screens/episodes";

const Stack = createStackNavigator();

function HomeStack({ navigation }) {
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
