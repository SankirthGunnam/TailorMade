import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface FeaturedService {
  id: string;
  title: string;
  image: any; // Consider using a more specific type if possible
  route: string;
}

interface FeaturedServiceItemProps {
  title: string;
  image: any;
  onPress: () => void;
}

interface FeaturedServicesBannerProps {
  navigation: NavigationProp<any>; // Replace 'any' with your RootStackParamList if available
}

const featuredServices: FeaturedService[] = [
  {
    id: '1',
    title: 'Custom Suits',
    image: require('../assets/custom-suit.jpg'),
    route: 'CustomSuits',
  },
  {
    id: '2',
    title: 'Alterations',
    image: require('../assets/custom-suit.jpg'),
    route: 'Alterations',
  },
  {
    id: '3',
    title: 'Dressmaking',
    image: require('../assets/custom-suit.jpg'),
    route: 'Dressmaking',
  },
];

const FeaturedServiceItem: React.FC<FeaturedServiceItemProps> = ({ title, image, onPress }) => (
  <TouchableOpacity style={styles.serviceItem} onPress={onPress}>
    <Image source={image} style={styles.serviceImage} />
    <Text style={styles.serviceTitle}>{title}</Text>
  </TouchableOpacity>
);

const FeaturedServicesBanner: React.FC<FeaturedServicesBannerProps> = ({ navigation }) => {
  const renderItem = ({ item }: { item: FeaturedService }) => (
    <FeaturedServiceItem
      title={item.title}
      image={item.image}
      onPress={() => navigation.navigate(item.route)}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Featured Services</Text>
      <FlatList
        data={featuredServices}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  serviceItem: {
    width: 150,
    marginRight: 15,
    alignItems: 'center',
  },
  serviceImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  serviceTitle: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default FeaturedServicesBanner;