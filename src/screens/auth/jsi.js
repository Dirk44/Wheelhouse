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
import { WebView } from "react-native-webview";
import { NavBar } from "../../components";
import { googleSignInStyles } from "../../stylesheets";

const JSI = () => {
  const [isChecked, setChecked] = useState(false);
  return (
    <SafeAreaView style={googleSignInStyles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground
          style={googleSignInStyles.background}
          source={require("../../assets/googleSignIn/googleSignInBg.jpg")}
        >
          <div id="jsi_menu_slot">Does this work</div>
          {/* <script>jsi.init()</script> */}
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default JSI;
