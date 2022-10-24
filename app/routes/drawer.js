import React from "react";
import { Dimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  HomePage,
  UpcomingShows,
  Clips,
  Store,
  WaitList,
  PlayVideoScreen,
  RentSeries,
  GladiatorsLanding,
  Episodes,
  CreditCard,
  ThankYou,
  LoadingScreen,
  SignUp,
  SignIn,
} from "../screens";
import { NavBar } from "../components/";
import HomeStack from "./homeStack";
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
        onPress={() =>
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: "HomePage" }],
            })
          )
        }
        options={{
          navigationOptions: navigationOptions,
          title: "HOME",
        }}
      />
      {/* <Drawer.Screen name="SignIn" component={AuthStack} /> */}
      {/* <Drawer.Screen
        name="SignUp"
        component={AuthStack}
        options={{
          navigationOptions: navigationOptions,
          title: "SIGN UP",
        }}
      /> */}
      <Drawer.Screen
        name="SignUp"
        component={SignUp}
        options={{
          navigationOptions: navigationOptions,
          title: "SIGN UP",
        }}
      />
      {/* <Drawer.Screen
        name="SignIn"
        component={SignIn}
        options={{
          navigationOptions: navigationOptions,
          title: "SIGN UP",
        }}
      /> */}
      <Drawer.Screen
        name="GladiatorsLanding"
        component={GladiatorsLanding}
        options={{
          navigationOptions: navigationOptions,
          title: "GLADIATORS OF STEEL",
        }}
      />
      <Drawer.Screen
        name="Clips"
        component={Clips}
        options={{
          navigationOptions: navigationOptions,
          title: "CLIPS",
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
          title: "STORE",
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
      <Drawer.Screen
        name="ThankYou"
        component={ThankYou}
        options={{
          navigationOptions: navigationOptions,
          title: "Thank You",
        }}
      />
      <Drawer.Screen
        name="LoadingScreen"
        component={LoadingScreen}
        options={{
          navigationOptions: navigationOptions,
          title: "Loading Screen",
        }}
      />
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

module.exports = DrawerNav;
