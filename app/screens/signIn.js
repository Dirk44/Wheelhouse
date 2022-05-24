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
import InputField from "../components/InputField";
import WhButton from "../components/WhButton";

import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

function SignIn({ props }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const onLoginPressed = () => {
    console.warn("onLoginPressed");

    navigation.navigate("Home");
  };

  const onForgotPasswordPressed = () => {
    console.warn("onForgotPasswordPressed");
  };

  const onSignUpPressed = () => {
    console.warn("onSignUpPressed");
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
        <Text style={styles.loginText}>Login</Text>
        <View style={styles.inputs}>
          <InputField placeholder="Email" value={email} setValue={setEmail} />
          <InputField
            placeholder="Password"
            value={password}
            setValue={setPassword}
          />
          <WhButton title="Login" onPress={onLoginPressed} />
          {/* <View style={styles.signUpContainer}> */}

          <Text style={styles.signupText}>Forgot Password?</Text>
          <Button title="Click Here" onPress={onForgotPasswordPressed} />

          <Text style={styles.signupText}>Haven't signed up?</Text>
          <Button title="Sign up here" onPress={onSignUpPressed} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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
    width: "80%",
    height: 130,
    resizeMode: "contain",
    // position: "absolute",
    marginTop: "12%",
  },
});

export default SignIn;
