import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

export default ({ route }) => {
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
