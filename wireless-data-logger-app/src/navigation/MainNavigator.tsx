import { createStackNavigator } from "@react-navigation/stack";

import App from "@/screens/HomeScreen2";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={App} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
