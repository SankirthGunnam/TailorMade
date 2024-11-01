import { router } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

export default function Index() {
  const isSignedIn = false; // Placeholder for authentication state, replace with jotai atom

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      isSignedIn
        ? router.replace("/authStack")
        : router.replace("/unAuthStack");
    }, 0);
    return () => clearTimeout(timeoutId);
  }, []);

  return <View className="h-full w-full bg-primary-burgundy" />;
}
