import { Stack } from "expo-router";
import "../../global.css";
import { useFonts } from "expo-font";

export default function RootLayout() {
  const [] = useFonts({
    "OpenSans-Bold": require("../../assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-BoldItalic": require("../../assets/fonts/OpenSans-BoldItalic.ttf"),
    "OpenSans-ExtraBold": require("../../assets/fonts/OpenSans-ExtraBold.ttf"),
    "OpenSans-ExtraBoldItalic": require("../../assets/fonts/OpenSans-ExtraBoldItalic.ttf"),
    "OpenSans-Italic": require("../../assets/fonts/OpenSans-Italic.ttf"),
    "OpenSans-Light": require("../../assets/fonts/OpenSans-Light.ttf"),
    "OpenSans-LightItalic": require("../../assets/fonts/OpenSans-LightItalic.ttf"),
    "OpenSans-Medium": require("../../assets/fonts/OpenSans-Medium.ttf"),
    "OpenSans-MediumItalic": require("../../assets/fonts/OpenSans-MediumItalic.ttf"),
    "OpenSans-Regular": require("../../assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-SemiBold": require("../../assets/fonts/OpenSans-SemiBold.ttf"),
    "OpenSans-SemiBoldItalic": require("../../assets/fonts/OpenSans-SemiBoldItalic.ttf"),
  });

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
