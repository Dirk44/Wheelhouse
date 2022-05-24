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

function ResetPassword({ props }) {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const onSubmitNewPassword = () => {
    console.warn("onVerifyPressed");
  };

  const onBackToSigninPressed = () => {
    console.warn("onBackToSigninPressed");
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
        <Text style={styles.loginText}>Verify Account</Text>
        <View style={styles.inputs}>
          <InputField
            placeholder="Input Verification code"
            value={code}
            setValue={setCode}
          />
          <InputField
            placeholder="Enter your new Password"
            value={newPassword}
            setValue={setNewPassword}
            secureTextEntry={true}
          />

          <WhButton title="Submit" onPress={onSubmitNewPassword} />

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

export default ResetPassword;
