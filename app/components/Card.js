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

import { useNavigation } from "@react-navigation/native";

// import { PlayVideoScreen } from "../screens";
import VideoPlayer from "./VideoPlayer";
import MenuText from "./MenuText";
import movies from "../components/movies.json";
import { Video } from "expo-av";
import { cardStyles } from "../stylesheets";

function Card(props) {
  // const [videos, setVideos] = useState([movies]);
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const navigation = useNavigation();

  return (
    // <View>
    <View style={cardStyles.container}>
      <View style={cardStyles.thumbContainer}>
        <ImageBackground style={cardStyles.image} source={{ uri: props.thumb }}>
          <TouchableHighlight
            // underlayColor="#0aeeb5"
            onPress={() => {
              // navigation.navigate("Video");
              console.warn("Play Button Pressed", props.playVideo);
              navigation.navigate("Video", {
                videoPoster: props.poster,
                videoTitle: props.title,
                videoUrl: props.playVideo,
              });
            }}
          >
            <Image
              style={{ height: 45, width: 45, opacity: 0.7 }}
              source={{ uri: props.playBtn }}
            />
          </TouchableHighlight>
        </ImageBackground>
      </View>
      <View style={cardStyles.textContainer}>
        <Text style={cardStyles.text}>{props.title}</Text>
      </View>
    </View>
  );
}



module.exports = Card;
