import React, { Dispatch, FC, useState } from "react";
import { View, Text, TextInput, Alert } from "react-native";
import axios from "axios"; // or use fetch if preferred
import { server_url } from "@/src/constants/constants";
import { SetStateAction } from "jotai";
import PrimaryButton from "@/src/components/PrimaryButton";

interface PhoneNumberScreenProps {
  setOtpRequested: Dispatch<SetStateAction<boolean>>;
}

const PhoneNumberScreen: FC<PhoneNumberScreenProps> = ({ setOtpRequested }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const validatePhoneNumber = () => {
    // Basic validation: Indian phone numbers should be 10 digits
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handlePhoneNumberInput = (text: string) => {
    const numberRegex = /^[6-9][0-9]*$/;
    if (!numberRegex.test(text) && text !== "") {
      return;
    }
    setPhoneNumber(text);
  };

  const handleSendOtp = async () => {
    if (!validatePhoneNumber()) {
      Alert.alert(
        "Invalid Phone Number",
        "Please enter a valid 10-digit phone number."
      );
      return;
    }

    try {
      // Send OTP request to Django server
      await axios.post(`${server_url}/login/request-otp/`, {
        phone: `+91${phoneNumber}`,
        headers: { "Content-Type": "application/json" },
      });
      setOtpRequested(true);
    } catch (error) {
      console.error("Error sending OTP:", error);
      Alert.alert("Error", "Could not send OTP. Please try again later.");
    }
  };

  return (
    <View className="h-full w-full flex items-center justify-center">
      <View className="flex flex-row items-center bg-accent-ivory px-3 rounded-lg w-4/5 h-14">
        <Text className="font-OpenSansSemiBold text-primary-burgundy text-xl">
          + 91
        </Text>
        <View className="w-[1.5px] h-10 bg-primary-burgundy ml-3 mr-4" />
        <TextInput
          placeholder={isFocused ? "" : "Phone Number"}
          keyboardType="phone-pad"
          placeholderTextColor="#B76E79"
          onChangeText={handlePhoneNumberInput}
          value={phoneNumber}
          autoFocus
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          maxLength={10}
          className="font-OpenSansSemiBold text-primary-burgundy text-xl flex-1 h-full"
        />
      </View>
      <View className="w-4/5 mt-5">
        <PrimaryButton buttonText="Send OTP" onPress={handleSendOtp} />
      </View>
    </View>
  );
};

export default PhoneNumberScreen;
