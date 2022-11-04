import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Hamburger } from "../components";
import { navBarStyles } from "../stylesheets";

const NavBar = () => {
  return (
    <View style={navBarStyles.header}>
      <TouchableOpacity>
        <Hamburger style={navBarStyles.hamburger} />
      </TouchableOpacity>
      <Text style={navBarStyles.navBar}>WheelHouse</Text>
    </View>
  );
};

export default NavBar;
