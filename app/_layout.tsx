import { Stack, useFocusEffect } from "expo-router";
import "../global.css";
import { useCallback } from "react";
import {
  setStatusBarBackgroundColor,
  setStatusBarStyle,
} from "expo-status-bar";
import { Platform } from "react-native";

export default function RootLayout() {
  useFocusEffect(
    useCallback(() => {
      if (Platform.OS === "android") {
        setStatusBarBackgroundColor("#800020", true); // Deep Burgundy
        setStatusBarStyle("light", true); // Set to light for better contrast
      }
    }, [])
  );

  return (
    <Stack
      initialRouteName="(tabs)"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#800020", // Deep Burgundy for header background
        },
        headerTitleStyle: {
          color: "#FFFFF0", // Ivory for header title
        },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="cart" />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
