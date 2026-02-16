/**
 * EJEMPLO: Cómo crear una nueva página de materia
 *
 * Este archivo muestra cómo usar los componentes reutilizables para crear
 * una nueva página de materia. Sigue este patrón para Física, Química, etc.
 *
 * Pasos:
 * 1. Crea un archivo en: src/app/(app)/dashboard/[nombre-materia]/page.tsx
 * 2. Copia esta estructura básica
 * 3. Personaliza el setCurrentSubject con los datos de tu materia
 * 4. Personaliza el SubjectHeader con títulos y descripciones
 * 5. Cambia allTopics por los topics de tu materia (cuando los crees)
 */

"use client";

import { XPCounter } from "@/components/gamification/XPCounter";
import { StationMap } from "@/components/learning-path/StationMap";
import { SubjectHeader } from "@/components/subject/SubjectHeader";
// Importa los topics de tu materia cuando los crees
// import { allFisicaTopics } from "@/lib/data/topics/fisica";
import type { Topic } from "@/lib/types";
import { useGameStore, useProgressStore, useSettingsStore } from "@/stores";
import { useEffect } from "react";

export default function FisicaPage() {
  const setCurrentSubject = useSettingsStore((s) => s.setCurrentSubject);
  const regenerateHearts = useGameStore((s) => s.regenerateHearts);
  const unlockLesson = useProgressStore((s) => s.unlockLesson);
  const lessonProgress = useProgressStore((s) => s.lessonProgress);
  const isTopicUnlocked = useProgressStore((s) => s.isTopicUnlocked);

  // Por ahora usa un array vacío, reemplaza con tus topics
  const allTopics: Topic[] = [];

  // Configura la materia actual cuando se monta el componente
  useEffect(() => {
    setCurrentSubject({
      name: "Física", // Nombre en español
      nameEn: "Physics", // Nombre en inglés
      icon: "⚛️", // Emoji que aparecerá en el header
    });
    regenerateHearts();

    // Lógica para desbloquear lecciones (igual para todas las materias)
    allTopics.forEach((topic: Topic) => {
      if (isTopicUnlocked(topic.id, topic.prerequisites)) {
        const firstLesson = topic.lessons[0];
        if (firstLesson && !lessonProgress[firstLesson.id]) {
          unlockLesson(topic.id, firstLesson.id);
        }

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
          es: "Tu viaje por la física",
          en: "Your physics journey",
        }}
        description={{
          es: "Explora los conceptos fundamentales de la física paso a paso.",
          en: "Explore the fundamental concepts of physics step by step.",
        }}
      />

      {/* XP counter para móvil */}
      <div className="sm:hidden mb-6 max-w-xs mx-auto">
        <XPCounter />
      </div>

      {/* Mapa de aprendizaje con tus topics */}
      <StationMap topics={allTopics} />
    </div>
  );
}
