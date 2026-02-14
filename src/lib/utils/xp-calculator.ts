import { DEFAULT_GAME_CONFIG } from "@/lib/types";

/**
 * Calculate XP earned from a quiz result
 */
export function calculateQuizXp(
  correctAnswers: number,
  totalQuestions: number,
  bestStreak: number,
): {
  baseXp: number;
  streakBonus: number;
  perfectBonus: number;
  totalXp: number;
} {
  const { xpPerCorrect, xpBonusStreak, xpBonusPerfect, streakBonusThreshold } =
    DEFAULT_GAME_CONFIG;

  const baseXp = correctAnswers * xpPerCorrect;
  const streakBonus =
    bestStreak >= streakBonusThreshold
      ? (bestStreak - streakBonusThreshold + 1) * xpBonusStreak
      : 0;
  const perfectBonus = correctAnswers === totalQuestions ? xpBonusPerfect : 0;

  return {
    baseXp,
    streakBonus,
    perfectBonus,
    totalXp: baseXp + streakBonus + perfectBonus,
  };
}

/**
 * Get level from total XP
 */
export function getLevelFromXp(totalXp: number): number {
  return Math.floor(totalXp / DEFAULT_GAME_CONFIG.xpPerLevel) + 1;
}

/**
 * Get XP progress in current level (0-100)
 */
export function getLevelProgress(totalXp: number): number {
  return (
    ((totalXp % DEFAULT_GAME_CONFIG.xpPerLevel) /
      DEFAULT_GAME_CONFIG.xpPerLevel) *
    100
  );
}

/**
 * Calculate score percentage
 */
export function calculateScore(correct: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
}

/**
 * Get motivational message based on score
 */
export function getScoreMessage(
  score: number,
  locale: "es" | "en" = "es",
): string {
  const messages = {
    es: {
      perfect: "¡Perfecto! 🌟 ¡Eres increíble!",
      excellent: "¡Excelente! 🎉 ¡Muy bien hecho!",
      good: "¡Bien hecho! 👏 ¡Sigue así!",
      ok: "¡Buen intento! 💪 Puedes mejorar",
      needsWork: "¡No te rindas! 📚 Practica más",
    },
    en: {
      perfect: "Perfect! 🌟 You're amazing!",
      excellent: "Excellent! 🎉 Great job!",
      good: "Well done! 👏 Keep it up!",
      ok: "Good try! 💪 You can improve",
      needsWork: "Don't give up! 📚 Practice more",
    },
  };

  const m = messages[locale];
  if (score === 100) return m.perfect;
  if (score >= 80) return m.excellent;
  if (score >= 60) return m.good;
  if (score >= 40) return m.ok;
  return m.needsWork;
}
