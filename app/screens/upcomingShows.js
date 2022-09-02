import React from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import NavBar from "../components/NavBar";

function UpcomingShows() {
  const { width, height } = Dimensions.get("window");
  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground
          style={styles.background}
          source={require("../assets/upcominShowsElements/upcomingBg.jpg")}
        >
          <View
            style={{
              // flex: 1,
              width: "100%",
              marginTop: -80,
              marginRight: 15,
              // backgroundColor: "red",
              overflow: "hidden",
            }}
          >
            <Image
              source={require("../assets/upcominShowsElements/whLogo.png")}
              style={styles.whLogo}
            />
          </View>
          <View style={{ flex: 1, marginTop: -80 }}>
            <Text style={styles.text}>COMING SOON</Text>
          </View>
          <View style={{ flex: 6, width: "85%" }}>
            <Text style={styles.descriptText}>
              WheelHouse Motorsports has many shows in the pipeline. More
              exclusive content coming soon.
            </Text>
          </View>
          <View style={{ flex: 1, width: "40%", height: 35 }}>
            <Image
              style={styles.whLogoBottom}
              source={require("../assets/upcominShowsElements/whBottom.png")}
            />
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = ScaledSheet.create({
  container: {
    backgroundColor: "#000",
    resizeMode: "cover",
    flex: 1,
    justifyContent: "center",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "800@s",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "8%",
    marginTop: "-60@s",
  },
  descriptText: {
    fontSize: 14,
    color: "white",
    fontWeight: "500",
    textAlign: "center",
    lineHeight: "20@s",
    opacity: 0.9,
  },
  text: {
    flex: 1,
    color: "#00aeef",
    fontSize: 24,
    fontWeight: "300",
    marginTop: "10%",
    letterSpacing: 1,
  },
  whLogo: {
    // flex: 1,
    width: "90%",
    height: "255@s",
    marginTop: "25%",
    // marginRight: 5,
    overflow: "hidden",
  },
  whLogoBottom: {
    width: "100%",
    height: "55@s",
    resizeMode: "contain",
  },
});

export default UpcomingShows;
