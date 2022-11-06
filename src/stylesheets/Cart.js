import { ScaledSheet } from "react-native-size-matters";

const cartStyles = ScaledSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    width: "100%",
    height: "auto",
    // resizeMode: "contain",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "850@s",
    marginTop: "-75@s",
    alignItems: "center",
    // justifyContent: "center",
    // paddingTop: "15%",
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0aeeb5",
    height: "30@s",
    width: "225@s",
    borderRadius: 4,
    marginTop: "30@s",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 2,
  },
  cartCardContainer: {
    width: "100%",
    height: "auto",
    marginTop: "20@s",
    alignItems: "center",
  },
  gladiatorsLogo: {
    width: "50%",
    height: "150@s",
    // backgroundColor: "red",
  },
  inYourCartText: {
    color: "white",
    fontSize: "20@s",
    // fontWeight: "500",
    fontFamily: "HelveticaRegular",
    // letterSpacing: 1,
    marginTop: "10@s",
  },
  safeCheckoutLogoContainer: {
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "25@s",
  },
  safeCheckoutLogo: {
    width: "27%",
    height: "35@s",
  },
  whLogoContainer: {
    width: "100%",
    height: "150@s",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "80@s",
    // overflow: "hidden",
    // backgroundColor: "red",
  },
  whLogo: {
    width: "85%",
    height: "190@s",
    overflow: "visible",
    marginRight: "60@s",
  },
  whLogoBottom: {
    width: "75%",
    height: "100@s",
    marginTop: "140@s",
  },
});

export default cartStyles;
