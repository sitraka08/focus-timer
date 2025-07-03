import { GestureResponderEvent, TouchableOpacity } from "react-native";
import React from "react";

interface ColorButtonProps {
  className?: string;
  onPress: (event: GestureResponderEvent) => void;
}

const ColorButton = ({ className, onPress }: ColorButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-9 h-9 border-white border-2 rounded-full ${className} border-gray`}
    />
  );
};

export default ColorButton;
