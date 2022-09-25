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
      fontSize: 14,
      color: "white",
      fontWeight: "500",
      textAlign: "center",
      lineHeight: "20@s",
      opacity: 0.9,
    },
    text: {
      flex: 1,
      color: "#00aeef",
      fontSize: 24,
      fontWeight: "300",
      marginTop: "10%",
      letterSpacing: 1,
    },
    whLogo: {
      // flex: 1,
      width: "90%",
      height: "255@s",
      marginTop: "25%",
      // marginRight: 5,
      overflow: "hidden",
    },
    whLogoBottom: {
      width: "100%",
      height: "55@s",
      resizeMode: "contain",
    },
  });

  module.exports = upcomingShowsStyles;