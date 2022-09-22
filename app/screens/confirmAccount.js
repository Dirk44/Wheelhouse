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
  Alert,
} from "react-native";
import { InputField, WhButton } from "../components/";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { useRoute } from "@react-navigation/native";
import { Auth } from "aws-amplify";

function ConfirmAccount({ props }) {
  const route = useRoute();
  // const [code, setCode] = useState("");
  const navigation = useNavigation();

  const { control, handleSubmit, watch } = useForm({
    defaultValues: { username: route?.params?.username },
  });

  const username = watch("username");

  const onResendCodePressed = async () => {
    try {
      await Auth.resendSignUp(username);
      Alert.alert("Verification code was sent to your email");
    } catch (e) {
      Alert.alert("Oppsie", e.message);
    }
  };

  const onVerifyPressed = async (data) => {
    try {
      const response = await Auth.confirmSignUp(
        data.username,
        data.verificationCode
      );
      Alert.alert("Your account has been verified");
      console.log(response);
    } catch (e) {
      Alert.alert("Oopsie", e.message);
    }
    navigation.navigate("Home");
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
        <Text style={styles.loginText}>Verify Account</Text>
        <View style={styles.inputs}>
          <InputField
            name="username"
            placeholder="Input Verification code"
            control={control}
            rules={{ required: "Must enter Verification code" }}
            keyboardType="decimal-pad"
          />
          <InputField
            name="verificationCode"
            placeholder="Input Verification code"
            control={control}
            rules={{ required: "Must enter Verification code" }}
            keyboardType="decimal-pad"
          />

          <WhButton title="Verify" onPress={handleSubmit(onVerifyPressed)} />

          <Text style={styles.signupText}>Resend Code</Text>
          <Button title="Click Here" onPress={onResendCodePressed} />

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
    width: "80%",
    height: 130,
    resizeMode: "contain",
    overflow: "visible",
    marginTop: "12%",
    shadowColor: "black",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
  },
});

export default ConfirmAccount;
