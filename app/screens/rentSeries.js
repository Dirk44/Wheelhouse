import React from "react";
import {
  ScrollView,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  View,
  Button,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { ScaledSheet } from "react-native-size-matters";

import NavBar from "../components/NavBar";
import WhButton from "../components/WhButton";

const RentSeries = (props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground
          style={styles.background}
          source={require("../assets/rentNowBg.jpg")}
        >
          <View
            style={{
              height: 300,
              width: "100%",
              // backgroundColor: "red",
              marginTop: 52,
            }}
          >
            <Image
              source={require("../assets/rentalCarImage.png")}
              style={styles.carsImage}
            />
          </View>
          <View
            style={{
              height: 200,
              width: "100%",
              alignItems: "center",
              // backgroundColor: "red",
            }}
          >
            <Image
              style={styles.gladiatorsLogo}
              source={require("../assets/gladLogoGreen.png")}
            />
          </View>
          <View>
            <TouchableOpacity style={styles.buttonStyle} onPress={""}>
              <Text style={styles.buttonText}>RENT NOW $11.99</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 30,
              width: "60%",
              alignItems: "center",
              // backgroundColor: "red",
              marginTop: 25,
            }}
          >
            <Image
              style={styles.dolby}
              source={require("../assets/4kDolbyDigital.png")}
            />
          </View>
          <View style={{ width: "80%", marginTop: 5 }}>
            <Text style={styles.descriptionText}>
              Watch all six-episodes of GLADIATORS OF STEEL with this world
              premiere exclusive and receive FREE BONUS CONTENT only on
              WHEELHOUSE MOTORSPORTS.
            </Text>
          </View>
          <View style={{ width: "50%", alignItems: "center" }}>
            <Image
              style={styles.whLogo}
              source={require("../assets/wh-logo.png")}
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
    height: "800@s",
    alignItems: "center",
    marginTop: "-55@s",
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0aeeb5",
    height: "30@s",
    width: "300@s",
    borderRadius: 4,
    marginTop: "-20@s",
  },
  buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 2,
  },
  carsImageContainer: {
    flex: 1,
    width: "100%",
    height: "200@s",
  },
  carsImage: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    marginTop: "35@s",
  },
  descriptionText: {
    fontSize: 15,
    color: "white",
    fontWeight: "500",
    textAlign: "center",
    lineHeight: "20@s",
  },
  dolby: {
    width: "65%",
    height: "7@s",
    // marginTop: "3@s",
  },
  gladiatorsLogo: {
    width: "65%",
    height: "170@s",
    // padding: "5@s",
    resizeMode: "contain",
    marginTop: "-20@s",
  },
  whLogo: {
    width: "75%",
    height: "70@s",
    marginTop: "40@s",
  },
});

export default RentSeries;
