import React from "react";
import { Platform, Dimensions } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomePage from "../screens/homePage";
import UpcomingShows from "../screens/upcomingShows";
import GladiatorsLandingPage from "../screens/gladiatorsLandingPage";
import Store from "../screens/store";
import WaitList from "../screens/waitList";
import NavBar from "../components/NavBar";
import Login from "../screens/login";

const WIDTH = Dimensions.get("window").width;

const DrawerConfig = {
  drawerWidth: WIDTH * 0.83,
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
      navigationOptions: {
        headerTitle: () => <NavBar />,
      },
    },
    Gladiators: {
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
  },
  DrawerConfig
);

export default createAppContainer(RootDrawerNavigator);
