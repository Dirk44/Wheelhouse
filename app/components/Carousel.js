import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
} from "react-native";
import Card from "./Card";
import movies from "../components/movies.json";

function Carousel() {
  return (
    <View
      style={{
        justifyContent: "center",
        flexDirection: "row",
        marginLeft: "25%",
      }}
    >
      {movies.map((movie) => {
        return (
          <View key={movie.id}>
            <Card
              key={movie.id}
              poster={movie.poster}
              title={movie.title}
              playBtn={movie.playBtn}
            />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  // flex: 1,
  // width: "40%",
  // justifyContent: "center",
  // flexDirection: "row",
  // },
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
