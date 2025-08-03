import { Text, TouchableOpacity } from "react-native";
import React from "react";

interface ButtonProps {
  title: string;
  onPress?: () => void;
}

const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="border border-white w-auto bg-[#fff4] px-8 py-4 rounded-full"
    >
      <Text className="font-fbold text-[#fff]">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
