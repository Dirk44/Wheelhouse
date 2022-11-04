import React, { useState } from "react";
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
import { ROUTES } from "../../constants";
import { homePageStyles } from "../../stylesheets";
import { NavBar } from "../../components";
import { SignIn, SignUp } from "../../screens";

const HomePage = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={homePageStyles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground
          style={homePageStyles.background}
          source={require("../../assets/wheelhouseElements/wheelhouseLanding.jpg")}
        >
          <View style={homePageStyles.whLogoContainer}>
            <Image
              source={require("../../assets/wh-logo-text.png")}
              style={homePageStyles.whLogo}
            />
          </View>
          <View style={homePageStyles.carsImageContainer}>
            <Image
              source={require("../../assets/wheelhouseLandingImage.jpg")}
              style={homePageStyles.carsImage}
            />
          </View>
          <View>
            <Text style={homePageStyles.text}>
              WHEELHOUSE is the home for exclusive high-quality motorsports
              content. With new shows in the pipeline, WHEELHOUSE proudly
              presents the six part Limited-Series, GLADIATORS OF STEEL
            </Text>
          </View>
          <View>
            <TouchableOpacity
              // style={{ flex: 1 }}
              onPress={() => navigation.navigate(ROUTES.GLADIATORS)}
            >
              <View style={{ alignItems: "center" }}>
                <Text style={homePageStyles.click}>
                  CLICK HERE FOR THE PREMIERE OF
                </Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Image
                  style={homePageStyles.gladiatorsLogo}
                  source={require("../../assets/gladLogoWhite.png")}
                  // onPress={() => navigation.navigate("GladiatorsLanding")}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={homePageStyles.buttonStyle}
              onPress={() => {
                navigation.navigate(ROUTES.SIGNUP_HOME);
              }}
            >
              <Text style={homePageStyles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={homePageStyles.buttonStyle}
              onPress={() => {
                navigation.navigate(ROUTES.SIGNUP_HOME);
              }}
            >
              <Text style={homePageStyles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          <Image
            style={homePageStyles.redline}
            source={require("../../assets/redBar.png")}
          />
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
