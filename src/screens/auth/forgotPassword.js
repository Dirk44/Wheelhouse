import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
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

import { InputField, WhButton } from "../../components";

import { forgotPasswordStyles } from "../../stylesheets";

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
    <SafeAreaView style={forgotPasswordStyles.container}>
      <ImageBackground
        style={forgotPasswordStyles.background}
        source={require("../../assets/landing-page-background.jpg")}
      >
        <Image
          source={require("../../assets/wh-logo.png")}
          style={forgotPasswordStyles.whLogo}
        />
        <Text style={forgotPasswordStyles.loginText}>Forgot Password</Text>
        <View style={forgotPasswordStyles.inputs}>
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

          <Text style={forgotPasswordStyles.signupText}>Back to Sign In</Text>
          <Button title="Sign in here" onPress={onBackToSigninPressed} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default ForgotPassword;
