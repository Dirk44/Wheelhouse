import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBrowserApp } from "@react-navigation/web";
import { Platform } from "react-native";

import DrawerNav from "./drawer";

const createApp = Platform.select({
  web: (config) => createBrowserApp(config, { history: "hash" }),
  default: (config) => createAppContainer(config),
});

export default createApp(
  createSwitchNavigator({
    Main: DrawerNav,
  })
);
