import { Text, View } from "react-native";
import React from "react";
import { useTimerStore } from "@/store/timer.store";

const RoundedCard = () => {
  const { timeLeft } = useTimerStore();

  const formatTime = (seconds: number) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <View className="w-[250px] h-[250px] border border-white rounded-full flex items-center justify-center bg-[#fff4]">
      <Text className="font-fbold text-white text-5xl">
        {formatTime(timeLeft)}
      </Text>
    </View>
  );
};

export default RoundedCard;
