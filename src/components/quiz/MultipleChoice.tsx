"use client";

import { MathRenderer } from "@/components/math/MathRenderer";
import type { Locale, LocalizedString } from "@/lib/types";
import { t } from "@/lib/types";
import { motion } from "motion/react";
import { useState } from "react";

interface MultipleChoiceProps {
  prompt: LocalizedString;
  options: LocalizedString[];
  correctAnswer: string;
  locale: Locale;
  disabled?: boolean;
  onAnswer: (answer: string, isCorrect: boolean) => void;
}

export function MultipleChoice({
  prompt,
  options,
  correctAnswer,
  locale,
  disabled = false,
  onAnswer,
}: MultipleChoiceProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleSelect = (index: number) => {
    if (hasAnswered || disabled) return;

    setSelectedIndex(index);
    setHasAnswered(true);

    const answer = t(options[index], locale);
    const isCorrect =
      answer === correctAnswer || index.toString() === correctAnswer;
    onAnswer(answer, isCorrect);
  };

  const getOptionStyle = (index: number) => {
    if (!hasAnswered || selectedIndex === null) {
      return "border-border hover:border-primary/50 hover:bg-primary/5 active:scale-[0.98]";
    }

    const isThisCorrect =
      t(options[index], locale) === correctAnswer ||
      index.toString() === correctAnswer;

    if (index === selectedIndex) {
      return isThisCorrect
        ? "border-green-500 bg-green-50 dark:bg-green-950/30 ring-2 ring-green-500/20"
        : "border-red-500 bg-red-50 dark:bg-red-950/30 ring-2 ring-red-500/20 animate-shake";
    }

    if (isThisCorrect) {
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
        className="bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-950/20 dark:to-blue-950/20 rounded-3xl p-6 shadow-lg border border-sky-200/50 dark:border-sky-800/30"
      >
        <div className="text-xl font-semibold leading-relaxed text-center">
          <MathRenderer math={t(prompt, locale)} block />
        </div>
      </motion.div>

      {/* Options */}
      <div className="space-y-3">
        {options.map((option, index) => (
          <motion.button
            key={index}
            onClick={() => handleSelect(index)}
            disabled={hasAnswered || disabled}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={!hasAnswered ? { scale: 1.02, x: 4 } : {}}
            whileTap={!hasAnswered ? { scale: 0.98 } : {}}
            className={`w-full text-left px-5 py-5 rounded-2xl border-2 transition-all duration-200
              font-medium text-base cursor-pointer disabled:cursor-default shadow-md hover:shadow-lg
              ${getOptionStyle(index)}
            `}
          >
            <div className="flex items-center gap-4">
              <span className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-sm font-bold text-foreground shadow-sm border border-border/30">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="flex-1 text-lg">
                <MathRenderer math={t(option, locale)} />
              </span>

              {hasAnswered && selectedIndex !== null && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="shrink-0"
                >
                  {t(options[index], locale) === correctAnswer ||
                  index.toString() === correctAnswer ? (
                    <span className="text-2xl">✓</span>
                  ) : index === selectedIndex ? (
                    <span className="text-2xl">✗</span>
                  ) : null}
                </motion.span>
              )}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
