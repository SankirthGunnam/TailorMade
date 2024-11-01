import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios"; // or use fetch if preferred
import { server_url } from "@/src/constants/constants";

export default function PhoneNumberScreen() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigation = useNavigation();

  const validatePhoneNumber = () => {
    // Basic validation: Indian phone numbers should be 10 digits
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleSendOtp = async () => {
    if (!validatePhoneNumber()) {
      Alert.alert(
        "Invalid Phone Number",
        "Please enter a valid 10-digit phone number."
      );
      return;
    }

    // Immediately navigate to the OTP screen
    navigation.navigate("otp-screen");

    try {
      // Send OTP request to Django server
      await axios.post(`${server_url}/login/request-otp/`, {
        phone: `+91${phoneNumber}`,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error sending OTP:", error);
      Alert.alert("Error", "Could not send OTP. Please try again later.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Vesteera</Text>

      <Image
        source={require("../../../assets/images/splash.png")} // Replace with the path to your image file
        style={styles.image}
      />

      <View style={styles.inputContainer}>
        <Text style={styles.countryCode}>+ 91</Text>
        <TextInput
          style={styles.phoneInput}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          placeholderTextColor="#D8AFAF"
          onChangeText={setPhoneNumber}
          value={phoneNumber}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7D0C18",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    fontSize: 36,
    color: "#FFD700",
    fontWeight: "bold",
    marginBottom: 40,
  },
  image: {
    width: 200, // Adjust according to your image size
    height: 300,
    resizeMode: "contain",
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF7E5",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 20,
    width: "100%",
  },
  countryCode: {
    fontSize: 16,
    color: "#7D0C18",
    marginRight: 10,
  },
  phoneInput: {
    flex: 1,
    fontSize: 16,
    color: "#7D0C18",
  },
  button: {
    backgroundColor: "#FFD700",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#7D0C18",
    fontSize: 16,
    fontWeight: "bold",
  },
});
