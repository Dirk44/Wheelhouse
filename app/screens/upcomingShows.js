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
import { NavBar } from "../components/";
import { upcomingShowsStyles } from "../stylesheets";

function UpcomingShows() {
  const { width, height } = Dimensions.get("window");
  return (
    <SafeAreaView style={upcomingShowsStyles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground
          style={upcomingShowsStyles.background}
          source={require("../assets/upcominShowsElements/upcomingBg.jpg")}
        >
          <View style={upcomingShowsStyles.whLogoContainer}>
            <Image
              source={require("../assets/upcominShowsElements/whLogo.png")}
              style={upcomingShowsStyles.whLogo}
            />
          </View>
          <View style={upcomingShowsStyles.textContainer}>
            <Text style={upcomingShowsStyles.text}>COMING SOON</Text>
          </View>
          <View style={upcomingShowsStyles.descriptTextContainer}>
            <Text style={upcomingShowsStyles.descriptText}>
              WheelHouse Motorsports has many shows in the pipeline. More
              exclusive content coming soon.
            </Text>
          </View>
          <View style={{ flex: 1, width: "40%", height: 35 }}>
            <Image
              style={upcomingShowsStyles.whLogoBottom}
              source={require("../assets/upcominShowsElements/whBottom.png")}
            />
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

module.exports = UpcomingShows;
