import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useCookies } from "react-cookie";
// import { CommonActions } from "@react-navigation/native";

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
  SignOut,
  SignIn,
  EmailConfirmation,
  JSI,
} from "../screens";
import { NavBar } from "../components/";
import { ROUTES } from "../constants";
import HomeStack from "../navigation/homeStack";
import {
  CommonActions,
  NavigationContainer,
  useNavigation,
} from "@react-navigation/native";

const WIDTH = Dimensions.get("window").width;

const navigationOptions = () => {
  return {
    headerTitle: () => <NavBar />,
  };
};

const Drawer = createDrawerNavigator();

const DrawerNav = (props) => {
  const navigation = useNavigation();
  const [auth] = useCookies();
  const [sessionValid, setSessionValid] = useState(false);
  const options = {
    drawerInactiveBackgroundColor: "transparent",
    // drawerActiveBackgroundColor: "#transparent",
    drawerActiveTintColor: "white",
    drawerInactiveTintColor: "grey",

    headerShown: false,
    swipeEdgeWidth: 0,
    drawerStyle: {
      width: WIDTH * 0.6,
      backgroundColor: "#191919",
    },
  };

  return auth.jsis != null ? (
    <Drawer.Navigator initialRouteName={ROUTES.HOME} screenOptions={options}>
      <Drawer.Screen
        name={ROUTES.HOME}
        component={HomeStack}
        // onPress={() =>
        //   navigation.dispatch(
        //     CommonActions.reset({
        //       index: 0,
        //       routes: [{ name: ROUTES.HOME }],
        //     })
        //   )
        // }
        options={{
          navigationOptions: navigationOptions,
          title: "HOME",
        }}
      />
      <Drawer.Screen
        name={ROUTES.SIGNUP_DRAWER}
        component={JSI}
        options={{
          navigationOptions: navigationOptions,
          title: "SIGN OUT",
        }}
      />
      <Drawer.Screen
        name={ROUTES.GLADIATORS_DRAWER}
        component={GladiatorsLanding}
        options={{
          navigationOptions: navigationOptions,
          title: "GLADIATORS OF STEEL",
        }}
      />
      <Drawer.Screen
        name={ROUTES.STORE_DRAWER}
        component={Store}
        options={{
          navigationOptions: navigationOptions,
          title: "STORE",
        }}
      />
      <Drawer.Screen
        name={ROUTES.EPISODES}
        component={Episodes}
        options={{
          navigationOptions: navigationOptions,
          title: "EPISODES",
        }}
      />
    </Drawer.Navigator>
  ) : (
    <Drawer.Navigator initialRouteName={ROUTES.HOME} screenOptions={options}>
      <Drawer.Screen
        name={ROUTES.HOME}
        component={HomeStack}
        // onPress={() =>
        //   navigation.dispatch(
        //     CommonActions.reset({
        //       index: 0,
        //       routes: [{ name: ROUTES.HOME }],
        //     })
        //   )
        // }
        options={{
          navigationOptions: navigationOptions,
          title: "HOME",
        }}
      />
      <Drawer.Screen
        name={ROUTES.SIGNUP_DRAWER}
        component={JSI}
        options={{
          navigationOptions: navigationOptions,
          title: "SIGN UP",
        }}
      />
      <Drawer.Screen
        name={ROUTES.GLADIATORS_DRAWER}
        component={GladiatorsLanding}
        options={{
          navigationOptions: navigationOptions,
          title: "GLADIATORS OF STEEL",
        }}
      />
      <Drawer.Screen
        name={ROUTES.STORE_DRAWER}
        component={Store}
        options={{
          navigationOptions: navigationOptions,
          title: "STORE",
        }}
      />
      <Drawer.Screen
        name={ROUTES.EPISODES}
        component={Episodes}
        options={{
          navigationOptions: navigationOptions,
          title: "EPISODES",
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

export default DrawerNav;
