import React from 'react';
import {
    StyleSheet,
    Platform,
    View,
    Text,
    StatusBar,
    ImageBackground,
    TouchableOpacity

} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MenuText from "../components/MenuText";


function HomePage() {
    return (


        <View style={styles.container}>
            <ImageBackground
                resizeMode="contain"
                style={styles.background}
                source={require("../assets/WheelhouseOpener.png")}>
                <View>
                    <Text style={styles.text}>Check back for future updates!</Text>
                </View>
                <View style={styles.menuBar}>
                    <View style={styles.menu}>
                        <TouchableOpacity title="Watch Trailer" onPress={() => { console.log("Button Pressed") }}>
                            <MenuText>WATCH TRAILER</MenuText>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MenuText>GLADIATORS OF STEEL</MenuText>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MenuText>CLIPS</MenuText>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1,
        resizeMode: "contain",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    background: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
    menu: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    menuBar: {
        flex: 2,
        justifyContent: "flex-end"
    },

    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        paddingTop: 150,
        paddingLeft: 190,
        opacity: .8,
        // textShadowColor: "black",
        // textShadowOffset: { width: 10, height: -10 },
        // textShadowRadius: 7,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    }

});

export default HomePage
