import React, { useEffect } from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Button,
} from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";

import NavBar from "../components/NavBar";
import VideoPlayer from "../components/VideoPlayer";
import movies from "../components/movies.json";

function PlayVideoScreen({ route, navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const { videoUrl } = route.params;
  console.log(videoUrl);
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
      <ImageBackground style={styles.background}>
        <Image
          style={styles.gladiatorLogo}
          source={{
            uri: "https://amplify-wheelhouse-dev-82159-deployment.s3.amazonaws.com/WheelHouse+App+Assets/gladiatorsLogo.png",
          }}
        />
        {/* <VideoPlayer /> */}
        <View style={styles.playerWindow}>
          <Video
            ref={video}
            style={styles.video}
            source={{
              uri: videoUrl,
            }}
            posterSource={{
              uri: "https://amplify-wheelhouse-dev-82159-deployment.s3.amazonaws.com/WheelHouse+App+Assets/playClipPoster.png",
            }}
            // shouldPlay
            staysActiveInBackground={false}
            useNativeControls={true}
            usePoster
            resizeMode="contain"
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
          <View style={styles.buttons}>
            <Button
              title={status.isPlaying ? "Pause" : "Play"}
              onPress={() =>
                status.isPlaying
                  ? video.current.pauseAsync()
                  : video.current.playAsync()
              }
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    resizeMode: "contain",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "auto",
    // justifyContent: "center",
    alignItems: "center",
  },
  gladiatorLogo: {
    // flex: 1,
    width: 293,
    height: 180,
    // marginLeft: "8%",
    marginTop: "5%",
  },

  video: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  playerWindow: {
    marginTop: "7%",
  },
});

export default PlayVideoScreen;
