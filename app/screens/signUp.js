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
  useWindowDimensions,
  Alert,
} from "react-native";
import { Auth } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

import InputField from "../components/InputField";
import WhButton from "../components/WhButton";
import PhoneInputField from "../components/PhoneInputField";

function Signup() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  const navigation = useNavigation();

  const { control, handleSubmit, watch } = useForm();

  const pWord = watch("password");

  const onSignUpPressed = async (data) => {
    const { username, email, password } = data;
    console.log(data);
    try {
      const response = await Auth.signUp({
        username,
        password,
        attributes: { email },
      });
      console.log(response);
    } catch (e) {
      Alert.alert("Oopsie", e.message);
      console.log(e);
    }

    navigation.navigate("ConfirmAccount", { username });
  };

  const onBackToLoginPressed = () => {
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
        <Text style={styles.signupText}>Signup</Text>
        <View style={styles.inputs}>
          <InputField
            name="username"
            placeholder="Username"
            control={control}
            rules={{ required: "Username is required" }}
          />
          <InputField
            name="email"
            placeholder="Email"
            control={control}
            rules={{ required: "Email is required" }}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <InputField
            name="password"
            placeholder="Password"
            control={control}
            rules={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password minimum length is 8 characters",
              },
            }}
            secureTextEntry={true}
          />
          <InputField
            name="confirm password"
            placeholder="Confirm Password"
            control={control}
            rules={{
              validate: (value) => value === pWord || "Passwords do not match",
              required: "Please confirm password",
              minLength: {
                value: 8,
                message: "Password minimum length is 8 characters",
              },
            }}
            secureTextEntry={true}
          />
          {/* <PhoneInputField
            name="phone_number"
            placeholder="Phone Number"
            control={control}
            keyboardType="decimal-pad"
            defaultCode="US"
            rules={{
              required: "Please enter Phone Number",
              minLength: {
                value: 12,
                message: "Phone Number must be at least 10 characters",
              },
            }}
          /> */}

          <WhButton title="Signup" onPress={handleSubmit(onSignUpPressed)} />
          {/* copy props from Whbutton to other buttons */}

          {/* <View style={styles.signUpContainer}> */}

          <Text style={styles.loginText}>Back to Login</Text>
          <Button title="Click Here" onPress={onBackToLoginPressed} />
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
  input: {
    justifyContent: "center",
    width: "75%",
    height: "10%",
    backgroundColor: "#f2f3f5",
    borderRadius: 10,
    borderColor: "rgba(37,37,37,255)",
    fontSize: 20,
    marginTop: 12,
    paddingLeft: 8,
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
  signupText: {
    color: "white",
    fontSize: 30,
    fontFamily: "HelveticaRegular",
    opacity: 0.9,
    paddingTop: "5%",
    marginTop: "18%",
    // shadowColor: "black",
    // shadowOffset: { width: 5, height: 5 },
    // shadowOpacity: 1,
    // shadowRadius: 10,
  },
  loginText: {
    color: "white",
    fontSize: 18,
    fontFamily: "HelveticaRegular",
    marginTop: "10%",
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

export default Signup;
