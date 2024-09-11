import { Stack, useFocusEffect } from "expo-router";
import "../global.css";
import { useCallback } from "react";
import {
  setStatusBarBackgroundColor,
  setStatusBarStyle,
} from "expo-status-bar";

export default function RootLayout() {
  useFocusEffect(
    useCallback(() => {
      setStatusBarBackgroundColor("#8C8EFF", true);
      setStatusBarStyle("light", true);
    }, [])
  );

  return (
    <Stack
      initialRouteName="(tabs)"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#8C8EFF",
        },
        headerTitleStyle: {
          color: "white",
        },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="cart" />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
