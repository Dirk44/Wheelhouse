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

  return (
    // <View>
    <View style={styles.container}>
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
            styles.thumbContainer,
            { borderColor: index === 1 ? "#0aeeb5" : "white" },
          ]}
        >
          <ImageBackground style={styles.image} source={{ uri: props.thumb }}>
            <Image
              style={{
                height: 55,
                width: 55,
                opacity: 0.7,
                tintColor: index === 1 ? "#0aeeb5" : "white",
              }}
              source={{ uri: props.playBtn }}
            />
          </ImageBackground>
        </View>
      </Pressable>
      <View style={styles.textContainer}>
        <Text
          style={[styles.text, { color: index === 1 ? "#0aeeb5" : "white" }]}
        >
          {props.title}
        </Text>
      </View>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    width: "100%",
    height: "125@s",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "25@s",
    // resizeMode: "cover",
    // backgroundColor: "white",
  },
  image: {
    width: "185@s",
    height: "101@s",
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
    // borderColor: "white",
    borderRadius: 2,
  },
});

module.exports = Card;
