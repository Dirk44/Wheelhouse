import { Platform, StatusBar } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

const playClipsScreenStyles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    resizeMode: "contain",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "700@s",
    marginTop: -20,
    // justifyContent: "center",
    alignItems: "center",
  },
  backgroundVideo: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0aeeb5",
    height: "40@s",
    width: "280@s",
    borderRadius: 3,
    marginTop: "35@s",
  },
  buttonStyleBlack: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    height: "40@s",
    width: "280@s",
    borderRadius: 3,
    marginTop: "10@s",
  },
  buttonText: {
    color: "black",
    fontSize: 15,
    fontWeight: "500",
    letterSpacing: 2,
    // fontFamily: "HelveticaRegular",
  },
  buttonText2: {
    color: "#0aeeb5",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 1,
    // fontFamily: "HelveticaRegular",
  },
  gladiatorLogo: {
    width: "170@s",
    height: "146@s",
    marginTop: "60@s",
  },
  hoursLeft: {
    color: "white",
    fontFamily: "HelveticaRegular",
    letterSpacing: 1,
    fontSize: 16,
    marginTop: 25,
  },
  playerWindow: {
    marginTop: "20%",
    width: "75%",
    height: "auto",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 2,
  },
  rentText: {
    color: "#0aeeb5",
    fontFamily: "Helvetica87Bold",
    fontSize: 14,
    fontWeight: "900",
  },

  titleText: {
    color: "white",
    fontFamily: "HelveticaRegular",
    fontSize: 18,
    letterSpacing: 1,
    marginTop: "8@s",
  },

  video: {
    width: "100%",
    aspectRatio: 16 / 9,
  },

  whLogo: {
    width: "75%",
    height: "70@s",
    marginTop: "100@s",
  },
});

export default playClipsScreenStyles;
