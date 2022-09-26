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
import { signUpStyles } from "../stylesheets";

import { InputField, PhoneInputField, WhButton } from "../components/";

function SignUp() {
  // const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
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
    <SafeAreaView style={signUpStyles.container}>
      <ImageBackground
        style={signUpStyles.background}
        source={require("../assets/landing-page-background.jpg")}
      >
        <Image
          source={require("../assets/wh-logo.png")}
          style={signUpStyles.whLogo}
        />
        <Text style={signUpStyles.signupText}>Signup</Text>
        <View style={signUpStyles.inputs}>
          <InputField
            name="username"
            placeholder="USERNAME "
            control={control}
            rules={{ required: "Username is required" }}
          />
          <InputField
            name="email"
            placeholder="EMAIL "
            control={control}
            rules={{ required: "Email is required" }}
            autoCapitalize="none"
            keyboardType="email-address"
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
            secureTextEntry={true}
          />
          <InputField
            name="confirm password"
            placeholder="CONFIRM PASSWORD "
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

          {/* <View style={signUpStyles.signUpContainer}> */}

          <Text style={signUpStyles.loginText}>Back to Login</Text>
          <Button title="Click Here" onPress={onBackToLoginPressed} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

module.exports = SignUp;
