import "react-native-gesture-handler";
import { SafeAreaView, StyleSheet, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "@/navigation/MainNavigator";

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});

export default App;
