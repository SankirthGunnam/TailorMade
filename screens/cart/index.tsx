import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export const Cart = () => {
  return (
    <View className="p-4 flex flex-1 items-center justify-center">
      <Ionicons size={100} name="cart" />
      <Text className="text-center">Your cart is empty</Text>
    </View>
  );
};
