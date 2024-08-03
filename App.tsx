import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/navigations/RootStack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Font from "expo-font";

export default function App(): React.ReactNode {
  const loadFonts = async () => {
    await Promise.all([
      Font.loadAsync({
        "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
      }),
    ]);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <>
      <StatusBar style="dark" animated />
      <NavigationContainer>
        <SafeAreaProvider>
          <RootStack />
        </SafeAreaProvider>
      </NavigationContainer>
    </>
  );
}
