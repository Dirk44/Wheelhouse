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
    // <View>
    <View style={styles.container}>
      <View style={styles.thumbContainer}>
        <ImageBackground style={styles.image} source={{ uri: props.thumb }}>
          <TouchableHighlight
            // underlayColor="#0aeeb5"
            onPress={() => {
              // navigation.navigate("Video");
              console.warn("Play Button Pressed", props.playVideo);
              navigation.navigate("Video", {
                videoUrl: props.playVideo,
                videoPoster: props.poster,
                videoTitle: props.title,
              });
            }}
          >
            <Image
              style={{ height: 65, width: 65, opacity: 0.7 }}
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
    // alignItems: "center",
    // marginTop: "1@s",
    // resizeMode: "cover",
    // backgroundColor: "white",
  },
  image: {
    width: 165,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
    // marginTop: "20@s",
  },
  textContainer: {
    width: "100%",
    marginTop: "6@s",
    // backgroundColor: "red",
  },
  text: {
    textAlign: "left",
    color: "white",
    opacity: 1,
    fontSize: "11@s",
    fontWeight: "600",
    marginTop: "2@s",
    fontFamily: "HelveticaRegular",
    letterSpacing: 1,
    // marginLeft: 5,
    // paddingTop: 2,
    // backgroundColor: "red",
  },
  thumbContainer: {
    width: "65%",
    height: "auto",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 1,
  },
});

export default Card;
