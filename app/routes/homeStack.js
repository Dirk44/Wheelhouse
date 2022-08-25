import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../screens/homePage";
import UpcomingShows from "../screens/upcomingShows";
import WaitList from "../screens/waitList";
import GladiatorsLandingPage from "../screens/gladiatorsLandingPage";
import Store from "../screens/store";
import PlayVideoScreen from "../screens/playVideoScreen";

const Stack = createStackNavigator();

function HomeStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      useLegacyImplementation={true}
    >
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{
          gestureDirection: "horizontal",
          gestureResponseDistance: 50,
        }}
      />
      <Stack.Screen name="Upcoming Shows" component={UpcomingShows} />
      <Stack.Screen
        name="Gladiators of Steel"
        component={GladiatorsLandingPage}
      />
      <Stack.Screen name="Store" component={Store} />
      <Stack.Screen name="WaitList" component={WaitList} />
      <Stack.Screen name="Video" component={PlayVideoScreen} />
    </Stack.Navigator>
  );
}

// const screens = {
//   Home: {
//     screen: HomePage,
//     navigationOptions: {
//       // headerShown: false,
//       // headerTitle: () => <NavBar />,
//     },
//   },

//   UpcomingShows: {
//     screen: UpcomingShows,
//     // navigationOptions: {
//     //   headerTitle: () => <NavBar />,
//     // },
//   },

//   Waitlist: {
//     screen: WaitList,
//     // navigationOptions: {
//     //   headerTitle: () => <NavBar />,
//     // },
//   },

//   GladiatorsOfSteel: {
//     screen: GladiatorsLandingPage,
//     // navigationOptions: {
//     //   headerTitle: () => <NavBar />,
//     // },
//   },

//   Store: {
//     screen: Store,
//     // navigationOptions: {
//     //   headerTitle: () => <NavBar />,
//     // },
//   },
//   VideoPlayer: {
//     screen: PlayVideoScreen,
//     // navigationOptions: {
//     //   headerTitle: () => <NavBar />,
//     // },
//   },

// const HomeStack = createStackNavigator(screens, {
//   defautNavigationOptions: {
//     headerStyle: { backgroundColor: "black" },
//   },
// });

export default HomeStack;
