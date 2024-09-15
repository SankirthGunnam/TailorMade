import React, { useState, useRef } from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  PanResponder,
  Animated,
  TouchableOpacity,
} from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";

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
      "https://laxmitailors.com/wp-content/uploads/2016/05/alteration-banner.jpg",
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
const SWIPE_THRESHOLD = 120;

const FeaturedServicesBanner: React.FC<FeaturedServicesBannerProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pan = useRef(new Animated.ValueXY()).current;
  const navigation = useNavigation<NavigationProp<any>>();

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x }], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: (_, gestureState) => {
      if (Math.abs(gestureState.dx) > SWIPE_THRESHOLD) {
        if (gestureState.dx > 0) {
          goToPrevious();
        } else {
          goToNext();
        }
      }
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start();
    },
  });

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : featuredServices.length - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < featuredServices.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePress = () => {
    navigation.navigate(featuredServices[currentIndex].route);
  };

  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateX: pan.x }] }]}
      {...panResponder.panHandlers}
    >
      <TouchableOpacity onPress={handlePress} activeOpacity={0.9}>
        <Image
          source={{ uri: featuredServices[currentIndex].image }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.textOverlay}>
          <Text style={styles.title}>{featuredServices[currentIndex].title}</Text>
          <Text style={styles.description}>
            {featuredServices[currentIndex].description}
          </Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: width,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  description: {
    fontSize: 14,
    color: "white",
  },
});

export default FeaturedServicesBanner;