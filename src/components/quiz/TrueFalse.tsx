"use client";

import { MathRenderer } from "@/components/math/MathRenderer";
import type { Locale, LocalizedString } from "@/lib/types";
import { t } from "@/lib/types";
import { motion } from "motion/react";
import { useState } from "react";

interface TrueFalseProps {
  prompt: LocalizedString;
  correctAnswer: string; // "true" or "false"
  locale: Locale;
  disabled?: boolean;
  onAnswer: (answer: string, isCorrect: boolean) => void;
}

export function TrueFalse({
  prompt,
  correctAnswer,
  locale,
  disabled = false,
  onAnswer,
}: TrueFalseProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleSelect = (answer: "true" | "false") => {
    if (hasAnswered || disabled) return;

    setSelected(answer);
    setHasAnswered(true);
    const isCorrect = answer === correctAnswer;
    onAnswer(answer, isCorrect);
  };

  const getButtonStyle = (option: "true" | "false") => {
    if (!hasAnswered) {
      return "border-border hover:border-primary/50 hover:bg-primary/5";
    }

    if (option === selected) {
      return option === correctAnswer
        ? "border-green-500 bg-green-50 dark:bg-green-950/30 ring-2 ring-green-500/20"
        : "border-red-500 bg-red-50 dark:bg-red-950/30 ring-2 ring-red-500/20";
    }

    if (option === correctAnswer) {
      return "border-green-500 bg-green-50 dark:bg-green-950/30";
    }

    return "border-border opacity-50";
  };

  return (
    <div className="space-y-6">
      {/* Prompt */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-3xl p-6 shadow-lg border border-amber-200/50 dark:border-amber-800/30"
      >
        <div className="text-xl font-semibold leading-relaxed text-center">
          <MathRenderer math={t(prompt, locale)} block />
        </div>
      </motion.div>

      {/* True / False buttons */}
      <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
        {(["true", "false"] as const).map((option) => (
          <motion.button
            key={option}
            onClick={() => handleSelect(option)}
            disabled={hasAnswered || disabled}
            whileHover={!hasAnswered ? { scale: 1.03 } : {}}
            whileTap={!hasAnswered ? { scale: 0.97 } : {}}
            className={`py-6 px-4 rounded-2xl border-2 font-bold text-lg transition-all cursor-pointer disabled:cursor-default
              ${getButtonStyle(option)}
            `}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">{option === "true" ? "✓" : "✗"}</span>
              <span>
                {option === "true"
                  ? locale === "es"
                    ? "Verdadero"
                    : "True"
                  : locale === "es"
                    ? "Falso"
                    : "False"}
              </span>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
