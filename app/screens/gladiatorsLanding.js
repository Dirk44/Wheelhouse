import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { gladiatorsLandingStyles } from "../stylesheets";
import { NavBar } from "../components";

function GladiatorsLanding(props) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={gladiatorsLandingStyles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground
          style={gladiatorsLandingStyles.background}
          source={require("../assets/gladiatorsLandingBg.jpg")}
        >
          <View
            style={{
              width: "100%",
              height: "20%",
              alignItems: "center",
              marginTop: "65%",
              //   backgroundColor: "red",
            }}
          >
            <Image
              style={gladiatorsLandingStyles.gladiatorsLogo}
              source={require("../assets/gladLogoGreen.png")}
            />
          </View>
          <View style={{ width: "100%", height: "7%", alignItems: "center" }}>
            <TouchableOpacity
              style={gladiatorsLandingStyles.buttonStyle}
              onPress={() => navigation.navigate("Clips")}
            >
              <Text style={gladiatorsLandingStyles.buttonText}>PLAY CLIPS</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: "5%",
              width: "72%",
              alignItems: "center",
              //   backgroundColor: "red",
              marginTop: 5,
            }}
          >
            <Image
              style={gladiatorsLandingStyles.dolby}
              source={require("../assets/4kDolbyDigital.png")}
            />
          </View>
          <View style={{ width: "80%", height: "25%", marginTop: 10 }}>
            <Text style={gladiatorsLandingStyles.descriptionText}>
              GLADIATORS OF STEEL is an in-depth look at one of America's most
              dangerous sports: Demolition Derby. {"\n"} {"\n"} GLADIATORS OF
              STEEL is an unswerving look at the incredible journey “Derby
              Drivers” take to make it into the arena. From the unique culture,
              family dynamics and car building, to the brutal action inside the
              stadium, these drivers have one goal in mind: To feel the energy
              and rush of hitting another car full-speed in front of 20,000
              screaming fans. It's legal road rage.
            </Text>
          </View>

          <View style={{ width: "50%", alignItems: "center" }}>
            <Image
              style={gladiatorsLandingStyles.whLogo}
              source={require("../assets/wh-logo.png")}
            ></Image>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

module.exports = GladiatorsLanding;
