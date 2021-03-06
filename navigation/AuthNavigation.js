import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from "../screens/Auth/Signup";
import Confirm from "../screens/Auth/Confirm";
import AuthHome from "../screens/Auth/AuthHome";
import Login from "../screens/Auth/Login";

const AuthNavigation = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <AuthNavigation.Navigator initialRouteName="AuthHome" headerMode="none">
        <AuthNavigation.Screen name="AuthHome" component={AuthHome} />
        <AuthNavigation.Screen name="Signup" component={Signup} />
        <AuthNavigation.Screen name="Login" component={Login} />
        <AuthNavigation.Screen name="Confirm" component={Confirm} />
      </AuthNavigation.Navigator>
    </NavigationContainer>
  );
};
