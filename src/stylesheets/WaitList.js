import { StyleSheet } from "react-native";

const waitListStyles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    resizeMode: "cover",
    flex: 1,
    justifyContent: "center",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "auto",
    alignItems: "center",
    paddingTop: "8%",
  },
  input: {
    justifyContent: "center",
    width: "75%",
    height: 40,
    backgroundColor: "#f2f3f5",
    borderRadius: 10,
    borderColor: "rgba(37,37,37,255)",
    fontSize: 20,
    marginTop: "25%",
    paddingLeft: 8,
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
  text: {
    // flex: 1,
    color: "white",
    fontFamily: "HelveticaRegular",
    fontSize: 30,
    opacity: 0.9,
    marginTop: "30%",
  },
  whLogo: {
    // flex: 1,
    width: "80%",
    height: 130,
    resizeMode: "contain",
    // position: "absolute",
    // marginTop: "8%",
    // marginLeft: "10%",
  },
});

export default waitListStyles;
