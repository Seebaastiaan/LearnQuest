"use client";

import { GlossaryDialog } from "@/components/glossary/GlossaryDialog";
import {
  biologyGlossary,
  geographyGlossary,
  mathGlossary,
  type GlossaryEntry,
} from "@/lib/data/glossary";
import type { LocalizedString } from "@/lib/types";
import { useSettingsStore } from "@/stores";
import { BookOpen } from "lucide-react";
import { useState } from "react";

interface SubjectBannerProps {
  /** Subject gradient class (e.g. "from-sky-500 to-blue-600") */
  gradient: string;
  title: LocalizedString;
  /** Current unit/section label */
  sectionLabel?: string;
  unitLabel?: string;
  /** Subject ID to determine which glossary to show */
  subjectId?: string;
}

// Map subject IDs to their glossaries
const glossariesBySubject: Record<string, Record<string, GlossaryEntry>> = {
  matematicas: mathGlossary,
  biologia: biologyGlossary,
  geografia: geographyGlossary,
};

export function SubjectBanner({
  gradient,
  title,
  sectionLabel,
  unitLabel,
  subjectId = "matematicas",
}: SubjectBannerProps) {
  const locale = useSettingsStore((s) => s.locale);
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);

  const glossary = glossariesBySubject[subjectId] || mathGlossary;
  const subjectName = title[locale] || title.es;

  return (
    <>
      <div
        className={`bg-gradient-to-r ${gradient} rounded-2xl px-5 py-4 flex items-center justify-between`}
      >
        <div>
          {/* Breadcrumbs */}
          {(sectionLabel || unitLabel) && (
            <p className="text-white/70 text-xs font-semibold mb-0.5">
              {[sectionLabel, unitLabel].filter(Boolean).join(" · ")}
            </p>
          )}
          <h1 className="text-white font-extrabold text-lg">
            {title[locale] || title.es}
          </h1>
        </div>

        {/* Guide button */}
        <button
          type="button"
          onClick={() => setIsGlossaryOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 transition-colors text-white text-sm font-bold border border-white/30"
        >
          <BookOpen className="w-4 h-4" />
          <span className="hidden sm:inline">
            {locale === "es" ? "Guía de estudio" : "Study guide"}
          </span>
        </button>
      </div>

      {/* Glossary modal */}
      <GlossaryDialog
        isOpen={isGlossaryOpen}
        onClose={() => setIsGlossaryOpen(false)}
        glossary={glossary}
        subjectName={subjectName}
      />
    </>
  );
}
