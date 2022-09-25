import React from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  Alert,
  TextInput,
} from "react-native";

import { InputField, NavBar, WhButton } from "../components/";
import { waitListStyles } from '../stylesheets';

function WaitList() {
  return (
    <SafeAreaView style={waitListStyles.container}>
      <NavBar />
      <ImageBackground
        style={waitListStyles.background}
        source={require("../assets/landing-page-background.jpg")}
      >
        <Image
          source={require("../assets/wh-logo.png")}
          style={waitListStyles.whLogo}
        />

        <Text style={waitListStyles.text}>Join Waitlist</Text>
        <View style={{ width: "100%", alignItems: "center" }}>
          <TextInput
            style={waitListStyles.input}
            email=" Email"
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <WhButton title="Join" />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

module.exports = WaitList;
