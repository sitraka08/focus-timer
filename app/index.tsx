import Button from "@/components/Button";
import RoundedButton from "@/components/RoundedButton";
import RoundedCard from "@/components/RoundedCard";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pause, Play, RotateCcw, SkipForwardIcon } from "lucide-react-native";
import ThemeToggle from "@/components/ThemeToggle";
import { useThemeStore } from "@/store/theme.store";
import { useAudioPlayer } from "expo-audio";
import { useTimerStore } from "@/store/timer.store";

const audioSource = require("@/assets/audio.mp3");

export default function Home() {
  const startTimer = useTimerStore((s) => s.startTimer);
  const stopTimer = useTimerStore((s) => s.stopTimer);
  const resetTimer = useTimerStore((s) => s.resetTimer);
  const isRunning = useTimerStore((s) => s.isRunning);

  const player = useAudioPlayer(audioSource);
  const { colors } = useThemeStore();

  console.log("timeLeft");
  return (
    <SafeAreaView
      className="flex-1 p-10 pt-0 flex flex-col justify-around items-center"
      style={{
        backgroundColor: colors,
      }}
    >
      <View className="w-full flex items-end">
        <ThemeToggle />
      </View>

      <Text className="text-6xl text-center text-[#fff] font-fbold">
        FocusTime
      </Text>
      <Text className="text-[#D2D8E4] font-flight text-xl text-center">
        Restez concentré, soyez productif
      </Text>
      <View className="flex flex-row gap-4 justify-between ">
        <Button title="Short" onPress={() => resetTimer(5 * 60)} />
        <Button title="Small" onPress={() => resetTimer(10 * 60)} />
        <Button title="Long" onPress={() => resetTimer(30 * 60)} />
      </View>
      <View className="flex mt-10 justify-center items-center">
        <RoundedCard />
      </View>
      <View className="flex items-center flex-row gap-4">
        <RoundedButton icon={<RotateCcw color="white" />} />
        <RoundedButton
          icon={isRunning ? <Pause color="white" /> : <Play color="white" />}
          onPress={() => {
            if (!isRunning) {
              startTimer();
            } else {
              stopTimer();
            }
          }}
        />
        <RoundedButton icon={<SkipForwardIcon color="white" />} />
      </View>
    </SafeAreaView>
  );
}
