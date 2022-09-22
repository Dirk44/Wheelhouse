import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import { EpisodeStyles } from "./episodesStyles";
import { Card, movies, NavBar } from "../../components/";

function Episodes() {
  return (
    <SafeAreaView style={EpisodeStyles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground
          style={EpisodeStyles.background}
          source={require("../../assets/episodes/episodesBg.jpg")}
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
              style={EpisodeStyles.gladiatorsLogo}
              source={require("../../assets/episodes/gladiatorsLogoSimple.png")}
            />
          </View>
          <View style={{ flex: 1, width: "100%" }}>
            <Image
              style={EpisodeStyles.dolby}
              source={require("../../assets/episodes/text.png")}
            />
          </View>
          <View style={EpisodeStyles.list}>
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

export default Episodes;
