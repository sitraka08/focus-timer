import { COLORS } from "@/constants/color";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.one,
          borderColor: COLORS.one,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabelStyle: {
            fontFamily: "SpaceMono",
            fontSize: 12,
          },
        }}
      />
    </Tabs>
  );
}
