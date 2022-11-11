import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

import { clipsStyles } from "../../stylesheets";
import { ClipsCard, MenuText, NavBar } from "../../components";
import movies from "../../components/movies.json";
import { ROUTES } from "../../constants";

import {
  NavigationContainerRefContext,
  useNavigation,
} from "@react-navigation/native";

function Clips() {
  const navigation = useNavigation();
  // const [clickState, setClickState] = useState({
  //   style: (borderColor = "#07fbb9"),
  // });
  return (
    <SafeAreaView style={clipsStyles.container}>
      <NavBar />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground
          style={clipsStyles.background}
          source={require("../../assets/whLandingBg.jpg")}
        >
          <View style={clipsStyles.gladLogoContainer}>
            <Image
              style={clipsStyles.gladiatorsLogo}
              source={require("../../assets/gladiatorsLogoSimple.png")}
            />
          </View>
          {/* <View style={clipsStyles.clipsContainer}> */}
          <View style={clipsStyles.list}>
            {movies.clips.map((movie) => {
              return (
                <View key={movie.id}>
                  <ClipsCard
                    key={movie.id}
                    title={movie.title}
                    thumb={movie.thumb}
                    poster={movie.poster}
                    playBtn={movie.playBtn}
                    playVideo={movie.playVideo}
                  />
                </View>
              );
            })}
          </View>
          <View style={clipsStyles.buttonContainer}>
            <TouchableOpacity
              style={clipsStyles.buttonStyle}
              onPress={() => navigation.navigate(ROUTES.RENTAL)}
            >
              <Text style={clipsStyles.buttonText}>PRE-ORDER SERIES</Text>
            </TouchableOpacity>
          </View>
          <Text style={clipsStyles.preOrderText}>
            PRE-ORDER SERIES AND SAVE $5
          </Text>
          {/* </View> */}

          {/* <View
            style={{
              flex: 0.7,
              width: "100%",
              alignItems: "center",
            }}
          >
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#07fbb9"
              onPress={() =>
                // setClickState({style})
                navigation.navigate("Video", {
                  videoUrl,
                })
              }
              style={{
                width: "65%",
                alignItems: "center",
              }}
            >
              <Image
                style={clipsStyles.thumb}
                source={require("../assets/trailerThumb.jpg")}
              />
            </TouchableHighlight>
            <Text style={clipsStyles.thumbText}>PLAY TRAILER</Text>
            <TouchableHighlight style={{ width: "65%", alignItems: "center" }}>
              <Image
                style={clipsStyles.thumb}
                source={require("../assets/playClipThumb.png")}
              />
            </TouchableHighlight>
            <Text style={clipsStyles.thumbText}>PLAY CLIP 1</Text>
            <TouchableHighlight style={{ width: "65%", alignItems: "center" }}>
              <Image
                style={clipsStyles.thumb}
                source={require("../assets/watchFilmThumb.png")}
              />
            </TouchableHighlight>
          </View>
          <Text style={clipsStyles.thumbText}>WATCH SERIES</Text> */}

          <Image
            style={clipsStyles.whLogo}
            source={require("../../assets/wh-logo.png")}
          />
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Clips;
