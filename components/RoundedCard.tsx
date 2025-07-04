import { Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";

const RoundedCard = () => {
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes en secondes
  const intervalRef = useRef<NodeJS.Timeout | null | number>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };
  return (
    <View className=" w-[250px] h-[250px] border border-white rounded-full flex items-center justify-center bg-[#fff4]">
      <Text className="font-fbold text-white text-5xl">
        {formatTime(timeLeft)}
      </Text>
    </View>
  );
};

export default RoundedCard;
