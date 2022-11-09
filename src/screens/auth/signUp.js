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
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { signUpStyles } from "../../stylesheets";

import { InputField, NavBar, WhButton } from "../../components";

function SignUp() {
  // const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  const navigation = useNavigation();

  const { control, handleSubmit } = useForm();

  const onSignUpPressed = async (data) => {
    const { username, email, password } = data;
    // console.log(data);
    try {
      const response = await Auth.signUp({
        username,
        password,
        attributes: { email },
      });
      // console.log(response);
    } catch (e) {
      Alert.alert("Oopsie", e.message);
      // console.log(e);
    }

    //   navigation.navigate("ConfirmAccount", { username });
  };

  const onBackToLoginPressed = () => {
    navigation.navigate("SignIn");
  };

  return (
    <SafeAreaView style={signUpStyles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground
          style={signUpStyles.background}
          source={require("../../assets/googleSignIn/googleSignInBg.jpg")}
        >
          <Image source={require("../../assets/googleSignIn/wh-logo-signIn.png")} style={signUpStyles.whLogo} />
          <View style={signUpStyles.signupTextContainer}>
            <Text style={signUpStyles.signupText}>
              Sign up for updates on WheelHouse Motorsports' upcoming shows, new content and special offers. Your
              information will not be shared or sold.
            </Text>
          </View>
          <View style={signUpStyles.inputs}>
            <InputField
              name="name"
              placeholder="NAME "
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
              name="age"
              placeholder="AGE "
              control={control}
              rules={{
                required: "Age is required",
                keyboardType: "numeric",
              }}
            />
            <InputField
              name="favorite motorsport"
              placeholder="FAVORITE MOTORSPORT "
              control={control}
              rules={{
                required: "Favorite motorsport is required",
              }}
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
          </View>
          <View style={signUpStyles.buttonContainer}>
            <TouchableOpacity
              style={signUpStyles.buttonStyle}
              onPress={() => {
                navigation.navigate("SignUp");
              }}
            >
              <Text style={signUpStyles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
          {/* copy props from Whbutton to other buttons */}
          <Image style={signUpStyles.whLogoBottom} source={require("../../assets/wh-logo.png")} />
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignUp;
