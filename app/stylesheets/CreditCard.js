import { ScaledSheet } from "react-native-size-matters";

const creditCardStyles = ScaledSheet.create({
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
    marginTop: "-55@s",
    alignItems: "center",
    // justifyContent: "center",
    // paddingTop: "15%",
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0aeeb5",
    height: "30@s",
    width: "300@s",
    borderRadius: 4,
    marginTop: "50@s",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 2,
  },
  descriptionText: {
    fontSize: 13,
    color: "white",
    fontWeight: "500",
    textAlign: "center",
    lineHeight: "14@s",
  },
  dolby: {
    width: "50%",
    height: "7@s",
    marginTop: "15@s",
  },
  gladiatorsLogo: {
    width: "50%",
    height: "150@s",
    // backgroundColor: "red",
  },
  whLogo: {
    width: "75%",
    height: "70@s",
    marginTop: "40@s",
  },
});

module.exports = creditCardStyles;