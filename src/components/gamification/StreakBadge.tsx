"use client";

import { useGameStore } from "@/stores";
import { Flame } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function StreakBadge() {
  const [isMounted, setIsMounted] = useState(false);
  const currentStreak = useGameStore((s) => s.currentStreak);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted || currentStreak === 0) {
    return (
      <div className="flex items-center gap-1 text-muted-foreground">
        <Flame className="w-5 h-5" />
        <span className="text-sm font-medium">0</span>
      </div>
    );
  }

  return (
    <motion.div
      className="flex items-center gap-1"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        <Flame className="w-5 h-5 fill-orange-500 text-orange-500" />
      </motion.div>
      <span className="text-sm font-bold text-orange-500">{currentStreak}</span>
    </motion.div>
  );
}
