import React from "react";
import { View, Image, StyleSheet, FlatList } from "react-native";
// import movies from "../assets/data/videos";

const clips = {
  movies: [
    {
      id: "movie1",
      poster: "./assets/clip.png",
    },
    {
      id: "movie2",
      poster: "./assets/clip.png",
    },
    {
      id: "movie3",
      poster: "./assets/clip.png",
    },
  ],
};

function Carousel(props) {
  return (
    // <View style={styles.container}>
    <View style={styles.carousel}>
      <Image
        style={styles.redline}
        source={require("../assets/redline-horizontal.png")}
      />
      {/* <Image source={require("../assets/clip.png")}  /> */}
      <FlatList
        data={clips.movies}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        renderItem={({ item }) => {
          return (
            <View>
              <Image style={styles.clip} source={{ uri: item.poster }} />
            </View>
          );
        }}
      />

      <Image
        style={styles.redline}
        source={require("../assets/redline-horizontal.png")}
      />
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
    // justifyContent: "center",
    // resizeMode: "contain",
    flexDirection: "row",
  },
  carousel: {
    width: "80%",
    // justifyContent: "center",
    // resizeMode: "contain",
  },

  clip: {
    // marginTop: "2%",
    resizeMode: "contain",
    width: "40%",
    height: 175,
    // padding: 20,
  },

  redline: {
    // flex: 1,
    width: "100%",
    height: 45,
    resizeMode: "contain",
  },
});

export default Carousel;
