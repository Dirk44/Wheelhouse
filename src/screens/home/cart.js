import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { ImageBackground, SafeAreaView, ScrollView, View, Image, Pressable, Text } from "react-native";
import { useMutation } from "react-query";
import { useNavigation } from "@react-navigation/native";

import grapqlClient from "../../utils/graphqlClient";
import createOrderQuery from "../../utils/queries/createOrder";
import { checkboxStyles, cartStyles, upcomingShowsStyles } from "../../stylesheets";
import { CartCard, CheckboxComponent, NavBar } from "../../components";
import { ROUTES } from "../../constants";
import { useUser } from "../../utils/contexts/UserProvider";

function Cart(props) {
  const createOrder = useMutation((data) => {
    return grapqlClient.request(createOrderQuery, data);
  });
  // const getUserId = useQuery((data) => {
  //   return grapqlClient.request(getUserId, data);
  // });

  const user = useUser();
  const checkout = (user) => {
    // console.log("user", user);
    createOrder.mutate(
      {
        userId: user,
        // userId: userId.data.getUserByJsiId.id,
        itemId: "catalogue_1",
        quantity: 1,
      },
      {
        onSuccess: (data) => {
          // console.log(data);
          navigation.navigate(ROUTES.CHECKOUT, { src: data.createOrder });
          // return `<iframe src="${data.createOrder}">

          // </iframe>`;
          // navigation.navigate(data.data.createOrder);
        },
      }
    );
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView style={cartStyles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground style={cartStyles.background} source={require("../../assets/googleSignIn/googleSignInBg.jpg")}>
          <View style={cartStyles.whLogoContainer}>
            <Image source={require("../../assets/upcominShowsElements/whLogo.png")} style={cartStyles.whLogo} />
          </View>
          {/* <View style={{ width: "100%", height: 30, }}> */}
          <Text style={cartStyles.inYourCartText}>IN YOUR CART</Text>
          {/* </View> */}
          <View style={cartStyles.cartCardContainer}>
            <CartCard />
          </View>
          <View>
            <Pressable
              style={cartStyles.buttonStyle}
              onPress={() => {
                checkout(user);
              }}
            >
              <Text style={cartStyles.buttonText}>CHECKOUT</Text>
            </Pressable>
          </View>
          <View style={cartStyles.safeCheckoutLogoContainer}>
            <Image style={cartStyles.safeCheckoutLogo} source={require("../../assets/secureCheckout.png")} />
          </View>
          <View style={{ width: "50%", alignItems: "center" }}>
            <Image style={cartStyles.whLogoBottom} source={require("../../assets/wh-logo.png")}></Image>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Cart;
