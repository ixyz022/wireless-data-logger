import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "@/screens/HomeScreen";
import TabThreeScreen from "@/screens/TabThreeScreen";

const Tab = createBottomTabNavigator();

export const MainBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      // screenOptions={{
      //   headerShown: false,
      // }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Bottom" component={TabThreeScreen} />
    </Tab.Navigator>
  );
};

export default MainBottomTabNavigator;
