import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "../navigations/RootStack";

export default function App(): React.ReactNode {
  return (
    <>
      <StatusBar style="dark" animated />
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </>
  );
}
