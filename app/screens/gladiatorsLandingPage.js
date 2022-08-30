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

function GladiatorsLandingPage({ route }) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground
          style={styles.background}
          source={require("../assets/whLandingBg.jpg")}
        >
          <View style={{ width: "65%", flex: 1 }}>
            <Image
              style={styles.gladiatorsLogo}
              source={require("../assets/gladiatorsLogoSimple.png")}
            />
          </View>
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
              // resizeMode: "contain",
              alignItems: "center",
              // overflow: "hidden",
            }}
          >
            <Image
              style={styles.thumb}
              source={require("../assets/trailerThumb.png")}
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
    height: 730,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "15%",
  },
  gladiatorsLogo: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
  },
  thumb: {
    width: "90%",
    height: 140,
    borderWidth: 2,
    borderColor: "white",
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

export default GladiatorsLandingPage;
