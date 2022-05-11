import React from "react";
import {
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

function MenuText({ children, style }) {
  return <Text style={styles.text}>{children}</Text>;
}
const styles = StyleSheet.create({
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

export default MenuText;
