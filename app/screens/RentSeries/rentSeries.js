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
import { RentSeriesStyles } from "./rentSeriesStyles";
import NavBar from "../../components/NavBar";
import WhButton from "../../components/WhButton";

const RentSeries = (props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={RentSeriesStyles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground
          style={RentSeriesStyles.background}
          source={require("../../assets/rentNowBg.jpg")}
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
              source={require("../../assets/rentalCarImage.png")}
              style={RentSeriesStyles.carsImage}
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
              style={RentSeriesStyles.gladiatorsLogo}
              source={require("../../assets/gladLogoGreen.png")}
            />
          </View>
          <View>
            <TouchableOpacity style={RentSeriesStyles.buttonStyle} onPress={""}>
              <Text style={RentSeriesStyles.buttonText}>RENT NOW $11.99</Text>
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
              style={RentSeriesStyles.dolby}
              source={require("../../assets/4kDolbyDigital.png")}
            />
          </View>
          <View style={{ width: "80%", marginTop: 5 }}>
            <Text style={RentSeriesStyles.descriptionText}>
              Watch all six-episodes of GLADIATORS OF STEEL with this world
              premiere exclusive and receive FREE BONUS CONTENT only on
              WHEELHOUSE MOTORSPORTS.
            </Text>
          </View>
          <View style={{ width: "50%", alignItems: "center" }}>
            <Image
              style={RentSeriesStyles.whLogo}
              source={require("../../assets/wh-logo.png")}
            />
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RentSeries;
