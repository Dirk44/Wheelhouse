import { createStackNavigator } from "react-navigation-stack";
import HomePage from "../screens/homePage";
import UpcomingShows from "../screens/upcomingShows";
import WaitList from "../screens/waitList";
import GladiatorsLandingPage from "../screens/gladiatorsLandingPage";
import Store from "../screens/store";

const screens = {
  Home: {
    screen: HomePage,
    navigationOptions: {
      headerShown: false,
      // headerTitle: () => <NavBar />,
    },
  },

  UpcomingShows: {
    screen: UpcomingShows,
    // navigationOptions: {
    //   headerTitle: () => <NavBar />,
    // },
  },

  Waitlist: {
    screen: WaitList,
    // navigationOptions: {
    //   headerTitle: () => <NavBar />,
    // },
  },

  GladiatorsOfSteel: {
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
  // SignIn: {
  //   screen: SignIn,
  // },
  // Signup: {
  //   screen: Signup,
  // },
  // ForgotPassword: {
  //   screen: ForgotPassword,
  // },
  // ConfirmAccount: {
  //   screen: ConfirmAccount,
  // },
  // ResetPassword: {
  //   screen: ResetPassword,
  // },
};

const HomeStack = createStackNavigator(screens, {
  defautNavigationOptions: {
    headerStyle: { backgroundColor: "black" },
  },
});

export default HomeStack;
