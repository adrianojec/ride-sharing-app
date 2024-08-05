import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/navigation/RootStack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Font from "expo-font";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

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
        <Provider store={store}>
          <SafeAreaProvider>
            <RootStack />
          </SafeAreaProvider>
        </Provider>
      </NavigationContainer>
    </>
  );
}
