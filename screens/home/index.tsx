import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "./Header";
import { Surface } from "react-native-paper";
import { FC, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Clinics } from "./Clinics";
import { Medicals } from "./Medicals";
import { Link } from "expo-router";
import QuickActions from "@/components/QuickActions";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SafeAreaView>
      <View className="bg-white h-full w-full">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <QuickActions/>
          <View className="h-40" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

// const QuickActions = () => {
//   return (
//     <View className="mb-4 mt-6 flex flex-row items-center justify-evenly">
//       <Action title="My Health" screen="my_health" icon="heart" />
//       <Action title="My Doctor" screen="reports" icon="medkit" />
//       <Action
//         title="My Appointments"
//         screen="book_appointment"
//         icon="clipboard"
//       />
//       <Action title="Shop" screen="shop" icon="home" />
//     </View>
//   );
// };

// interface ActionProps {
//   title: string;
//   screen: string;
//   icon: "medkit" | "heart" | "clipboard" | "home";
// }

// const Action: FC<ActionProps> = ({ title, screen, icon }) => {
//   return (
//     <View className="flex items-center justify-center w-[25%]">
//       <Surface elevation={4} style={{ borderRadius: 100 }} className="mb-2">
//         <Link href={screen}>
//           <View className="h-20 w-20 bg-white rounded-full flex items-center justify-center border border-gray-200 overflow-hidden">
//             <Ionicons name={icon} size={32} color="#8C8EFF" />
//           </View>
//         </Link>
//       </Surface>
//       <Text className="text-black text-center">{title.split(" ")[0]}</Text>
//       <Text className="text-black text-center">{title.split(" ")[1]}</Text>
//     </View>
//   );
// };

export default Home;
