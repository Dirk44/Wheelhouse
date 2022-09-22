import { StyleSheet } from "react-native";

const phoneInputFieldStyles = StyleSheet.create({
    input: {
      justifyContent: "center",
      width: "75%",
      height: "10%",
      backgroundColor: "#f2f3f5",
      borderRadius: 10,
      borderColor: "rgba(37,37,37,255)",
      // fontSize: 20,
      marginTop: 12,
      paddingLeft: 8,
      shadowColor: "black",
      shadowOffset: { width: 5, height: 5 },
      shadowOpacity: 0.9,
      shadowRadius: 10,
    },
  });

  module.exports = phoneInputFieldStyles;