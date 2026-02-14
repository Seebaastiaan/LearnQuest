"use client";

import {
  ensureUserProfile,
  getCurrentUser,
  loadGameState,
  loadLessonProgress,
  loadTopicProgress,
  saveGameState,
} from "@/lib/services/supabase-sync";
import type { UserLessonProgress } from "@/lib/types";
import { DEFAULT_GAME_CONFIG } from "@/lib/types";
import { useGameStore, useProgressStore } from "@/stores";
import { useEffect, useState } from "react";

export function useSupabaseSync() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setGameUserId = useGameStore((s) => s.setUserId);
  const loadGameFromDB = useGameStore((s) => s.loadFromDB);

  const setProgressUserId = useProgressStore((s) => s.setUserId);
  const loadProgressFromDB = useProgressStore((s) => s.loadFromDB);

  useEffect(() => {
    async function syncData() {
      try {
        // Get current user
        const user = await getCurrentUser();

        if (!user) {
          setIsAuthenticated(false);
          setIsLoading(false);
          return;
        }

        setIsAuthenticated(true);

        // Set user IDs in stores
        setGameUserId(user.id);
        setProgressUserId(user.id);

        // Ensure user profile exists
        await ensureUserProfile(user.id, user.email);

        // Load game state
        const gameState = await loadGameState(user.id);
        if (gameState) {
          loadGameFromDB({
            totalXp: gameState.total_xp,
            level: gameState.level,
            currentStreak: gameState.current_streak,
            longestStreak: gameState.longest_streak,
            lastActivityDate: gameState.last_practice_date,
            hearts: gameState.hearts,
          });
        } else {
          // Initialize game state in DB
          await saveGameState({
            user_id: user.id,
            total_xp: 0,
            level: 1,
            hearts: DEFAULT_GAME_CONFIG.maxHearts,
            current_streak: 0,
            longest_streak: 0,
            last_practice_date: null,
          });
        }

        // Load lesson progress
        const lessonProgressList = await loadLessonProgress(user.id);
        const lessonProgressMap: Record<string, UserLessonProgress> = {};
        lessonProgressList.forEach((lp) => {
          lessonProgressMap[lp.lesson_id] = {
            userId: user.id,
            topicId: lp.topic_id,
            lessonId: lp.lesson_id,
            status: lp.status,
            bestScore: lp.best_score,
            attempts: lp.attempts,
            completedAt: lp.completed_at || undefined,
          };
        });

        // Load topic progress
        const topicProgressList = await loadTopicProgress(user.id);
        const completedTopics = topicProgressList
          .filter((tp) => tp.is_completed)
          .map((tp) => tp.topic_id);

        loadProgressFromDB({
          lessonProgress: lessonProgressMap,
          completedTopics,
        });

        setIsLoading(false);
      } catch (error) {
        console.error("Error syncing with Supabase:", error);
        setIsLoading(false);
      }
    }

    syncData();
  }, [setGameUserId, loadGameFromDB, setProgressUserId, loadProgressFromDB]);

  return { isLoading, isAuthenticated };
}
