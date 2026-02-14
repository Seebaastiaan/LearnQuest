"use client";

import { useGameStore } from "@/stores";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function XPCounter() {
  const [isMounted, setIsMounted] = useState(false);
  const totalXp = useGameStore((s) => s.totalXp);
  const level = useGameStore((s) => s.level);
  const xpInCurrentLevel = useGameStore((s) => s.xpInCurrentLevel);
  const xpToNextLevel = useGameStore((s) => s.xpToNextLevel);
  const recentXpGains = useGameStore((s) => s.recentXpGains);
  const clearXpGains = useGameStore((s) => s.clearXpGains);

  const [showGains, setShowGains] = useState<{ amount: number; id: number }[]>(
    [],
  );

  // Wait for client-side hydration to avoid mismatch
  useEffect(() => {
    // Using setTimeout to defer state update and avoid cascading render warning
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (recentXpGains.length > 0) {
      const newGains = recentXpGains.map((g) => ({
        amount: g.amount,
        id: g.timestamp,
      }));

      // Defer state updates to avoid cascading renders
      setTimeout(() => {
        setShowGains((prev) => [...prev, ...newGains]);
        clearXpGains();
      }, 0);

      // Remove after animation
      setTimeout(() => {
        setShowGains((prev) =>
          prev.filter((g) => !newGains.find((ng) => ng.id === g.id)),
        );
      }, 1500);
    }
  }, [recentXpGains, clearXpGains]);

  const progress =
    xpToNextLevel() > 0 ? (xpInCurrentLevel() / xpToNextLevel()) * 100 : 0;

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) {
    return (
      <div className="relative flex items-center gap-2">
        <div className="shrink-0 w-8 h-8 rounded-full bg-linear-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white text-xs font-bold shadow-md">
          1
        </div>
        <div className="flex-1 min-w-20">
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div className="h-full w-0 bg-linear-to-r from-amber-400 to-amber-500 rounded-full" />
          </div>
          <p className="text-[10px] text-muted-foreground mt-0.5 text-center">
            0 XP
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex items-center gap-2">
      {/* Level badge */}
      <div className="shrink-0 w-8 h-8 rounded-full bg-linear-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white text-xs font-bold shadow-md">
        {level}
      </div>

      {/* XP bar */}
      <div className="flex-1 min-w-20">
        <div className="h-3 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-linear-to-r from-amber-400 to-amber-500 rounded-full"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />
        </div>
        <p className="text-[10px] text-muted-foreground mt-0.5 text-center">
          {totalXp} XP
        </p>
      </div>

      {/* Floating XP gains */}
      <AnimatePresence>
        {showGains.map((gain) => (
          <motion.div
            key={gain.id}
            initial={{ opacity: 1, y: 0, x: 0 }}
            animate={{ opacity: 0, y: -40 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute -top-2 right-0 text-amber-500 font-bold text-sm pointer-events-none"
          >
            +{gain.amount} XP
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
