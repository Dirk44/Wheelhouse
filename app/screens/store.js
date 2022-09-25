import React from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { NavBar } from "../components/";
import { storeStyles } from '../stylesheets';

function Store() {
  const { width, height } = Dimensions.get("window");
  return (
    <SafeAreaView style={storeStyles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground
          style={storeStyles.background}
          source={require("../assets/landing-page-background.jpg")}
        >
          <Image
            source={require("../assets/wh-logo.png")}
            style={storeStyles.whLogo}
          />

          <Text style={storeStyles.text}>Store</Text>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

module.exports = Store;
