import { ScaledSheet } from "react-native-size-matters";

export const EpisodeStyles = ScaledSheet.create({
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
    opacity: 0.8,
    marginTop: "-5@s",
  },
  gladiatorsLogo: {
    width: "47%",
    height: "140@s",
    // backgroundColor: "red",
  },
  list: {
    alignItems: "center",
    width: "55%",
    // marginTop: "-10@s",
    flex: 7,
    // backgroundColor: "white",
  },
});
