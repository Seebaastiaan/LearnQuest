"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight, Eye } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { MathRenderer } from "./MathRenderer";

interface StepByStepProps {
  steps: string[];
  locale?: "es" | "en";
  autoReveal?: boolean;
  onComplete?: () => void;
}

export function StepByStep({
  steps,
  locale = "es",
  autoReveal = false,
  onComplete,
}: StepByStepProps) {
  const [visibleCount, setVisibleCount] = useState(
    autoReveal ? steps.length : 1,
  );

  const showNext = () => {
    if (visibleCount < steps.length) {
      setVisibleCount(visibleCount + 1);
    }
    if (visibleCount + 1 >= steps.length && onComplete) {
      onComplete();
    }
  };

  const showAll = () => {
    setVisibleCount(steps.length);
    onComplete?.();
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
          {locale === "es" ? "Solución paso a paso" : "Step-by-step solution"}
        </h4>
        {visibleCount < steps.length && (
          <Button
            variant="ghost"
            size="sm"
            onClick={showAll}
            className="text-xs"
          >
            <Eye className="w-3 h-3 mr-1" />
            {locale === "es" ? "Ver todo" : "Show all"}
          </Button>
        )}
      </div>

      <AnimatePresence mode="popLayout">
        {steps.slice(0, visibleCount).map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              delay: autoReveal ? i * 0.3 : 0,
            }}
            className="relative"
          >
            <div className="flex items-start gap-3">
              {/* Step number bubble */}
              <div className="shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                {i + 1}
              </div>

              {/* Step content */}
              <div className="flex-1 bg-muted/50 rounded-xl px-4 py-3 border border-border/50">
                <MathRenderer math={step} block />
              </div>
            </div>

            {/* Connector line */}
            {i < steps.length - 1 && i < visibleCount - 1 && (
              <div className="absolute left-3.5 top-7 w-px h-3 bg-border" />
            )}
          </motion.div>
        ))}
      </AnimatePresence>

      {visibleCount < steps.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Button
            onClick={showNext}
            variant="outline"
            className="w-full mt-2 border-dashed border-primary/30 text-primary hover:bg-primary/5"
          >
            <ChevronRight className="w-4 h-4 mr-2" />
            {locale === "es"
              ? `Siguiente paso (${visibleCount}/${steps.length})`
              : `Next step (${visibleCount}/${steps.length})`}
          </Button>
        </motion.div>
      )}
    </div>
  );
}
