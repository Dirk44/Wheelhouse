import React from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import NavBar from "../components/NavBar";
import VideoPlayer from "../components/VideoPlayer";
import movies from "../components/movies.json";

function PlayVideoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <ImageBackground style={styles.background} source={{}}>
        <Image
          style={styles.gladiatorLogo}
          source={{
            uri: "https://amplify-wheelhouse-dev-82159-deployment.s3.amazonaws.com/WheelHouse+App+Assets/gladiatorsLogo.png",
          }}
        />
        <VideoPlayer />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    resizeMode: "contain",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "auto",
    // justifyContent: "center",
    alignItems: "center",
  },
  gladiatorLogo: {
    // flex: 1,
    width: 293,
    height: 180,
    // marginLeft: "8%",
    marginTop: "5%",
  },
});

export default PlayVideoScreen;
