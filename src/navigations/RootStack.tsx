import React from "react";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import HomeScreen from "../screens/Home/HomeScreen";

export type RootStackParamList = {
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: React.FC = () => {
  const hideHeader: StackNavigationOptions = { headerShown: false };

  return (
    <Stack.Navigator screenOptions={hideHeader}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
