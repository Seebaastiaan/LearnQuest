"use client";

import type { Subject } from "@/lib/types/subject";
import { useSettingsStore } from "@/stores";
import { Lock } from "lucide-react";
import { motion } from "motion/react";

interface LockedSubjectsListProps {
  subjects: Subject[];
}

export function LockedSubjectsList({ subjects }: LockedSubjectsListProps) {
  const locale = useSettingsStore((s) => s.locale);

  if (subjects.length === 0) return null;

  return (
    <div>
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3 ml-1"
      >
        {locale === "es" ? "Pr\u00f3ximamente" : "Coming soon"}
      </motion.p>

      {/* Grid of locked cards */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {subjects.map((subject, i) => {
          const Icon = subject.icon;

          return (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 + i * 0.04, duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden"
            >
              {/* Muted background */}
              <div className="absolute inset-0 bg-slate-50/80 dark:bg-slate-900/40" />
              <div className="absolute inset-0 border border-slate-200/50 dark:border-slate-800/40 rounded-2xl" />

              <div className="relative p-4 flex items-center gap-3">
                {/* Icon — desaturated with subject gradient */}
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${subject.gradient} flex items-center justify-center opacity-25 shrink-0`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>

                {/* Name + lock */}
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-semibold text-slate-400 dark:text-slate-500 truncate block">
                    {locale === "es" ? subject.name : subject.nameEn}
                  </span>
                </div>

                <Lock className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 shrink-0" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Goal marker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex items-center justify-center gap-2 py-3"
      >
        <div className="h-px flex-1 max-w-12 bg-slate-200 dark:bg-slate-700" />
        <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
          {locale === "es" ? "Meta: Examen UNAM" : "Goal: UNAM Exam"}
        </span>
        <div className="h-px flex-1 max-w-12 bg-slate-200 dark:bg-slate-700" />
      </motion.div>
    </div>
  );
}
