import { ScaledSheet } from "react-native-size-matters";

const EpisodesCardStyles = ScaledSheet.create({
  container: {
    width: "100%",
    height: "140@s",
    justifyContent: "center",
    // marginTop: "-11@s",
    // backgroundColor: "blue",
  },
  image: {
    width: "160@s",
    height: "90@s",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },
  playBtn: {
    height: "45@s",
    width: "45@s",
  },
  textContainer: {
    width: "100%",
    marginTop: "6@s",
  },
  text: {
    textAlign: "left",
    color: "white",
    opacity: 0.9,
    fontSize: "11@s",
    fontWeight: "600",
    // marginTop: "2@s",
    fontFamily: "HelveticaRegular",
    letterSpacing: "1@s",
  },
  thumbContainer: {
    width: "100%",
    height: "auto",
    backgroundColor: "white",
    borderWidth: "2@s",
    borderRadius: "1@s",
    marginTop: "-30@s",
  },
});

export default EpisodesCardStyles;
