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
import { ScaledSheet } from "react-native-size-matters";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MenuText from "../components/MenuText";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import movies from "../components/movies.json";

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
            source={{
              uri: "https://amplify-wheelhouse-dev-82159-deployment.s3.amazonaws.com/WheelHouse+App+Assets/racecars.jpg",
            }}
            style={styles.carsImage}
          />
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet v, consectetur adipiscing elit. Aenean
            pulvinar erat odio, non tempus leo mattis nec. Fusce rhoncus et
            tortor non tincidunt.
          </Text>
          <View style={styles.carouselContainer}>
            <Image
              style={styles.redline}
              source={require("../assets/redline-horizontal.png")}
            />
            <View style={styles.carousel}>
              <Carousel />
            </View>
            <Image
              style={styles.redline}
              source={require("../assets/redline-horizontal.png")}
            />
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  background: {
    // flex: 1,
    width: "100%",
    height: "auto",
    alignItems: "center",
  },
  carousel: {
    width: "100%",
  },
  carouselContainer: {
    width: "100%",
    alignItems: "center",
  },
  carsImage: {
    flex: 1,
    // aspectRatio: 1.5,
    width: "100%",
    height: "294@s",
    marginTop: "45%",
    resizeMode: "contain",
  },

  redline: {
    // flex: 1,
    width: "90%",
    height: "26@s",
    resizeMode: "contain",
    marginBottom: "3%",
  },
  text: {
    flex: 1,
    fontSize: "14@s",
    fontWeight: "500",
    lineHeight: "30@s",
    color: "white",
    paddingLeft: "30@s",
    paddingRight: "30@s",
    // opacity: .8,
    // fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    // fontFamily: "HelveticaRegular"
  },
  whLogo: {
    // flex: 1,
    width: "80%",
    height: "130@s",
    resizeMode: "contain",
    position: "absolute",
    marginTop: "8%",
    // marginLeft: "10%",
  },
});

export default HomePage;
