import { ScaledSheet } from "react-native-size-matters";

const thankYouStyles = ScaledSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    resizeMode: "contain",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  background: {
    // flex: 1,
    width: "100%",
    height: "800@s",
    alignItems: "center",
    marginTop: "-55@s",
  },
  box: {
    width: "275@s",
    height: "230@s",
    backgroundColor: "#1a1a1a",
    borderColor: "white",
    borderWidth: 0.5,
    alignItems: "center",
  },
  boxContainer: {
    // flex: 1,
    width: "80%",
    height: "auto",
    alignItems: "center",
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0aeeb5",
    height: "30@s",
    width: "225@s",
    borderRadius: "4@s",
    marginTop: "20@s",
  },
  buttonText: {
    color: "black",
    fontSize: "14@s",
    fontWeight: "400",
    letterSpacing: 2,
  },
  congratsText: {
    width: "220@s",
    height: "63@s",
    alignItems: "center",
    marginTop: "15@s",
  },
  thankYouText: {
    color: "white",
    marginTop: "40@s",
    fontSize: "35@s",
    fontWeight: "800",
    fontFamily: "Helvetica87HeavyCondensed",
    letterSpacing: 2,
    lineHeight: "40@s",
  },
  whLogo: {
    width: "85%",
    height: "255@s",
    marginTop: "25%",
    // marginRight: 5,
    overflow: "hidden",
  },
  whLogoContainer: {
    width: "100%",
    marginTop: "-80@s",
    marginRight: "15@s",
    // backgroundColor: "red",
    overflow: "hidden",
  },
  whLogoSmall: {
    width: "40%",
    height: "47@s",
    marginTop: "230@s",
  },
  //   whLogoContainerSmall: {
  //     width: "60%",
  //     height: "40@s",
  //     // marginTop: "-80@s",
  //     // marginRight: "15@s",
  //     backgroundColor: "red",
  //     // overflow: "hidden",
  //   },
});

export default thankYouStyles;
