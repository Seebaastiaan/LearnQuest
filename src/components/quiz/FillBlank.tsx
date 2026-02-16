"use client";

import { MathRenderer } from "@/components/math/MathRenderer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Locale, LocalizedString } from "@/lib/types";
import { t } from "@/lib/types";
import { Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface FillBlankProps {
  prompt: LocalizedString;
  correctAnswer: string;
  locale: Locale;
  disabled?: boolean;
  onAnswer: (answer: string, isCorrect: boolean) => void;
}

export function FillBlank({
  prompt,
  correctAnswer,
  locale,
  disabled = false,
  onAnswer,
}: FillBlankProps) {
  const [value, setValue] = useState("");
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Detect if answer is numeric for appropriate keyboard
  const isNumericAnswer = !isNaN(parseFloat(correctAnswer)) && isFinite(parseFloat(correctAnswer));

  const handleSubmit = () => {
    if (!value.trim() || hasAnswered || disabled) return;

    const trimmed = value.trim();
    
    // For numeric answers, do numerical comparison
    if (isNumericAnswer) {
      const normalized = trimmed.replace(/\s/g, "").replace(",", ".");
      const correctNormalized = correctAnswer
        .replace(/\s/g, "")
        .replace(",", ".");

      const correct =
        normalized === correctNormalized ||
        parseFloat(normalized) === parseFloat(correctNormalized);

      setIsCorrect(correct);
      setHasAnswered(true);
      onAnswer(trimmed, correct);
    } else {
      // For text answers, do case-insensitive comparison
      const correct = trimmed.toLowerCase() === correctAnswer.toLowerCase();
      setIsCorrect(correct);
      setHasAnswered(true);
      onAnswer(trimmed, correct);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="space-y-6">
      {/* Prompt */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-linear-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-3xl p-6 shadow-lg border border-purple-200/50 dark:border-purple-800/30"
      >
        <div className="text-xl font-semibold leading-relaxed text-center">
          <MathRenderer math={t(prompt, locale)} block />
        </div>
      </motion.div>

      {/* Answer input */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-xs mx-auto space-y-4"
      >
        <div className="relative">
          <Input
            type="text"
            inputMode={isNumericAnswer ? "decimal" : "text"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={hasAnswered || disabled}
            placeholder={locale === "es" ? "Tu respuesta..." : "Your answer..."}
            className={`text-center text-xl font-bold h-16 rounded-2xl border-2 transition-all shadow-lg
              ${
                hasAnswered
                  ? isCorrect
                    ? "border-green-500 bg-green-50 dark:bg-green-950/30"
                    : "border-red-500 bg-red-50 dark:bg-red-950/30"
                  : "border-border focus:border-primary"
              }
            `}
          />
        </div>

        {!hasAnswered && (
          <Button
            onClick={handleSubmit}
            disabled={!value.trim() || disabled}
            className="w-full h-14 rounded-2xl bg-linear-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold shadow-lg hover:shadow-xl transition-all"
          >
            <Send className="w-5 h-5 mr-2" />
            {locale === "es" ? "Verificar" : "Check"}
          </Button>
        )}

        {hasAnswered && !isCorrect && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground">
              {locale === "es" ? "Respuesta correcta:" : "Correct answer:"}
            </p>
            <p className="text-lg font-bold text-green-600">
              <MathRenderer math={correctAnswer} />
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
