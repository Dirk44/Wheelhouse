import { ScaledSheet } from "react-native-size-matters";

const upcomingShowsStyles = ScaledSheet.create({
  container: {
    backgroundColor: "#000",
    resizeMode: "cover",
    flex: 1,
    justifyContent: "center",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "800@s",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "8%",
    marginTop: "-60@s",
  },
  descriptText: {
    fontSize: "13@s",
    color: "white",
    fontWeight: "500",
    textAlign: "center",
    lineHeight: "20@s",
    opacity: 0.9,
  },
  descriptTextContainer: {
    flex: 6,
    width: "85%",
  },
  text: {
    flex: 1,
    color: "#00aeef",
    fontSize: "22@s",
    fontWeight: "300",
    marginTop: "10%",
    // letterSpacing: "1@s",
  },
  textContainer: {
    flex: 1,
    marginTop: "-80@s",
  },
  whLogo: {
    // flex: 1,
    width: "90%",
    height: "255@s",
    marginTop: "25%",
    // marginRight: 5,
    overflow: "hidden",
  },
  whLogoContainer: {
    width: "100%",
    marginTop: "-80@s",
    marginRight: "15@s",
    // backgroundColor: "red",
    overflow: "hidden",
  },
  whLogoBottom: {
    width: "100%",
    height: "55@s",
    resizeMode: "contain",
  },
});

export default upcomingShowsStyles;
