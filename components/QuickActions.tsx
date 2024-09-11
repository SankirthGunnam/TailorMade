import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const gridItems = [
    { id: '1', title: 'QR Scanner', icon: 'qr-code', route: '/qr-scanner' },
    { id: '2', title: 'Read Prescription', icon: 'camera', route: '/prescription-reader' },
    { id: '3', title: 'Book Clinic Visit', icon: 'medical', route: '/book-clinic' },
    { id: '4', title: 'Book Home Visit', icon: 'home', route: '/book-home-visit' },
    { id: '5', title: 'Health Meter', icon: 'fitness', route: '/health-meter' },
  ];

export default function QuickActions() {
  const router = useRouter();

  const renderGridItem = ({ item }) => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => router.push(item.route)}
    >
      <Ionicons name={item.icon} size={40} color="#8C8EFF" />
      <Text style={styles.gridItemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={gridItems}
        renderItem={renderGridItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
  },
  gridItem: {
    flex: 1,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    margin: 5,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  gridItemText: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 14,
  },
});
