"use client";

import { useCelebration } from "@/hooks/useCelebration";
import type { Lesson, Locale, Question } from "@/lib/types";
import { DEFAULT_GAME_CONFIG, t } from "@/lib/types";
import { shuffleArray } from "@/lib/utils";
import { calculateQuizXp, calculateScore } from "@/lib/utils/xp-calculator";
import { useGameStore, useQuizStore, useSettingsStore } from "@/stores";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useMemo, useState } from "react";

import { QuizGlossary } from "@/components/glossary/QuizGlossary";
import { MathRenderer } from "@/components/math/MathRenderer";
import { StepByStep } from "@/components/math/StepByStep";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Lightbulb } from "lucide-react";
import { FillBlank } from "./FillBlank";
import { MultipleChoice } from "./MultipleChoice";
import { OrderSteps } from "./OrderSteps";
import { QuizProgress } from "./QuizProgress";
import { QuizResult } from "./QuizResult";
import { TrueFalse } from "./TrueFalse";

interface QuizEngineProps {
  lesson: Lesson;
  locale?: Locale;
  onComplete: (score: number, xpEarned: number) => void;
  onClose: () => void;
}

export function QuizEngine({
  lesson,
  locale: localeProp,
  onComplete,
  onClose,
}: QuizEngineProps) {
  const settingsLocale = useSettingsStore((s) => s.locale);
  const locale = localeProp || settingsLocale;

  const quiz = useQuizStore((s) => s.quiz);
  const isShowingExplanation = useQuizStore((s) => s.isShowingExplanation);
  const isShowingSteps = useQuizStore((s) => s.isShowingSteps);
  const startQuiz = useQuizStore((s) => s.startQuiz);
  const submitAnswer = useQuizStore((s) => s.submitAnswer);
  const nextQuestion = useQuizStore((s) => s.nextQuestion);
  const setShowingExplanation = useQuizStore((s) => s.setShowingExplanation);
  const setShowingSteps = useQuizStore((s) => s.setShowingSteps);
  const resetQuiz = useQuizStore((s) => s.resetQuiz);

  const addXp = useGameStore((s) => s.addXp);
  const loseHeart = useGameStore((s) => s.loseHeart);
  const hearts = useGameStore((s) => s.hearts);
  const updateStreak = useGameStore((s) => s.updateStreak);

  const { celebrate } = useCelebration();

  const [questionStartTime, setQuestionStartTime] = useState(() => Date.now());
  const [showHint, setShowHint] = useState(false);

  // Shuffle questions once when lesson changes
  const questions = useMemo(
    () => shuffleArray(lesson.questions),
    [lesson.questions],
  );

  // Initialize quiz
  useEffect(() => {
    startQuiz(questions.length);
    setTimeout(() => {
      setQuestionStartTime(Date.now());
    }, 0);
    return () => resetQuiz();
  }, [lesson.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const currentQuestion: Question | undefined =
    quiz && !quiz.isComplete ? questions[quiz.currentQuestionIndex] : undefined;

  const handleAnswer = useCallback(
    (answer: string | string[], isCorrect: boolean) => {
      const timeSpent = Date.now() - questionStartTime;

      submitAnswer({
        questionId: currentQuestion?.id || "",
        isCorrect,
        userAnswer: answer,
        timeSpent,
      });

      if (isCorrect) {
        addXp(DEFAULT_GAME_CONFIG.xpPerCorrect, "correct", lesson.id);
        celebrate("correct");

        // Streak bonus
        if (
          quiz &&
          quiz.currentStreak + 1 >= DEFAULT_GAME_CONFIG.streakBonusThreshold
        ) {
          addXp(DEFAULT_GAME_CONFIG.xpBonusStreak, "streak-bonus", lesson.id);
        }
      } else {
        if (lesson.type === "quiz") {
          loseHeart();
        }
      }

      setShowingExplanation(true);
    },
    [
      questionStartTime,
      currentQuestion,
      quiz,
      lesson.type,
      lesson.id,
      submitAnswer,
      addXp,
      loseHeart,
      celebrate,
      setShowingExplanation,
    ],
  );

  const handleNext = useCallback(() => {
    if (!quiz) return;

    setShowingExplanation(false);
    setShowingSteps(false);
    setShowHint(false);

    if (quiz.currentQuestionIndex + 1 >= quiz.totalQuestions) {
      // Quiz complete
      calculateQuizXp(
        quiz.correctAnswers,
        quiz.totalQuestions,
        quiz.bestStreak,
      );

      // Perfect bonus
      if (quiz.wrongAnswers === 0) {
        addXp(DEFAULT_GAME_CONFIG.xpBonusPerfect, "perfect-bonus", lesson.id);
      }

      updateStreak();
      nextQuestion(); // sets isComplete
    } else {
      nextQuestion();
      setQuestionStartTime(Date.now());
    }
  }, [
    quiz,
    lesson.id,
    nextQuestion,
    addXp,
    updateStreak,
    setShowingExplanation,
    setShowingSteps,
  ]);

  const handleQuizComplete = useCallback(() => {
    if (!quiz) return;
    const score = calculateScore(quiz.correctAnswers, quiz.totalQuestions);
    const { totalXp } = calculateQuizXp(
      quiz.correctAnswers,
      quiz.totalQuestions,
      quiz.bestStreak,
    );
    onComplete(score, totalXp);
  }, [quiz, onComplete]);

  const handleRetry = useCallback(() => {
    startQuiz(questions.length);
    setQuestionStartTime(Date.now());
  }, [questions.length, startQuiz]);

  // No hearts left and it's a quiz
  if (hearts === 0 && lesson.type === "quiz" && !quiz?.isComplete) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center min-h-[60vh]">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-6xl mb-4"
        >
          💔
        </motion.div>
        <h2 className="text-2xl font-bold mb-2">
          {locale === "es" ? "¡Sin vidas!" : "No hearts left!"}
        </h2>
        <p className="text-muted-foreground mb-6">
          {locale === "es"
            ? "Espera a que se regeneren o practica otros temas"
            : "Wait for them to regenerate or practice other topics"}
        </p>
        <Button onClick={onClose} variant="outline" size="lg">
          {locale === "es" ? "Volver al mapa" : "Back to map"}
        </Button>
      </div>
    );
  }

  if (!quiz) return null;

  // Show results
  if (quiz.isComplete) {
    const { totalXp } = calculateQuizXp(
      quiz.correctAnswers,
      quiz.totalQuestions,
      quiz.bestStreak,
    );

    return (
      <QuizResult
        correctAnswers={quiz.correctAnswers}
        totalQuestions={quiz.totalQuestions}
        xpEarned={totalXp}
        bestStreak={quiz.bestStreak}
        locale={locale}
        onContinue={handleQuizComplete}
        onRetry={handleRetry}
      />
    );
  }

  if (!currentQuestion) return null;

  return (
    <div className="flex flex-col min-h-[80vh] relative">
      {/* Animated background */}
      <div className="absolute inset-0 bg-linear-to-br from-sky-50/30 via-background to-blue-50/30 dark:from-sky-950/10 dark:via-background dark:to-blue-950/10 -z-10" />

      {/* Progress bar */}
      <div className="p-4 pt-6">
        <QuizProgress
          current={quiz.currentQuestionIndex}
          total={quiz.totalQuestions}
          onClose={onClose}
        />
      </div>

      {/* Question area */}
      <div className="flex-1 px-4 pb-4 max-w-2xl mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.2 }}
          >
            {/* Question type label */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="px-3 py-1.5 bg-linear-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-full">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  {quiz.currentQuestionIndex + 1} / {quiz.totalQuestions}
                </span>
              </div>

              {/* Glossary button */}
              <QuizGlossary
                questionText={t(currentQuestion.prompt, locale)}
                locale={locale}
              />

              {lesson.type === "practice" &&
                currentQuestion.hints &&
                currentQuestion.hints.length > 0 &&
                !showHint &&
                !isShowingExplanation && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowHint(true)}
                      className="text-xs font-semibold text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/30 border border-amber-200 dark:border-amber-800"
                    >
                      <Lightbulb className="w-4 h-4 mr-1" />
                      {locale === "es" ? "Ver pista" : "Show hint"}
                    </Button>
                  </motion.div>
                )}
            </div>

            {/* Hint */}
            <AnimatePresence>
              {showHint && currentQuestion.hints && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="mb-6 p-4 bg-linear-to-br from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 border-2 border-amber-300 dark:border-amber-700 rounded-2xl shadow-lg"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                    <span className="text-sm font-bold text-amber-900 dark:text-amber-100 uppercase tracking-wide">
                      {locale === "es" ? "Pista" : "Hint"}
                    </span>
                  </div>
                  <p className="text-amber-900 dark:text-amber-100 leading-relaxed">
                    {t(currentQuestion.hints[0], locale)}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Render question by type */}
            {currentQuestion.type === "multiple-choice" &&
              currentQuestion.options && (
                <MultipleChoice
                  prompt={currentQuestion.prompt}
                  options={currentQuestion.options}
                  correctAnswer={currentQuestion.correctAnswer as string}
                  locale={locale}
                  disabled={isShowingExplanation}
                  onAnswer={(answer, isCorrect) =>
                    handleAnswer(answer, isCorrect)
                  }
                />
              )}

            {currentQuestion.type === "fill-blank" && (
              <FillBlank
                prompt={currentQuestion.prompt}
                correctAnswer={currentQuestion.correctAnswer as string}
                locale={locale}
                disabled={isShowingExplanation}
                onAnswer={(answer, isCorrect) =>
                  handleAnswer(answer, isCorrect)
                }
              />
            )}

            {currentQuestion.type === "true-false" && (
              <TrueFalse
                prompt={currentQuestion.prompt}
                correctAnswer={currentQuestion.correctAnswer as string}
                locale={locale}
                disabled={isShowingExplanation}
                onAnswer={(answer, isCorrect) =>
                  handleAnswer(answer, isCorrect)
                }
              />
            )}

            {currentQuestion.type === "order-steps" &&
              currentQuestion.options && (
                <OrderSteps
                  prompt={currentQuestion.prompt}
                  options={currentQuestion.options}
                  correctAnswer={currentQuestion.correctAnswer as string[]}
                  locale={locale}
                  disabled={isShowingExplanation}
                  onAnswer={(answer, isCorrect) =>
                    handleAnswer(answer, isCorrect)
                  }
                />
              )}

            {/* Explanation / Step-by-step after answering */}
            <AnimatePresence>
              {isShowingExplanation && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8 space-y-4"
                >
                  {/* Explanation card */}
                  <div className="p-5 bg-linear-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl border-2 border-blue-200 dark:border-blue-800 shadow-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-base font-bold text-blue-900 dark:text-blue-100">
                        {locale === "es" ? "Explicación" : "Explanation"}
                      </span>
                    </div>
                    <div className="text-sm leading-relaxed text-blue-900 dark:text-blue-100">
                      <MathRenderer
                        math={t(currentQuestion.explanation, locale)}
                        block
                      />
                    </div>
                  </div>

                  {/* Step by step toggle */}
                  {currentQuestion.steps &&
                    currentQuestion.steps.length > 0 && (
                      <>
                        {!isShowingSteps ? (
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              variant="outline"
                              onClick={() => setShowingSteps(true)}
                              className="w-full h-12 border-2 border-dashed border-primary/40 hover:border-primary hover:bg-primary/5 font-semibold shadow-sm"
                            >
                              <BookOpen className="w-5 h-5 mr-2" />
                              {locale === "es"
                                ? "Ver solución paso a paso"
                                : "View step-by-step solution"}
                            </Button>
                          </motion.div>
                        ) : (
                          <StepByStep
                            steps={currentQuestion.steps.map((s) =>
                              t(s, locale),
                            )}
                            locale={locale}
                          />
                        )}
                      </>
                    )}

                  {/* Next button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      onClick={handleNext}
                      size="lg"
                      className="w-full h-16 rounded-2xl bg-linear-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                    >
                      {quiz.currentQuestionIndex + 1 >= quiz.totalQuestions
                        ? locale === "es"
                          ? "Ver resultados"
                          : "See results"
                        : locale === "es"
                          ? "Siguiente"
                          : "Next"}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
