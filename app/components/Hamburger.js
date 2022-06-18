import React from "react";
import { StyleSheet } from "react-native";

import { Entypo } from "@expo/vector-icons";

function Hamburger() {
  return (
    <Entypo name="menu" color="#b8b8b8" size={50} style={styles.menuIcon} />
  );
}

const styles = StyleSheet.create({
  menuIcon: {
    zIndex: 9,
    left: 20,
  },
});

export default Hamburger;
