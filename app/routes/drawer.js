import { Dimensions } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomePage from "../screens/homePage";
import UpcomingShows from "../screens/upcomingShows";
import GladiatorsLandingPage from "../screens/gladiatorsLandingPage";
import Store from "../screens/store";
import WaitList from "../screens/waitList";
import NavBar from "../components/NavBar";
import PlayVideoScreen from "../screens/playVideoScreen";
import HomeStack from "./homeStack";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const DrawerConfig = {
  drawerWidth: WIDTH * 0.6,
  drawerHeight: HEIGHT * 0,
  edgeWidth: "50",
};

const RootDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
      // navigationOptions: ({ navigation }) => {
      //   return {
      //     headerTitle: () => <NavBar navigation={navigation} />,
      //   };
      // },
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
    VideoScreen: {
      screen: PlayVideoScreen,
      // navigationOptions: {
      //   headerTitle: () => <NavBar />,
      // },
    },
  },
  DrawerConfig
);

export default createAppContainer(RootDrawerNavigator);
