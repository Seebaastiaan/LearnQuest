"use client";

import { MathRenderer } from "@/components/math/MathRenderer";
import { Button } from "@/components/ui/button";
import type { Locale, LocalizedString } from "@/lib/types";
import { t } from "@/lib/types";
import { ArrowUpDown, Check } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface OrderStepsProps {
  prompt: LocalizedString;
  options: LocalizedString[]; // Steps in scrambled order
  correctAnswer: string[]; // Correct order (indices as strings)
  locale: Locale;
  disabled?: boolean;
  onAnswer: (answer: string[], isCorrect: boolean) => void;
}

export function OrderSteps({
  prompt,
  options,
  correctAnswer,
  locale,
  disabled = false,
  onAnswer,
}: OrderStepsProps) {
  const [order, setOrder] = useState<number[]>(options.map((_, i) => i));
  const [hasAnswered, setHasAnswered] = useState(false);
  const [selectedForSwap, setSelectedForSwap] = useState<number | null>(null);

  const handleTapToSwap = (index: number) => {
    if (hasAnswered || disabled) return;

    if (selectedForSwap === null) {
      setSelectedForSwap(index);
    } else {
      // Swap
      const newOrder = [...order];
      const temp = newOrder[selectedForSwap];
      newOrder[selectedForSwap] = newOrder[index];
      newOrder[index] = temp;
      setOrder(newOrder);
      setSelectedForSwap(null);
    }
  };

  const handleSubmit = () => {
    if (hasAnswered || disabled) return;

    const userAnswer = order.map(String);
    const correct = userAnswer.every((a, i) => a === correctAnswer[i]);
    setHasAnswered(true);
    onAnswer(userAnswer, correct);
  };

  return (
    <div className="space-y-6">
      {/* Prompt */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-linear-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-3xl p-6 shadow-lg border border-emerald-200/50 dark:border-emerald-800/30"
      >
        <div className="text-xl font-semibold leading-relaxed text-center">
          <MathRenderer math={t(prompt, locale)} block />
        </div>
        <p className="text-sm text-muted-foreground mt-3 text-center font-medium">
          {locale === "es"
            ? "Toca dos pasos para intercambiarlos"
            : "Tap two steps to swap them"}
        </p>
      </motion.div>

      {/* Orderable steps */}
      <div className="space-y-3">
        {order.map((originalIndex, currentPos) => (
          <motion.button
            key={originalIndex}
            layout
            onClick={() => handleTapToSwap(currentPos)}
            disabled={hasAnswered || disabled}
            whileHover={!hasAnswered ? { scale: 1.02, x: 4 } : {}}
            whileTap={!hasAnswered ? { scale: 0.98 } : {}}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: currentPos * 0.05 }}
            className={`w-full text-left px-5 py-4 rounded-2xl border-2 transition-all cursor-pointer disabled:cursor-default shadow-md hover:shadow-lg
              ${
                hasAnswered
                  ? currentPos.toString() ===
                      correctAnswer[currentPos]?.toString() ||
                    originalIndex.toString() === correctAnswer[currentPos]
                    ? "border-green-500 bg-green-50 dark:bg-green-950/30"
                    : "border-red-500 bg-red-50 dark:bg-red-950/30"
                  : selectedForSwap === currentPos
                    ? "border-primary bg-primary/10 ring-2 ring-primary/30 shadow-lg"
                    : "border-border hover:border-primary/30"
              }
            `}
          >
            <div className="flex items-center gap-4">
              <span className="shrink-0 w-9 h-9 rounded-xl bg-linear-to-br from-primary/10 to-primary/5 flex items-center justify-center text-sm font-bold border border-border/30 shadow-sm">
                {currentPos + 1}
              </span>
              <span className="flex-1 text-base">
                <MathRenderer math={t(options[originalIndex], locale)} />
              </span>
              {!hasAnswered && (
                <ArrowUpDown className="w-5 h-5 text-muted-foreground shrink-0" />
              )}
            </div>
          </motion.button>
        ))}
      </div>

      {!hasAnswered && (
        <Button
          onClick={handleSubmit}
          disabled={disabled}
          className="w-full h-14 rounded-2xl bg-linear-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold shadow-lg hover:shadow-xl transition-all"
        >
          <Check className="w-5 h-5 mr-2" />
          {locale === "es" ? "Verificar orden" : "Check order"}
        </Button>
      )}
    </div>
  );
}
