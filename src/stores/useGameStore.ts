"use client";

import { DEFAULT_GAME_CONFIG, type XPGainEvent } from "@/lib/types";
import {
  addXPHistory,
  saveGameState,
} from "@/lib/services/supabase-sync";
import { create } from "zustand";

interface GameState {
  // Stats
  totalXp: number;
  level: number;
  currentStreak: number;
  longestStreak: number;
  lastActivityDate: string | null;
  hearts: number;
  heartsLastRefill: string;

  // XP events for animation
  recentXpGains: XPGainEvent[];

  // User ID for syncing
  userId: string | null;

  // Actions
  setUserId: (userId: string | null) => void;
  loadFromDB: (data: {
    totalXp: number;
    level: number;
    currentStreak: number;
    longestStreak: number;
    lastActivityDate: string | null;
    hearts: number;
  }) => void;
  addXp: (
    amount: number,
    reason: XPGainEvent["reason"],
    lessonId?: string
  ) => void;
  loseHeart: () => void;
  regenerateHearts: () => void;
  updateStreak: () => void;
  resetHearts: () => void;
  clearXpGains: () => void;

  // Computed
  xpToNextLevel: () => number;
  xpInCurrentLevel: () => number;
}

export const useGameStore = create<GameState>()((set, get) => ({
  totalXp: 0,
  level: 1,
  currentStreak: 0,
  longestStreak: 0,
  lastActivityDate: null,
  hearts: DEFAULT_GAME_CONFIG.maxHearts,
  heartsLastRefill: new Date().toISOString(),
  recentXpGains: [],
  userId: null,

  setUserId: (userId) => {
    set({ userId });
  },

  loadFromDB: (data) => {
    set({
      totalXp: data.totalXp,
      level: data.level,
      currentStreak: data.currentStreak,
      longestStreak: data.longestStreak,
      lastActivityDate: data.lastActivityDate,
      hearts: data.hearts,
    });
  },

  addXp: async (amount, reason, lessonId) => {
    const { totalXp, userId } = get();
    const newTotalXp = totalXp + amount;
    const newLevel =
      Math.floor(newTotalXp / DEFAULT_GAME_CONFIG.xpPerLevel) + 1;
    const xpEvent: XPGainEvent = {
      amount,
      reason,
      timestamp: Date.now(),
    };

    set({
      totalXp: newTotalXp,
      level: newLevel,
      recentXpGains: [...get().recentXpGains, xpEvent],
    });

    // Sync to database
    if (userId) {
      await saveGameState({
        user_id: userId,
        total_xp: newTotalXp,
        level: newLevel,
        hearts: get().hearts,
        current_streak: get().currentStreak,
        longest_streak: get().longestStreak,
        last_practice_date: get().lastActivityDate,
      });

      await addXPHistory({
        user_id: userId,
        amount,
        reason,
        lesson_id: lessonId,
      });
    }
  },

  loseHeart: async () => {
    const { hearts, userId } = get();
    if (hearts > 0) {
      const newHearts = hearts - 1;
      set({ hearts: newHearts });

      // Sync to database
      if (userId) {
        await saveGameState({
          user_id: userId,
          total_xp: get().totalXp,
          level: get().level,
          hearts: newHearts,
          current_streak: get().currentStreak,
          longest_streak: get().longestStreak,
          last_practice_date: get().lastActivityDate,
        });
      }
    }
  },

  regenerateHearts: async () => {
    const { hearts, heartsLastRefill, userId } = get();
    if (hearts >= DEFAULT_GAME_CONFIG.maxHearts) return;

    const now = new Date();
    const lastRefill = new Date(heartsLastRefill);
    const minutesPassed = (now.getTime() - lastRefill.getTime()) / 60000;
    const heartsToRegen = Math.floor(
      minutesPassed / DEFAULT_GAME_CONFIG.heartRegenMinutes
    );

    if (heartsToRegen > 0) {
      const newHearts = Math.min(
        hearts + heartsToRegen,
        DEFAULT_GAME_CONFIG.maxHearts
      );
      set({
        hearts: newHearts,
        heartsLastRefill: now.toISOString(),
      });

      // Sync to database
      if (userId) {
        await saveGameState({
          user_id: userId,
          total_xp: get().totalXp,
          level: get().level,
          hearts: newHearts,
          current_streak: get().currentStreak,
          longest_streak: get().longestStreak,
          last_practice_date: get().lastActivityDate,
        });
      }
    }
  },

  updateStreak: async () => {
    const { lastActivityDate, currentStreak, longestStreak, userId } = get();
    const today = new Date().toISOString().split("T")[0];

    if (lastActivityDate === today) return; // Already updated today

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split("T")[0];

    let newStreak: number;
    if (lastActivityDate === yesterdayStr) {
      newStreak = currentStreak + 1;
    } else {
      newStreak = 1; // Reset streak
    }

    const newLongestStreak = Math.max(newStreak, longestStreak);

    set({
      currentStreak: newStreak,
      longestStreak: newLongestStreak,
      lastActivityDate: today,
    });

    // Sync to database
    if (userId) {
      await saveGameState({
        user_id: userId,
        total_xp: get().totalXp,
        level: get().level,
        hearts: get().hearts,
        current_streak: newStreak,
        longest_streak: newLongestStreak,
        last_practice_date: today,
      });
    }
  },

  resetHearts: async () => {
    const userId = get().userId;
    set({
      hearts: DEFAULT_GAME_CONFIG.maxHearts,
      heartsLastRefill: new Date().toISOString(),
    });

    // Sync to database
    if (userId) {
      await saveGameState({
        user_id: userId,
        total_xp: get().totalXp,
        level: get().level,
        hearts: DEFAULT_GAME_CONFIG.maxHearts,
        current_streak: get().currentStreak,
        longest_streak: get().longestStreak,
        last_practice_date: get().lastActivityDate,
      });
    }
  },

  clearXpGains: () => set({ recentXpGains: [] }),

  xpToNextLevel: () => {
    return DEFAULT_GAME_CONFIG.xpPerLevel;
  },

  xpInCurrentLevel: () => {
    return get().totalXp % DEFAULT_GAME_CONFIG.xpPerLevel;
  },
}));
