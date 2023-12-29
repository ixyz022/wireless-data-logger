import React from "react";
import "react-native-gesture-handler";
import { SafeAreaView, StyleSheet, Platform } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import MainBottomTabNavigator from "@/navigation/bottomTabs/MainBottomTabNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeArea}>
        <MainBottomTabNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});

export default App;
