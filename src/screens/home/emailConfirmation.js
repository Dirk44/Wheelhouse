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
import { emailConfirmationStyles } from "../../stylesheets";
import { NavBar } from "../../components";
import { ROUTES } from "../../constants";

const EmailConfirmation = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={emailConfirmationStyles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground
          style={emailConfirmationStyles.background}
          source={require("../../assets/emailConfirmationBg.jpg")}
        >
          <View style={emailConfirmationStyles.whLogoContainer}>
            <Image
              style={emailConfirmationStyles.whLogo}
              source={require("../../assets/upcominShowsElements/whLogo.png")}
            />
          </View>
          <View style={emailConfirmationStyles.boxContainer}>
            <View style={emailConfirmationStyles.box}>
              <View style={emailConfirmationStyles.welcomeTextContainer}>
                <Text style={emailConfirmationStyles.welcomeText}>WELCOME</Text>
              </View>
              <Text style={emailConfirmationStyles.toTheText}>to the</Text>
              <Text style={emailConfirmationStyles.teamText}>
                WheelHouse Team!
              </Text>
              <View style={emailConfirmationStyles.buttonContainer}>
                <TouchableOpacity
                  style={emailConfirmationStyles.buttonStyle}
                  onPress={() => navigation.navigate(ROUTES.HOME)}
                >
                  <Text style={emailConfirmationStyles.buttonText}>
                    RETURN HOME
                  </Text>
                </TouchableOpacity>
              </View>
              {/* </View> */}
            </View>
          </View>
          {/* <View styles={emailConfirmationStyles.whLogoContainerSmall}> */}

          <Image
            style={emailConfirmationStyles.whLogoSmall}
            source={require("../../assets/upcominShowsElements/whBottom.png")}
          />
          {/* </View> */}
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EmailConfirmation;
