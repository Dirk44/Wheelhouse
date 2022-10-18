import { ScaledSheet } from "react-native-size-matters";

const loadingScreenStyles = ScaledSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    width: "75%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    transform: [{ scale: 1 }],
  },
  logo: {
    width: "70%",
    height: "72@s",
    // transform: [{ scale: 1.3 }],
  },
});
module.exports = loadingScreenStyles;
