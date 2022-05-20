import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function WhButton(props) {
  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <View>
        <Text style={styles.buttonText}> {props.title} </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#59f0a9",
    height: "10%",
    width: "35%",
    borderRadius: 10,
    marginTop: 30,
  },
  buttonText: {
    color: "black",
    fontSize: 20,
    fontFamily: "HelveticaRegular",
  },
});

export default WhButton;
