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

import { ScaledSheet } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";

import { NavBar, VideoPlayer, movies } from "../components/";
// import movies from "../components/movies.json";

function PlayVideoScreen({ route, navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const { videoUrl, videoPoster, videoTitle } = route.params;
  console.log(videoTitle);
  // useEffect(() => {
  //   return () => {
  //     console.log("component unmounted");
  //     // put actions when screen unmounts
  // setStatus((status) => ({ ...status, isPlaying: false }));
  //   };
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground
          style={styles.background}
          source={require("../assets/videoPlayerBg.jpg")}
        >
          <Image
            style={styles.gladiatorLogo}
            source={require("../assets/gladiatorsLogoSimple.png")}
          />

          <View style={{ alignItems: "center", marginTop: -13 }}>
            <Text style={styles.rentText}>YOUR RENTAL HAS BEEN ACTIVATED!</Text>
            <Text style={styles.hoursLeft}>
              You now have <Text style={{ color: "#0aeeb5" }}>48 hours</Text>
              {"\n"} to finish this episode.
            </Text>
          </View>

          {/* <VideoPlayer /> */}
          <View style={styles.playerWindow}>
            <Video
              ref={video}
              style={styles.video}
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
            {/* <View style={styles.buttons}>
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
            <Text style={styles.titleText}>{videoTitle}</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() =>
                navigation.navigate("Video", {
                  videoUrl: props.playVideo,
                })
              }
            >
              <Text style={styles.buttonText}>PLAY UNCUT VERSION</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.buttonStyleBlack}
              onPress={() => navigation.navigate("Clips")}
            >
              <Text style={styles.buttonText2}>
                PLAY FAMILY FRIENDLY VERSION
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "50%", alignItems: "center" }}>
            <Image
              style={styles.whLogo}
              source={require("../assets/wh-logo.png")}
            ></Image>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    resizeMode: "contain",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "700@s",
    marginTop: -20,
    // justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0aeeb5",
    height: "40@s",
    width: "280@s",
    borderRadius: 3,
    marginTop: "35@s",
  },
  buttonStyleBlack: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    height: "40@s",
    width: "280@s",
    borderRadius: 3,
    marginTop: "10@s",
  },
  buttonText: {
    color: "black",
    fontSize: 15,
    fontWeight: "500",
    letterSpacing: 2,
    // fontFamily: "HelveticaRegular",
  },
  buttonText2: {
    color: "#0aeeb5",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 1,
    // fontFamily: "HelveticaRegular",
  },
  gladiatorLogo: {
    width: "170@s",
    height: "146@s",
    marginTop: "60@s",
  },
  hoursLeft: {
    color: "white",
    fontFamily: "HelveticaRegular",
    letterSpacing: 1,
    fontSize: 16,
    marginTop: 25,
  },
  playerWindow: {
    marginTop: "7%",
    width: "75%",
    height: "auto",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 2,
  },
  rentText: {
    color: "#0aeeb5",
    fontFamily: "Helvetica87Bold",
    fontSize: 14,
    fontWeight: "900",
  },

  titleText: {
    color: "white",
    fontFamily: "HelveticaRegular",
    fontSize: 18,
    letterSpacing: 1,
    marginTop: "8@s",
  },

  video: {
    width: "100%",
    aspectRatio: 16 / 9,
  },

  whLogo: {
    width: "75%",
    height: "70@s",
    marginTop: "30@s",
  },
});

export default PlayVideoScreen;
