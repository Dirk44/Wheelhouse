import React from "react";
import { Text, View, StyleSheet } from "react-native";

function WaitList() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Waitlist</Text>
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

export default WaitList;
