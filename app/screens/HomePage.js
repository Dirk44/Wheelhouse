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
import { LinearGradient } from "expo-linear-gradient";

import { ScaledSheet } from "react-native-size-matters";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MenuText from "../components/MenuText";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import movies from "../components/movies.json";

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground
          style={styles.background}
          source={require("../assets/wheelhouseElements/wheelhouseLanding.jpg")}
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
            WHEELHOUSE is the home for exclusive high-quality motorsports
            content. With new shows in the pipeline, WHEELHOUSE proudly presents
            the six part Limited-Series, GLADIATORS OF STEEL
          </Text>
          <View style={styles.logoContainer}>
            <TouchableOpacity>
              <Text style={styles.click}> CLICK HERE FOR THE PREMIERE OF </Text>
            </TouchableOpacity>
            <Image
              style={styles.gladiatorsLogo}
              source={require("../assets/gladiatorsLogo.png")}
            />
            <Image
              style={styles.redline}
              source={require("../assets/redline-horizontal.png")}
            />
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    resizeMode: "contain",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  background: {
    // flex: 1,
    width: "100%",
    height: 1200,
    alignItems: "center",
    marginTop: "-51@s",
  },
  carsImage: {
    width: "100%",
    height: "294@s",
    marginTop: "175@s",
    resizeMode: "contain",
  },
  click: {
    color: "#07fbb9",
    fontWeight: "800",
    fontSize: "14@s",
    marginTop: "25@s",
    letterSpacing: 1,
  },
  gladiatorsLogo: {
    flex: 1,
    width: "60%",
    // height: "auto",
    resizeMode: "contain",
    marginTop: "-210@s",
  },
  logoContainer: {
    flex: 1,
    width: "100%",
    height: "auto",
    alignItems: "center",
  },
  redline: {
    width: "80%",
    height: "26@s",
    resizeMode: "contain",
    // marginBottom: "3%",
  },
  text: {
    fontSize: "14@s",
    fontWeight: "400",
    lineHeight: "25@s",
    color: "white",
    paddingLeft: "30@s",
    paddingRight: "30@s",
    textAlign: "center",
    marginTop: "-25@s",
  },
  whLogo: {
    // flex: 1,
    width: "80%",
    height: "130@s",
    overflow: "visible",
    resizeMode: "contain",
    position: "absolute",
    marginTop: "70@s",
    shadowColor: "black",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    // marginLeft: "10%",
  },
});

export default HomePage;
