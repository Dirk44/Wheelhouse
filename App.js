import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./app/screens/homePage";
import HomeStack from "./app/routes/drawer";
import Carousel from "./app/components/Carousel";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import Navigator from "./app/routes/drawer";
import { useFonts } from "expo-font";
// import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Drawer from "./app/routes/drawer";

// console.log(useDeviceOrientation());

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    HelveticaRegular: require("./app/assets/fonts/Yantramanav-Black.ttf"),
    Helvetica87Bold: require("./app/assets/fonts/Montserrat-Black.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <HomeStack />;
}

// const styles = StyleSheet.create({
//   container: {
//       flex: 1,
//       backgroundColor: "#fff"
//   },
// });
