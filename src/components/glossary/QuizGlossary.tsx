"use client";

import { findGlossaryTerms, mathGlossary } from "@/lib/data/glossary";
import type { Locale } from "@/lib/types";
import { t } from "@/lib/types";
import { BookMarked, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface QuizGlossaryProps {
  questionText: string;
  locale: Locale;
}

/**
 * Shows a glossary button that displays relevant terms for the current question
 */
export function QuizGlossary({ questionText, locale }: QuizGlossaryProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Extract plain text from LaTeX (remove LaTeX commands but keep \text{} content)
  const plainText = questionText
    .replace(/\\text\{([^}]+)\}/g, "$1")
    .replace(/\\[a-zA-Z]+/g, "")
    .replace(/[{}]/g, "");

  const terms = findGlossaryTerms(plainText);

  // Get unique glossary entries
  const entries = Array.from(
    new Set(
      terms
        .map((term) => term.toLowerCase())
        .filter((key) => mathGlossary[key]),
    ),
  ).map((key) => mathGlossary[key]);

  if (entries.length === 0) {
    return null;
  }

  return (
    <>
      {/* Glossary Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-primary bg-primary/10 hover:bg-primary/20 rounded-full transition-colors"
        type="button"
      >
        <BookMarked className="w-4 h-4" />
        <span>
          {locale === "es" ? "Glosario" : "Glossary"} ({entries.length})
        </span>
      </motion.button>

      {/* Glossary Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-x-4 top-1/2 -translate-y-1/2 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl z-50"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-h-[80vh] overflow-hidden flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <BookMarked className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-foreground">
                        {locale === "es" ? "Glosario" : "Glossary"}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {locale === "es"
                          ? "Términos técnicos en esta pregunta"
                          : "Technical terms in this question"}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center transition-colors"
                    aria-label="Cerrar"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 overflow-y-auto">
                  {entries.map((entry, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="p-4 rounded-xl bg-linear-to-br from-primary/5 to-primary/10 border border-primary/20"
                    >
                      <h3 className="font-bold text-lg text-primary mb-2">
                        {t(entry.term, locale)}
                      </h3>
                      <p className="text-foreground/80 leading-relaxed">
                        {t(entry.definition, locale)}
                      </p>
                      {entry.examples && (
                        <p className="mt-3 text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-3">
                          {t(entry.examples, locale)}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-border bg-gray-50 dark:bg-gray-800/50">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
                  >
                    {locale === "es" ? "Entendido" : "Got it"}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
