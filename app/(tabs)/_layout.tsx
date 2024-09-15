import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Tabs } from "expo-router";
import { colors } from "@/constants/colors";
import { StatusBar } from "expo-status-bar";

const BottomTabsLayout = () => {
  return (
    <>
      <StatusBar style="light" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: colors.dark.tabIconSelected,
          tabBarInactiveTintColor: colors.dark.tabIconDefault,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.dark.primaryBurgundy,
            // marginVertical: "auto",
            // borderRadius: 20,
            // marginBottom: 10,
            // marginHorizontal: 10,
            // paddingBottom: 5,
            // position: "absolute",
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
    </>
  );
};

export default BottomTabsLayout;
