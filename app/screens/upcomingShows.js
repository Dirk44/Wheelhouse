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
import NavBar from "../components/NavBar";

function UpcomingShows() {
  const { width, height } = Dimensions.get("window");
  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground
          style={styles.background}
          source={require("../assets/landing-page-background.jpg")}
        >
          <Image
            source={require("../assets/wh-logo.png")}
            style={styles.whLogo}
          />

          <Text style={styles.text}>Upcoming Shows</Text>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    resizeMode: "cover",
    flex: 1,
    justifyContent: "center",
  },
  background: {
    flex: 1,
    width: "100%",
    height: 850,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "8%",
    marginTop: -60,
  },
  text: {
    flex: 1,
    color: "white",
    fontFamily: "HelveticaRegular",
    fontSize: 30,
    marginTop: "30%",
  },
  whLogo: {
    // flex: 1,
    width: "80%",
    height: 130,
    resizeMode: "contain",
    // position: "absolute",
    marginTop: "18%",
    // marginLeft: "10%",
  },
});

export default UpcomingShows;
