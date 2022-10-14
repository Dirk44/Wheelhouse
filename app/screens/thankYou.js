import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ScrollView,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
import thankYouStyles from "../stylesheets/ThankYou";
import { NavBar } from "../components";

const ThankYou = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={thankYouStyles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground
          style={thankYouStyles.background}
          source={require("../assets/thankYou/thankYouBg.jpg")}
        >
          <View style={thankYouStyles.whLogoContainer}>
            <Image
              style={thankYouStyles.whLogo}
              source={require("../assets/upcominShowsElements/whLogo.png")}
            />
          </View>
          <View style={thankYouStyles.boxContainer}>
            <View style={thankYouStyles.box}>
              <Text style={thankYouStyles.thankYouText}>Thank You!</Text>
              {/* <View style={{ width: "100%", height: "45%" }}> */}
              <View>
                <Image
                  style={thankYouStyles.congratsText}
                  source={require("../assets/thankYou/preOrderText.png")}
                ></Image>
              </View>
              {/* </View> */}
              <View
                style={{ width: "100%", height: "7%", alignItems: "center" }}
              >
                <TouchableOpacity
                  style={thankYouStyles.buttonStyle}
                  onPress={() => navigation.navigate("Episodes")}
                >
                  <Text style={thankYouStyles.buttonText}>VIEW EPISODES</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* <View styles={thankYouStyles.whLogoContainerSmall}> */}
          <Image
            style={thankYouStyles.whLogoSmall}
            source={require("../assets/upcominShowsElements/whBottom.png")}
          />
          {/* </View> */}
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

module.exports = ThankYou;
