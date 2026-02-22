"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SubjectHeader } from "@/components/subject/SubjectHeader";
import { StationMap } from "@/components/learning-path/StationMap";
import { literaturaTopics } from "@/lib/data/topics/literatura";

export default function LiteraturaPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <SubjectHeader
        title={{ es: "Literatura", en: "Literature" }}
        description={{
          es: "Domina los géneros literarios, corrientes y técnicas de investigación documental.",
          en: "Master literary genres, movements and documentary research techniques.",
        }}
      />

      <div className="mt-8">
        <StationMap topics={literaturaTopics} subjectSlug="literatura" />
      </div>
    </div>
  );
}
