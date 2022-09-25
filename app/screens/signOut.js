import React, { useState } from "react";
import {
  StyleSheet,
  Platform,
  Text,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
import { InputField, WhButton } from "../components/";

import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { signOutStyles } from '../stylesheets';

function SignOut({ props }) {
  const navigation = useNavigation();

  const onLogoutPressed = () => {
    console.warn("onLogoutPressed");
  };

  const onSignInPressed = () => {
    navigation.navigate("ForgotPassword");
  };

  return (
    <SafeAreaView style={signOutStyles.container}>
      <ImageBackground
        style={signOutStyles.background}
        source={require("../assets/landing-page-background.jpg")}
      >
        <Image
          source={require("../assets/wh-logo.png")}
          style={signOutStyles.whLogo}
        />
        <Text style={signOutStyles.loginText}>Logout</Text>
        <View style={signOutStyles.inputs}>
          <WhButton title="Logout" onPress={onLogoutPressed} />
          {/* <View style={signOutStyles.signUpContainer}> */}

          <Text style={signOutStyles.signupText}>Sign In</Text>
          <Button title="Click Here" onPress={onSignInPressed} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

module.exports = SignOut;
