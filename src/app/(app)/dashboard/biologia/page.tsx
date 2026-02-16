"use client";

import { StationMap } from "@/components/learning-path/StationMap";
import { SubjectHeader } from "@/components/subject/SubjectHeader";
import { allBiologyTopics } from "@/lib/data/topics/biologia";
import { useGameStore, useSettingsStore } from "@/stores";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function BiologiaPage() {
  const setCurrentSubject = useSettingsStore(
    (state) => state.setCurrentSubject,
  );
  const regenerateHearts = useGameStore((s) => s.regenerateHearts);

  useEffect(() => {
    setCurrentSubject({
      name: "Biología",
      nameEn: "Biology",
      icon: "🧬",
    });
    regenerateHearts();
  }, [setCurrentSubject, regenerateHearts]);

  return (
    <div className="min-h-screen">
      <SubjectHeader
        title={{
          es: "Biología",
          en: "Biology",
        }}
        description={{
          es: "Domina los conceptos fundamentales de la vida",
          en: "Master the fundamental concepts of life",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StationMap topics={allBiologyTopics} subjectId="biologia" />
        </motion.div>
      </div>
    </div>
  );
}
