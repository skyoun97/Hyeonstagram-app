import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SelectPhoto from "../screens/Photo/SelectPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";

const UploadNavigation = createStackNavigator();

const PhotoNavigation = createMaterialTopTabNavigator();

const PhotoComponent = () => (
  <PhotoNavigation.Navigator headerMode="none" tabBarPosition="bottom">
    <PhotoNavigation.Screen name="SelectPhoto" component={SelectPhoto} />
    <PhotoNavigation.Screen name="TakePhoto" component={TakePhoto} />
  </PhotoNavigation.Navigator>
);

export default () => (
  <UploadNavigation.Navigator initialRouteName="PhotoComponent">
    <UploadNavigation.Screen name="PhotoComponent" component={PhotoComponent} />
    <UploadNavigation.Screen name="UploadPhoto" component={UploadPhoto} />
  </UploadNavigation.Navigator>
);
