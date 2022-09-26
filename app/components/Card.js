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
  TouchableWithoutFeedback,
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
  const [index, setIndex] = useState(0);
  const borderColorChange = () => {
    setTimeout(() => {
      setIndex(0);
    }, 100);
  };
  index === 0;
  return (
    // <View>
    <View style={cardStyles.container}>
      <Pressable
        underlayColor="none"
        onPressIn={() => {
          borderColorChange(setIndex(1));
          navigation.navigate("", {
            videoPoster: props.poster,
            videoTitle: props.title,
            videoUrl: props.playVideo,
          });
        }}
      >
        <View
          style={[
            cardStyles.thumbContainer,
            { borderColor: index === 1 ? "#0aeeb5" : "white" },
          ]}
        >
          <ImageBackground
            style={cardStyles.image}
            source={{ uri: props.thumb }}
          >
            <Image
              style={{
                height: 45,
                width: 45,
                tintColor: index === 1 ? "#0aeeb5" : "white",
              }}
              source={{ uri: props.playBtn }}
            />
          </ImageBackground>
        </View>
      </Pressable>
      <View style={cardStyles.textContainer}>
        <Text
          style={[
            cardStyles.text,
            { color: index === 1 ? "#0aeeb5" : "white" },
          ]}
        >
          {props.title}
        </Text>
      </View>
    </View>
  );
}

module.exports = Card;
