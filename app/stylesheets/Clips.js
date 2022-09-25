import { ScaledSheet } from "react-native-size-matters";
import { StyleSheet } from "react-native";

const clipsStyles = ScaledSheet.create({
  container: {
    backgroundColor: "#000",
    resizeMode: "cover",
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "770@s",
    marginTop: "-50@s",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "15%",
  },
  gladLogoContainer: {
    // flex: 1,
    width: "100%",
    // height: "auto",
    alignItems: "center",
    // backgroundColor: "red",
    marginTop: "50@s",
  },
  gladiatorsLogo: {
    width: "50%",
    resizeMode: "contain",
    height: 160,
    // backgroundColor: "yellow",
    // marginTop: "5@s",
  },
  list: {
    // justifyContent: "center",
    alignItems: "center",
    marginTop: "-27@s",
    shadowColor: "black",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    // width: "65%",
    // height: 140,
    // borderWidth: 2,
    // borderColor: "white",
    // backgroundColor: "red",
  },

  whLogo: {
    width: "45%",
    height: 100,
    marginTop: 25,
    // paddingBottom: "10%",
  },
});

module.exports = clipsStyles;
