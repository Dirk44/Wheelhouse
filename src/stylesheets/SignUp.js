import { StyleSheet } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

const signUpStyles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  background: {
    // flex: 1,
    width: "100%",
    height: "700@s",
    alignItems: "center",
    marginTop: "-18@s",
  },
  buttonContainer: {
    flex: 0.4,
    marginTop: "30@s",
    overflow: "visible",
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderColor: "white",
    borderWidth: "1@s",
    height: "30@s",
    width: "220@s",
    borderRadius: "4@s",
    // marginTop: "-120@s",
  },
  buttonText: {
    color: "white",
    fontSize: "15@s",
    fontWeight: "700",
    letterSpacing: 2,
  },
  inputs: {
    width: "100%",
    height: "125@s",
    alignItems: "center",
    marginTop: "25@s",
    // backgroundColor: "red",
  },
  input: {
    justifyContent: "center",
    width: "75%",
    height: "10%",
    backgroundColor: "#f2f3f5",
    borderRadius: 10,
    borderColor: "rgba(37,37,37,255)",
    fontSize: 20,
    marginTop: 12,
    paddingLeft: 8,
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
  signupTextContainer: {
    width: "80%",
  },
  signupText: {
    color: "white",
    fontSize: "12@s",
    textAlign: "center",
    lineHeight: 23,

    // fontFamily: "HelveticaRegular",
    fontWeight: "600",
    opacity: 0.9,
    paddingTop: "5%",
  },
  loginText: {
    color: "white",
    fontSize: 18,
    fontFamily: "HelveticaRegular",
    marginTop: "10%",
    opacity: 0.9,
  },
  whLogo: {
    width: "80%",
    height: 130,
    // resizeMode: "contain",
    overflow: "visible",
    marginTop: "12%",
    marginRight: "7%",
  },
  whLogoBottom: {
    width: "40%",
    height: "60@s",
    marginTop: "200@s",
    marginRight: "20@s",
  },
});

export default signUpStyles;
