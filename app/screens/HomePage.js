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

const HomePage = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground
          style={styles.background}
          source={require("../assets/wheelhouseElements/wheelhouseLanding.jpg")}
        >
          <View style={styles.whLogoContainer}>
            <Image
              source={require("../assets/wh-logo.png")}
              style={styles.whLogo}
            />
          </View>
          <View style={styles.carsImageContainer}>
            <Image
              source={require("../assets/wheelhouseLandingImage.jpg")}
              style={styles.carsImage}
            />
          </View>
          <View>
            <Text style={styles.text}>
              WHEELHOUSE is the home for exclusive high-quality motorsports
              content. With new shows in the pipeline, WHEELHOUSE proudly
              presents the six part Limited-Series, GLADIATORS OF STEEL
            </Text>
          </View>
          <View style={{ flex: 1, marginTop: -200 }}>
            <TouchableOpacity
              // style={{ flex: 1 }}
              onPress={() => navigation.navigate("Gladiators of Steel")}
            >
              <Text style={styles.click}>CLICK HERE FOR THE PREMIERE OF</Text>

              {/* <View> */}
              <Image
                style={styles.gladiatorsLogo}
                source={require("../assets/gladiatorsLogo.png")}
                onPress={() => navigation.navigate("Gladiators of Steel")}
              />
            </TouchableOpacity>
          </View>
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
    // width: "100%",
    height: 1200,
    alignItems: "center",
    marginTop: "-45@s",
  },
  carsImageContainer: {
    flex: 1,
    width: "100%",
    height: "auto%",
    // marginTop: "-310@s",
    // alignItems: "flex-start",
  },
  carsImage: {
    // flex: 1,
    width: "100%",
    height: "215@s",
    marginTop: "-55@s",
    resizeMode: "contain",
  },
  click: {
    // flex: 1,
    color: "#07fbb9",
    fontWeight: "800",
    fontSize: "14@s",
    marginTop: "15@s",
    letterSpacing: 1,
  },
  gladiatorsLogo: {
    // flex: 1,
    width: "100%",
    height: "210@s",
    // resizeMode: "contain",
    marginTop: "25@s",
    // resizeMode: "contain",
  },
  text: {
    fontSize: "14@s",
    fontWeight: "400",
    lineHeight: "25@s",
    color: "white",
    paddingLeft: "30@s",
    paddingRight: "30@s",
    textAlign: "center",
    marginTop: "-315@s",
  },
  whLogo: {
    width: "90%",
    // overflow: "visible",
    resizeMode: "contain",
    // position: "absolute",
    paddingRight: "25@s",
  },
  whLogoContainer: {
    // flex: 1,
    overflow: "visible",
    width: "100%",
    height: "25%",
    justifyContent: "center",
    // alignItems: "center",
    // paddingBottom: "63@s",
    // marginBottom: "25@s",
  },
});

export default HomePage;
