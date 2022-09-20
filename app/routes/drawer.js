import React from "react";
import { Dimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomePage from "../screens/HomePage/homePage";
import UpcomingShows from "../screens/upcomingShows";
import Clips from "../screens/Clips/clips";
import Store from "../screens/store";
import WaitList from "../screens/waitList";
import NavBar from "../components/NavBar";
import PlayVideoScreen from "../screens/playVideoScreen";
import HomeStack from "./homeStack";
import RentSeries from "../screens/RentSeries/rentSeries";
import GladiatorsLanding from "../screens/GladiatorsLanding/gladiatorsLanding";
import Episodes from "../screens/Episodes/episodes";
import AuthStack from "./AuthStack";

const WIDTH = Dimensions.get("window").width;

const navigationOptions = () => {
  return {
    headerTitle: () => <NavBar />,
  };
};

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        swipeEdgeWidth: 0,
        drawerStyle: {
          width: WIDTH * 0.6,
        },
      }}
      // useLegacyImplementation={true}
    >
      {/* {!auth && <HomeStack />} */}

      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          navigationOptions: navigationOptions,
          title: "Home",
        }}
      />
      {/* <Drawer.Screen name="SignUp" component={AuthStack} /> */}

      <Drawer.Screen
        name="GladiatorsLanding"
        component={GladiatorsLanding}
        options={{
          navigationOptions: navigationOptions,
          title: "Gladiators",
        }}
      />

      <Drawer.Screen
        name="Clips"
        component={Clips}
        options={{
          navigationOptions: navigationOptions,
          title: "Clips",
        }}
      />
      <Drawer.Screen
        name="Episodes"
        component={Episodes}
        options={{
          navigationOptions: navigationOptions,
          title: "Episodes",
        }}
      />
      <Drawer.Screen
        name="UpcomingShows"
        component={UpcomingShows}
        options={{
          navigationOptions: navigationOptions,
          title: "Upcoming Shows",
        }}
      />

      <Drawer.Screen
        name="Store"
        component={Store}
        options={{
          navigationOptions: navigationOptions,
          title: "Store",
        }}
      />

      <Drawer.Screen
        name="WaitList"
        component={WaitList}
        options={{
          navigationOptions: navigationOptions,
          title: "Waitlist",
        }}
      />
      <Drawer.Screen
        name="Rental"
        component={RentSeries}
        options={{
          navigationOptions: navigationOptions,
          title: "Rental",
        }}
      />

      {/* <Drawer.Screen
        name="Video"
        component={PlayVideoScreen}
        options={{
          navigationOptions: navigationOptions,
          title: "Video",
        }}
      /> */}
    </Drawer.Navigator>
  );
};

// (
//   {
//     Home: {
//       screen: HomeStack,
//       navigationOptions: ({ navigation }) => {
//         return {
//           headerTitle: () => <NavBar navigation={navigation} />,
//         };
//       },
//     },
//     UpcomingShows: {
//        screen: UpcomingShows,
//        navigationOptions: {
//          headerTitle: () => <NavBar />,
//        },
//      },
//     Waitlist: {
//       screen: WaitList,
//       // navigationOptions: {
//       //   headerTitle: () => <NavBar />,
//       // },
//     },
//     Gladiators: {
//       screen: GladiatorsLandingPage,
//       // navigationOptions: {
//       //   headerTitle: () => <NavBar />,
//       // },
//     },
//     Store: {
//       screen: Store,
//       // navigationOptions: {
//       //   headerTitle: () => <NavBar />,
//       // },
//     },
//     VideoScreen: {
//       screen: PlayVideoScreen,
//       // navigationOptions: {
//       //   headerTitle: () => <NavBar />,
//       // },
//     },
//   },
//   DrawerConfig
// );

export default DrawerNav;
