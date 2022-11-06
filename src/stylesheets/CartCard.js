import { ScaledSheet } from "react-native-size-matters";

const cartCardStyles = ScaledSheet.create({
  container: {
    width: "80%",
    height: "230@s",
    backgroundColor: "#1a1a1a",
  },
  exclusive: {
    color: "#0aeeb5",
    fontSize: "11@s",
    fontWeight: "700",
    marginTop: "5@s",
  },
  finalTotal: {
    width: "93%",
    height: "30@s",
    backgroundColor: "#313131",
    flexDirection: "row",
    justifyContent: "flex-end",
    borderTopColor: "grey",
    borderTopWidth: 2,
    borderBottomColor: "grey",
    borderBottomWidth: 2,
    alignItems: "center",
  },
  preOrderText: {
    color: "#0aeeb5",
    fontSize: "7@s",
    fontWeight: "700",
    marginLeft: "5@s",
  },
  productContainer: {
    width: "100%",
    height: "130@s",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "red",
  },
  productImageContainer: {
    width: "50%",
    height: "100%",
    // backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    width: "85%",
    height: "85%",
    borderColor: "white",
    borderWidth: 1,
  },
  productNameContainer: {
    width: "50%",
  },
  productName: {
    color: "white",
    fontSize: "16@s",
    // marginLeft: "8@s",
    fontFamily: "HelveticaRegular",
  },
  productSeasonName: {
    color: "#0aeeb5",
    fontSize: "10@s",
    fontWeight: "700",
    // marginTop: "3@s",
  },
  productDescription: {
    width: "90%",
    color: "white",
    fontSize: "8@s",
    fontWeight: "600",
    marginTop: "8@s",
  },
  pricesContainer: {
    width: "100%",
    height: "110@s",
    alignItems: "center",
    // backgroundColor: "red",
  },
  subTotalText: {
    color: "white",
    fontSize: "13@s",
    fontWeight: "800",
    marginLeft: "5@s",
  },
  subTotalTextPrice: {
    color: "white",
    fontSize: "13@s",
    fontWeight: "800",
    marginRight: "5@s",
  },
  total: {
    width: "93%",
    height: "30@s",
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    // borderBottomColor: "grey",
    // borderBottomWidth: 2,
    borderTopColor: "grey",
    borderTopWidth: 2,
  },
  totalPriceText: {
    color: "#0aeeb5",
    fontSize: "13@s",
    fontWeight: "800",
    marginRight: "5@s",
  },
});

export default cartCardStyles;
