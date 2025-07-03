import { Text, View } from "react-native";
import React from "react";

const RoundedCard = () => {
  return (
    <View className=" w-[250px] h-[250px] border border-white rounded-full flex items-center justify-center bg-[#fff4]">
      <Text className="font-fbold text-white text-5xl">25:00</Text>
    </View>
  );
};

export default RoundedCard;
