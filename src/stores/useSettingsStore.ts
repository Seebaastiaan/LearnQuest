"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface SettingsState {
  soundEnabled: boolean;
  locale: "es" | "en";
  theme: "light" | "dark" | "system";

  toggleSound: () => void;
  setLocale: (locale: "es" | "en") => void;
  setTheme: (theme: "light" | "dark" | "system") => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set, get) => ({
      soundEnabled: true,
      locale: "es",
      theme: "light",

      toggleSound: () => set({ soundEnabled: !get().soundEnabled }),
      setLocale: (locale) => set({ locale }),
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "learnquest-settings",
      storage: createJSONStorage(() => {
        if (typeof window !== "undefined") return localStorage;
        return {
          getItem: () => null,
          setItem: () => {},
          removeItem: () => {},
        };
      }),
    },
  ),
);
