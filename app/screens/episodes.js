import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import { episodeStyles } from "../stylesheets";
import { EpisodesCard, movies, NavBar } from "../components";

function Episodes() {
  return (
    <SafeAreaView style={episodeStyles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground
          style={episodeStyles.background}
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
              style={episodeStyles.gladiatorsLogo}
              source={require("../assets/episodes/gladiatorsLogoSimple.png")}
            />
          </View>
          <View style={{ flex: 1, width: "100%" }}>
            <Image
              style={episodeStyles.dolby}
              source={require("../assets/episodes/text.png")}
            />
          </View>
          <View style={episodeStyles.list}>
            {movies.episodes.map((movie) => {
              return (
                <View key={movie.id}>
                  <EpisodesCard
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

module.exports = Episodes;
