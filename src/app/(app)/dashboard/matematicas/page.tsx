"use client";

import { XPCounter } from "@/components/gamification/XPCounter";
import { StationMap } from "@/components/learning-path/StationMap";
import { SubjectHeader } from "@/components/subject/SubjectHeader";
import { allTopics } from "@/lib/data/topics";
import type { Topic } from "@/lib/types";
import { useGameStore, useProgressStore, useSettingsStore } from "@/stores";
import { useEffect } from "react";

export default function MatematicasPage() {
  const setCurrentSubject = useSettingsStore((s) => s.setCurrentSubject);
  const regenerateHearts = useGameStore((s) => s.regenerateHearts);
  const unlockLesson = useProgressStore((s) => s.unlockLesson);
  const lessonProgress = useProgressStore((s) => s.lessonProgress);
  const isTopicUnlocked = useProgressStore((s) => s.isTopicUnlocked);

  // On mount: set current subject, regenerate hearts and unlock first available lessons
  useEffect(() => {
    setCurrentSubject({
      name: "Matemáticas",
      nameEn: "Mathematics",
      icon: "📐",
    });
    regenerateHearts();

    // Ensure first lessons of unlocked topics are available
    allTopics.forEach((topic: Topic) => {
      if (isTopicUnlocked(topic.id, topic.prerequisites ?? [])) {
        const firstLesson = topic.lessons[0];
        if (firstLesson && !lessonProgress[firstLesson.id]) {
          unlockLesson(topic.id, firstLesson.id);
        }

        // Unlock next lesson after completed ones
        for (let i = 0; i < topic.lessons.length - 1; i++) {
          const current = lessonProgress[topic.lessons[i].id];
          const next = topic.lessons[i + 1];
          if (
            (current?.status === "completed" ||
              current?.status === "perfect") &&
            !lessonProgress[next.id]
          ) {
            unlockLesson(topic.id, next.id);
          }
        }
      }
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="container max-w-3xl mx-auto px-4 py-6">
      <SubjectHeader
        title={{
          es: "Tu viaje matemático",
          en: "Your math journey",
        }}
        description={{
          es: "Viaja de estación en estación. Completa cada tema para llegar a la meta.",
          en: "Travel from station to station. Complete each topic to reach the goal.",
        }}
      />

      {/* XP counter for mobile */}
      <div className="sm:hidden mb-6 max-w-xs mx-auto">
        <XPCounter />
      </div>

      {/* Learning Path Map */}
      <StationMap topics={allTopics} subjectId="matematicas" />
    </div>
  );
}
