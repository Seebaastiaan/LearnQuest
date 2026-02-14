"use client";

import { XPCounter } from "@/components/gamification/XPCounter";
import { PathMap } from "@/components/learning-path/PathMap";
import { allTopics } from "@/lib/data/topics";
import type { Topic } from "@/lib/types";
import { useGameStore, useProgressStore, useSettingsStore } from "@/stores";
import { motion } from "motion/react";
import { useEffect } from "react";

export default function DashboardPage() {
  const locale = useSettingsStore((s) => s.locale);
  const regenerateHearts = useGameStore((s) => s.regenerateHearts);
  const unlockLesson = useProgressStore((s) => s.unlockLesson);
  const lessonProgress = useProgressStore((s) => s.lessonProgress);
  const isTopicUnlocked = useProgressStore((s) => s.isTopicUnlocked);

  // On mount: regenerate hearts and unlock first available lessons
  useEffect(() => {
    regenerateHearts();

    // Ensure first lessons of unlocked topics are available
    allTopics.forEach((topic: Topic) => {
      if (isTopicUnlocked(topic.id, topic.prerequisites)) {
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
    <div className="container max-w-5xl mx-auto px-4 py-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-black mb-2">
          {locale === "es" ? "Tu camino de aprendizaje" : "Your learning path"}
        </h1>
        <p className="text-muted-foreground">
          {locale === "es"
            ? "Completa cada tema para desbloquear el siguiente"
            : "Complete each topic to unlock the next one"}
        </p>
      </motion.div>

      {/* XP counter for mobile */}
      <div className="sm:hidden mb-6 max-w-xs mx-auto">
        <XPCounter />
      </div>

      {/* Learning Path Map */}
      <PathMap topics={allTopics} />
    </div>
  );
}
