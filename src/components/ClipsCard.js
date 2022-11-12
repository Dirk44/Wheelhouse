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

// import { PlayVideoScreen } from "../screens";
import VideoPlayer from "./VideoPlayer";
import MenuText from "./MenuText";
import movies from "../components/movies.json";
import { Video } from "expo-av";
import { clipsCardStyles } from "../stylesheets";
import { ROUTES } from "../constants";

function ClipsCard(props) {
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

  return (
    // <View>
    <View style={clipsCardStyles.container}>
      <Pressable
        underlayColor="none"
        onPressIn={() => {
          borderColorChange(setIndex(1));
          setTimeout(() => {
            props.title === "PLAY TRAILER"
              ? navigation.navigate(ROUTES.TRAILER_VIDEO)
              : navigation.navigate(ROUTES.CLIPS_VIDEO, {
                  videoPoster: props.poster,
                  videoTitle: props.title,
                  videoUrl: props.playVideo,
                });
          }, 200);
        }}
      >
        <View
          style={[
            clipsCardStyles.thumbContainer,
            { borderColor: index === 1 ? "#0aeeb5" : "white" },
          ]}
        >
          <ImageBackground
            style={clipsCardStyles.image}
            source={{ uri: props.thumb }}
          >
            <Image
              style={[
                clipsCardStyles.playBtn,
                { tintColor: index === 1 ? "#0aeeb5" : "white" },
              ]}
              source={{ uri: props.playBtn }}
            />
          </ImageBackground>
        </View>
      </Pressable>
      <View style={clipsCardStyles.textContainer}>
        <Text
          style={[
            clipsCardStyles.text,
            { color: index === 1 ? "#0aeeb5" : "white" },
          ]}
        >
          {props.title}
        </Text>
      </View>
    </View>
  );
}

export default ClipsCard;
