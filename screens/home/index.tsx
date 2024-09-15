import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "./Header";
import { FC, useState } from "react";
import { Link, useNavigation } from "expo-router";
import QuickActions from "@/components/QuickActions";
import FeaturedServicesBanner from "@/components/FeaturedServiceBanner";
import { colors } from "@/constants/colors";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{ backgroundColor: colors.dark.primaryBurgundy }}
      edges={["left", "right", "top"]}
    >
      <View className="bg-primary-black h-full w-full">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <FeaturedServicesBanner />
      </View>
    </SafeAreaView>
  );
};

export default Home;
