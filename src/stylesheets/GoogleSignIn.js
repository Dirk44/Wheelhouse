import { Platform, StatusBar } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

const googleSignInStyles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  background: {
    // flex: 1,
    width: "100%",
    height: "700@s",
    alignItems: "center",
    marginTop: "-18@s",
  },
  checkbox: {
    margin: "8@s",
  },
  checkboxContentContainer: {
    width: "50%",
    height: "50%",
    // backgroundColor: "red",
    flexDirection: "row",
  },
  forgotPasswordText: {
    color: "#07fbb9",
    fontSize: "8@s",
    letterSpacing: "1@s",
    // fontweight: "900",
  },
  logoFacebook: {
    width: "62@s",
    height: "90@s",
  },
  logoGmail: {
    width: "70@s",
    height: "80@s",
    marginTop: "10@s",
  },
  logosContainer: {
    width: "65%",
    height: "150@s",
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  rememberMeContainer: {
    width: "75%",
    height: "100@s",
    backgroundColor: "rgba(37,37,37,255)",
    marginTop: "10@s",
    justifyContent: "center",
    alignItems: "center",
  },
  rememberMeText: {
    color: "white",
    marginTop: "10@s",
    fontSize: "12@s",
    fontWeight: "700",
  },
  text: {
    color: "white",
    fontSize: "13@s",
    textAlign: "center",
    lineHeight: "20@s",
  },
  textContainer: {
    width: "75%",
    alignItems: "center",
    marginTop: "-26@s",
    // backgroundColor: "red",
  },
  textSignUp: {
    color: "white",
    fontSize: "19@s",
    marginTop: "30@s",
    letterSpacing: 2,
    fontFamily: "HelveticaRegular",
  },
  whLogo: {
    // flex: 1,
    overflow: "visible",
    width: "80%",
    height: "200@s",
    marginRight: "70@s",
    marginTop: "-8@s",
    // backgroundColor: "red",
  },
  whLogoBottom: {
    width: "40%",
    height: "60@s",
    marginTop: "100@s",
    marginRight: "20@s",
    // backgroundColor: "red",
  },
});

export default googleSignInStyles;
