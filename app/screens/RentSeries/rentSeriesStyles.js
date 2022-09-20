import { ScaledSheet } from "react-native-size-matters";

export const RentSeriesStyles = ScaledSheet.create({
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
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0aeeb5",
    height: "30@s",
    width: "300@s",
    borderRadius: 4,
    marginTop: "-20@s",
  },
  buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 2,
  },
  carsImageContainer: {
    flex: 1,
    width: "100%",
    height: "200@s",
  },
  carsImage: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    marginTop: "35@s",
  },
  descriptionText: {
    fontSize: 15,
    color: "white",
    fontWeight: "500",
    textAlign: "center",
    lineHeight: "20@s",
  },
  dolby: {
    width: "65%",
    height: "7@s",
    // marginTop: "3@s",
  },
  gladiatorsLogo: {
    width: "65%",
    height: "170@s",
    // padding: "5@s",
    resizeMode: "contain",
    marginTop: "-20@s",
  },
  whLogo: {
    width: "75%",
    height: "70@s",
    marginTop: "40@s",
  },
});
