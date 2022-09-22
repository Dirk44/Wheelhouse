import React from "react";
import {
  ScrollView,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { HomePageStyles } from "./homePageStyles";
import { AuthStack } from "../../routes/AuthStack";
import NavBar from "../../components/NavBar";

const HomePage = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={HomePageStyles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground
          style={HomePageStyles.background}
          source={require("../../assets/wheelhouseElements/wheelhouseLanding.jpg")}
        >
          <View style={HomePageStyles.whLogoContainer}>
            <Image
              source={require("../../assets/wh-logo.png")}
              style={HomePageStyles.whLogo}
            />
          </View>
          <View style={HomePageStyles.carsImageContainer}>
            <Image
              source={require("../../assets/wheelhouseLandingImage.jpg")}
              style={HomePageStyles.carsImage}
            />
          </View>
          <View>
            <Text style={HomePageStyles.text}>
              WHEELHOUSE is the home for exclusive high-quality motorsports
              content. With new shows in the pipeline, WHEELHOUSE proudly
              presents the six part Limited-Series, GLADIATORS OF STEEL
            </Text>
          </View>
          <View>
            <TouchableOpacity
              // style={{ flex: 1 }}
              onPress={() => navigation.navigate("Gladiators of Steel")}
            >
              <View style={{ alignItems: "center" }}>
                <Text style={HomePageStyles.click}>
                  CLICK HERE FOR THE PREMIERE OF
                </Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Image
                  style={HomePageStyles.gladiatorsLogo}
                  source={require("../../assets/gladLogoWhite.png")}
                  onPress={() => navigation.navigate("Gladiators of Steel")}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={HomePageStyles.buttonStyle}
              onPress={({ route }) => navigation.navigate("")}
            >
              <Text style={HomePageStyles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={HomePageStyles.buttonStyle}
              onPress={() => navigation.navigate("")}
            >
              <Text style={HomePageStyles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          <Image
            style={HomePageStyles.redline}
            source={require("../../assets/redBar.png")}
          />
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
