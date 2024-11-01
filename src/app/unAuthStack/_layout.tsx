import { router, Stack } from "expo-router";
import { useEffect } from "react";

export default function UnAuthStackLayout() {
  const isOnboardingCompleted = false; // Placeholder for onboarding state, replace with jotai atom

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      isOnboardingCompleted
        ? router.navigate({ pathname: "/unAuthStack/login" })
        : router.navigate({ pathname: "/unAuthStack" });
    }, 0);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Stack
      initialRouteName={isOnboardingCompleted ? "login" : "index"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
    </Stack>
  );
}
