"use client";

import { DEFAULT_GAME_CONFIG } from "@/lib/types";
import { useGameStore } from "@/stores";
import { Flame, Heart } from "lucide-react";
import { useEffect, useState } from "react";

export function TopBar() {
  const { currentStreak, hearts } = useGameStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-background border-b border-[#E5E5E5] dark:border-white/10">
      <div className="flex items-center justify-end h-[56px] px-4 lg:px-6">
        {/* Gamification stats (visible on smaller screens where right sidebar is hidden) */}
        <div className="flex items-center gap-4">
          {/* Streak */}
          <div className="flex items-center gap-1">
            <Flame
              className={`w-5 h-5 ${
                isMounted && currentStreak > 0
                  ? "fill-orange-500 text-orange-500"
                  : "text-[#E5E5E5] dark:text-slate-600"
              }`}
            />
            <span
              className={`text-[13px] font-bold ${
                isMounted && currentStreak > 0
                  ? "text-orange-500"
                  : "text-[#AFAFAF]"
              }`}
            >
              {isMounted ? currentStreak : 0}
            </span>
          </div>

          {/* Hearts */}
          <div className="flex items-center gap-1">
            <Heart className="w-5 h-5 fill-[#FF4B4B] text-[#FF4B4B]" />
            <span className="text-[13px] font-bold text-[#FF4B4B]">
              {isMounted ? hearts : DEFAULT_GAME_CONFIG.maxHearts}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
