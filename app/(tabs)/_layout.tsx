import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Tabs } from "expo-router";
import { colors } from "@/constants/colors";

const BottomTabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.dark.tint,
        tabBarInactiveTintColor: "#000",
        headerShown: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: "#fff",
          marginVertical: "auto",
          borderRadius: 20,
          marginBottom: 10,
          marginHorizontal: 10,
          paddingBottom: 5,
          position: "absolute",
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              size={20}
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
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              size={20}
              name={focused ? "person" : "person-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default BottomTabsLayout;
