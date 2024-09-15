import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "./Header";
import { FC, useState } from "react";
import { Link, useNavigation } from "expo-router";
import QuickActions from "@/components/QuickActions";
import FeaturedServicesBanner from "@/components/FeaturedServiceBanner";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View className="bg-white h-full w-full">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <FeaturedServicesBanner />
        <ScrollView showsVerticalScrollIndicator={false}>
          <QuickActions />
          <View className="h-40" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
