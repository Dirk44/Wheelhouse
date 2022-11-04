import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { NavBar } from "../../components";
import { googleSignInStyles } from "../../stylesheets";

const GoogleSignIn = () => {
  const [isChecked, setChecked] = useState(false);
  return (
    <SafeAreaView style={googleSignInStyles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground
          style={googleSignInStyles.background}
          source={require("../../assets/googleSignIn/googleSignInBg.jpg")}
        >
          <Image
            source={require("../../assets/googleSignIn/wh-logo-signIn.png")}
            style={googleSignInStyles.whLogo}
          />
          <View style={googleSignInStyles.textContainer}>
            <Text style={googleSignInStyles.text}>
              Sign up for WheelHouse Motorsports to access exculsive content and
              special offers.
            </Text>
            <Text style={googleSignInStyles.textSignUp}>SIGN UP WITH</Text>
          </View>
          <View style={googleSignInStyles.logosContainer}>
            <TouchableOpacity>
              <Image
                style={googleSignInStyles.logoFacebook}
                source={require("../../assets/googleSignIn/facebook.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={googleSignInStyles.logoGmail}
                source={require("../../assets/googleSignIn/gmail.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={googleSignInStyles.rememberMeContainer}>
            <View style={googleSignInStyles.checkboxContentContainer}>
              <Checkbox
                style={googleSignInStyles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#0aeeb5" : "#0aeeb5"}
              />
              <Text style={googleSignInStyles.rememberMeText}>REMEMBER ME</Text>
            </View>
            <TouchableOpacity>
              <Text style={googleSignInStyles.forgotPasswordText}>
                FORGOT PASSWORD
              </Text>
            </TouchableOpacity>
          </View>
          <Image
            style={googleSignInStyles.whLogoBottom}
            source={require("../../assets/wh-logo.png")}
          />
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GoogleSignIn;
