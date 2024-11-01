import { Stack } from "expo-router";
import "../../global.css";
import { useFonts } from "expo-font";
import { useAtomValue } from "jotai";
import { isSignedInAtom } from "../atoms/auth";

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
    "Caveat-Bold": require("../../assets/fonts/Caveat-Bold.ttf"),
    "Caveat-Regular": require("../../assets/fonts/Caveat-Regular.ttf"),
    "Caveat-Medium": require("../../assets/fonts/Caveat-Medium.ttf"),
    "Caveat-SemiBold": require("../../assets/fonts/Caveat-SemiBold.ttf"),
  });

  const isSignedIn = useAtomValue(isSignedInAtom); // Placeholder for authentication state, replace with jotai atom

  console.log("is signed in:", isSignedIn);

  return (
    <Stack
      initialRouteName={isSignedIn ? "authStack" : "unAuthStack"}
      screenOptions={{
        headerShown: false,
      }}
    >
      {isSignedIn ? (
        <Stack.Screen name="authStack" />
      ) : (
        <Stack.Screen name="unAuthStack" />
      )}
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
