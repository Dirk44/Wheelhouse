import React from 'react';
import { Text, StyleSheet, Platform, TouchableOpacity, TouchableHighlight } from 'react-native';

function MenuText({ children }) {

    return <Text style={styles.text}>{children}</Text>;



}
const styles = StyleSheet.create({
    text: {
        fontSize: 17,
        paddingBottom: 70,
        fontWeight: "bold",
        color: "white",
        opacity: .5,
        textShadowColor: "black",
        textShadowOffset: { width: 10, height: -10 },
        textShadowRadius: 7,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    }

})

export default MenuText;