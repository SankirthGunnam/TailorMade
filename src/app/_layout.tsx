import { Stack } from "expo-router";
import "../../global.css";

export default function RootLayout() {
  const isSignedIn = false; // Placeholder for authentication state, replace with jotai atom
  const isOnboardingCompleted = false; // Placeholder for onboarding state, replace with jotai atom

  return (
    <>
      {isSignedIn ? (
        <Stack
          initialRouteName="index"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#800020", // Deep Burgundy for header background
            },
            headerTitleStyle: {
              color: "#FFFFF0", // Ivory for header title
            },
          }}
        >
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="cart" />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="open-camera" options={{ headerShown: false }} />
          <Stack.Screen name="show-measurements" />
        </Stack>
      ) : (
        <Stack initialRouteName={isOnboardingCompleted ? "login" : "index"}>
          <Stack.Screen name="index" />
          <Stack.Screen name="login" />
        </Stack>
      )}
    </>
  );
}
