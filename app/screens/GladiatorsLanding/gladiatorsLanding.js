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
import { GladiatorsLandingStyles } from "./gladiatorLandingStyles";
import { NavBar } from "../../components/";

function GladiatorsLanding(props) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={GladiatorsLandingStyles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground
          style={GladiatorsLandingStyles.background}
          source={require("../../assets/gladiatorsLandingBg.jpg")}
        >
          <View
            style={{
              width: "100%",
              height: 125,
              alignItems: "center",
              marginTop: 230,
              //   backgroundColor: "red",
            }}
          >
            <Image
              style={GladiatorsLandingStyles.gladiatorsLogo}
              source={require("../../assets/gladLogoGreen.png")}
            />
          </View>
          <View>
            <TouchableOpacity
              style={GladiatorsLandingStyles.buttonStyle}
              onPress={() => navigation.navigate("Clips")}
            >
              <Text style={GladiatorsLandingStyles.buttonText}>PLAY CLIPS</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 30,
              width: "72%",
              alignItems: "center",
              //   backgroundColor: "red",
              marginTop: 5,
            }}
          >
            <Image
              style={GladiatorsLandingStyles.dolby}
              source={require("../../assets/4kDolbyDigital.png")}
            />
          </View>
          <View style={{ width: "80%", marginTop: 30 }}>
            <Text style={GladiatorsLandingStyles.descriptionText}>
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
              style={GladiatorsLandingStyles.whLogo}
              source={require("../../assets/wh-logo.png")}
            ></Image>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

export default GladiatorsLanding;
