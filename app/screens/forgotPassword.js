import { useNavigation } from "@react-navigation/native";
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

import { useForm, Controller } from "react-hook-form";

import { InputField, WhButton } from "../components/";

function ForgotPassword({ props }) {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSendCodePressed = () => {
    navigation.navigate("ResetPassword");
  };

  const onBackToSigninPressed = () => {
    navigation.navigate("SignIn");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../assets/landing-page-background.jpg")}
      >
        <Image
          source={require("../assets/wh-logo.png")}
          style={styles.whLogo}
        />
        <Text style={styles.loginText}>Forgot Password</Text>
        <View style={styles.inputs}>
          <InputField
            name="Email"
            placeholder="EMAIL "
            control={control}
            rules={{ required: "Email is required" }}
            autoCapitalize="none"
          />

          <WhButton
            title="Send Code"
            onPress={handleSubmit(onSendCodePressed)}
          />

          <Text style={styles.signupText}>Back to Sign In</Text>
          <Button title="Sign in here" onPress={onBackToSigninPressed} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "auto",
    alignItems: "center",
  },
  inputs: {
    width: "100%",
    height: "50%",
    alignItems: "center",
  },
  loginText: {
    color: "white",
    fontSize: 30,
    fontFamily: "HelveticaRegular",
    opacity: 0.9,
    paddingTop: "5%",
    marginTop: "18%",
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  signUpContainer: {},
  signupText: {
    color: "white",
    fontSize: 18,
    fontFamily: "HelveticaRegular",
    marginTop: "15%",
    opacity: 0.9,

    // justifyContent: "center",
    // alignItems: "center",
  },
  whLogo: {
    flex: 1,
    width: "80%",
    height: "auto",
    marginRight: "6%",
    // resizeMode: "contain",
    // marginTop: "6%",
    // overflow: "visible",
    // shadowColor: "black",
    // shadowOffset: { width: 10, height: 10 },
    // shadowOpacity: 0.8,
    // shadowRadius: 15,
  },
});

module.exports = ForgotPassword;
