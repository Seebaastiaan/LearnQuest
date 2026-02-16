"use client";

import { QuizEngine } from "@/components/quiz/QuizEngine";
import { allTopics } from "@/lib/data/topics";
import { allBiologyTopics } from "@/lib/data/topics/biologia";
import { allGeographyTopics } from "@/lib/data/topics/geografia";
import type { Lesson, Topic } from "@/lib/types";
import { useProgressStore, useSettingsStore } from "@/stores";
import { useRouter } from "next/navigation";
import { use, useCallback } from "react";

// Combine all topics from all subjects
const allSubjectTopics = [
  ...allTopics,
  ...allBiologyTopics,
  ...allGeographyTopics,
];

function findLessonById(
  lessonId: string,
): { topic: Topic; lesson: Lesson } | null {
  for (const topic of allSubjectTopics) {
    const lesson = topic.lessons.find((l: Lesson) => l.id === lessonId);
    if (lesson) return { topic, lesson };
  }
  return null;
}

function findNextLessonId(
  topicId: string,
  currentLessonId: string,
): string | null {
  const topic = allSubjectTopics.find((t: Topic) => t.id === topicId);
  if (!topic) return null;

  const currentIndex = topic.lessons.findIndex(
    (l: Lesson) => l.id === currentLessonId,
  );
  if (currentIndex < topic.lessons.length - 1) {
    return topic.lessons[currentIndex + 1].id;
  }
  return null;
}

export default function LessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: lessonId } = use(params);
  const router = useRouter();
  const locale = useSettingsStore((s) => s.locale);
  const completeLesson = useProgressStore((s) => s.completeLesson);
  const unlockLesson = useProgressStore((s) => s.unlockLesson);
  const markTopicComplete = useProgressStore((s) => s.markTopicComplete);

  const result = findLessonById(lessonId);

  const handleComplete = useCallback(
    (score: number) => {
      if (!result) return;

      const { topic, lesson } = result;

      // Mark lesson as complete
      completeLesson(topic.id, lesson.id, score);

      // Unlock next lesson
      const nextLessonId = findNextLessonId(topic.id, lesson.id);
      if (nextLessonId) {
        unlockLesson(topic.id, nextLessonId);
      } else {
        // All lessons done — mark topic complete
        markTopicComplete(topic.id);
      }

      // Go back to dashboard
      router.push("/dashboard");
    },
    [result, completeLesson, unlockLesson, markTopicComplete, router],
  );

  const handleClose = useCallback(() => {
    router.push("/dashboard");
  }, [router]);

  if (!result) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <p className="text-4xl mb-4">📚</p>
          <h2 className="text-xl font-bold mb-2">
            {locale === "es" ? "Lección no encontrada" : "Lesson not found"}
          </h2>
          <button
            onClick={handleClose}
            className="text-primary underline text-sm"
          >
            {locale === "es" ? "Volver al mapa" : "Back to map"}
          </button>
        </div>
      </div>
    );
  }

  const { lesson } = result;

  return (
    <div className="min-h-[80vh]">
      <QuizEngine
        lesson={lesson}
        locale={locale}
        onComplete={handleComplete}
        onClose={handleClose}
      />
    </div>
  );
}
