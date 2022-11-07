import Checkbox from "expo-checkbox";
<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React, { useState } from "react";
>>>>>>> 5213e65 (`added jsi, not rendering)
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
<<<<<<< HEAD
import { useCookies } from "react-cookie";
=======
>>>>>>> 5213e65 (`added jsi, not rendering)
import { WebView } from "react-native-webview";
import { NavBar } from "../../components";
import { googleSignInStyles } from "../../stylesheets";

const JSI = () => {
  const [isChecked, setChecked] = useState(false);
<<<<<<< HEAD
  const [cookies] = useCookies();
  const [sessionValid, setSessionValid] = useState(false);
  const [newUser, setNewUser] = useState(false);

  useEffect(() => {
    if (cookies && cookies.jsis) {
      setSessionValid(true);
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

      try {
        window.jsi.init();
      } catch (e) {
        console.error(e);
      }
    }
  }, [cookies, setSessionValid]);
=======
>>>>>>> 5213e65 (`added jsi, not rendering)
  return (
    <SafeAreaView style={googleSignInStyles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground
          style={googleSignInStyles.background}
          source={require("../../assets/googleSignIn/googleSignInBg.jpg")}
        >
<<<<<<< HEAD
          <View
            style={{
              marginTop: 100,
            }}
          >
            <div id="jsi_menu_slot">Does this work</div>
          </View>
=======
          <div id="jsi_menu_slot">Does this work</div>
          {/* <script>jsi.init()</script> */}
>>>>>>> 5213e65 (`added jsi, not rendering)
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default JSI;
