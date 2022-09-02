import React from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  TouchableHighlight,
  SafeAreaView,
  Image,
  ScrollView,
  View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import Carousel from "../components/Carousel";
import MenuText from "../components/MenuText";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import { NavigationContainerRefContext } from "@react-navigation/native";

function Clips({ route }) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground
          style={styles.background}
          source={require("../assets/whLandingBg.jpg")}
        >
          <View
            style={{
              width: "100%",
              height: 250,
              alignItems: "center",
            }}
          >
            <Image
              style={styles.gladiatorsLogo}
              source={require("../assets/gladiatorsLogoSimple.png")}
            />
          </View>
          <View
            style={{
              flex: 0.7,
              width: "100%",
              alignItems: "center",
            }}
          >
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#07fbb9"
              onPress={() =>
                navigation.navigate("Video", {
                  // videoUrl
                })
              }
              style={{
                width: "65%",
                alignItems: "center",
              }}
            >
              <Image
                style={styles.thumb}
                source={require("../assets/trailerThumb.jpg")}
              />
            </TouchableHighlight>
            <Text style={styles.thumbText}>PLAY TRAILER</Text>
            <TouchableHighlight style={{ width: "65%", alignItems: "center" }}>
              <Image
                style={styles.thumb}
                source={require("../assets/playClipThumb.png")}
              />
            </TouchableHighlight>
            <Text style={styles.thumbText}>PLAY CLIP 1</Text>
            <TouchableHighlight style={{ width: "65%", alignItems: "center" }}>
              <Image
                style={styles.thumb}
                source={require("../assets/watchFilmThumb.png")}
              />
            </TouchableHighlight>
          </View>
          <Text style={styles.thumbText}>WATCH SERIES</Text>

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
    marginTop: -70,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "15%",
  },
  gladiatorsLogo: {
    width: "55%",
    resizeMode: "contain",
    height: 300,
  },
  thumb: {
    width: "90%",
    height: 140,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "red",
  },
  thumbText: {
    fontFamily: "HelveticaRegular",
    fontSize: 16,
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

export default Clips;
