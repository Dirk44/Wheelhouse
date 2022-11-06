import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { cartCardStyles } from "../stylesheets";

const CartCard = () => {
  return (
    <View style={cartCardStyles.container}>
      <View style={cartCardStyles.productContainer}>
        <View style={cartCardStyles.productImageContainer}>
          <Image
            style={cartCardStyles.productImage}
            source={require("../assets/cart/productImage.png")}
          />
        </View>
        <View style={cartCardStyles.productNameContainer}>
          <Text style={cartCardStyles.productName}>Gladiators of Steel</Text>
          <Text style={cartCardStyles.productSeasonName}>SEASON ONE</Text>
          <Text style={cartCardStyles.productDescription}>
            {`Including over One Hour
of Bonus Content`}
          </Text>
          <Text style={cartCardStyles.exclusive}>
            {`EXCLUSIVE 
Pay-Per-View Event`}
          </Text>
        </View>
      </View>

      <View style={cartCardStyles.pricesContainer}>
        <View style={cartCardStyles.total}>
          <Text style={cartCardStyles.subTotalText}>SUB-TOTAL</Text>
          <Text style={cartCardStyles.subTotalTextPrice}>$24.95</Text>
        </View>
        <View style={cartCardStyles.total}>
          <Text style={cartCardStyles.preOrderText}>PRE-ORDER</Text>
          <Text style={cartCardStyles.subTotalTextPrice}>-$5.00</Text>
        </View>
        <View style={cartCardStyles.finalTotal}>
          <Text style={cartCardStyles.totalPriceText}>$19.95</Text>
        </View>
      </View>
    </View>
  );
};

export default CartCard;
