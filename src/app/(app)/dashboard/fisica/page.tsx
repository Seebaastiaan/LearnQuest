"use client";

import { StationMap } from "@/components/learning-path/StationMap";
import { SubjectHeader } from "@/components/subject/SubjectHeader";
import { allPhysicsTopics } from "@/lib/data/topics/fisica";
import { useGameStore, useSettingsStore } from "@/stores";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function FisicaPage() {
  const setCurrentSubject = useSettingsStore(
    (state) => state.setCurrentSubject,
  );
  const regenerateHearts = useGameStore((s) => s.regenerateHearts);

  useEffect(() => {
    setCurrentSubject({
      name: "Física",
      nameEn: "Physics",
      icon: "⚛️",
    });
    regenerateHearts();
  }, [setCurrentSubject, regenerateHearts]);

  return (
    <div className="min-h-screen">
      <SubjectHeader
        title={{
          es: "Física",
          en: "Physics",
        }}
        description={{
          es: "Domina las leyes fundamentales de la naturaleza y sus aplicaciones",
          en: "Master the fundamental laws of nature and their applications",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StationMap topics={allPhysicsTopics} subjectId="fisica" />
        </motion.div>
      </div>
    </div>
  );
}
