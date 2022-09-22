import { React, useState } from "react";
import { View, Button } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import movies from "../components/movies.json";
import { videoPlayerStyles } from "../stylesheets/";

function VideoPlayer() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={videoPlayerStyles.playerWindow}>
      <Video
        ref={video}
        style={videoPlayerStyles.video}
        source={{
          uri: movies.playVideo,
        }}
        posterSource={{
          uri: "https://amplify-wheelhouse-dev-82159-deployment.s3.amazonaws.com/WheelHouse+App+Assets/playClipPoster.png",
        }}
        shouldPlay
        useNativeControls
        usePoster
        resizeMode="contain"
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={videoPlayerStyles.buttons}>
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
  );
}


module.exports = VideoPlayer;
