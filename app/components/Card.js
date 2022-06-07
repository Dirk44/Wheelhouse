import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground,
  Pressable,
} from "react-native";
import PlayVideoScreen from "../screens/playVideoScreen";
import VideoPlayer from "./VideoPlayer";
import MenuText from "./MenuText";
import movies from "../components/movies.json";
import { Video } from "expo-av";

function Card(props, { navigation }) {
  // const [videos, setVideos] = useState([movies]);

  return (
    <View>
      <ImageBackground style={styles.image} source={{ uri: props.poster }}>
        <TouchableOpacity
          onPress={() => {
            console.warn("Play Button Pressed", props.title);
          }}
        >
          <Image
            style={{ height: 65, width: 65, opacity: 0.7 }}
            source={{ uri: props.playBtn }}
          />
        </TouchableOpacity>
      </ImageBackground>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "70%",
    // height: 170,
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: 133,
    height: 180,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 5,
  },
  text: {
    textAlign: "left",
    color: "white",
    opacity: 1,
    fontSize: 15,
    fontWeight: "600",
    marginLeft: 5,
    // paddingTop: 2,
  },
});

export default Card;
