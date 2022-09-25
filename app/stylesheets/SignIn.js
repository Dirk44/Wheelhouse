import { ScaledSheet } from "react-native-size-matters";

const signInStyles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "auto",
    alignItems: "center",
  },
  inputs: {
    width: "100%",
    height: "50%",
    alignItems: "center",
    marginTop: "20@s",
  },
  loginText: {
    color: "white",
    fontSize: "30@s",
    fontFamily: "HelveticaRegular",
    opacity: 0.9,
    paddingTop: "20@s",
    marginTop: "60@s",
  },
  signupText: {
    color: "white",
    fontSize: "18@s",
    fontFamily: "HelveticaRegular",
    marginTop: "35@s",
    opacity: 0.9,
  },
  whLogo: {
    flex: 1,
    overflow: "visible",
    width: "80%",
    height: "auto",
    marginRight: "6%",
  },
});

module.exports = signInStyles;