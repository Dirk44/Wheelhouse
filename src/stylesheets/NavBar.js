import { StyleSheet } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

const navBarStyles = ScaledSheet.create({
  hamburger: {
    marginLeft: "6%",
    opacity: 0.7,
    justifyContent: "flex-start",
    zIndex: "9@s",
    left: "10@s",
  },
  header: {
    // flex: 1,
    flexDirection: "row",
    width: "100%",
    height: "60@s",
    backgroundColor: "rgba(37,37,37,255)",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navBar: {
    fontFamily: "Helvetica87Bold",
    color: "white",
    fontSize: "16@s",
    fontWeight: "900",
    marginRight: "3%",
    opacity: 0.8,
    top: 0,
  },
});

export default navBarStyles;
