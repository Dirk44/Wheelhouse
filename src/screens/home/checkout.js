import Checkbox from "expo-checkbox";
import React, { useState, useEffect } from "react";
import { ImageBackground, SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { useCookies } from "react-cookie";
import { WebView } from "react-native-webview";
import { NavBar } from "../../components";
import { googleSignInStyles } from "../../stylesheets";

const Checkout = (props) => {
  // console.log("props", props.route.params.src);
  return (
    <SafeAreaView style={googleSignInStyles.container}>
      <NavBar />
      {/* <ScrollView> */}
      <ImageBackground
        style={googleSignInStyles.background}
        source={require("../../assets/googleSignIn/googleSignInBg.jpg")}
      >
        <View
          style={{
            width: "100%",
            height: 900,
            flex: 1,
            marginTop: 25,
          }}
        >
          <iframe
            style={{
              position: "relative",
              height: "100%",
            }}
            src={props.route.params.src}
          ></iframe>
        </View>
      </ImageBackground>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
  // }
};

export default Checkout;
