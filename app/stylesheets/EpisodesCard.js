import { ScaledSheet } from "react-native-size-matters";

const EpisodesCardStyles = ScaledSheet.create({
  container: {
    width: "100%",
    height: 140,
    justifyContent: "center",
  },
  image: {
    width: 165,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },
  textContainer: {
    width: "100%",
    marginTop: "6@s",
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
  },
  thumbContainer: {
    width: "100%",
    height: "auto",
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 1,
  },
});

module.exports = EpisodesCardStyles;
