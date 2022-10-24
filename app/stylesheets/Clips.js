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
    height: "160@s",
    // backgroundColor: "yellow",
    // marginTop: "5@s",
  },
  list: {
    // justifyContent: "center",
    alignItems: "center",
    marginTop: "-30@s",
    shadowColor: "black",
    shadowOffset: { width: "10@s", height: "10@s" },
    shadowOpacity: "0.5@s",
    shadowRadius: "6@s",
    // width: "65%",
    // height: 140,
    // borderWidth: 2,
    // borderColor: "white",
    // backgroundColor: "red",
  },

  whLogo: {
    width: "40%",
    height: "100@s",
    marginTop: "5@s",
    // paddingBottom: "10%",
  },
});

module.exports = clipsStyles;
