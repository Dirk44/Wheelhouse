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
import { rentSeriesStyles } from "../../stylesheets";
import { NavBar } from "../../components";
import { ROUTES } from "../../constants";

// import Amplify from "aws-amplify";
// import config from "../../src/aws-exports";

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
          source={require("../../assets/rentNowBg.jpg")}
        >
          <View style={rentSeriesStyles.carsImageContainer}>
            <Image
              source={require("../../assets/rentalCarImage.png")}
              style={rentSeriesStyles.carsImage}
            />
          </View>
          <View style={rentSeriesStyles.gladiatorsLogoContainer}>
            <Image
              style={rentSeriesStyles.gladiatorsLogo}
              source={require("../../assets/gladLogoGreen.png")}
            />
          </View>
          <View>
            <TouchableOpacity
              // style={rentSeriesStyles.buttonStyle}
              onPress={() => {
                !auth
                  ? navigation.navigate(ROUTES.CART)
                  : navigation.navigate(ROUTES.SIGNIN_HOME);
              }}
            >
              <Image
                style={rentSeriesStyles.buttonImage}
                source={require("../../assets/preOrderBtn.jpg")}
              />
            </TouchableOpacity>
          </View>
          <View style={rentSeriesStyles.dolbyContainer}>
            <Image
              style={rentSeriesStyles.dolby}
              source={require("../../assets/4kDolbyDigital.png")}
            />
          </View>
          <View style={{ width: "80%", marginTop: -50 }}>
            <Image
              style={rentSeriesStyles.worldPremiereText}
              source={require("../../assets/worldPremiereEventText.png")}
            />
          </View>
          <View style={{ width: "50%", alignItems: "center" }}>
            <Image
              style={rentSeriesStyles.whLogo}
              source={require("../../assets/wh-logo.png")}
            />
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RentSeries;
