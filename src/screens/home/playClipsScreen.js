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

import { NavBar } from "../../components";
// import movies from "../components/movies.json";
import { playClipsScreenStyles } from "../../stylesheets";

function PlayClipsScreen({ route, navigation }) {
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
    <SafeAreaView style={playClipsScreenStyles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground style={playClipsScreenStyles.background} source={require("../../assets/videoPlayerBg.jpg")}>
          <Image
            style={playClipsScreenStyles.gladiatorLogo}
            source={require("../../assets/gladiatorsLogoSimple.png")}
          />

          {/* <View style={{ alignItems: "center", marginTop: -13 }}>
            <Text style={playClipsScreenStyles.rentText}>Cumming!!!</Text>
            <Text style={playClipsScreenStyles.hoursLeft}>
              You now have <Text style={{ color: "#0aeeb5" }}>48 hours</Text>
              {"\n"} to finish this episode.
            </Text>
          </View> */}

          {/* <VideoPlayer /> */}
          <View style={playClipsScreenStyles.playerWindow}>
            <Video
              ref={video}
              style={playClipsScreenStyles.video}
              source={{
                uri: videoUrl,
              }}
              posterSource={{
                uri: videoPoster,
              }}
              isMuted={false}
              shouldPlay
              staysActiveInBackground={false}
              useNativeControls
              usePoster
              resizeMode="contain"
              // onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />
            {/* <View style={playClipsScreenStyles.buttons}>
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
            <Text style={playClipsScreenStyles.titleText}>{videoTitle}</Text>
          </View>
          {/* <View>
            <TouchableOpacity
              style={playClipsScreenStyles.buttonStyle}
              onPress={() =>
                navigation.navigate("Video", {
                  videoUrl: props.playVideo,
                })
              }
            >
              <Text style={playClipsScreenStyles.buttonText}>
                PLAY UNCUT VERSION
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={playClipsScreenStyles.buttonStyleBlack}
              onPress={() => navigation.navigate("Clips")}
            >
              <Text style={playClipsScreenStyles.buttonText2}>
                PLAY FAMILY FRIENDLY VERSION
              </Text>
            </TouchableOpacity>
          </View> */}
          <View style={{ width: "50%", alignItems: "center" }}>
            <Image style={playClipsScreenStyles.whLogo} source={require("../../assets/wh-logo.png")}></Image>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

export default PlayClipsScreen;
