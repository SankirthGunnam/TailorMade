import { Tabs } from "expo-router";
import { colors } from "@/src/constants/colors";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TabBarIcon } from "@/src/components/navigation/TabBarIcon";

const BottomTabsLayout = () => {
  const bottomInset = useSafeAreaInsets().bottom;
  const paddingBottom = bottomInset + 10;
  const tabBarHeight = Platform.OS === "android" ? 68 : 68 + bottomInset;

  return (
    <>
      <StatusBar style="light" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: colors.dark.tabIconSelected,
          tabBarInactiveTintColor: colors.dark.tabIconDefault,
          headerShown: false,
          tabBarStyle: {
            height: tabBarHeight,
            paddingBottom: paddingBottom,
            backgroundColor: colors.dark.primaryBurgundy,
          },
          tabBarHideOnKeyboard: true,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({
              color,
              focused,
            }: {
              color: string;
              focused: boolean;
            }) => (
              <TabBarIcon
                name={focused ? "home" : "home-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({
              color,
              focused,
            }: {
              color: string;
              focused: boolean;
            }) => (
              <TabBarIcon
                name={focused ? "person" : "person-outline"}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default BottomTabsLayout;
