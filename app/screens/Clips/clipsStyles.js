import { ScaledSheet } from "react-native-size-matters";
import { StyleSheet } from "react-native";

export const ClipsStyles = StyleSheet.create({
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
    marginTop: -70,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "15%",
  },
  gladiatorsLogo: {
    width: "55%",
    resizeMode: "contain",
    height: 300,
  },
  thumb: {
    width: "90%",
    height: 140,
    borderWidth: 2,
    borderColor: "white",
    // backgroundColor: "red",
  },
  thumbText: {
    fontFamily: "HelveticaRegular",
    fontSize: 16,
    color: "white",
    marginTop: 10,
    marginBottom: "4%",
  },
  whLogo: {
    width: "40%",
    height: 58,
    marginTop: 10,
    paddingBottom: "10%",
  },
});
