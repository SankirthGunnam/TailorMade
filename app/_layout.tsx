import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
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
