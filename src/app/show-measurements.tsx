import { Pressable, Text, View } from "react-native";
import axios from "axios";

const MeasurementsLayout = () => {
  const axiosInstance = axios.create({
    baseURL: "http://192.168.1.7:8000/measurement/process-video/",
    method: "post",
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" },
  });

  const getMeasurements = async () => {
    try {
      const response = await axiosInstance.post("");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Measurements page</Text>
      <Pressable
        onPress={() => getMeasurements()}
        className="py-20 bg-primary-burgundy mx-10 rounded-md flex items-center justify-center my-10"
      >
        <Text className="text-white">Get Measurements</Text>
      </Pressable>
    </View>
  );
};

export default MeasurementsLayout;
