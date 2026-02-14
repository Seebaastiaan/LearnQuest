import type { Topic } from "@/lib/types";
import { decimaleTopic } from "./decimales";
import { exponentesTopic } from "./exponentes";
import { fraccionesTopic } from "./fracciones";
import { mcmMcdTopic } from "./mcm-mcd";
import { porcentajesTopic } from "./porcentajes";

export const allTopics: Topic[] = [
  mcmMcdTopic,
  fraccionesTopic,
  decimaleTopic,
  porcentajesTopic,
  exponentesTopic,
].sort((a, b) => a.order - b.order);

export function getTopicById(id: string): Topic | undefined {
  return allTopics.find((t) => t.id === id);
}

export function getLessonById(lessonId: string) {
  for (const topic of allTopics) {
    const lesson = topic.lessons.find((l) => l.id === lessonId);
    if (lesson) return { topic, lesson };
  }
  return undefined;
}

export function getNextLesson(currentLessonId: string) {
  for (const topic of allTopics) {
    const idx = topic.lessons.findIndex((l) => l.id === currentLessonId);
    if (idx !== -1) {
      // Next lesson in same topic
      if (idx < topic.lessons.length - 1) {
        return { topic, lesson: topic.lessons[idx + 1] };
      }
      // First lesson of next topic
      const nextTopicIdx = allTopics.findIndex((t) => t.id === topic.id) + 1;
      if (nextTopicIdx < allTopics.length) {
        const nextTopic = allTopics[nextTopicIdx];
        return { topic: nextTopic, lesson: nextTopic.lessons[0] };
      }
    }
  }
  return undefined;
}

export {
  decimaleTopic,
  exponentesTopic,
  fraccionesTopic,
  mcmMcdTopic,
  porcentajesTopic,
};
