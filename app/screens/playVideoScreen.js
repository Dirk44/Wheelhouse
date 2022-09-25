import React, { useEffect } from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Button,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import { useNavigation } from "@react-navigation/native";

import { NavBar, VideoPlayer, movies } from "../components/";
// import movies from "../components/movies.json";
import { playVideoScreenStyles } from '../stylesheets';

function PlayVideoScreen({ route, navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const { videoUrl, videoPoster, videoTitle } = route.params;
  console.log(videoTitle);
  // useEffect(() => {
  //   return () => {
  //     console.log("component unmounted");
  //     // put actions when screen unmounts
  //     setStatus((status) => ({ ...status, isPlaying: false }));
  //   };
  // }, []);

  return (
    <SafeAreaView style={playVideoScreenStyles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground
          style={playVideoScreenStyles.background}
          source={require("../assets/videoPlayerBg.jpg")}
        >
          <Image
            style={playVideoScreenStyles.gladiatorLogo}
            source={require("../assets/gladiatorsLogoSimple.png")}
          />

          <View style={{ alignItems: "center", marginTop: -13 }}>
            <Text style={playVideoScreenStyles.rentText}>YOUR RENTAL HAS BEEN ACTIVATED!</Text>
            <Text style={playVideoScreenStyles.hoursLeft}>
              You now have <Text style={{ color: "#0aeeb5" }}>48 hours</Text>
              {"\n"} to finish this episode.
            </Text>
          </View>

          {/* <VideoPlayer /> */}
          <View style={playVideoScreenStyles.playerWindow}>
            <Video
              ref={video}
              style={playVideoScreenStyles.video}
              source={{
                uri: videoUrl,
              }}
              posterSource={{
                uri: videoPoster,
              }}
              shouldPlay
              staysActiveInBackground={false}
              useNativeControls={true}
              usePoster
              resizeMode="contain"
              onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />
            {/* <View style={playVideoScreenStyles.buttons}>
              <Button
                title={status.isPlaying ? "Pause" : "Play"}
                onPress={() =>
                  status.isPlaying
                    ? video.current.pauseAsync()
                    : video.current.playAsync()
                }
              />
            </View> */}
          </View>
          <View>
            <Text style={playVideoScreenStyles.titleText}>{videoTitle}</Text>
          </View>
          <View>
            <TouchableOpacity
              style={playVideoScreenStyles.buttonStyle}
              onPress={() =>
                navigation.navigate("Video", {
                  videoUrl: props.playVideo,
                })
              }
            >
              <Text style={playVideoScreenStyles.buttonText}>PLAY UNCUT VERSION</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={playVideoScreenStyles.buttonStyleBlack}
              onPress={() => navigation.navigate("Clips")}
            >
              <Text style={playVideoScreenStyles.buttonText2}>
                PLAY FAMILY FRIENDLY VERSION
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "50%", alignItems: "center" }}>
            <Image
              style={playVideoScreenStyles.whLogo}
              source={require("../assets/wh-logo.png")}
            ></Image>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

module.exports = PlayVideoScreen;
