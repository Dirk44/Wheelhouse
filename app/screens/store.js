import React from "react";
import { Text, View, StyleSheet } from "react-native";
import NavBar from "../components/NavBar";

function Store() {
  return (
    <View style={styles.container}>
      <NavBar />
      <Text style={styles.text}>Store</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
  },
});

export default Store;
