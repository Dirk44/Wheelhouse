import React from "react";
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

function Login({ props }) {
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
          <InputField placeholder="Email" />
          <InputField placeholder="Password" />
          <WhButton title="Login" />
          {/* <View style={styles.signUpContainer}> */}

          <Text style={styles.signupText}>Forgot Password?</Text>
          <Button title="Click Here" />

          <Text style={styles.signupText}>Haven't signed up?</Text>
          <Button title="Sign up here" />
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
    paddingTop: "5%",
    marginTop: "18%",
  },
  signUpContainer: {},
  signupText: {
    color: "white",
    fontSize: 18,
    fontFamily: "HelveticaRegular",
    marginTop: "15%",
    // justifyContent: "center",
    // alignItems: "center",
  },
  whLogo: {
    width: "80%",
    height: 130,
    resizeMode: "contain",
    // position: "absolute",
    marginTop: "10%",
  },
});

export default Login;
