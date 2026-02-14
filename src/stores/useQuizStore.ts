"use client";

import type { QuizAnswer, QuizState } from "@/lib/types";
import { create } from "zustand";

interface QuizStoreState {
  // Current quiz state
  quiz: QuizState | null;
  isShowingExplanation: boolean;
  isShowingSteps: boolean;

  // Actions
  startQuiz: (totalQuestions: number) => void;
  submitAnswer: (answer: QuizAnswer) => void;
  nextQuestion: () => void;
  completeQuiz: () => void;
  resetQuiz: () => void;
  setShowingExplanation: (showing: boolean) => void;
  setShowingSteps: (showing: boolean) => void;
}

export const useQuizStore = create<QuizStoreState>()((set, get) => ({
  quiz: null,
  isShowingExplanation: false,
  isShowingSteps: false,

  startQuiz: (totalQuestions) => {
    set({
      quiz: {
        currentQuestionIndex: 0,
        totalQuestions,
        correctAnswers: 0,
        wrongAnswers: 0,
        currentStreak: 0,
        bestStreak: 0,
        answers: [],
        isComplete: false,
        xpEarned: 0,
        startedAt: new Date().toISOString(),
      },
      isShowingExplanation: false,
      isShowingSteps: false,
    });
  },

  submitAnswer: (answer) => {
    const quiz = get().quiz;
    if (!quiz) return;

    const newCorrect = quiz.correctAnswers + (answer.isCorrect ? 1 : 0);
    const newWrong = quiz.wrongAnswers + (answer.isCorrect ? 0 : 1);
    const newStreak = answer.isCorrect ? quiz.currentStreak + 1 : 0;

    set({
      quiz: {
        ...quiz,
        correctAnswers: newCorrect,
        wrongAnswers: newWrong,
        currentStreak: newStreak,
        bestStreak: Math.max(newStreak, quiz.bestStreak),
        answers: [...quiz.answers, answer],
      },
      isShowingExplanation: true,
    });
  },

  nextQuestion: () => {
    const quiz = get().quiz;
    if (!quiz) return;

    const nextIndex = quiz.currentQuestionIndex + 1;
    const isComplete = nextIndex >= quiz.totalQuestions;

    set({
      quiz: {
        ...quiz,
        currentQuestionIndex: nextIndex,
        isComplete,
      },
      isShowingExplanation: false,
      isShowingSteps: false,
    });
  },

  completeQuiz: () => {
    const quiz = get().quiz;
    if (!quiz) return;

    set({
      quiz: {
        ...quiz,
        isComplete: true,
      },
    });
  },

  resetQuiz: () => {
    set({
      quiz: null,
      isShowingExplanation: false,
      isShowingSteps: false,
    });
  },

  setShowingExplanation: (showing) => set({ isShowingExplanation: showing }),
  setShowingSteps: (showing) => set({ isShowingSteps: showing }),
}));
