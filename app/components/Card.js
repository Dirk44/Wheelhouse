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
import { ScaledSheet } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";

import PlayVideoScreen from "../screens/playVideoScreen";
import VideoPlayer from "./VideoPlayer";
import MenuText from "./MenuText";
import movies from "../components/movies.json";
import { Video } from "expo-av";

function Card(props) {
  // const [videos, setVideos] = useState([movies]);
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const navigation = useNavigation();

  return (
    <View>
      <ImageBackground style={styles.image} source={{ uri: props.poster }}>
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate("Video");
            console.warn("Play Button Pressed", props.playVideo);
            navigation.navigate("Video", {
              videoUrl: props.playVideo,
            });
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

const styles = ScaledSheet.create({
  container: {
    width: "70%",
    // height: 170,
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: "133@s",
    height: "180@s",
    marginRight: "15@s",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 5,
  },
  text: {
    textAlign: "left",
    color: "white",
    opacity: 1,
    fontSize: "15@s",
    fontWeight: "600",
    marginLeft: 5,
    // paddingTop: 2,
  },
});

export default Card;
