import React from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import NavBar from "../components/NavBar";

function Store() {
  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <ScrollView>
        <Text style={styles.text}>Store</Text>
      </ScrollView>
    </SafeAreaView>
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
