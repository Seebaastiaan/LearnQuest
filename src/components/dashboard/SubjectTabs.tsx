"use client";

import { subjects } from "@/lib/data/subjects";
import type { Subject } from "@/lib/types/subject";
import { useSettingsStore } from "@/stores";
import { ChevronLeft, ChevronRight, Lock } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";

/**
 * 3D shadow color for each subject's tab button (darker shade of the gradient).
 * These are concrete values so Tailwind v4 can pick them up at build time.
 */
const shadowBySubject: Record<string, string> = {
  matematicas: "#2563eb", // blue-600
  fisica: "#7c3aed", // violet-600
  quimica: "#e11d48", // rose-600
  biologia: "#059669", // emerald-600
  "historia-universal": "#d97706", // amber-600
  "historia-mexico": "#e11d48", // rose-600
  geografia: "#0891b2", // cyan-600
  literatura: "#7c3aed", // violet-600
  espanol: "#059669", // emerald-600
};

/**
 * Active background color for each subject (solid, not gradient, for the tab fill).
 */
const bgBySubject: Record<string, string> = {
  matematicas: "bg-sky-500",
  fisica: "bg-purple-500",
  quimica: "bg-pink-500",
  biologia: "bg-emerald-500",
  "historia-universal": "bg-amber-500",
  "historia-mexico": "bg-red-500",
  geografia: "bg-teal-500",
  literatura: "bg-indigo-500",
  espanol: "bg-green-500",
};

interface SubjectTabsProps {
  activeSubjectId: string;
  onSelect: (subject: Subject) => void;
}

export function SubjectTabs({ activeSubjectId, onSelect }: SubjectTabsProps) {
  const locale = useSettingsStore((s) => s.locale);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const availableSubjects = subjects.filter((s) => s.available);
  const currentIndex = availableSubjects.findIndex(
    (s) => s.id === activeSubjectId,
  );
  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < availableSubjects.length - 1;

  const scrollToSubject = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const newIndex = direction === "left" ? currentIndex - 1 : currentIndex + 1;
    if (newIndex >= 0 && newIndex < availableSubjects.length) {
      onSelect(availableSubjects[newIndex]);

      // Smooth scroll to the selected tab
      const tabs = container.children;
      const targetTab = tabs[newIndex] as HTMLElement;
      if (targetTab) {
        targetTab.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  return (
    <div className="mb-4 relative">
      {/* Left arrow - only visible on larger screens */}
      <button
        type="button"
        onClick={() => scrollToSubject("left")}
        disabled={!canScrollLeft}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white dark:bg-slate-800 shadow-lg border-2 border-[#E5E5E5] dark:border-white/10 sm:inline-flex hidden items-center justify-center hover:bg-[#F7F7F7] dark:hover:bg-slate-700 transition-all ${!canScrollLeft ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        aria-label="Previous subject"
      >
        <ChevronLeft className="w-5 h-5 text-[#4B4B4B] dark:text-white" />
      </button>

      {/* Right arrow - only visible on larger screens */}
      <button
        type="button"
        onClick={() => scrollToSubject("right")}
        disabled={!canScrollRight}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white dark:bg-slate-800 shadow-lg border-2 border-[#E5E5E5] dark:border-white/10 sm:inline-flex hidden items-center justify-center hover:bg-[#F7F7F7] dark:hover:bg-slate-700 transition-all ${!canScrollRight ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        aria-label="Next subject"
      >
        <ChevronRight className="w-5 h-5 text-[#4B4B4B] dark:text-white" />
      </button>

      {/* Scrollable container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-1 px-1 sm:px-10"
      >
        {subjects.map((subject) => {
          const isActive = subject.id === activeSubjectId;
          const isLocked = !subject.available;
          const shadow = shadowBySubject[subject.id] ?? "#94a3b8";
          const bg = bgBySubject[subject.id] ?? "bg-slate-500";
          const Icon = subject.icon;

          if (isLocked) {
            return (
              <div
                key={subject.id}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-[#E5E5E5] dark:border-white/10 bg-[#F7F7F7] dark:bg-white/5 opacity-60 cursor-not-allowed select-none shrink-0"
              >
                <div className="relative">
                  <Icon className="w-5 h-5 text-[#AFAFAF] dark:text-slate-500" />
                  <Lock className="w-3 h-3 text-[#AFAFAF] dark:text-slate-500 absolute -bottom-1 -right-1.5" />
                </div>
                <span className="text-sm font-bold text-[#AFAFAF] dark:text-slate-500 whitespace-nowrap">
                  {locale === "es" ? subject.name : subject.nameEn}
                </span>
              </div>
            );
          }

          return (
            <motion.button
              key={subject.id}
              type="button"
              onClick={() => onSelect(subject)}
              whileTap={{ y: 3 }}
              className={`
                flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm
                transition-colors duration-150 shrink-0 cursor-pointer select-none
                ${
                  isActive
                    ? `${bg} text-white border-2 border-transparent`
                    : "bg-white dark:bg-white/5 text-[#4B4B4B] dark:text-slate-300 border-2 border-[#E5E5E5] dark:border-white/10 hover:bg-[#F7F7F7] dark:hover:bg-white/10"
                }
              `}
              style={
                isActive
                  ? { boxShadow: `0 4px 0 0 ${shadow}` }
                  : { boxShadow: "0 4px 0 0 #E5E5E5" }
              }
            >
              <Icon
                className={`w-5 h-5 ${isActive ? "text-white" : "text-[#AFAFAF] dark:text-slate-400"}`}
              />
              <span className="whitespace-nowrap">
                {locale === "es" ? subject.name : subject.nameEn}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
