"use client";

import { SubjectBanner } from "@/components/dashboard/SubjectBanner";
import { SubjectTabs } from "@/components/dashboard/SubjectTabs";
import { ZigzagPath } from "@/components/dashboard/ZigzagPath";
import { subjects } from "@/lib/data/subjects";
import { allTopics } from "@/lib/data/topics";
import { allBiologyTopics } from "@/lib/data/topics/biologia";
import { allGeographyTopics } from "@/lib/data/topics/geografia";
import type { Subject } from "@/lib/types/subject";
import type { Topic } from "@/lib/types";
import { useGameStore, useProgressStore, useSettingsStore } from "@/stores";
import { useEffect } from "react";

/** Map subject IDs to their topic lists */
const topicsBySubject: Record<string, Topic[]> = {
  matematicas: allTopics,
  biologia: allBiologyTopics,
  geografia: allGeographyTopics,
};

export default function DashboardPage() {
  const { lessonProgress } = useProgressStore();
  const locale = useSettingsStore((s) => s.locale);
  const currentSubjectData = useSettingsStore((s) => s.currentSubject);
  const setCurrentSubject = useSettingsStore((s) => s.setCurrentSubject);
  const regenerateHearts = useGameStore((s) => s.regenerateHearts);

  // Regenerate hearts on mount
  useEffect(() => {
    regenerateHearts();
  }, [regenerateHearts]);

  // Determine which subject to show — default to first available
  const activeSubject =
    (currentSubjectData
      ? subjects.find((s) => s.name === currentSubjectData.name)
      : null) ?? subjects.find((s) => s.available) ?? subjects[0];

  const topics = topicsBySubject[activeSubject.id] ?? [];

  // Figure out current section/unit from progress
  const currentTopicIndex = topics.findIndex((topic) =>
    topic.lessons.some((l) => {
      const p = lessonProgress[l.id];
      return !p || p.status === "available" || p.status === "in-progress";
    }),
  );
  const currentTopic = topics[currentTopicIndex >= 0 ? currentTopicIndex : 0];
  const sectionLabel = currentTopic
    ? `${locale === "es" ? "Sección" : "Section"} ${currentTopicIndex + 1}`
    : undefined;
  const unitLabel = currentTopic
    ? currentTopic.title[locale] || currentTopic.title.es
    : undefined;

  /** Switch subject — update the store (no navigation needed, path stays on /dashboard) */
  const handleSubjectSelect = (subject: Subject) => {
    setCurrentSubject({
      name: subject.name,
      nameEn: subject.nameEn,
      icon: subject.id,
    });
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-5">
      {/* Subject tab bar — prominent horizontal pills */}
      <SubjectTabs
        activeSubjectId={activeSubject.id}
        onSelect={handleSubjectSelect}
      />

      {/* Subject header banner */}
      <SubjectBanner
        gradient={activeSubject.gradient}
        title={{ es: activeSubject.name, en: activeSubject.nameEn }}
        sectionLabel={sectionLabel}
        unitLabel={unitLabel}
        subjectId={activeSubject.id}
      />

      {/* Zigzag learning path */}
      <ZigzagPath topics={topics} lessonProgress={lessonProgress} subjectId={activeSubject.id} />
    </div>
  );
}
