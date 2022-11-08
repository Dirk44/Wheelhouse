import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { StatusBar, Keyboard, TouchableWithoutFeedback } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

// import { AuthStack } from "./app/routes";
import { DrawerNav, HomeStack } from "./src/navigation";
import { LoadingScreen } from "./src/screens";

SplashScreen.preventAutoHideAsync();

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
);

const App = () => {
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
      <StatusBar barStyle="light-content" translucent={true} backgroundColor="black" />
      <DismissKeyboard>
        <NavigationContainer>
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
