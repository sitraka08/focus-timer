import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView className="bg-one flex-1 p-10">
      <Text className="text-6xl text-center text-[#fff] font-fbold">
        FocusTime
      </Text>
      <Text className="text-[#D2D8E4] font-flight">
        Restez concentré, soyez productif
      </Text>
    </SafeAreaView>
  );
}
