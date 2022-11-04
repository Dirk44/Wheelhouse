import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import {
  checkboxStyles,
  creditCardStyles,
  upcomingShowsStyles,
} from "../../stylesheets";
import { CheckboxComponent, NavBar } from "../../components";

function CreditCard(props) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={creditCardStyles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground
          style={creditCardStyles.background}
          source={require("../../assets/CreditCard/creditCardBg.jpg")}
        >
          <View
            style={{
              // flex: 1,
              width: "100%",
              marginTop: -80,
              marginRight: 15,
              // backgroundColor: "red",
              overflow: "hidden",
            }}
          >
            <Image
              source={require("../../assets/upcominShowsElements/whLogo.png")}
              style={upcomingShowsStyles.whLogo}
            />
          </View>
          <CheckboxComponent>
            <Image
              source={require("../../assets/CreditCard/paypal.png")}
              style={checkboxStyles.imageStyle}
            />
          </CheckboxComponent>
          <View>
            <TouchableOpacity
              style={creditCardStyles.buttonStyle}
              onPress={() => navigation.navigate("Clips")}
            >
              <Text style={creditCardStyles.buttonText}>PLAY CLIPS</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 30,
              width: "72%",
              alignItems: "center",
              //   backgroundColor: "red",
              marginTop: 5,
            }}
          >
            <Image
              style={creditCardStyles.dolby}
              source={require("../../assets/4kDolbyDigital.png")}
            />
          </View>
          <View style={{ width: "80%", marginTop: 30 }}>
            <Text style={creditCardStyles.descriptionText}>
              GLADIATORS OF STEEL is an in-depth look at one of America's most
              dangerous sports: Demolition Derby. {"\n"} {"\n"} GLADIATORS OF
              STEEL is an unswerving look at the incredible journey “Derby
              Drivers” take to make it into the arena. From the unique culture,
              family dynamics and car building, to the brutal action inside the
              stadium, these drivers have one goal in mind: To feel the energy
              and rush of hitting another car full-speed in front of 20,000
              screaming fans. It's legal road rage.
            </Text>
          </View>

          <View style={{ width: "50%", alignItems: "center" }}>
            <Image
              style={creditCardStyles.whLogo}
              source={require("../../assets/wh-logo.png")}
            ></Image>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CreditCard;
