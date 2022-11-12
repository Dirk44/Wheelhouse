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
    height: "1330@s",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "8%",
    marginTop: "-55@s",
  },
  buttonContainer: {
    flex: 0.4,
    overflow: "visible",
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderColor: "white",
    borderWidth: "1@s",
    height: "35@s",
    width: "220@s",
    borderRadius: "4@s",
  },
  buttonText: {
    color: "#0aeeb5",
    fontSize: "15@s",
    fontWeight: "600",
    letterSpacing: 2,
  },
  dolby: {
    width: "100%",
    height: "120@s",
    opacity: "0.8@s",
  },
  gladiatorsLogo: {
    width: "47%",
    height: "140@s",
  },
  gladiatorsLogoContainer: {
    width: "100%",
    height: "125@s",
    alignItems: "center",
    marginTop: "70@s",
  },
  list: {
    alignItems: "center",
    width: "60%",
    marginTop: "5@s",
    flex: 7,
  },
  whLogo: {
    width: "90%",
    height: "100@s",
    marginRight: "15@s",
  },
  whLogoContainer: {
    width: "50%",
    height: "60@s",
    alignItems: "center",
    // backgroundColor: "red",
  },
});

export default episodeStyles;
