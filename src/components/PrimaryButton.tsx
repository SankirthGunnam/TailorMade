import { FC } from "react";
import { Pressable, PressableProps, Text } from "react-native";

interface PrimaryButtonProps extends PressableProps {
  buttonText: string;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ buttonText, ...props }) => {
  return (
    <Pressable
      className="bg-primary-gold rounded-lg h-14 w-full flex items-center justify-center max-w-[300px]"
      {...props}
    >
      <Text className="font-OpenSansBold text-primary-burgundy text-xl">
        {buttonText}
      </Text>
    </Pressable>
  );
};

export default PrimaryButton;
