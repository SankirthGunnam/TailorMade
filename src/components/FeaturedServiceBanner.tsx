import React from "react";
import { View, Dimensions, Text } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import FastImage from "react-native-fast-image";
import { LinearGradient } from "expo-linear-gradient";

interface FeaturedService {
  id: string;
  title: string;
  image: string;
  description: string;
  route: string;
}

interface FeaturedServicesBannerProps {}

const featuredServices: FeaturedService[] = [
  {
    id: "1",
    title: "Custom Suits",
    image:
      "https://mohancustomtailors.com/wp-content/uploads/2020/03/HEADER_Bespoke-Alterations_Garment-Tailoring-Repair_New-York-Manhattan_Mohans-Custom-Tailors.jpg",
    description: "Tailored suits for the perfect fit",
    route: "CustomSuits",
  },
  {
    id: "2",
    title: "Alterations",
    image:
      "https://www.suitsexpert.com/wp-content/uploads/suit-alterations-and-tailoring-cover-1080x675.jpg",
    description: "Expert alterations for all garments",
    route: "Alterations",
  },
  {
    id: "3",
    title: "Dressmaking",
    image:
      "https://thumbs.dreamstime.com/b/fashion-designer-tailor-working-studio-freelancer-design-draft-takes-measure-dressmakers-dummy-30996593.jpg",
    description: "Custom dresses for any occasion",
    route: "Dressmaking",
  },
];

const { width } = Dimensions.get("window");

const FeaturedServicesBanner: React.FC<FeaturedServicesBannerProps> = () => {
  return (
    <View style={{ flex: 1 }} className="w-full h-full">
      <Carousel
        loop
        width={width}
        height={width / 1.8}
        autoPlay={true}
        data={featuredServices}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View className="relative">
            <LinearGradient
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 0.8 }}
              colors={["#fff0", "black"]}
              className="w-full h-full"
            >
              <View className="absolute top-0 left-0 w-full h-full -z-10">
                <FastImage
                  source={{ uri: item.image }}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="cover"
                />
              </View>
              <View className="absolute px-2 py-4 w-full bottom-0">
                <Text className="text-white">{item.description}</Text>
              </View>
            </LinearGradient>
          </View>
        )}
      />
    </View>
  );
};

export default FeaturedServicesBanner;
