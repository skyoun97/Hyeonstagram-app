import React from "react";
import "react-native-gesture-handler";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Story from "../screens/Tabs/Story";
import Messages from "../screens/Messages/Messages";
import TabNavigation from "./TabNavigation";

const HomeNavigation = createMaterialTopTabNavigator();

export const navigationRef = React.createRef();

export const jumpTo = (name, params) => {
  navigationRef.current?.jumpTo(name, params);
};
export default () => (
  <HomeNavigation.Navigator
    initialRouteName="TabNavigation"
    tabBar={(props) => <></>}
  >
    <HomeNavigation.Screen name="Story" component={Story} />
    <HomeNavigation.Screen name="TabNavigation" component={TabNavigation} />
    <HomeNavigation.Screen name="Messages" component={Messages} />
  </HomeNavigation.Navigator>
);
