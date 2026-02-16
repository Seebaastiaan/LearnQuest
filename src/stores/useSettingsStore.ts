"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface SettingsState {
  soundEnabled: boolean;
  locale: "es" | "en";
  theme: "light" | "dark" | "system";
  currentSubject: {
    name: string;
    nameEn: string;
    icon: string;
  } | null;

  toggleSound: () => void;
  setLocale: (locale: "es" | "en") => void;
  setTheme: (theme: "light" | "dark" | "system") => void;
  setCurrentSubject: (subject: {
    name: string;
    nameEn: string;
    icon: string;
  }) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set, get) => ({
      soundEnabled: true,
      locale: "es",
      theme: "light",
      currentSubject: null,

      toggleSound: () => set({ soundEnabled: !get().soundEnabled }),
      setLocale: (locale) => set({ locale }),
      setTheme: (theme) => set({ theme }),
      setCurrentSubject: (subject) => set({ currentSubject: subject }),
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
