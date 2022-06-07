import React from "react";
import {
  StyleSheet,
  Platform,
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableHighlight,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";

import MenuText from "../components/MenuText";
import Card from "../components/Card";
import NavBar from "../components/NavBar";

function GladiatorsLandingPage() {
  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground
          style={styles.background}
          source={{
            uri: "https://amplify-wheelhouse-dev-82159-deployment.s3.amazonaws.com/WheelHouse+App+Assets/gladiatorsBgImage.jpg",
          }}
        >
          <Image
            style={styles.gladiatorsLogo}
            source={require("../assets/gladiatorsLogo.png")}
          />
          <Image
            style={styles.thumb}
            source={require("../assets/playTrailerThumb.png")}
          />
          <Text style={styles.thumbText}>PLAY TRAILER</Text>
          <Image
            style={styles.thumb}
            source={require("../assets/playClipThumb.png")}
          />
          <Text style={styles.thumbText}>PLAY CLIP 1</Text>
          <Image
            style={styles.thumb}
            source={require("../assets/watchFilmThumb.png")}
          />
          <Text style={styles.thumbText}>WATCH FILM</Text>
          <Image
            style={styles.whLogo}
            source={require("../assets/wh-logo.png")}
          />
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
    // alignItems: "center",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  background: {
    flex: 1,
    width: "100%",
    height: 850,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "8%",
    // resizeMode: "contain",
    // flexGrow: 1,
  },
  gladiatorsLogo: {
    // flex: 1,
    width: "55%",
    height: "auto",
    aspectRatio: 1.64 / 1,
    // marginTop: "8%",
    marginBottom: "7%",
  },
  thumb: {
    width: "65%",
    height: 135,
    // marginTop: "10%",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 2,
    marginBottom: "1%",
  },
  thumbText: {
    fontFamily: "HelveticaRegular",
    color: "white",
    marginTop: 10,
    marginBottom: "4%",
  },
  whLogo: {
    width: "40%",
    height: 58,
    marginTop: 10,
    paddingBottom: "10%",
  },
});

export default GladiatorsLandingPage;
