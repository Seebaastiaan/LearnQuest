// Game state types

export interface GameConfig {
  maxHearts: number;
  heartRegenMinutes: number;
  xpPerCorrect: number;
  xpBonusStreak: number; // Bonus XP per streak count (3+)
  xpBonusPerfect: number; // Bonus for zero-error lesson
  xpPerLevel: number; // XP needed per level
  streakBonusThreshold: number; // Minimum correct streak for bonus
}

export const DEFAULT_GAME_CONFIG: GameConfig = {
  maxHearts: 5,
  heartRegenMinutes: 30,
  xpPerCorrect: 10,
  xpBonusStreak: 5,
  xpBonusPerfect: 20,
  xpPerLevel: 100,
  streakBonusThreshold: 3,
};

export interface QuizState {
  currentQuestionIndex: number;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  currentStreak: number; // In-quiz correct streak
  bestStreak: number;
  answers: QuizAnswer[];
  isComplete: boolean;
  xpEarned: number;
  startedAt: string;
}

export interface QuizAnswer {
  questionId: string;
  isCorrect: boolean;
  userAnswer: string | string[];
  timeSpent: number; // milliseconds
}

// XP animation event
export interface XPGainEvent {
  amount: number;
  reason: "correct" | "streak-bonus" | "perfect-bonus" | "lesson-complete";
  timestamp: number;
}
