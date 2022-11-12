import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { rentSeriesStyles } from "../../stylesheets";
import { NavBar } from "../../components";
import { ROUTES } from "../../constants";

import { useMutation } from "react-query";
import grapqlClient from "../../utils/graphqlClient";
import createOrderQuery from "../../utils/queries/createOrder";
import { useCookies } from "react-cookie";
import Checkout from "./checkout";

const RentSeries = (props) => {
  const [cookies] = useCookies();
  const [value, setUser] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const createOrder = useMutation((data) => {
    return grapqlClient.request(createOrderQuery, data);
  });

  useEffect(() => {
    if (!loaded) {
      if (cookies && cookies.jsis) {
        const user = window.jsi.getSession();
        if (user) {
          setUser(user.session.user.id);
        } else {
          setUser(false);
        }
      } else {
        setUser(false);
      }
      setLoaded(true);
    }
  }, [cookies, loaded, setLoaded, setUser]);
  const checkout = () => {
    grapqlClient.setHeader("Web-Token", cookies.jsis);
    console.log("user", value);
    if (!value) {
      navigation.navigate(ROUTES.SIGNUP_HOME);
      return;
    }
    createOrder.mutate(
      {
        userId: value,
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
  // const [auth, setAuth] = useState(null);
  return (
    <SafeAreaView style={rentSeriesStyles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground
          style={rentSeriesStyles.background}
          source={require("../../assets/rentNowBg.jpg")}
        >
          <View style={rentSeriesStyles.carsImageContainer}>
            <Image
              source={require("../../assets/rentalCarImage.png")}
              style={rentSeriesStyles.carsImage}
            />
          </View>
          <View style={rentSeriesStyles.gladiatorsLogoContainer}>
            <Image
              style={rentSeriesStyles.gladiatorsLogo}
              source={require("../../assets/gladLogoGreen.png")}
            />
          </View>
          <View>
            <TouchableOpacity
              // style={rentSeriesStyles.buttonStyle}
              onPress={() => {
                checkout();
              }}
            >
              <Image
                style={rentSeriesStyles.buttonImage}
                source={require("../../assets/preOrderBtn.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={rentSeriesStyles.dolbyContainer}>
            <Image
              style={rentSeriesStyles.dolby}
              source={require("../../assets/4kDolbyDigital.png")}
            />
          </View>
          <View style={{ width: "80%", marginTop: -50, alignItems: "center" }}>
            <Image
              style={rentSeriesStyles.worldPremiereText}
              source={require("../../assets/worldPremiereEventText.png")}
            />
          </View>
          <View style={{ width: "50%", alignItems: "center" }}>
            <Image
              style={rentSeriesStyles.whLogo}
              source={require("../../assets/wh-logo.png")}
            />
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RentSeries;
