import React from "react";

import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { hamburgerStyles } from "../stylesheets";

const Hamburger = () => {
  const navigation = useNavigation();
  const openMenu = () => navigation.openDrawer();
  return (
    <Entypo
      name="menu"
      color="#b8b8b8"
      size={50}
      style={hamburgerStyles.menuIcon}
      onPress={openMenu}
    />
  );
};

export default Hamburger;
