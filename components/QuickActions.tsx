import React, { useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const COLORS = {
  primary: "#8C8EFF",
  background: "#f5f5f5",
  white: "#FFFFFF",
};

const measurementItems = [
  { id: '2', title: 'Scan Measurements', icon: 'camera', route: '/prescription-reader' },
  { id: '3', title: 'Enter Manually', icon: 'create-outline', route: '/book-clinic' },
];

export default function QuickActions() {
  const router = useRouter();

  const renderGridItem = useCallback(({ item }) => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => router.push(item.route)}
      accessibilityLabel={item.title}
    >
      <Ionicons name={item.icon} size={40} color={COLORS.primary} />
      <Text style={styles.gridItemText}>{item.title}</Text>
    </TouchableOpacity>
  ), [router]);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Measurements</Text>
      <FlatList
        data={measurementItems}
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
    backgroundColor: COLORS.background,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
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
    backgroundColor: COLORS.white,
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
  list: {
    marginBottom: 20,
  },
});