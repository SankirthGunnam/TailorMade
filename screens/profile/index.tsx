import { colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen: FC = () => {
  return (
    <SafeAreaView
      style={{ backgroundColor: colors.dark.primaryBurgundy }}
      edges={["left", "right", "top"]}
    >
      <View className="bg-primary-black h-full w-full">
        <View className="h-14 px-4 flex flex-row items-center justify-center bg-primary-burgundy mb-2">
          <Text className="text-3xl text-accent-ivory">Profile</Text>
        </View>
        <ScrollView>
          <ProfileItem name="Personal Information" />
          <ProfileItem name="Lifestyle" />
          <ProfileItem name="Orders" />
          <ProfileItem name="Wallet" />
          <ProfileItem name="Chat Bot" />
          <ProfileItem name="Refer and Earn" />
          <ProfileItem name="App Settings" />
          <ProfileItem name="Help" />
          <ProfileItem name="Sign Out" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

interface ProfileItemProps {
  name: string;
}

const ProfileItem: FC<ProfileItemProps> = ({ name }) => {
  return (
    <View className="flex flex-row items-center justify-between border-b-[0.5px] border-gray-200 mx-4">
      <Text className="text-xl p-4 text-accent-ivory">{name}</Text>
      <Ionicons name="chevron-forward" size={18} color="black" />
    </View>
  );
};

export default ProfileScreen;
