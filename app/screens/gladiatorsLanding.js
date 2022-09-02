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
import { ScaledSheet } from "react-native-size-matters";
import NavBar from "../components/NavBar";

function GladiatorsLanding(props) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground
          style={styles.background}
          source={require("../assets/gladiatorsLandingBg.jpg")}
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
              style={styles.gladiatorsLogo}
              source={require("../assets/gladLogoGreen.png")}
            />
          </View>
          <View>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => navigation.navigate("Clips")}
            >
              <Text style={styles.buttonText}>PLAY CLIPS</Text>
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
              style={styles.dolby}
              source={require("../assets/4kDolbyDigital.png")}
            />
          </View>
          <View style={{ width: "80%", marginTop: 30 }}>
            <Text style={styles.descriptionText}>
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
              style={styles.whLogo}
              source={require("../assets/wh-logo.png")}
            ></Image>
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
    width: "100%",
    height: "auto",
    // resizeMode: "contain",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "850@s",
    marginTop: "-55@s",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "15%",
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0aeeb5",
    height: "30@s",
    width: "300@s",
    borderRadius: 4,
    marginTop: "50@s",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 2,
  },
  descriptionText: {
    fontSize: 13,
    color: "white",
    fontWeight: "500",
    textAlign: "center",
    lineHeight: "14@s",
  },
  dolby: {
    width: "50%",
    height: "7@s",
    marginTop: "15@s",
  },
  gladiatorsLogo: {
    width: "50%",
    height: "150@s",
    // backgroundColor: "red",
  },
  whLogo: {
    width: "75%",
    height: "70@s",
    marginTop: "40@s",
  },
});

export default GladiatorsLanding;
