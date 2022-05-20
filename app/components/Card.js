import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import MenuText from "./MenuText";

function Card(props) {
  console.log(props);
  return (
    // <TouchableOpacity>
    //
    // </TouchableOpacity>
    // <View style={styles.container}>
    <View
    // style={styles.container}
    >
      <ImageBackground style={styles.image} source={{ uri: props.poster }}>
        <TouchableOpacity>
          <Image
            style={{ height: 65, width: 65, opacity: 0.7 }}
            source={{ uri: props.playBtn }}
          />
        </TouchableOpacity>
      </ImageBackground>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "70%",
    // height: 170,
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: 133,
    height: 180,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 5,
  },
  text: {
    textAlign: "left",
    color: "white",
    opacity: 1,
    fontSize: 15,
    fontWeight: "600",
    marginLeft: 5,
    // paddingTop: 2,
  },
});

export default Card;
