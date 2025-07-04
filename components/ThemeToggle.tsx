import { View } from "react-native";
import React from "react";
import ColorButton from "@/components/ColorButton";
import { useThemeStore } from "@/store/theme.store";
import { COLORS } from "@/constants/color";

const ThemeToggle = () => {
  const { setColors } = useThemeStore();
  return (
    <View className="border border-[#ffffffb0] flex flex-row gap-4 px-6 py-3 rounded-full bg-[#ffffff3a] justify-evenly w-[240px]">
      <ColorButton className="bg-one" onPress={() => setColors(COLORS.one)} />
      <ColorButton className="bg-two" onPress={() => setColors(COLORS.two)} />
      <ColorButton className="bg-five" onPress={() => setColors(COLORS.five)} />
      <ColorButton
        className="bg-three"
        onPress={() => setColors(COLORS.three)}
      />
      <ColorButton className="bg-four" onPress={() => setColors(COLORS.four)} />
    </View>
  );
};

export default ThemeToggle;
