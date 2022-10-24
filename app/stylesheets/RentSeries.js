import { ScaledSheet } from "react-native-size-matters";

const rentSeriesStyles = ScaledSheet.create({
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
  buttonImage: {
    height: "30@s",
    width: "300@s",
    borderRadius: "4@s",
    marginTop: "-60@s",
  },
  // buttonStyle: {
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "#0aeeb5",
  //   height: "30@s",
  //   width: "300@s",
  //   borderRadius: "4@s",
  //   marginTop: "-60@s",
  // },
  buttonText: {
    color: "black",
    fontSize: "14@s",
    fontWeight: "400",
    letterSpacing: "2@s",
  },
  carsImageContainer: {
    height: "290@s",
    width: "100%",
    // backgroundColor: "red",
    marginTop: "52@s",
  },
  carsImage: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    marginTop: "32@s",
  },
  descriptionText: {
    fontSize: "13@s",
    color: "white",
    fontWeight: "500",
    textAlign: "center",
    lineHeight: "20@s",
    marginTop: "-20@s",
  },
  dolby: {
    width: "65%",
    height: "7@s",
    marginTop: "-35@s",
  },
  dolbyContainer: {
    height: "30@s",
    width: "60%",
    alignItems: "center",
    // backgroundColor: "red",
    marginTop: "25@s",
  },
  gladiatorsLogo: {
    width: "65%",
    height: "170@s",
    // padding: "5@s",
    resizeMode: "contain",
    marginTop: "-35@s",
  },
  gladiatorsLogoContainer: {
    height: "200@s",
    width: "100%",
    alignItems: "center",
  },
  whLogo: {
    width: "90%",
    height: "80@s",
    marginTop: "25@s",
    // overflow: "",
  },
  worldPremiereText: {
    width: "100%",
    height: "111@s",
    marginTop: "15@s",
  },
});

module.exports = rentSeriesStyles;
