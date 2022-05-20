import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import homePage from "../screens/homePage";
import UpcomingShows from "../screens/upcomingShows";
import WaitList from "../screens/waitList";
import GladiatorsLandingPage from "../screens/gladiatorsLandingPage";
import Store from "../screens/store";
import NavBar from "../components/NavBar";
import Login from "../screens/login";

const screens = {
  Home: {
    screen: homePage,
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
    navigationOptions: {
      headerTitle: () => <NavBar />,
    },
  },

  GladiatorsOfSteel: {
    screen: GladiatorsLandingPage,
    navigationOptions: {
      headerTitle: () => <NavBar />,
    },
  },

  Store: {
    screen: Store,
    navigationOptions: {
      headerTitle: () => <NavBar />,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: () => <NavBar />,
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defautNavigationOptions: {
    headerStyle: { backgroundColor: "rgba(37,37,37,255)" },
  },
});

export default createAppContainer(HomeStack);
