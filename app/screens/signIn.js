import React, { useState } from "react";
import {
  Platform,
  Text,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  Image,
  View,
  Button,
  Alert,
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import { Auth } from "aws-amplify";

import { InputField, WhButton } from "../components/";

import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

import { signInStyles } from '../stylesheets';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/;

function SignIn() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const onLoginPressed = async (data) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const response = await Auth.signIn(data.username, data.password);
      Alert.alert("Success!");
      console.log(response);
      navigation.navigate("Home");
    } catch (e) {
      Alert.alert("Oopsie, ", e.message);
    }
    setLoading(false);
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };
  const onSignUpPressed = () => {
    navigation.navigate("SignUp");
  };
  return (
    <SafeAreaView style={signInStyles.container}>
      <ImageBackground
        style={signInStyles.background}
        source={require("../assets/landing-page-background.jpg")}
      >
        <Image
          source={require("../assets/wh-logo.png")}
          style={signInStyles.whLogo}
        />
        <Text style={signInStyles.loginText}>Login</Text>
        <View style={signInStyles.inputs}>
          <InputField
            name="username"
            placeholder="USERNAME "
            control={control}
            rules={{
              required: "Username is required",
            }}
          />
          <InputField
            name="password"
            placeholder="PASSWORD "
            control={control}
            rules={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password minimum length is 8 characters",
              },
            }}
            secureTextEntry
          />
          {/* <Text style={signInStyles.or}>Or</Text> */}
          {/* <InputField
            name="email"
            placeholder="Email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: { value: EMAIL_REGEX, message: "Must be a valid Email" },
            }}
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
            secureTextEntry
          /> */}
          <WhButton
            title={loading ? "loading..." : "Login"}
            onPress={handleSubmit(onLoginPressed)}
          />

          <Text style={signInStyles.signupText}>Forgot Password?</Text>
          <Button title="Click Here" onPress={onForgotPasswordPressed} />
          <View>
            <Text style={signInStyles.signupText}>Haven't signed up?</Text>
            <Button
              style={signInStyles.signupText}
              title="Sign up here"
              onPress={onSignUpPressed}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

module.exports = SignIn;
