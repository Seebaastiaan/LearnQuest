"use client";

import { useSettingsStore } from "@/stores";
import { ArrowLeft, MapPin } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

interface SubjectHeaderProps {
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
}

// Color mapping for each subject
const subjectColors = {
  Matemáticas: {
    badge: "from-sky-100 to-blue-100 dark:from-sky-950/50 dark:to-blue-950/30",
    text: "text-sky-700 dark:text-sky-300",
  },
  Biología: {
    badge:
      "from-emerald-100 to-green-100 dark:from-emerald-950/50 dark:to-green-950/30",
    text: "text-emerald-700 dark:text-emerald-300",
  },
  Geografía: {
    badge:
      "from-teal-100 to-cyan-100 dark:from-teal-950/50 dark:to-cyan-950/30",
    text: "text-teal-700 dark:text-teal-300",
  },
  Español: {
    badge:
      "from-orange-100 to-amber-100 dark:from-orange-950/50 dark:to-amber-950/30",
    text: "text-orange-700 dark:text-orange-300",
  },
  Literatura: {
    badge:
      "from-indigo-100 to-purple-100 dark:from-indigo-950/50 dark:to-purple-950/30",
    text: "text-indigo-700 dark:text-indigo-300",
  },
  // Default fallback
  default: {
    badge:
      "from-amber-100 to-yellow-100 dark:from-amber-950/50 dark:to-yellow-950/30",
    text: "text-amber-700 dark:text-amber-300",
  },
};

export function SubjectHeader({ title, description }: SubjectHeaderProps) {
  const locale = useSettingsStore((s) => s.locale);
  const currentSubject = useSettingsStore((s) => s.currentSubject);

  // Get colors for current subject
  const colors = currentSubject?.name
    ? subjectColors[currentSubject.name as keyof typeof subjectColors] ||
      subjectColors.default
    : subjectColors.default;

  return (
    <>
      {/* Back button */}
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        {locale === "es" ? "Volver a materias" : "Back to subjects"}
      </Link>

      {/* Header - Station style */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`inline-flex items-center gap-2 px-5 py-2 bg-linear-to-r ${colors.badge} ${colors.text} rounded-2xl text-sm font-semibold mb-4 shadow-sm`}
        >
          <MapPin className="w-4 h-4" />
          {currentSubject?.icon || "📐"}{" "}
          {locale === "es" ? "Estación: " : "Station: "}
          {locale === "es"
            ? currentSubject?.name || "Matemáticas"
            : currentSubject?.nameEn || "Mathematics"}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-black mb-3 bg-linear-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent"
        >
          {locale === "es" ? title.es : title.en}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto"
        >
          {locale === "es" ? description.es : description.en}
        </motion.p>
      </motion.div>
    </>
  );
}
