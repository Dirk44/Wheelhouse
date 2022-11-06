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
  cartStyles,
  upcomingShowsStyles,
} from "../../stylesheets";
import { CartCard, CheckboxComponent, NavBar } from "../../components";
import { ROUTES } from "../../constants";

function Cart(props) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={cartStyles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground
          style={cartStyles.background}
          source={require("../../assets/googleSignIn/googleSignInBg.jpg")}
        >
          <View style={cartStyles.whLogoContainer}>
            <Image
              source={require("../../assets/upcominShowsElements/whLogo.png")}
              style={cartStyles.whLogo}
            />
          </View>
          {/* <View style={{ width: "100%", height: 30, }}> */}
          <Text style={cartStyles.inYourCartText}>IN YOUR CART</Text>
          {/* </View> */}
          <View style={cartStyles.cartCardContainer}>
            <CartCard />
          </View>
          <View>
            <TouchableOpacity
              style={cartStyles.buttonStyle}
              onPress={() => navigation.navigate(ROUTES.THANKYOU)}
            >
              <Text style={cartStyles.buttonText}>CHECKOUT</Text>
            </TouchableOpacity>
          </View>
          <View style={cartStyles.safeCheckoutLogoContainer}>
            <Image
              style={cartStyles.safeCheckoutLogo}
              source={require("../../assets/secureCheckout.png")}
            />
          </View>
          <View style={{ width: "50%", alignItems: "center" }}>
            <Image
              style={cartStyles.whLogoBottom}
              source={require("../../assets/wh-logo.png")}
            ></Image>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Cart;
