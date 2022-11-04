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
import { InputField, WhButton } from "../../components";

import { resetPasswordStyles } from "../../stylesheets";

function ResetPassword({ props }) {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigation = useNavigation();

  const onSubmitNewPassword = () => {
    console.warn("onVerifyPressed");
    navigation.navigate("Home");
  };

  const onBackToSigninPressed = () => {
    console.warn("onBackToSigninPressed");
    navigation.navigate("SignIn");
  };

  return (
    <SafeAreaView style={resetPasswordStyles.container}>
      <ImageBackground
        style={resetPasswordStyles.background}
        source={require("../../assets/landing-page-background.jpg")}
      >
        <Image
          source={require("../../assets/wh-logo.png")}
          style={resetPasswordStyles.whLogo}
        />
        <Text style={resetPasswordStyles.loginText}>Reset Password</Text>
        <View style={resetPasswordStyles.inputs}>
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

          <Text style={resetPasswordStyles.signupText}>Back to Sign In</Text>
          <Button title="Sign in here" onPress={onBackToSigninPressed} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default ResetPassword;
