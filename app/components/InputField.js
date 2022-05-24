import React from "react";
import { StyleSheet, TextInput } from "react-native";

function InputField(props) {
  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      secureTextEntry={props.secureTextEntry}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "75%",
    height: "10%",
    backgroundColor: "#f2f3f5",
    borderRadius: 10,
    fontSize: 20,
    marginTop: 12,
    paddingLeft: 8,
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
});

export default InputField;
