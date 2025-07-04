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
      className={`w-8 h-8 border-2 rounded-full ${className} border-gray`}
    />
  );
};

export default ColorButton;
