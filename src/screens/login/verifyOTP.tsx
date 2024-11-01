import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function OTPVerificationScreen() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef([]); // Store refs for each input
  const navigation = useNavigation();

  const handleChangeText = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Automatically focus the next input
    if (text && index < otp.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleVerifyOTP = async () => {
    // Here you would typically make an API call to verify the OTP
    // Assuming OTP verification is successful, navigate to BottomTabsLayout
    navigation.navigate("authStack", { refresh: true });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Vesteera</Text>

      <Image
        source={require("../../../assets/images/splash.png")} // Replace with the correct path to your image file
        style={styles.image}
      />

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(input) => (inputs.current[index] = input)}
            style={styles.otpInput}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(text) => handleChangeText(text, index)}
            value={digit}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
        <Text style={styles.buttonText}>Verify OTP</Text>
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
    width: 200,
    height: 300,
    resizeMode: "contain",
    marginBottom: 40,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    width: "80%",
  },
  otpInput: {
    width: 45,
    height: 45,
    backgroundColor: "#FFF7E5",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 18,
    color: "#7D0C18",
  },
  button: {
    backgroundColor: "#FFD700",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
  },
  buttonText: {
    color: "#7D0C18",
    fontSize: 16,
    fontWeight: "bold",
  },
});
