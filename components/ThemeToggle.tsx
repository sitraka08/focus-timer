import { View } from "react-native";
import React from "react";
import ColorButton from "@/components/ColorButton";

const ThemeToggle = () => {
  return (
    <View className="border border-white flex flex-row gap-4 px-6 py-3 rounded-full bg-[#ffffff3a] justify-evenly w-[260px]">
      <ColorButton className="bg-one" />
      <ColorButton className="bg-two" />
      <ColorButton className="bg-five" />
      <ColorButton className="bg-three" />
      <ColorButton className="bg-four" />
    </View>
  );
};

export default ThemeToggle;
