import { StyleSheet } from "react-native";

const signUpStyles = StyleSheet.create({
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
  signupText: {
    color: "white",
    fontSize: 30,
    fontFamily: "HelveticaRegular",
    opacity: 0.9,
    paddingTop: "5%",
    marginTop: "18%",
    // shadowColor: "black",
    // shadowOffset: { width: 5, height: 5 },
    // shadowOpacity: 1,
    // shadowRadius: 10,
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
});

export default signUpStyles;
