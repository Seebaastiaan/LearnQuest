"use client";

import { getGreeting } from "@/lib/utils/greeting";
import { useGameStore, useSettingsStore } from "@/stores";
import { Flame, Zap } from "lucide-react";
import { motion } from "motion/react";

interface DashboardGreetingProps {
  completedLessons: number;
  totalLessons: number;
}

export function DashboardGreeting({
  completedLessons,
  totalLessons,
}: DashboardGreetingProps) {
  const locale = useSettingsStore((s) => s.locale);
  const { totalXp, currentStreak } = useGameStore();

  return (
    <>
      {/* Greeting header */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-black tracking-tight">
          {getGreeting(locale)}
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          {locale === "es"
            ? "Tu camino al examen UNAM"
            : "Your path to the UNAM exam"}
        </p>
      </motion.div>

      {/* Quick stats row */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="flex items-center gap-3 mb-8"
      >
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/30">
          <Zap className="w-3.5 h-3.5 text-amber-500" />
          <span className="text-sm font-bold text-amber-700 dark:text-amber-300">
            {totalXp}
          </span>
          <span className="text-xs text-amber-600/70 dark:text-amber-400/70">
            XP
          </span>
        </div>
        {currentStreak > 0 && (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-50 dark:bg-orange-950/30">
            <Flame className="w-3.5 h-3.5 text-orange-500" />
            <span className="text-sm font-bold text-orange-700 dark:text-orange-300">
              {currentStreak}
            </span>
            <span className="text-xs text-orange-600/70 dark:text-orange-400/70">
              {locale === "es" ? "días" : "days"}
            </span>
          </div>
        )}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 dark:bg-sky-950/30">
          <span className="text-sm leading-none">📚</span>
          <span className="text-sm font-bold text-sky-700 dark:text-sky-300">
            {completedLessons}/{totalLessons}
          </span>
        </div>
      </motion.div>
    </>
  );
}
