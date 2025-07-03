import Button from "@/components/Button";
import RoundedButton from "@/components/RoundedButton";
import RoundedCard from "@/components/RoundedCard";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Play, RotateCcw, SkipForwardIcon } from "lucide-react-native";
import ThemeToggle from "@/components/ThemeToggle";
import { useThemeStore } from "@/store/theme.store";

export default function Home() {
  const { colors } = useThemeStore();

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
      <View className="flex flex-row gap-4 justify-between mt-5">
        <Button title="Short" />
        <Button title="Small" />
        <Button title="Long" />
      </View>
      <View className="flex mt-10 justify-center items-center">
        <RoundedCard />
      </View>
      <View className="flex items-center flex-row gap-4">
        <RoundedButton icon={<RotateCcw color="white" />} />
        <RoundedButton icon={<Play color="white" />} />
        <RoundedButton icon={<SkipForwardIcon color="white" />} />
      </View>
    </SafeAreaView>
  );
}
