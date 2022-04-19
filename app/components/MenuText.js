import React from 'react';
import { Text, StyleSheet, Platform, TouchableOpacity, TouchableHighlight } from 'react-native';

function MenuText({ children, style }) {

    return <Text style={styles.text}>{children}</Text>;



}
const styles = StyleSheet.create({
    text: {
        fontSize: 13,
        paddingBottom: 40,
        fontWeight: "bold",
        color: "white",
        opacity: .7,
        // textShadowColor: "black",
        // textShadowOffset: { width: 10, height: -10 },
        // textShadowRadius: 7,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    }

})

export default MenuText;