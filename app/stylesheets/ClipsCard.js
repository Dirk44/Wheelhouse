import { ScaledSheet } from "react-native-size-matters";

const clipsCardStyles = ScaledSheet.create({
  container: {
    width: "100%",
    height: "125@s",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "25@s",
    // resizeMode: "cover",
    // backgroundColor: "white",
  },
  image: {
    width: "185@s",
    height: "101@s",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
    // marginTop: "20@s",
  },
  playBtn: {
    height: "55@s",
    width: "55@s",
    opacity: "0.7@s",
  },
  textContainer: {
    justifyContent: "center",
    width: "100%",
    height: "25@s",
    marginTop: "9@s",
    // backgroundColor: "red",
  },
  text: {
    textAlign: "center",
    color: "white",
    opacity: 0.9,
    fontSize: "17@s",
    // fontWeight: "800",
    // marginTop: "1@s",
    fontFamily: "Helvetica87HeavyCondensed",
    // letterSpacing: -1,
    // marginLeft: 5,
    // paddingTop: "2%",
    // backgroundColor: "red",
  },
  thumbContainer: {
    width: "80%",
    height: "auto",
    backgroundColor: "white",
    borderWidth: 3,
    // borderColor: "white",
    borderRadius: 2,
  },
});

module.exports = clipsCardStyles;
