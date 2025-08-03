// timer.store.ts
import { create } from "zustand";

interface TimerStoreType {
  isRunning: boolean;
  timeLeft: number;
  intervalId: NodeJS.Timeout | null | number;
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: (time?: number) => void;
  setTimeLeft: (time: number) => void;
}

export const useTimerStore = create<TimerStoreType>((set, get) => ({
  isRunning: false,
  timeLeft: 0,
  intervalId: null,

  setTimeLeft: (time: number) => set(() => ({ timeLeft: time })),

  startTimer: () => {
    if (get().isRunning) return;
    const interval = setInterval(() => {
      const { timeLeft, stopTimer, setTimeLeft } = get();
      if (timeLeft <= 1) {
        stopTimer();
        setTimeLeft(0);
      } else {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    set({ isRunning: true, intervalId: interval });
  },

  stopTimer: () => {
    const { intervalId } = get();
    if (intervalId) clearInterval(intervalId);
    set({ isRunning: false, intervalId: null });
  },

  resetTimer: (time = 5 * 60) => {
    const { intervalId } = get();
    if (intervalId) clearInterval(intervalId);
    set({ timeLeft: time, isRunning: false, intervalId: null });
  },
}));
