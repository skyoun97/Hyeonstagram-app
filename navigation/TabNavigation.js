import React from "react";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../screens/Tabs/Search";
import Notifications from "../screens/Tabs/Notifications";
import Profile from "../screens/Tabs/Profile";
import { View } from "react-native";
import MessagesLink from "../components/MessagesLink";
import StackFactory from "../components/StackFactory";
import Home from "../screens/Tabs/Home";
import { createStackNavigator } from "@react-navigation/stack";

const TabNavigation = createBottomTabNavigator();

const HomeStackNavigation = createStackNavigator();

const HomeStack = () => (
  <HomeStackNavigation.Navigator>
    <HomeStackNavigation.Screen
      name="Home"
      component={Home}
      options={{
        title: "Home",
        headerRight: () => <MessagesLink />,
      }}
    />
  </HomeStackNavigation.Navigator>
);

export default ({ navigation }) => {
  return (
    <TabNavigation.Navigator initialRouteName="Home">
      <TabNavigation.Screen name="Home" component={HomeStack} />
      {/* <TabNavigation.Screen
        name="Home"
        component={StackFactory}
        initialParams={{
          initialRoute: Home,
          customConfig: {
            title: "Home",
            headerRight: () => <MessagesLink />,
          },
        }}
      /> */}
      <TabNavigation.Screen
        name="Search"
        component={StackFactory}
        initialParams={{
          initialRoute: Search,
          customConfig: { title: "Search" },
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
          customConfig: { title: "Notifications" },
        }}
      />
      <TabNavigation.Screen
        name="Profile"
        component={StackFactory}
        initialParams={{
          initialRoute: Profile,
          customConfig: { title: "Profile" },
        }}
      />
    </TabNavigation.Navigator>
  );
};
