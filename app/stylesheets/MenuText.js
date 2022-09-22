import { StyleSheet } from "react-native";

const menuTextStyles = StyleSheet.create({
    text: {
      paddingBottom: 40,
      fontWeight: "bold",
      color: "white",
      opacity: 0.7,
      // ...Platform.select({
      //     ios: {
      //         fontSize: 16,
      //         fontFamily:
      //     },
      //     android: {
      //         fontSize: 16,
      //         fontFamily:
      //     },
      //     macos: {
      //         fontSize: 16,
      //         fontFamily:
      //     }
      // })
    },
  });

  module.exports = menuTextStyles;