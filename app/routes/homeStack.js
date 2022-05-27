import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomePage from "../screens/homePage";
import UpcomingShows from "../screens/upcomingShows";
import WaitList from "../screens/waitList";
import GladiatorsLandingPage from "../screens/gladiatorsLandingPage";
import Store from "../screens/store";
import NavBar from "../components/NavBar";
import SignIn from "../screens/signIn";
import Signup from "../screens/signUp";
import ForgotPassword from "../screens/forgotPassword";
import ConfirmAccount from "../screens/confirmAccount";
import ResetPassword from "../screens/resetPassword";

const screens = {
  // Home: {
  //   screen: HomePage,
  //   navigationOptions: {
  //     headerTitle: () => <NavBar />,
  //   },
  // },

  // UpcomingShows: {
  //   screen: UpcomingShows,
  //   navigationOptions: {
  //     headerTitle: () => <NavBar />,
  //   },
  // },

  // Waitlist: {
  //   screen: WaitList,
  //   navigationOptions: {
  //     headerTitle: () => <NavBar />,
  //   },
  // },

  // GladiatorsOfSteel: {
  //   screen: GladiatorsLandingPage,
  //   navigationOptions: {
  //     headerTitle: () => <NavBar />,
  //   },
  // },

  // Store: {
  //   screen: Store,
  //   navigationOptions: {
  //     headerTitle: () => <NavBar />,
  //   },
  // },
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
};

const HomeStack = createStackNavigator(screens, {
  defautNavigationOptions: {
    headerStyle: { backgroundColor: "black" },
  },
});

export default HomeStack;
