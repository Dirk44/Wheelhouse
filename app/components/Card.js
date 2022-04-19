import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import MenuText from './MenuText';

function Card({ title, image }) {
    return (
        <TouchableOpacity>
            <Image style={styles.image} source={image} />
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    image: {
        borderColor: "#fff",
        borderWidth: 3,
        width: "100%",
        height: 80,
        resizeMode: "contain"
        // marginLeft: "19%",
        // marginRight: "20%"
    },
    text: {
        textAlign: "center",
        color: "white",
        opacity: 1,
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
        paddingTop: 20
    },
})

export default Card;