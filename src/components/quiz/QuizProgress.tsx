"use client";

import { HeartsDisplay } from "@/components/gamification/HeartsDisplay";
import { X } from "lucide-react";
import { motion } from "motion/react";

interface QuizProgressProps {
  current: number;
  total: number;
  onClose?: () => void;
}

export function QuizProgress({ current, total, onClose }: QuizProgressProps) {
  const progress = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="flex items-center gap-3 w-full">
      {onClose && (
        <motion.button
          onClick={onClose}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          className="shrink-0 w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors shadow-sm"
        >
          <X className="w-5 h-5" />
        </motion.button>
      )}

      <div className="flex-1 relative">
        <div className="h-5 bg-gradient-to-r from-muted to-muted/50 rounded-full overflow-hidden shadow-inner border border-border/30">
          <motion.div
            className="h-full bg-linear-to-r from-green-400 via-emerald-500 to-green-500 rounded-full shadow-lg"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <div className="h-full w-full bg-gradient-to-t from-white/20 to-transparent" />
          </motion.div>
        </div>
        <div className="absolute -top-6 left-1/2 -translate-x-1/2">
          <span className="text-xs font-bold text-muted-foreground bg-background/80 backdrop-blur-sm px-2 py-0.5 rounded-full border border-border/30">
            {current} / {total}
          </span>
        </div>
      </div>

      <HeartsDisplay />
    </div>
  );
}
