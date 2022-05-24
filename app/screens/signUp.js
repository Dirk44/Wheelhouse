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

import InputField from "../components/InputField";
import WhButton from "../components/WhButton";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

function Signup({ props }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onSignUpPressed = () => {
    console.warn("onSignUpPressed");
  };

  const onBackToLoginPressed = () => {
    console.warn("onBackToLoginPressed");
  };

  //   const navigation = useNavigation();
  //   const [loading, setLoading] = useState(false);

  //   const {
  //     control,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm();

  // const onSignInPressed = async (data) => {
  //   if (loading) {
  //     return;
  //   }
  //     setLoading(true);
  //     try {
  //       const response = await Auth.signIn(data.userName, data.password);
  //       console.log(response);
  //     } catch (e) {
  //       Alert.alert("Oppsie!", e.message);
  //     }
  //     setLoading(false);
  //   };

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
          <InputField placeholder="Email" value={email} setValue={setEmail} />
          <InputField
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
          />
          <InputField
            placeholder="Confirm Password"
            value={confirmPassword}
            setValue={setConfirmPassword}
            secureTextEntry={true}
          />
          <InputField
            placeholder="Phone Number"
            value={phoneNumber}
            setValue={setPhoneNumber}
          />

          <WhButton title="Signup" onPress={onSignUpPressed} />
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
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  signUpContainer: {},
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
