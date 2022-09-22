import { ScaledSheet } from "react-native-size-matters";

const cardStyles = ScaledSheet.create({
    container: {
      width: "100%",
      height: 140,
      justifyContent: "center",
      // alignItems: "center",
      // marginTop: "1@s",
      // resizeMode: "cover",
      // backgroundColor: "white",
    },
    image: {
      width: 165,
      height: 90,
      justifyContent: "center",
      alignItems: "center",
      resizeMode: "cover",
      // marginTop: "20@s",
    },
    textContainer: {
      width: "100%",
      marginTop: "6@s",
      // backgroundColor: "red",
    },
    text: {
      textAlign: "left",
      color: "white",
      opacity: 1,
      fontSize: "11@s",
      fontWeight: "600",
      marginTop: "2@s",
      fontFamily: "HelveticaRegular",
      letterSpacing: 1,
      // marginLeft: 5,
      // paddingTop: 2,
      // backgroundColor: "red",
    },
    thumbContainer: {
      width: "65%",
      height: "auto",
      backgroundColor: "white",
      borderWidth: 2,
      borderColor: "white",
      borderRadius: 1,
    },
  });

  module.exports = cardStyles;