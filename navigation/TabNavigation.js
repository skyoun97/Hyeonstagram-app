import React from "react";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Tabs/Home";
import Search from "../screens/Tabs/Search";
import Notifications from "../screens/Tabs/Notifications";
import Profile from "../screens/Tabs/Profile";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const TabNavigation = createBottomTabNavigator();

const StackFactory = ({ route }) => {
  const { initialRoute, customConfig } = route.params;
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={route.name}
        component={initialRoute}
        options={customConfig}
      />
    </Stack.Navigator>
  );
};

export default ({ navigation }) => {
  return (
    <TabNavigation.Navigator initialRouteName="Home">
      <TabNavigation.Screen
        name="Home"
        component={StackFactory}
        initialParams={{
          initialRoute: Home,
          customConfig: {
            title: "Home",
            headerStyle: {
              height: 80,
            },
            headerRight: () => (
              <TouchableOpacity>
                <Text>Go</Text>
              </TouchableOpacity>
            ),
          },
        }}
      />
      <TabNavigation.Screen
        name="Search"
        component={StackFactory}
        initialParams={{
          initialRoute: Search,
          custonConfig: { title: "Search" },
        }}
      />
      <TabNavigation.Screen
        name="Add"
        component={View}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            console.log("ADD");
            navigation.navigate("PhotoNavigation");
          },
        }}
      />
      <TabNavigation.Screen
        name="Notifications"
        component={StackFactory}
        initialParams={{
          initialRoute: Notifications,
          custonConfig: { title: "Notifications" },
        }}
      />
      <TabNavigation.Screen
        name="Profile"
        component={StackFactory}
        initialParams={{
          initialRoute: Profile,
          custonConfig: { title: "Profile" },
        }}
      />
    </TabNavigation.Navigator>
  );
};
