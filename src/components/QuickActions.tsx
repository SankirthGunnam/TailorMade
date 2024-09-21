import React, { FC, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../constants/colors";

const COLORS = {
  primary: "#8C8EFF",
  background: "#f5f5f5",
  white: "#FFFFFF",
};

type MeasurementItemType = {
  id: string;
  title: string;
  icon: "camera" | "create-outline";
  route: string;
};

const measurementItems: MeasurementItemType[] = [
  {
    id: "2",
    title: "Scan Measurements",
    icon: "camera",
    route: "/open-camera",
  },
  {
    id: "3",
    title: "Enter Manually",
    icon: "create-outline",
    route: "/show-measurements",
  },
];

export default function QuickActions() {
  return (
    <View className="flex flex-1 bg-primary-black p-5 mt-10">
      <Text className="text-accent-softGrey text-xl my-2">Measurements</Text>
      {measurementItems.map((item) => (
        <ActionItem key={item.id} item={item} />
      ))}
    </View>
  );
}

interface ActionItemProps {
  item: MeasurementItemType;
}

const ActionItem: FC<ActionItemProps> = ({ item }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      className="h-36 justify-center items-center bg-primary-burgundy rounded-lg mx-1 my-2 p-2 shadow"
      onPress={() => router.push(item.route)}
      accessibilityLabel={item.title}
    >
      <Ionicons name={item.icon} size={40} color={colors.dark.accentRoseGold} />
      <Text className="mt-2 text-center text-base text-accent-ivory">
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};
