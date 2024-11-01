import React, {
  useState,
  useRef,
  Dispatch,
  SetStateAction,
  FC,
  useEffect,
} from "react";
import { View, Text, TextInput, BackHandler, Pressable } from "react-native";
import { router } from "expo-router";
import PrimaryButton from "@/src/components/PrimaryButton";

interface OTPInputProps {
  setOtpRequested: Dispatch<SetStateAction<boolean>>;
}

const OTPInput: FC<OTPInputProps> = ({ setOtpRequested }) => {
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
    router.replace({ pathname: "/authStack" });
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
