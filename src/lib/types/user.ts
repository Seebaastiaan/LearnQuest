// User-related types for progress tracking and gamification

export interface UserProfile {
  id: string;
  displayName: string;
  avatarUrl?: string;
  preferredLocale: "es" | "en";
  createdAt: string;
}

export interface UserStats {
  userId: string;
  totalXp: number;
  currentStreak: number;
  longestStreak: number;
  lastActivityDate: string; // ISO date string
  hearts: number;
  heartsLastRefill: string; // ISO timestamp
  level: number;
  lessonsCompleted: number;
  perfectLessons: number;
  totalCorrect: number;
  totalWrong: number;
}

export interface UserLessonProgress {
  id?: string;
  userId: string;
  topicId: string;
  lessonId: string;
  status: "locked" | "available" | "in-progress" | "completed" | "perfect";
  bestScore: number; // 0-100 percentage
  attempts: number;
  completedAt?: string;
}

export interface QuestionHistory {
  id?: string;
  userId: string;
  questionId: string;
  topicId: string;
  correctCount: number;
  wrongCount: number;
  lastSeen: string;
  nextReview: string; // For spaced repetition
  easeFactor: number; // SM-2 algorithm
}

export type AchievementType =
  | "first-lesson"
  | "first-perfect"
  | "streak-3"
  | "streak-7"
  | "streak-30"
  | "level-5"
  | "level-10"
  | "topic-complete"
  | "all-topics"
  | "xp-100"
  | "xp-500"
  | "xp-1000";

export interface Achievement {
  id?: string;
  userId: string;
  type: AchievementType;
  earnedAt: string;
}
