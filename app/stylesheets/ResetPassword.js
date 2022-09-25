import { StyleSheet } from "react-native";

const resetPasswordStyles = StyleSheet.create({
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
    },
    loginText: {
      color: "white",
      fontSize: 30,
      fontFamily: "HelveticaRegular",
      opacity: 0.9,
      paddingTop: "5%",
      marginTop: "18%",
      shadowColor: "black",
      shadowOffset: { width: 5, height: 5 },
      shadowOpacity: 1,
      shadowRadius: 10,
    },
    signUpContainer: {},
    signupText: {
      color: "white",
      fontSize: 18,
      fontFamily: "HelveticaRegular",
      marginTop: "15%",
      opacity: 0.9,
  
      // justifyContent: "center",
      // alignItems: "center",
    },
    whLogo: {
      width: "80%",
      height: 130,
      resizeMode: "contain",
      // position: "absolute",
      marginTop: "12%",
    },
  });

  module.exports = resetPasswordStyles;