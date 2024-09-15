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
    <View className="h-14 px-4 pt-3 bg-primary-burgundy">
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row items-center gap-x-2">
          <Ionicons size={20} name="location" color="#FFFFF0" />
          <Text className="font-bold text-lg text-accent-ivory">Bangalore</Text>
          <Ionicons size={16} name="chevron-down" color="#FFFFF0" />
        </View>
        <View className="flex flex-row items-center">
          <Link href="/qr-scanner" className="mr-5">
            <Ionicons size={24} name="qr-code" color="#FFFFF0" />
          </Link>
          <Link href="/notifications" className="mr-5">
            <Ionicons size={24} name="notifications" color="#FFFFF0" />
          </Link>
          <Link href="/cart">
            <Ionicons size={24} name="cart" color="#FFFFF0" />
          </Link>
        </View>
      </View>

      {/* <View className="mt-2">
        <Surface elevation={1} style={{ borderRadius: 100 }}>
          <Searchbar
            style={{
              backgroundColor: "#FFFFF0", // Ivory background for the search bar
              borderStyle: "solid",
              borderWidth: 1,
              borderColor: "#D3D3D3", // Soft Grey border
            }}
            value={searchValue}
            onChangeText={setSearchValue}
          />
        </Surface>
      </View> */}
    </View>
  );
};
