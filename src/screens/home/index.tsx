import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { MaterialIcons, FontAwesome, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          <MaterialIcons name="location-on" size={24} color="#FFD700" />
          <Text style={styles.locationText}>Hosaplaya</Text>
        </View>
        <Image
          source={require("../../../assets/images/avatar.png")} // Replace with the path to your image file
          style={styles.profileImage}
        />
      </View>

      {/* Greeting Section */}
      <Text style={styles.greeting}>
        Hello <Text style={styles.greetingHighlight}>Srikar</Text>
      </Text>

      {/* Capture Measurements Card */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/open-camera")}
      >
        <Text style={styles.cardTitle}>Perfect Fit Begins Here</Text>
        <Text style={styles.cardSubtitle}>Capture Your Measurements!</Text>
        <Ionicons
          name="arrow-forward-circle"
          size={24}
          color="#FFF"
          style={styles.cardIcon}
        />
      </TouchableOpacity>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="#FFF7E5" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Tailors"
          placeholderTextColor="#FFF7E5"
        />
        <Ionicons name="mic" size={20} color="#FFF7E5" />
      </View>

      {/* Tailor Shops List */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.tailorCard}>
          <Image
            source={{ uri: "https://via.placeholder.com/300x200" }} // Replace with tailor shop image URL
            style={styles.tailorImage}
          />
          <Text style={styles.tailorTitle}>Damu’s Boutique</Text>
          <View style={styles.tailorActions}>
            <TouchableOpacity>
              <MaterialIcons name="location-pin" size={24} color="#FFD700" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="phone" size={24} color="#FFD700" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.tailorCard}>
          <Image
            source={{ uri: "https://via.placeholder.com/300x200" }} // Replace with tailor shop image URL
            style={styles.tailorImage}
          />
          <Text style={styles.tailorTitle}>Fashion Hub</Text>
          <View style={styles.tailorActions}>
            <TouchableOpacity>
              <MaterialIcons name="location-pin" size={24} color="#FFD700" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="phone" size={24} color="#FFD700" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.tailorCard}>
          <Image
            source={{ uri: "https://via.placeholder.com/300x200" }} // Replace with tailor shop image URL
            style={styles.tailorImage}
          />
          <Text style={styles.tailorTitle}>Fashion Hub</Text>
          <View style={styles.tailorActions}>
            <TouchableOpacity>
              <MaterialIcons name="location-pin" size={24} color="#FFD700" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="phone" size={24} color="#FFD700" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.tailorCard}>
          <Image
            source={{ uri: "https://via.placeholder.com/300x200" }} // Replace with tailor shop image URL
            style={styles.tailorImage}
          />
          <Text style={styles.tailorTitle}>Fashion Hub</Text>
          <View style={styles.tailorActions}>
            <TouchableOpacity>
              <MaterialIcons name="location-pin" size={24} color="#FFD700" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="phone" size={24} color="#FFD700" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.tailorCard}>
          <Image
            source={{ uri: "https://via.placeholder.com/300x200" }} // Replace with tailor shop image URL
            style={styles.tailorImage}
          />
          <Text style={styles.tailorTitle}>Fashion Hub</Text>
          <View style={styles.tailorActions}>
            <TouchableOpacity>
              <MaterialIcons name="location-pin" size={24} color="#FFD700" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="phone" size={24} color="#FFD700" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Additional tailor shop cards can be added here */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7D0C18",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    color: "#FFD700",
    fontSize: 16,
    marginLeft: 5,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  greeting: {
    fontSize: 28,
    color: "#FFF",
    marginVertical: 10,
  },
  greetingHighlight: {
    color: "#FFD700",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#9D1B1E",
    borderRadius: 10,
    padding: 20,
    marginVertical: 15,
    alignItems: "flex-start",
  },
  cardTitle: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
  },
  cardSubtitle: {
    color: "#FFF7E5",
    marginTop: 5,
  },
  cardIcon: {
    position: "absolute",
    right: 15,
    bottom: 15,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#9D1B1E",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 10,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    color: "#FFF",
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  tailorCard: {
    backgroundColor: "#9D1B1E",
    borderRadius: 10,
    marginVertical: 10,
    overflow: "hidden",
    position: "relative",
  },
  tailorImage: {
    width: "100%",
    height: 150,
  },
  tailorTitle: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
    padding: 10,
  },
  tailorActions: {
    flexDirection: "row",
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});
