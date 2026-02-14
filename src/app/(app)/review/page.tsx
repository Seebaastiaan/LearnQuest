"use client";

import { useSettingsStore } from "@/stores";
import { BookOpen } from "lucide-react";
import { motion } from "motion/react";

export default function ReviewPage() {
  const locale = useSettingsStore((s) => s.locale);

  return (
    <div className="container max-w-2xl mx-auto px-4 py-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-20"
      >
        <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <h1 className="text-2xl font-black mb-2">
          {locale === "es" ? "Repaso espaciado" : "Spaced Review"}
        </h1>
        <p className="text-muted-foreground">
          {locale === "es"
            ? "Completa algunas lecciones primero para tener ejercicios que repasar."
            : "Complete some lessons first to have exercises to review."}
        </p>
      </motion.div>
    </div>
  );
}
