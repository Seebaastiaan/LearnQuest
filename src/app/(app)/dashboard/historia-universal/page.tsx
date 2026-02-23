"use client";

import { StationMap } from "@/components/learning-path/StationMap";
import { SubjectHeader } from "@/components/subject/SubjectHeader";
import { allWorldHistoryTopics } from "@/lib/data/topics/historia-universal";
import { useGameStore, useSettingsStore } from "@/stores";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function HistoriaUniversalPage() {
  const setCurrentSubject = useSettingsStore(
    (state) => state.setCurrentSubject,
  );
  const regenerateHearts = useGameStore((s) => s.regenerateHearts);

  useEffect(() => {
    setCurrentSubject({
      name: "Historia Universal",
      nameEn: "World History",
      icon: "🌍",
    });
    regenerateHearts();
  }, [setCurrentSubject, regenerateHearts]);

  return (
    <div className="min-h-screen">
      <SubjectHeader
        title={{
          es: "Historia Universal",
          en: "World History",
        }}
        description={{
          es: "Explora los grandes eventos y transformaciones que moldearon la civilización humana",
          en: "Explore the great events and transformations that shaped human civilization",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StationMap topics={allWorldHistoryTopics} subjectId="historia-universal" />
        </motion.div>
      </div>
    </div>
  );
}
