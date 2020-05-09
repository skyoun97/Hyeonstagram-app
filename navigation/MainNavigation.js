import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PhotoNavigation from "./PhotoNavigation";
import HomeNavigation from "./HomeNavigation";

const MainNavigation = createStackNavigator();

export default () => (
  <NavigationContainer>
    <MainNavigation.Navigator
      initialRouteName="HomeNavigation"
      headerMode="none"
      mode="modal"
    >
      <MainNavigation.Screen name="HomeNavigation" component={HomeNavigation} />
      <MainNavigation.Screen
        name="PhotoNavigation"
        component={PhotoNavigation}
      />
    </MainNavigation.Navigator>
  </NavigationContainer>
);
