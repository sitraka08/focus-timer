import { TouchableOpacity } from "react-native";
import React from "react";

interface ColorButtonProps {
  className?: string;
}

const ColorButton = ({ className }: ColorButtonProps) => {
  return (
    <TouchableOpacity
      className={`w-9 h-9 border-white border-2 rounded-full ${className} border-gray`}
    />
  );
};

export default ColorButton;
