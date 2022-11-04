import { ScaledSheet } from "react-native-size-matters";

const inputFieldStyles = ScaledSheet.create({
  input: {
    justifyContent: "center",
    width: "75%",
    height: "10%",
    backgroundColor: "rgba(37,37,37,255)",
    // borderRadius: "10@s",
    borderColor: "rgba(37,37,37,255)",
    marginTop: "12@s",
    paddingLeft: "8@s",
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
});

export default inputFieldStyles;
