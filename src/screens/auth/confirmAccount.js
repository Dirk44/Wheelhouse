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
import { InputField, WhButton } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { useRoute } from "@react-navigation/native";
import { confirmAccountStyles } from "../../stylesheets";

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
      const response = await Auth.confirmSignUp(data.username, data.verificationCode);
      Alert.alert("Your account has been verified");
      // console.log(response);
    } catch (e) {
      Alert.alert("Oopsie", e.message);
    }
    navigation.navigate("Home");
  };

  const onBackToSigninPressed = () => {
    navigation.navigate("SignIn");
  };

  return (
    <SafeAreaView style={confirmAccountStyles.container}>
      <ImageBackground
        style={confirmAccountStyles.background}
        source={require("../../assets/landing-page-background.jpg")}
      >
        <Image source={require("../../assets/wh-logo.png")} style={confirmAccountStyles.whLogo} />
        <Text style={confirmAccountStyles.loginText}>Verify Account</Text>
        <View style={confirmAccountStyles.inputs}>
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

          <Text style={confirmAccountStyles.signupText}>Resend Code</Text>
          <Button title="Click Here" onPress={onResendCodePressed} />

          <Text style={confirmAccountStyles.signupText}>Back to Sign In</Text>
          <Button title="Sign in here" onPress={onBackToSigninPressed} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default ConfirmAccount;
