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
      <ScrollView>
        <ImageBackground
          style={styles.background}
          source={{
            uri: "https://amplify-wheelhouse-dev-82159-deployment.s3.amazonaws.com/WheelHouse+App+Assets/gladiatorsBgImage.jpg",
          }}
        >
          <NavBar />
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    resizeMode: "contain",
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "auto",
    alignItems: "center",
  },
  cardImage: {
    flex: 1,
    width: 390,
    height: 240,
  },
  cardLayout: {
    // flexDirection: "row",
    justifyContent: "space-evenly",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginTop: "22%",
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  menuBar: {
    flex: 1,
    justifyContent: "flex-end",
    paddingTop: 20,
  },
});

export default GladiatorsLandingPage;
