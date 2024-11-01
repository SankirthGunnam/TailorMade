import Carousel from "@/src/components/Carousel";
import { router } from "expo-router";
import React from "react";
import { View, Text, Image, Pressable } from "react-native";

const AppIntroScreen = () => {
  const [carouselItemIndex, setCarouselItemIndex] = React.useState(0);

  const imageUrls = [
    {
      title: "Get body measured",
      url: require("../../../assets/images/get-body-measured.png"),
    },
    {
      title: "Find tailors",
      url: require("../../../assets/images/find-tailors.png"),
    },
    {
      title: "Place order",
      url: require("../../../assets/images/place-order.png"),
    },
  ];

  const carouselItems = imageUrls.map(({ title, url }) => (
    <View className="flex items-center justify-center">
      <Image source={url} className="w-[310px] h-[310px] mb-6" />
      <Text className="text-xl text-white mb-10">{title}</Text>
    </View>
  ));

  return (
    <View className="flex-1 bg-[#800020] items-center justify-center">
      {/* Illustration */}
      <View className="h-1/2 w-full">
        <Carousel
          items={carouselItems}
          setCarouselItemIndex={setCarouselItemIndex}
        />
      </View>
      {/* Get started to login / signup */}
      <View className="flex items-center justify-center h-12 mt-10">
        {carouselItemIndex === carouselItems.length - 1 && (
          <Pressable
            onPress={() => router.replace({ pathname: "/unAuthStack/login" })}
            className="bg-primary-gold rounded-lg px-3 py-2"
          >
            <Text className="text-primary-burgundy font-OpenSansBold">
              Get started
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default AppIntroScreen;
