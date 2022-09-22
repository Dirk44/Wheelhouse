import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";

import { PlayVideoScreen } from "../screens";
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
    // <View>
    <View style={styles.container}>
      <View style={styles.thumbContainer}>
        <ImageBackground style={styles.image} source={{ uri: props.thumb }}>
          <TouchableHighlight
            // underlayColor="#0aeeb5"
            onPress={() => {
              console.warn("Play Button Pressed", props.playVideo);
              navigation.navigate("Video", {
                videoPoster: props.poster,
                videoTitle: props.title,
                videoUrl: props.playVideo,
              });
            }}
          >
            <Image
              style={{ height: 55, width: 55, opacity: 0.7 }}
              source={{ uri: props.playBtn }}
            />
          </TouchableHighlight>
        </ImageBackground>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    width: "100%",
    height: 140,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "25@s",
    // resizeMode: "cover",
    // backgroundColor: "white",
  },
  image: {
    width: 208,
    height: 115,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
    // marginTop: "20@s",
  },
  textContainer: {
    justifyContent: "center",
    width: "100%",
    height: "25@s",
    marginTop: "9@s",
    // backgroundColor: "red",
  },
  text: {
    textAlign: "center",
    color: "white",
    opacity: 0.9,
    fontSize: 17,
    // fontWeight: "800",
    // marginTop: "1@s",
    fontFamily: "Helvetica87HeavyCondensed",
    // letterSpacing: -1,
    // marginLeft: 5,
    // paddingTop: "2%",
    // backgroundColor: "red",
  },
  thumbContainer: {
    width: "80%",
    height: "auto",
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 2,
  },
});

export default Card;
