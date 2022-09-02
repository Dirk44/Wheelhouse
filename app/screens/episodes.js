import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  FlatList,
} from "react-native";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import movies from "../components/movies.json";

import { ScaledSheet } from "react-native-size-matters";

function Episodes() {
  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground
          style={styles.background}
          source={require("../assets/episodes/episodesBg.jpg")}
        >
          <View
            style={{
              flex: 1,
              width: "100%",
              height: 125,
              alignItems: "center",
              marginTop: 70,
              //   backgroundColor: "red",
            }}
          >
            <Image
              style={styles.gladiatorsLogo}
              source={require("../assets/episodes/gladiatorsLogoSimple.png")}
            />
          </View>
          <View style={{ flex: 1, width: "100%" }}>
            <Image
              style={styles.dolby}
              source={require("../assets/episodes/text.png")}
            />
          </View>
          <View style={styles.list}>
            {movies.map((movie) => {
              return (
                <View key={movie.id}>
                  <Card
                    key={movie.id}
                    title={movie.title}
                    thumb={movie.thumb}
                    poster={movie.poster}
                    playBtn={movie.playBtn}
                    playVideo={movie.playVideo}
                  />
                </View>
              );
            })}
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
    height: "1250@s",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "8%",
    marginTop: "-50@s",
  },
  dolby: {
    width: "100%",
    height: "120@s",
    opacity: 0.8,
    marginTop: "-5@s",
  },
  gladiatorsLogo: {
    width: "47%",
    height: "140@s",
    // backgroundColor: "red",
  },
  list: {
    alignItems: "center",
    width: "75%",
    // marginTop: "-10@s",
    flex: 7,
    // backgroundColor: "white",
  },
});

export default Episodes;
