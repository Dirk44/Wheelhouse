import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Hamburger from "./Hamburger";
import { navBarStyles } from "../stylesheets/";

module.exports = function NavBar({ navigation }) {
  return (
    <View style={navBarStyles.header}>
      <TouchableOpacity>
        <Hamburger style={navBarStyles.hamburger} />
      </TouchableOpacity>
      <Text style={navBarStyles.navBar}>WheelHouse</Text>
    </View>
  );
}

