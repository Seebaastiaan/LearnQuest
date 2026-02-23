"use client";

import { StationMap } from "@/components/learning-path/StationMap";
import { SubjectHeader } from "@/components/subject/SubjectHeader";
import { allMexicanHistoryTopics } from "@/lib/data/topics/historia-mexico";
import { useGameStore, useSettingsStore } from "@/stores";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function HistoriaMexicoPage() {
  const setCurrentSubject = useSettingsStore(
    (state) => state.setCurrentSubject,
  );
  const regenerateHearts = useGameStore((s) => s.regenerateHearts);

  useEffect(() => {
    setCurrentSubject({
      name: "Historia de México",
      nameEn: "History of Mexico",
      icon: "🏛️",
    });
    regenerateHearts();
  }, [setCurrentSubject, regenerateHearts]);

  return (
    <div className="min-h-screen">
      <SubjectHeader
        title={{
          es: "Historia de México",
          en: "History of Mexico",
        }}
        description={{
          es: "Descubre la rica historia de México: desde las civilizaciones prehispánicas hasta la actualidad",
          en: "Discover Mexico's rich history: from pre-Hispanic civilizations to the present day",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StationMap topics={allMexicanHistoryTopics} subjectId="historia-mexico" />
        </motion.div>
      </div>
    </div>
  );
}
