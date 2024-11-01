import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import PhoneNumberScreen from "./phoneNumber";
import OTPInput from "./otpInput";

const LoginScreen = () => {
  const [otpRequested, setOtpRequested] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <View className="h-full w-full flex items-center justify-center bg-primary-burgundy">
      <View className="absolute h-full w-full">
        <View className="h-[490px] flex items-center mt-16">
          <Text className="font-CaveatRegular text-primary-gold text-[64px] ">
            Vesteera
          </Text>
          <Image
            source={require("../../../assets/images/splash.png")} // Replace with the path to your image file
            style={{ width: 300, height: 400 }}
          />
        </View>
      </View>
      <View className="h-[250px] w-full px-10 items-center justify-center absolute bottom-0">
        {otpRequested ? (
          <OTPInput
            phoneNumber={phoneNumber}
            setOtpRequested={setOtpRequested}
          />
        ) : (
          <PhoneNumberScreen
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            setOtpRequested={setOtpRequested}
          />
        )}
      </View>
    </View>
  );
};

export default LoginScreen;
