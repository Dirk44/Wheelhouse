import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { ScaledSheet } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";

import Card from "./Card";
import movies from "../components/movies.json";
import { TouchableHighlight } from "react-native-gesture-handler";

function Carousel() {
  // const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <LinearGradient
        style={styles.gradient}
        colors={["transparent", "black"]}
        start={[0.0, 0.0]}
        end={[1.0, 0.0]}
        locations={[0.0, 1.0]}
      /> */}
      <TouchableHighlight horizontal={false}>
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
      </TouchableHighlight>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    // flex: 1,
    // width: "40%",
    // justifyContent: "center",
    // flexDirection: "row",
    justifyContent: "center",
    // flexDirection: "row",
    marginLeft: "25@s",
  },
  gradient: {
    width: "100%",
    height: "100%",
  },
  // carousel: {
  //   width: "80%",
  // },
  // clip: {
  // marginTop: "2%",
  // resizeMode: "contain",
  // width: "20%",
  // height: 175,
  // flexDirection: "row",
  // padding: 20,
  // margin: 5,
  // },
  // clipText: {
  //   color: "white",
  //   fontSize: 16,
  // },
});

export default Carousel;
