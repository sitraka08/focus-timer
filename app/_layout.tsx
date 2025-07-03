import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import "react-native-reanimated";
import "../global.css";
import { COLORS } from "@/constants/color";

(Text as any).defaultProps = (Text as any).defaultProps || {};
(Text as any).defaultProps.allowFontScaling = false;

export default function RootLayout() {
  const [loaded] = useFonts({
    light: require("../assets/fonts/NexaLight.otf"),
    bold: require("../assets/fonts/NexaBold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <View className="!bg-one w-full h-12">
        <StatusBar style="light" />
      </View>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
