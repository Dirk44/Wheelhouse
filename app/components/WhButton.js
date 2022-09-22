import React from "react";
import {
  Text,
  TouchableOpacity,
  Pressable,
  View,
} from "react-native";
import { whButtonStyles } from "../stylesheets/";

function WhButton(props) {
  return (
    <TouchableOpacity style={whButtonStyles.buttonStyle} onPress={props.onPress}>
      {/* <Pressable> */}
      <Text style={whButtonStyles.buttonText}>{props.title}</Text>
      {/* </Pressable> */}
    </TouchableOpacity>
  );
}



module.exports = WhButton;
