import { StationMap } from "@/components/learning-path/StationMap";
import { SubjectHeader } from "@/components/subject/SubjectHeader";
import { allChemistryTopics } from "@/lib/data/topics/quimica";
import Link from "next/link";

export default function QuimicaDashboard() {
  return (
    <div className="container mx-auto px-4 py-6 space-y-8">
      <SubjectHeader
        title={{ es: "Química", en: "Chemistry" }}
        description={{
          es: "Domina las leyes fundamentales de la materia y sus transformaciones químicas",
          en: "Master the fundamental laws of matter and its chemical transformations",
        }}
        subjectId="quimica"
      />

      <StationMap topics={allChemistryTopics} subjectId="quimica" />

      <div className="mt-8 text-center">
        <Link
          href="/dashboard"
          className="text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300 font-medium"
        >
          ← Volver al Dashboard
        </Link>
      </div>
    </div>
  );
}
