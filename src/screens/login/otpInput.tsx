import React, {
  useState,
  useRef,
  Dispatch,
  SetStateAction,
  FC,
  useEffect,
} from "react";
import {
  View,
  Text,
  TextInput,
  BackHandler,
  Pressable,
  Alert,
} from "react-native";
import { router } from "expo-router";
import PrimaryButton from "@/src/components/PrimaryButton";
import axios from "axios";
import { server_url } from "@/src/constants/constants";
import { useSetAtom } from "jotai";
import {
  accessTokenAtom,
  isSignedInAtom,
  refreshTokenAtom,
} from "@/src/atoms/auth";

interface OTPInputProps {
  setOtpRequested: Dispatch<SetStateAction<boolean>>;
  phoneNumber: string;
}

const OTPInput: FC<OTPInputProps> = ({ setOtpRequested, phoneNumber }) => {
  const setAccessToken = useSetAtom(accessTokenAtom);
  const setRefreshToken = useSetAtom(refreshTokenAtom);
  const setIsSignedIn = useSetAtom(isSignedInAtom);
  const [otp, setOtp] = useState("");
  const inputRef = useRef<TextInput>(null);

  const handleChangeText = (text: string) => {
    const numberRegex = /^[0-9]*$/;
    if (!numberRegex.test(text) && text !== "") {
      return;
    }
    setOtp(text);
  };

  const handleVerifyOTP = async () => {
    // Here you would typically make an API call to verify the OTP
    // Assuming OTP verification is successful, navigate to BottomTabsLayout
    try {
      // Veirfy OTP request from Django server
      const response = await axios.post(`${server_url}/login/verify-otp/`, {
        phone: `+91${phoneNumber}`,
        otp: otp,
        headers: { "Content-Type": "application/json" },
      });
      // console.log("otp respnose :", response);
      if (response.status === 200 && response.data.is_verified) {
        console.log("OTP verified successfully");
        console.log("otp respnose :", response.data);
        setIsSignedIn(true);
        setAccessToken(response.data.access_token);
        setRefreshToken(response.data.refresh_token);
        router.replace({ pathname: "/authStack" });
      } else {
        setIsSignedIn(false);
        setAccessToken("");
        setRefreshToken("");
        Alert.alert("Invalid OTP", "Please enter a valid OTP.");
      }
    } catch (error) {
      console.error("Error verifing OTP:", error);
      Alert.alert("Error", "Could not verify OTP. Please try again later.");
    }
  };

  const backhandler = () => {
    setOtpRequested(false);
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backhandler
    );

    return () => {
      backHandler.remove();
    };
  });

  return (
    <View className="h-full w-full flex items-center justify-center">
      <View className="flex flex-row h-14 w-4/5 gap-x-1.5">
        {(Array.from({ length: 6 }) as string[])?.map((value, index) => {
          const digit = otp[index] || "";
          const isSelected = otp.length === index;
          return (
            <Pressable
              key={index + Math.random()}
              onPress={() => inputRef.current?.focus()}
              className="bg-accent-ivory w-11 h-14 rounded-lg flex items-center justify-center"
            >
              <Text className="text-center font-OpenSansSemiBold text-primary-burgundy text-xl">
                {digit ? digit : isSelected ? "|" : ""}
              </Text>
            </Pressable>
          );
        })}
        <TextInput
          ref={inputRef}
          keyboardType="number-pad"
          placeholderTextColor="#800020"
          maxLength={6}
          onChangeText={(text) => handleChangeText(text)}
          value={otp}
          autoFocus
          className="w-full h-14  text-primary-burgundy absolute -z-50"
        />
      </View>
      <View className="w-4/5 mt-5">
        <PrimaryButton buttonText="Verify OTP" onPress={handleVerifyOTP} />
      </View>
    </View>
  );
};

export default OTPInput;
