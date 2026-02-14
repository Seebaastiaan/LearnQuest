"use client";

import {
  saveLessonProgress,
  saveTopicProgress,
} from "@/lib/services/supabase-sync";
import type { UserLessonProgress } from "@/lib/types";
import { create } from "zustand";

interface ProgressState {
  // Map of lessonId -> progress
  lessonProgress: Record<string, UserLessonProgress>;
  completedTopics: string[];

  // User ID for syncing
  userId: string | null;

  // Actions
  setUserId: (userId: string | null) => void;
  loadFromDB: (data: {
    lessonProgress: Record<string, UserLessonProgress>;
    completedTopics: string[];
  }) => void;
  updateLessonProgress: (progress: UserLessonProgress) => void;
  unlockLesson: (topicId: string, lessonId: string) => void;
  completeLesson: (topicId: string, lessonId: string, score: number) => void;
  markTopicComplete: (topicId: string) => void;
  getLessonStatus: (lessonId: string) => UserLessonProgress | undefined;
  isTopicUnlocked: (topicId: string, prerequisites: string[]) => boolean;
}

export const useProgressStore = create<ProgressState>()((set, get) => ({
  lessonProgress: {},
  completedTopics: [],
  userId: null,

  setUserId: (userId) => {
    set({ userId });
  },

  loadFromDB: (data) => {
    set({
      lessonProgress: data.lessonProgress,
      completedTopics: data.completedTopics,
    });
  },

  updateLessonProgress: async (progress) => {
    set({
      lessonProgress: {
        ...get().lessonProgress,
        [progress.lessonId]: progress,
      },
    });

    // Sync to database
    const userId = get().userId;
    if (userId) {
      await saveLessonProgress({
        user_id: userId,
        lesson_id: progress.lessonId,
        topic_id: progress.topicId,
        status: progress.status,
        best_score: progress.bestScore,
        attempts: progress.attempts,
        completed_at: progress.completedAt,
      });
    }
  },

  unlockLesson: async (topicId, lessonId) => {
    const existing = get().lessonProgress[lessonId];
    if (existing && existing.status !== "locked") return;

    const newProgress: UserLessonProgress = {
      userId: get().userId || "",
      topicId,
      lessonId,
      status: "available",
      bestScore: 0,
      attempts: 0,
    };

    set({
      lessonProgress: {
        ...get().lessonProgress,
        [lessonId]: newProgress,
      },
    });

    // Sync to database
    const userId = get().userId;
    if (userId) {
      await saveLessonProgress({
        user_id: userId,
        lesson_id: lessonId,
        topic_id: topicId,
        status: "available",
        best_score: 0,
        attempts: 0,
      });
    }
  },

  completeLesson: async (topicId, lessonId, score) => {
    const existing = get().lessonProgress[lessonId];
    const isPerfect = score === 100;
    const completedAt = new Date().toISOString();

    const updatedProgress: UserLessonProgress = {
      userId: existing?.userId || get().userId || "",
      topicId,
      lessonId,
      status: isPerfect ? "perfect" : "completed",
      bestScore: Math.max(score, existing?.bestScore || 0),
      attempts: (existing?.attempts || 0) + 1,
      completedAt,
    };

    set({
      lessonProgress: {
        ...get().lessonProgress,
        [lessonId]: updatedProgress,
      },
    });

    // Sync to database
    const userId = get().userId;
    if (userId) {
      await saveLessonProgress({
        user_id: userId,
        lesson_id: lessonId,
        topic_id: topicId,
        status: updatedProgress.status,
        best_score: updatedProgress.bestScore,
        attempts: updatedProgress.attempts,
        completed_at: completedAt,
      });
    }
  },

  markTopicComplete: async (topicId) => {
    const completed = get().completedTopics;
    if (!completed.includes(topicId)) {
      set({ completedTopics: [...completed, topicId] });

      // Sync to database
      const userId = get().userId;
      if (userId) {
        await saveTopicProgress({
          user_id: userId,
          topic_id: topicId,
          is_completed: true,
          completed_at: new Date().toISOString(),
        });
      }
    }
  },

  getLessonStatus: (lessonId) => {
    return get().lessonProgress[lessonId];
  },

  isTopicUnlocked: (topicId, prerequisites) => {
    if (prerequisites.length === 0) return true;
    const completed = get().completedTopics;
    // Need at least one lesson completed in each prerequisite topic
    return prerequisites.every((prereq) => completed.includes(prereq));
  },
}));
