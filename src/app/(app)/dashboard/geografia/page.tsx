"use client";

import { StationMap } from "@/components/learning-path/StationMap";
import { SubjectHeader } from "@/components/subject/SubjectHeader";
import { allGeographyTopics } from "@/lib/data/topics/geografia";
import { useGameStore, useSettingsStore } from "@/stores";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function GeografiaPage() {
  const setCurrentSubject = useSettingsStore(
    (state) => state.setCurrentSubject,
  );
  const regenerateHearts = useGameStore((s) => s.regenerateHearts);

  useEffect(() => {
    setCurrentSubject({
      name: "Geografía",
      nameEn: "Geography",
      icon: "🌍",
    });
    regenerateHearts();
  }, [setCurrentSubject, regenerateHearts]);

  return (
    <div className="min-h-screen">
      <SubjectHeader
        title={{
          es: "Geografía",
          en: "Geography",
        }}
        description={{
          es: "Explora el mundo: paisajes, población y desarrollo",
          en: "Explore the world: landscapes, population, and development",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StationMap topics={allGeographyTopics} subjectId="geografia" />
        </motion.div>
      </div>
    </div>
  );
}
