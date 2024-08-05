import React from "react";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import HomeScreen from "../screens/Home/HomeScreen";
import RideDetailsScreen from "../screens/Ride/RideDetailsScreen";

export type RootStackParamList = {
  Home: undefined;
  RideDetails: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const hideHeader: StackNavigationOptions = { headerShown: false };
const modalPresentation: StackNavigationOptions = { presentation: "modal" };

const RootStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={hideHeader}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="RideDetails"
        component={RideDetailsScreen}
        options={modalPresentation}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
