import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { episodeStyles } from "../../stylesheets";
import { EpisodesCard, NavBar } from "../../components";
import movies from "../../components/movies.json";

function Episodes() {
  return (
    <SafeAreaView style={episodeStyles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground
          style={episodeStyles.background}
          source={{
            uri: "https://amplify-wheelhouse-dev-82159-deployment.s3.amazonaws.com/WheelHouse+App+Assets/tempEpisodesPage.jpg",
          }}
        >
          {/* <ImageBackground
          style={episodeStyles.background}
          source={require("../../assets/episodes/episodesBg.jpg")}
        >
          <View style={episodeStyles.gladiatorsLogoContainer}>
            <Image
              style={episodeStyles.gladiatorsLogo}
              source={require("../../assets/episodes/gladiatorsLogoSimple.png")}
            />
          </View>
          <View style={{ flex: 1, width: "100%" }}>
            <Image
              style={episodeStyles.dolby}
              source={require("../../assets/episodes/text.png")}
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
          <View style={episodeStyles.buttonContainer}>
            <TouchableOpacity
              style={episodeStyles.buttonStyle}
              // onPress={() => {
              //   navigation.navigate();
              // }}
            >
              <Text style={episodeStyles.buttonText}>VIEW BONUS CONTENT</Text>
            </TouchableOpacity>
          </View>
          <View style={episodeStyles.whLogoContainer}>
            <Image
              style={episodeStyles.whLogo}
              source={require("../../assets/wh-logo.png")}
            />
          </View>
        </ImageBackground> */}
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Episodes;
