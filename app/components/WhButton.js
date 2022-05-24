import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
  View,
} from "react-native";

function WhButton(props) {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
      <Pressable>
        <Text style={styles.buttonText} onPress={props.onPress}>
          {props.title}
        </Text>
      </Pressable>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#59f0a9",
    height: "10%",
    width: "35%",
    borderRadius: 10,
    marginTop: 30,
  },
  buttonText: {
    color: "black",
    fontSize: 20,
    fontFamily: "HelveticaRegular",
  },
});

export default WhButton;
