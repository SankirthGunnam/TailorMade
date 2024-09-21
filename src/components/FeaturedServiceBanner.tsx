import React from "react";
import { View, Dimensions, Text } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import FastImage from "react-native-fast-image";

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
        height={width / 2}
        autoPlay={true}
        data={featuredServices}
        scrollAnimationDuration={1000}
        // onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={({ item, index }) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: "center",
            }}
          >
            <FastImage
              source={{ uri: item.image }}
              style={{ width: "100%", height: "100%" }}
            />
            <Text className="text-white text-sm">{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default FeaturedServicesBanner;
