import React, { useState } from "react";
import "react-native-gesture-handler";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Story from "../screens/Tabs/Story";
import Messages from "../screens/Messages/Messages";
import TabNavigation from "./TabNavigation";

const HomeNavigation = createMaterialTopTabNavigator();

export default () => {
  const [swipeEnabled, SetSwipeEnabled] = useState(true);
  return (
    <HomeNavigation.Navigator
      initialRouteName="TabNavigation"
      tabBar={(props) => <></>}
      swipeEnabled={swipeEnabled}
    >
      <HomeNavigation.Screen name="Story" component={Story} />
      <HomeNavigation.Screen
        name="TabNavigation"
        component={TabNavigation}
        initialParams={{ SetSwipeEnabled }}
      />
      <HomeNavigation.Screen name="Messages" component={Messages} />
    </HomeNavigation.Navigator>
  );
};
