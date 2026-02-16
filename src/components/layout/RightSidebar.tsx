"use client";

import { DEFAULT_GAME_CONFIG } from "@/lib/types";
import { useGameStore, useProgressStore, useSettingsStore } from "@/stores";
import { Flame, Heart } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

// ─── Daily missions ───
interface Mission {
  id: string;
  titleEs: string;
  titleEn: string;
  current: number;
  target: number;
  xpReward: number;
}

export function RightSidebar() {
  const locale = useSettingsStore((s) => s.locale);
  const { totalXp, currentStreak, hearts } = useGameStore();
  const { lessonProgress } = useProgressStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  // Derive mission progress from actual store data
  const completedToday = Object.values(lessonProgress).filter(
    (p) =>
      (p.status === "completed" || p.status === "perfect") &&
      p.completedAt &&
      p.completedAt.startsWith(new Date().toISOString().split("T")[0]),
  ).length;

  const perfectToday = Object.values(lessonProgress).filter(
    (p) =>
      p.status === "perfect" &&
      p.completedAt &&
      p.completedAt.startsWith(new Date().toISOString().split("T")[0]),
  ).length;

  const missions: Mission[] = [
    {
      id: "daily-lessons",
      titleEs: "Completa 3 lecciones",
      titleEn: "Complete 3 lessons",
      current: Math.min(completedToday, 3),
      target: 3,
      xpReward: 20,
    },
    {
      id: "daily-xp",
      titleEs: "Gana 50 XP",
      titleEn: "Earn 50 XP",
      current: Math.min(
        totalXp % 50 === 0 && totalXp > 0 ? 50 : totalXp % 50,
        50,
      ),
      target: 50,
      xpReward: 15,
    },
    {
      id: "daily-perfect",
      titleEs: "Obtén 1 lección perfecta",
      titleEn: "Get 1 perfect lesson",
      current: Math.min(perfectToday, 1),
      target: 1,
      xpReward: 30,
    },
  ];

  return (
    <aside className="hidden xl:block fixed right-0 top-0 bottom-0 w-[280px] border-l border-[#E5E5E5] dark:border-white/10 bg-background z-40 overflow-y-auto">
      <div className="px-4 pt-[72px] pb-6 space-y-5">
        {/* ─── Stats bar: Streak · Hearts ─── */}
        <div className="flex items-center justify-around px-2">
          {/* Streak */}
          <div className="flex items-center gap-1.5">
            <Flame
              className={`w-6 h-6 ${
                isMounted && currentStreak > 0
                  ? "fill-orange-500 text-orange-500"
                  : "text-[#E5E5E5] dark:text-slate-600"
              }`}
            />
            <span
              className={`text-sm font-bold ${
                isMounted && currentStreak > 0
                  ? "text-orange-500"
                  : "text-[#AFAFAF] dark:text-slate-500"
              }`}
            >
              {isMounted ? currentStreak : 0}
            </span>
          </div>

          {/* Hearts */}
          <div className="flex items-center gap-1.5">
            <Heart className="w-6 h-6 fill-[#FF4B4B] text-[#FF4B4B]" />
            <span className="text-sm font-bold text-[#FF4B4B]">
              {isMounted ? hearts : DEFAULT_GAME_CONFIG.maxHearts}
            </span>
          </div>
        </div>

        {/* ─── Misiones Diarias ─── */}
        <WidgetCard>
          <h3 className="text-base font-extrabold text-[#4B4B4B] dark:text-white mb-3">
            {locale === "es" ? "Misiones Diarias" : "Daily Quests"}
          </h3>

          <div className="space-y-3">
            {missions.map((mission) => {
              const progress =
                mission.target > 0
                  ? (mission.current / mission.target) * 100
                  : 0;
              const isComplete = mission.current >= mission.target;

              return (
                <div key={mission.id}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-semibold text-[#4B4B4B] dark:text-slate-300">
                      {locale === "es" ? mission.titleEs : mission.titleEn}
                    </span>
                    <span
                      className={`text-xs font-bold ${
                        isComplete
                          ? "text-[#58CC02]"
                          : "text-[#AFAFAF] dark:text-slate-500"
                      }`}
                    >
                      {mission.current}/{mission.target}
                    </span>
                  </div>
                  <div className="h-3 bg-[#E5E5E5] dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${
                        isComplete ? "bg-[#58CC02]" : "bg-[#FFC800]"
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(progress, 100)}%` }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    />
                  </div>
                  {isComplete && (
                    <p className="text-xs text-[#58CC02] font-bold mt-1">
                      +{mission.xpReward} XP{" "}
                      {locale === "es" ? "ganados" : "earned"}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </WidgetCard>
      </div>
    </aside>
  );
}

/** Reusable widget card wrapper */
function WidgetCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border-2 border-[#E5E5E5] dark:border-white/10 p-4">
      {children}
    </div>
  );
}
