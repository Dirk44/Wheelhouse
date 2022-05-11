import React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import NavBar from "../components/NavBar";

function UpcomingShows() {
  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <Text style={styles.text}>Upcoming Shows</Text>
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

export default UpcomingShows;
