import Checkbox from "expo-checkbox";
import React, { useState, useEffect } from "react";
import { ImageBackground, SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { useCookies } from "react-cookie";
import { WebView } from "react-native-webview";
import { NavBar } from "../../components";
import { googleSignInStyles } from "../../stylesheets";
import { useUser } from "../../utils/contexts/UserProvider";
import { useAuth } from "../../utils/contexts/AuthProvider";

const JSI = () => {
  const [isChecked, setChecked] = useState(false);
  const [cookies] = useCookies();
  const [sessionValid, setSessionValid] = useState(false);
  const [newUser, setNewUser] = useState(false);
  // const [auth, setAuth] = useAuth();
  // const [user, setUser] = useUser();

  useEffect(() => {
    if (cookies && cookies.jsis) {
      setSessionValid(true);
      // setAuth(cookies.jsis);
      // setUser(cookies.jsis);

      // AuthContext.setAuth(cookies.jsis);
    } else {
      window.signedUp = () => {
        setNewUser(true);
      };
      window.signedIn = () => {
        setSessionValid(true);
      };
      window.alreadySignedIn = () => {
        setSessionValid(true);
      };
    }
    try {
      window.jsi.init();
    } catch (e) {
      console.error(e);
    }
  }, [cookies, setSessionValid]);

  // if (sessionValid) {
  //   window.location.reload(false);
  // } else {
  return (
    <SafeAreaView style={googleSignInStyles.container}>
      <NavBar />
      {/* <ScrollView> */}
      <ImageBackground
        style={googleSignInStyles.background}
        source={require("../../assets/googleSignIn/googleSignInBg.jpg")}
      >
        <View
          style={{
            marginTop: 25,
          }}
        >
          <div id="jsi_menu_slot">Does this work</div>
        </View>
      </ImageBackground>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
  // }
};

export default JSI;
