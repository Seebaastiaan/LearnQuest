"use client";

import { mathGlossary } from "@/lib/data/glossary";
import type { Locale } from "@/lib/types";
import { t } from "@/lib/types";
import { BookMarked } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface GlossaryTermProps {
  term: string;
  locale: Locale;
  children: React.ReactNode;
}

export function GlossaryTerm({ term, locale, children }: GlossaryTermProps) {
  const [isOpen, setIsOpen] = useState(false);
  const entry = mathGlossary[term.toLowerCase()];

  if (!entry) {
    return <>{children}</>;
  }

  return (
    <span className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-primary underline decoration-dotted underline-offset-2 hover:decoration-solid cursor-help transition-all"
        type="button"
      >
        {children}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.15 }}
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 w-72 max-w-[90vw]"
            >
              <div className="bg-white dark:bg-gray-800 border border-border rounded-lg shadow-xl p-4">
                {/* Header */}
                <div className="flex items-start gap-2 mb-2">
                  <BookMarked className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="font-bold text-sm text-foreground">
                      {t(entry.term, locale)}
                    </h4>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors p-0.5"
                    aria-label="Cerrar"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Definition */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(entry.definition, locale)}
                </p>

                {/* Examples if available */}
                {entry.examples && (
                  <div className="mt-3 pt-3 border-t border-border">
                    <p className="text-xs text-muted-foreground italic">
                      {t(entry.examples, locale)}
                    </p>
                  </div>
                )}

                {/* Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                  <div className="border-8 border-transparent border-t-white dark:border-t-gray-800" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </span>
  );
}
