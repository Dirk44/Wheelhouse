import React from 'react';
import {
    StyleSheet,
    Platform,
    View,
    Text,
    StatusBar,
    ImageBackground,
    TouchableHighlight,
    Image
} from "react-native";

import MenuText from "../components/MenuText";
import Card from "../components/Card";


function GladiatorsLandingPage() {
    return (


        <View style={styles.container}>
            <ImageBackground
                resizeMode="contain"
                style={styles.background}
                source={require("../assets/GladiatorsBackground.jpg")}>
                <View style={styles.cardLayout}>
                    <Card
                        title="PLAY TRAILER"
                        image={require("../assets/trailerThumb.jpg")}
                    />
                    <Card
                        title="PLAY CLIP 1"
                        image={require("../assets/playClip1.jpg")}
                    />
                    <Card
                        title="WATCH FILM"
                        image={require("../assets/watchFilm.jpg")}
                    />
                </View>

                <View style={styles.menuBar}>
                    <View style={styles.menu}>
                        <MenuText>UPCOMING SHOWS</MenuText>
                        <MenuText>WAITLIST</MenuText>
                        <MenuText>GLADIATORS OF STEEL</MenuText>
                        <MenuText>STORE</MenuText>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        resizeMode: "contain",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
        // flexDirection: "row"
    },
    cardLayout: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        marginTop: "22%",

    },
    menu: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    menuBar: {
        flex: 1,
        justifyContent: "flex-end",
        paddingTop: 20
    },

});

export default GladiatorsLandingPage