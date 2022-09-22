import React from "react";
import {
  Text,
  Platform,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { menuTextStyles } from "../stylesheets/";

function MenuText({ children, style }) {
  return <Text style={menuTextStyles.text}>{children}</Text>;
}


module.exports = MenuText;
