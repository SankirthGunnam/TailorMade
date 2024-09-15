import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Dispatch, FC, SetStateAction } from "react";
import { Text, View } from "react-native";
import { Searchbar, Surface } from "react-native-paper";

interface IHeader {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

export const Header: FC<IHeader> = ({ searchValue, setSearchValue }) => {
  return (
    <View className="p-4 bg-[#8C8EFF]">
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row items-center gap-x-2">
          <Ionicons size={20} name="location" color="white" />
          <Text className="font-bold text-lg text-white">Bangalore</Text>
          <Ionicons size={16} name="chevron-down" color="white" />
        </View>
        <View className="flex flex-row items-center">
          <Link href="/qr-scanner" className="mr-5">
            <Ionicons size={24} name="qr-code" color="white" />
          </Link>
          <Link href="/notifications" className="mr-5">
            <Ionicons size={24} name="notifications" color="white" />
          </Link>
          <Link href="/cart">
            <Ionicons size={24} name="cart" color="white" />
          </Link>
        </View>
      </View>

      <View className="mt-2">
        <Surface elevation={1} style={{ borderRadius: 100 }}>
          <Searchbar
            style={{
              backgroundColor: "white",
              borderStyle: "solid",
              borderWidth: 1,
              borderColor: "#e0e0e0",
            }}
            value={searchValue}
            onChangeText={setSearchValue}
          />
        </Surface>
      </View>
    </View>
  );
}