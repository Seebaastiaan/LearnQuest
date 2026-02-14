"use client";

import { Button } from "@/components/ui/button";
import { useCelebration } from "@/hooks/useCelebration";
import { calculateScore, getScoreMessage } from "@/lib/utils/xp-calculator";
import { ArrowRight, Star, Trophy, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

interface QuizResultProps {
  correctAnswers: number;
  totalQuestions: number;
  xpEarned: number;
  bestStreak: number;
  locale?: "es" | "en";
  onContinue: () => void;
  onRetry: () => void;
}

export function QuizResult({
  correctAnswers,
  totalQuestions,
  xpEarned,
  bestStreak,
  locale = "es",
  onContinue,
  onRetry,
}: QuizResultProps) {
  const { celebrate } = useCelebration();
  const score = calculateScore(correctAnswers, totalQuestions);
  const message = getScoreMessage(score, locale);
  const isPerfect = score === 100;
  const passed = score >= 60;

  useEffect(() => {
    if (isPerfect) {
      celebrate("lesson-complete");
    } else if (passed) {
      celebrate("correct");
    }
  }, [isPerfect, passed, celebrate]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="flex flex-col items-center text-center p-8 max-w-md mx-auto"
    >
      {/* Trophy/Star icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
        className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 ${
          isPerfect
            ? "bg-linear-to-br from-amber-400 to-amber-600"
            : passed
              ? "bg-linear-to-br from-green-400 to-green-600"
              : "bg-linear-to-br from-sky-400 to-sky-600"
        }`}
      >
        {isPerfect ? (
          <Trophy className="w-12 h-12 text-white" />
        ) : passed ? (
          <Star className="w-12 h-12 text-white" />
        ) : (
          <Zap className="w-12 h-12 text-white" />
        )}
      </motion.div>

      {/* Message */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-2xl font-bold mb-2"
      >
        {message}
      </motion.h2>

      {/* Score */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-5xl font-black mb-6"
      >
        <span
          className={
            isPerfect
              ? "text-amber-500"
              : passed
                ? "text-green-500"
                : "text-sky-500"
          }
        >
          {score}%
        </span>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-3 gap-6 mb-8 w-full"
      >
        <div className="text-center">
          <p className="text-2xl font-bold text-green-500">{correctAnswers}</p>
          <p className="text-xs text-muted-foreground">
            {locale === "es" ? "Correctas" : "Correct"}
          </p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-amber-500">+{xpEarned}</p>
          <p className="text-xs text-muted-foreground">XP</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-orange-500">{bestStreak}</p>
          <p className="text-xs text-muted-foreground">
            {locale === "es" ? "Racha" : "Streak"}
          </p>
        </div>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex flex-col gap-3 w-full"
      >
        {passed ? (
          <Button
            onClick={onContinue}
            size="lg"
            className="w-full bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-lg h-14 rounded-2xl shadow-lg shadow-green-500/25"
          >
            {locale === "es" ? "Continuar" : "Continue"}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        ) : (
          <>
            <Button
              onClick={onRetry}
              size="lg"
              className="w-full bg-linear-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-lg h-14 rounded-2xl shadow-lg shadow-sky-500/25"
            >
              {locale === "es" ? "Intentar de nuevo" : "Try again"}
            </Button>
            <Button onClick={onContinue} variant="ghost" size="lg">
              {locale === "es" ? "Continuar de todos modos" : "Continue anyway"}
            </Button>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
