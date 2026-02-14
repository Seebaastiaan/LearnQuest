"use client";

import confetti from "canvas-confetti";
import { useCallback } from "react";

export function useCelebration() {
  const celebrate = useCallback(
    (
      type: "correct" | "lesson-complete" | "level-up" | "streak" = "correct",
    ) => {
      switch (type) {
        case "correct":
          // Small burst from bottom center
          confetti({
            particleCount: 30,
            spread: 60,
            origin: { y: 0.8 },
            colors: ["#22C55E", "#16A34A", "#4ADE80"],
            disableForReducedMotion: true,
          });
          break;

        case "lesson-complete":
          // Dual side cannons
          const defaults = {
            startVelocity: 30,
            spread: 360,
            ticks: 60,
            zIndex: 100,
          };
          confetti({
            ...defaults,
            particleCount: 50,
            origin: { x: 0.1, y: 0.6 },
            colors: ["#0EA5E9", "#22C55E", "#F59E0B", "#8B5CF6"],
          });
          confetti({
            ...defaults,
            particleCount: 50,
            origin: { x: 0.9, y: 0.6 },
            colors: ["#0EA5E9", "#22C55E", "#F59E0B", "#8B5CF6"],
          });
          break;

        case "level-up":
          // Full screen confetti rain
          const duration = 3000;
          const animationEnd = Date.now() + duration;

          const interval = setInterval(() => {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);

            confetti({
              particleCount: 3,
              angle: 60,
              spread: 55,
              origin: { x: 0 },
              colors: ["#F59E0B", "#FBBF24", "#FCD34D"],
            });
            confetti({
              particleCount: 3,
              angle: 120,
              spread: 55,
              origin: { x: 1 },
              colors: ["#F59E0B", "#FBBF24", "#FCD34D"],
            });
          }, 50);
          break;

        case "streak":
          confetti({
            particleCount: 40,
            spread: 100,
            origin: { y: 0.7 },
            colors: ["#F97316", "#FB923C", "#FDBA74"],
          });
          break;
      }
    },
    [],
  );

  return { celebrate };
}
