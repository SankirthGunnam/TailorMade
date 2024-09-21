import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "./Header";
import { useState } from "react";
import { useNavigation } from "expo-router";
import FeaturedServicesBanner from "@/src/components/FeaturedServiceBanner";
import { colors } from "@/src/constants/colors";
import { StatusBar } from "expo-status-bar";
import QuickActions from "@/src/components/QuickActions";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SafeAreaView
      style={{ backgroundColor: colors.dark.primaryBurgundy }}
      edges={["left", "right", "top"]}
    >
      <StatusBar style="light" />
      <View className="bg-primary-black h-full w-full">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <FeaturedServicesBanner />
        <QuickActions />
      </View>
    </SafeAreaView>
  );
};

export default Home;
