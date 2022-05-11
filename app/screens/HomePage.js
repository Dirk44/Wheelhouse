import React from "react";
import {
  StyleSheet,
  Platform,
  ScrollView,
  Text,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
  View,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MenuText from "../components/MenuText";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";

function HomePage() {
  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground
          style={styles.background}
          source={require("../assets/landing-page-background.jpg")}
        >
          <Image
            source={require("../assets/wh-logo.png")}
            style={styles.whLogo}
          />
          <Image
            source={require("../assets/cars-wh-landing.png")}
            style={styles.carsImage}
          />
          <Text numberOfLines={4} style={styles.text}>
            Lorem ipsum dolor sit amet{"\n"}
            v, consectetur adipiscing elit. Aenean{"\n"} pulvinar erat odio, non
            tempus leo mattis nec.{"\n"} Fusce rhoncus et tortor non tincidunt.
          </Text>
          <Carousel />
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    // alignItems: "center",
    // top: 70
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "auto",
    alignItems: "center",
    // resizeMode: "cover",
  },
  carsImage: {
    flex: 1,
    // aspectRatio: 1.5,
    width: "100%",
    height: 294,
    marginTop: "45%",
    resizeMode: "contain",
  },
  text: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 30,
    color: "white",
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 0,
    // opacity: .8,
    // fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    // fontFamily: "HelveticaRegular"
  },
  whLogo: {
    // flex: 1,
    width: "80%",
    height: 130,
    resizeMode: "contain",
    position: "absolute",
    marginTop: "10%",
    // marginLeft: "10%",
  },
});

export default HomePage;
