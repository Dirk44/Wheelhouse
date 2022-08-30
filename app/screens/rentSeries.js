import React from "react";
import {
  ScrollView,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { ScaledSheet } from "react-native-size-matters";

import NavBar from "../components/NavBar";

const RentSeries = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground
          style={styles.background}
          source={require("../assets/rentNowBg.jpg")}
        >
          <Image
            source={require("../assets/rentalCarImage.png")}
            style={styles.carsImage}
          />
          <Image
            style={styles.gladiatorsLogo}
            source={require("../assets/gladLogoGreen.png")}
          />
          {/* <View style={styles.carsImageContainer}> */}

          {/* </View> */}
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
    height: 800,
    alignItems: "center",
    marginTop: "-25@s",
  },
  carsImageContainer: {
    flex: 1,
    width: "100%",
    height: "200@s",
    // marginTop: "-310@s",
    // alignItems: "flex-start",
  },
  carsImage: {
    flex: 1,
    width: "100%",
    // height: "100@s",
    // marginTop: "-65@s",
    // resizeMode: "contain",
  },
  gladiatorsLogo: {
    width: "65%",
    height: "195@s",
    padding: "5@s",
    // resizeMode: "contain",
    // marginTop: "-45@s",
  },
});

export default RentSeries;
