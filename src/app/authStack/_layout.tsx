import { Stack } from "expo-router";

export default function AuthStackLayout() {
  console.log("inside authStack/_layout.tsx");
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="cart" />
      <Stack.Screen name="open-camera" />
      <Stack.Screen name="show-measurements" />
    </Stack>
  );
}
