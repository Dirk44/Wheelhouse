import React, { useState } from "react";
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
import { rentSeriesStyles } from "../stylesheets";
import { NavBar, WhButton } from "../components";
// import Amplify from "aws-amplify";
// import config from "../../src/aws-exports";
import AuthStack from "../routes/AuthStack";

// Amplify.configure({
//   ...config,
//   Analytics: {
//     disabled: true,
//   },
// });

const RentSeries = (props) => {
  const navigation = useNavigation();
  const [auth, setAuth] = useState(null);
  return (
    <SafeAreaView style={rentSeriesStyles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground
          style={rentSeriesStyles.background}
          source={require("../assets/rentNowBg.jpg")}
        >
          <View style={rentSeriesStyles.carsImageContainer}>
            <Image
              source={require("../assets/rentalCarImage.png")}
              style={rentSeriesStyles.carsImage}
            />
          </View>
          <View style={rentSeriesStyles.gladiatorsLogoContainer}>
            <Image
              style={rentSeriesStyles.gladiatorsLogo}
              source={require("../assets/gladLogoGreen.png")}
            />
          </View>
          <View>
            <TouchableOpacity
              style={rentSeriesStyles.buttonStyle}
              onPress={() => {
                auth
                  ? navigation.navigate("CreditCard")
                  : navigation.navigate("SignIn");
              }}
            >
              <Text style={rentSeriesStyles.buttonText}>RENT NOW $11.99</Text>
            </TouchableOpacity>
          </View>
          <View style={rentSeriesStyles.dolbyContainer}>
            <Image
              style={rentSeriesStyles.dolby}
              source={require("../assets/4kDolbyDigital.png")}
            />
          </View>
          <View style={{ width: "80%", marginTop: 5 }}>
            <Text style={rentSeriesStyles.descriptionText}>
              Watch all six-episodes of GLADIATORS OF STEEL with this world
              premiere exclusive and receive FREE BONUS CONTENT only on
              WHEELHOUSE MOTORSPORTS.
            </Text>
          </View>
          <View style={{ width: "50%", alignItems: "center" }}>
            <Image
              style={rentSeriesStyles.whLogo}
              source={require("../assets/wh-logo.png")}
            />
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

module.exports = RentSeries;
