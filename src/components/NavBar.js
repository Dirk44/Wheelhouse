import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { navBarStyles } from "../stylesheets";

const NavBar = () => {
  const navigation = useNavigation();
  const openMenu = () => navigation.openDrawer();
  return (
    <View style={navBarStyles.header}>
      <TouchableOpacity>
        <Entypo
          name="menu"
          color="#b8b8b8"
          size={50}
          style={navBarStyles.hamburger}
          onPress={openMenu}
        />
      </TouchableOpacity>
      <Text style={navBarStyles.navBar}>WheelHouse</Text>
    </View>
  );
};

export default NavBar;
