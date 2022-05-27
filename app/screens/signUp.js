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

function Signup({ props }) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const pWord = watch("Password");

  const onSignUpPressed = async (data) => {
    const { email, password, phone_number } = data;
    try {
      const response = await Auth.signup({
        email,
        password,
        phone_number,
      });
      console.log(response);
    } catch (error) {
      Alert.alert("Oopsie", error.message);
    }

    // navigation.navigate("ConfirmAccount");
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
            name="Email"
            placeholder="Email"
            control={control}
            rules={{ required: "Email is required" }}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <InputField
            name="Password"
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
            name="Confirm Password"
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
          <InputField
            name="Phone Number"
            placeholder="Phone Number"
            control={control}
            keyboardType="decimal-pad"
            rules={{
              required: "Please enter Phone Number",
              minLength: {
                value: 10,
                message: "Phone Number must be at least 10 characters",
              },
            }}
          />

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

export default Signup;
