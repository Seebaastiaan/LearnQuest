"use client";

import type { Subject } from "@/lib/types/subject";
import { getSubjectColors } from "@/lib/utils/subject-colors";
import { useSettingsStore } from "@/stores";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

interface SubjectCardProps {
  subject: Subject;
  progressPercent: number;
  index?: number;
}

export function SubjectCard({
  subject,
  progressPercent,
  index = 0,
}: SubjectCardProps) {
  const locale = useSettingsStore((s) => s.locale);
  const Icon = subject.icon;
  const c = getSubjectColors(subject.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.06 * index, duration: 0.35 }}
    >
      <Link href={`/dashboard/${subject.id}`}>
        <motion.div
          whileHover={{ y: -4, scale: 1.015 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 24 }}
          className="group relative rounded-2xl overflow-hidden cursor-pointer"
        >
          {/* Background surface — uses subject-specific colors */}
          <div
            className={`absolute inset-0 bg-linear-to-br ${c.surface} ${c.surfaceDark}`}
          />
          <div
            className={`absolute inset-0 border ${c.border} ${c.borderDark} rounded-2xl`}
          />

          {/* Hover shimmer overlay */}
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/40 dark:group-hover:bg-white/5 transition-colors duration-300 rounded-2xl" />

          <div className="relative p-5">
            {/* Icon + Emoji badge */}
            <div className="flex items-start justify-between mb-4">
              <div className="relative">
                {/* Pulse ring */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  animate={{
                    boxShadow: [
                      `0 0 0 0px ${c.pulseColor}`,
                      `0 0 0 8px ${c.pulseColor.replace("0.3)", "0)")}`,
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
                <motion.div
                  className={`w-14 h-14 rounded-2xl bg-linear-to-br ${subject.gradient} flex items-center justify-center shadow-lg ${c.iconShadow}`}
                  whileHover={{ rotate: [0, -8, 8, -4, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>
              </div>

              {/* Arrow CTA */}
              <motion.div
                className={`w-9 h-9 rounded-xl ${c.ctaBg} flex items-center justify-center text-white ${c.ctaHover} ${c.ctaHoverDark} transition-colors opacity-0 group-hover:opacity-100`}
                initial={false}
                animate={{ x: 0 }}
                whileHover={{ x: 2 }}
              >
                <ChevronRight className="w-4.5 h-4.5" />
              </motion.div>
            </div>

            {/* Title */}
            <h2 className="text-lg font-black tracking-tight mb-0.5 leading-tight">
              {locale === "es" ? subject.name : subject.nameEn}
            </h2>

            {/* Subtitle */}
            <p className="text-xs text-muted-foreground mb-4">
              {subject.lessonCount} {locale === "es" ? "lecciones" : "lessons"}{" "}
              &middot; {subject.exerciseCount}{" "}
              {locale === "es" ? "ejercicios" : "exercises"}
            </p>

            {/* Progress bar */}
            <div className="flex items-center gap-2.5">
              <div
                className={`flex-1 h-2 ${c.progressTrack} ${c.progressTrackDark} rounded-full overflow-hidden`}
              >
                <motion.div
                  className={`h-full bg-linear-to-r ${c.progressFill} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ delay: 0.3 + 0.06 * index, duration: 0.6 }}
                />
              </div>
              <span
                className={`text-xs font-bold ${c.accentText} ${c.accentTextDark} tabular-nums min-w-[2rem] text-right`}
              >
                {progressPercent}%
              </span>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
