import { ScaledSheet } from "react-native-size-matters";

const episodeStyles = ScaledSheet.create({
  container: {
    backgroundColor: "#000",
    resizeMode: "cover",
    flex: 1,
    justifyContent: "center",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "1250@s",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "8%",
    marginTop: "-50@s",
  },
  dolby: {
    width: "100%",
    height: "120@s",
    opacity: "0.8@s",
    // marginTop: "-5@s",
  },
  gladiatorsLogo: {
    width: "47%",
    height: "140@s",
    // backgroundColor: "red",
  },
  gladiatorsLogoContainer: {
    // flex: 1,
    width: "100%",
    height: "125@s",
    alignItems: "center",
    marginTop: "63@s",
  },
  list: {
    alignItems: "center",
    width: "55%",
    marginTop: "15@s",
    flex: 7,
    // backgroundColor: "white",
  },
  whLogo: {
    width: "90%",
    height: "100@s",
    marginTop: "-50@s",
    marginRight: "15@s",
  },
  whLogoContainer: {
    width: "50%",
    height: "60@s",
    alignItems: "center",
  },
});

module.exports = episodeStyles;
