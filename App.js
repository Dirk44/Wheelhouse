import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { StatusBar, Keyboard, TouchableWithoutFeedback } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

// import { AuthStack } from "./app/routes";
import { DrawerNav } from "./src/navigation";
import { LoadingScreen } from "./src/screens";

SplashScreen.preventAutoHideAsync();

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const linking = {
  prefixes: ["https://wheelhouse.com", "wheelhouse://"],
  config: {
    screens: {
      Home: " ",
      SignIn: ":id/signin",
      SignUp: ":id/signup",
      ForgotPassword: ":id/forgotpassword",
      ConfirmAccount: ":id/confirmaccount",
      ResetPassword: ":id/resetpassword",
      SignOut: ":id/signout",
      UpcomingShows: ":id/upcomingshows",
      Clips: ":id/clips",
      Store: ":id/store",
      WaitList: ":id/waitlist",
      PlayVideoScreen: ":id/playvideoscreen",
      PlayClipsScreen: ":id/playclipsscreen",
      RentSeries: ":id/rentseries",
      GladiatorsLanding: ":id/gladiatorslanding",
      Episodes: ":id/episodes",
      Cart: ":id/cart",
      ThankYou: ":id/thankyou",
      EmailConfirmation: ":id/emailconfirmation",
    },
  },
};

const App = (props) => {
  const [fontsLoaded] = useFonts({
    HelveticaRegular: require("./src/assets/fonts/Yantramanav-Black.ttf"),
    Helvetica87Bold: require("./src/assets/fonts/Montserrat-Black.ttf"),
    Helvetica87: require("./src/assets/fonts/Montserrat-VariableFont_wght.ttf"),
    Helvetica87HeavyCondensed: require("./src/assets/fonts/Helvetica-87-Heavy-Condensed.ttf"),
    Helvetica75Bold: require("./src/assets/fonts/Helvetica75-Bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="black"
      />
      <DismissKeyboard>
        <NavigationContainer linking={linking}>
          <DrawerNav />
        </NavigationContainer>
      </DismissKeyboard>
    </>
  );
};

export default App;

// setTimeout(() => {
//   console.log("Delayed for 1 second.");
// }, 3000);
