// Core content types for the scalable topic system

export type Locale = "es" | "en";

export interface LocalizedString {
  es: string;
  en: string;
}

export type QuestionType =
  | "multiple-choice"
  | "fill-blank"
  | "true-false"
  | "match-pairs"
  | "order-steps";

export type Difficulty = 1 | 2 | 3;

export interface Question {
  id: string;
  type: QuestionType;
  prompt: LocalizedString; // KaTeX-compatible LaTeX string
  options?: LocalizedString[]; // For multiple-choice
  correctAnswer: string | string[]; // Single or ordered array
  explanation: LocalizedString; // Shown after answering
  steps?: LocalizedString[]; // Step-by-step solution (KaTeX)
  difficulty: Difficulty;
  hints?: LocalizedString[];
  matchPairs?: {
    // For match-pairs type
    left: LocalizedString[];
    right: LocalizedString[];
    correctPairs: number[]; // Index mapping left[i] -> right[correctPairs[i]]
  };
}

export type LessonType = "learn" | "practice" | "quiz";

export interface Lesson {
  id: string;
  topicId: string;
  order: number;
  title: LocalizedString;
  description: LocalizedString;
  type: LessonType;
  questions: Question[];
  xpReward: number; // Base XP for completing
}

export type TopicStatus =
  | "locked"
  | "available"
  | "in-progress"
  | "completed"
  | "perfect";

export interface Topic {
  id: string;
  slug: string;
  title: LocalizedString;
  description: LocalizedString;
  icon: string; // Lucide icon name
  color: string; // Tailwind color class
  bgGradient: string; // Tailwind gradient classes
  prerequisites: string[]; // IDs of prerequisite topics
  order: number;
  lessons: Lesson[];
}

// Helper to get localized string
export function t(str: LocalizedString, locale: Locale): string {
  return str[locale] || str.es;
}
