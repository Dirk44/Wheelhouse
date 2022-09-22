import React from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";


import { useNavigation } from "@react-navigation/native";

import Card from "./Card";
import movies from "../components/movies.json";
import { TouchableHighlight } from "react-native-gesture-handler";
import { carouselStyles } from "../stylesheets/";

function Carousel() {
  // const navigation = useNavigation();

  return (
    <View style={carouselStyles.container}>
      {movies.map((movie) => {
        return (
          <View key={movie.id}>
            <Card
              key={movie.id}
              poster={movie.thumb}
              title={movie.title}
              playBtn={movie.playBtn}
              playVideo={movie.playVideo}
            />
          </View>
        );
      })}
    </View>
  );
}



module.exports = Carousel;
