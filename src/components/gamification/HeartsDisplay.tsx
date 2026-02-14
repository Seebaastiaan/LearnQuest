"use client";

import { DEFAULT_GAME_CONFIG } from "@/lib/types";
import { useGameStore } from "@/stores";
import { Heart } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function HeartsDisplay() {
  const [isMounted, setIsMounted] = useState(false);
  const hearts = useGameStore((s) => s.hearts);
  const maxHearts = DEFAULT_GAME_CONFIG.maxHearts;

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: maxHearts }).map((_, i) => (
          <Heart key={i} className="w-5 h-5 fill-red-500 text-red-500" />
        ))}
        <span className="text-sm font-bold text-red-500 ml-1">{maxHearts}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: maxHearts }).map((_, i) => (
        <motion.div
          key={i}
          initial={false}
          animate={{
            scale: i < hearts ? 1 : 0.8,
            opacity: i < hearts ? 1 : 0.3,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <Heart
            className={`w-5 h-5 ${
              i < hearts
                ? "fill-red-500 text-red-500"
                : "fill-muted text-muted-foreground/30"
            }`}
          />
        </motion.div>
      ))}
      <span className="text-sm font-bold text-red-500 ml-1">{hearts}</span>
    </div>
  );
}
