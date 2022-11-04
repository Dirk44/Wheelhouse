import { Platform, StatusBar } from "react-native";

import { ScaledSheet } from "react-native-size-matters";

const gladiatorsLandingStyles = ScaledSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    width: "100%",
    height: "auto",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "850@s",
    marginTop: "-55@s",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "15%",
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0aeeb5",
    height: "30@s",
    width: "300@s",
    borderRadius: "4@s",
    marginTop: "20@s",
  },
  buttonText: {
    color: "black",
    fontSize: "16@s",
    fontWeight: "400",
    letterSpacing: 2,
  },
  descriptionText: {
    fontSize: "11@s",
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    lineHeight: "14@s",
    // marginTop: "-10@s",
  },
  dolby: {
    width: "45%",
    height: "8@s",
    // marginTop: "10@s",
  },
  dolbyContainer: {
    width: "100%",
    height: "20@s",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "yellow",
    marginTop: "10@s",
  },
  gladiatorsLogo: {
    width: "50%",
    height: "150@s",
    // backgroundColor: "red",
  },
  gladiatorsLogoContainer: {
    width: "100%",
    height: "140@s",
    alignItems: "center",
    marginTop: "170@s",
    // backgroundColor: "red",
  },
  whLogo: {
    width: "75%",
    height: "70@s",
    marginTop: "-30@s",
  },
});

export default gladiatorsLandingStyles;
