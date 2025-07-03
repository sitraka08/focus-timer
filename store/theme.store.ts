import { COLORS } from "@/constants/color";
import { create } from "zustand";

interface ThemeStoreType {
  colors: string;
  setColors: (colors: string) => void;
}

export const useThemeStore = create<ThemeStoreType>()((set) => ({
  colors: COLORS.one,
  setColors: (colors: string) => set(() => ({ colors })),
}));
