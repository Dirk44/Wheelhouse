import React from "react";
import { Platform, Dimensions } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "../routes/homeStack";
import HomePage from "../screens/homePage";
import UpcomingShows from "../screens/upcomingShows";
import GladiatorsLandingPage from "../screens/gladiatorsLandingPage";
import Store from "../screens/store";
import WaitList from "../screens/waitList";
import NavBar from "../components/NavBar";
import SignIn from "../screens/signIn";
import Signup from "../screens/signUp";
import ForgotPassword from "../screens/forgotPassword";
import ConfirmAccount from "../screens/confirmAccount";
import ResetPassword from "../screens/resetPassword";

const WIDTH = Dimensions.get("window").width;
// const HEIGHT = Dimensions.get("window").height;

const DrawerConfig = {
  drawerWidth: WIDTH * 0.75,
  // drawerHeight: HEIGHT * 0,
  // drawerPosition: "",
};

const RootDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomePage,
      navigationOptions: {
        headerTitle: () => <NavBar />,
      },
    },
    UpcomingShows: {
      screen: UpcomingShows,
      navigationOptions: {
        headerTitle: () => <NavBar />,
      },
    },
    Waitlist: {
      screen: WaitList,
      // navigationOptions: {
      //   headerTitle: () => <NavBar />,
      // },
    },
    Gladiators: {
      screen: GladiatorsLandingPage,
      // navigationOptions: {
      //   headerTitle: () => <NavBar />,
      // },
    },
    Store: {
      screen: Store,
      // navigationOptions: {
      //   headerTitle: () => <NavBar />,
      // },
    },
    SignIn: {
      screen: SignIn,
    },
    Signup: {
      screen: Signup,
    },
    ForgotPassword: {
      screen: ForgotPassword,
    },
    ConfirmAccount: {
      screen: ConfirmAccount,
    },
    ResetPassword: {
      screen: ResetPassword,
    },
  },
  DrawerConfig
);

export default createAppContainer(RootDrawerNavigator);
