// item_category.js
import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import { useLocalSearchParams } from "expo-router";

// Mock data for medicines (replace with actual data from your API)
const medicines = [
  {
    id: "1",
    name: "Paracetamol",
    description: "Pain reliever and fever reducer",
    image: "url_to_image",
  },
  {
    id: "2",
    name: "Ibuprofen",
    description: "Anti-inflammatory pain reliever",
    image: "url_to_image",
  },
  // Add more medicines
];

export default function CategoryItemsPage() {
  const { category } = useLocalSearchParams();
  const [cart, setCart] = useState({});
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL =
    "https://crispy-goggles-5x7px9j69wf4964-8000.app.github.dev/api/items";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setMedicines(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const addToCart = (id) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1,
    }));
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: Math.max((prevCart[id] || 0) - 1, 0),
    }));
  };

  const renderMedicineItem = ({ item }) => {
    return (
      <Card style={styles.card}>
        {/* TODO: Temporarily storing image url in packaging, should change to image */}
        <Card.Cover source={{ uri: item.packaging }} />
        {/* <Card.Cover source={{ uri: item.image || 'https://images.apollo247.in/pub/media/catalog/product/a/u/aug0004_1.jpg'}} /> */}
        <Card.Content>
          <Title>{item.name}</Title>
          <Paragraph>{item.description.slice(0, 150) + "..."}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => removeFromCart(item.id)}>-</Button>
          <Paragraph>{cart[item.id] || 0}</Paragraph>
          <Button onPress={() => addToCart(item.id)}>+</Button>
        </Card.Actions>
      </Card>
    );
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={medicines}
        renderItem={renderMedicineItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
  card: {
    marginBottom: 10,
  },
});
