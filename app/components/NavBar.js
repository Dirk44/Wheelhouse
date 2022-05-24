import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Hamburger from "./Hamburger";

export default function NavBar() {
  return (
    <View style={styles.header}>
      <View>
        <Hamburger style={styles.hamburger} />
      </View>
      <Text style={styles.navBar}>WheelHouse</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  hamburger: {
    marginLeft: "6%",
    opacity: 0.7,
    justifyContent: "flex-start",
  },
  header: {
    // flex: 1,
    flexDirection: "row",
    width: "100%",
    height: 60,
    backgroundColor: "rgba(37,37,37,255)",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navBar: {
    fontFamily: "Helvetica87Bold",
    color: "white",
    fontSize: 16,
    fontWeight: "900",
    marginRight: "3%",
    opacity: 0.8,
    top: 0,
  },
});
