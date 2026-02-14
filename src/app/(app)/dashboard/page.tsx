"use client";

import { Button } from "@/components/ui/button";
import { useSettingsStore } from "@/stores";
import {
  BookOpen,
  Lock,
  Sparkles,
  Atom,
  Beaker,
  Globe2,
  Landmark,
  Languages,
  Dna,
  BookMarked,
} from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

interface Subject {
  id: string;
  name: string;
  nameEn: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  available: boolean;
  lessonCount?: number;
  exerciseCount?: number;
}

export default function DashboardPage() {
  const locale = useSettingsStore((s) => s.locale);

  const subjects: Subject[] = [
    {
      id: "matematicas",
      name: "Matemáticas",
      nameEn: "Mathematics",
      icon: BookOpen,
      color: "from-sky-500 to-blue-600",
      bgColor: "bg-sky-50 dark:bg-sky-950/20",
      available: true,
      lessonCount: 30,
      exerciseCount: 305,
    },
    {
      id: "fisica",
      name: "Física",
      nameEn: "Physics",
      icon: Atom,
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      available: false,
    },
    {
      id: "quimica",
      name: "Química",
      nameEn: "Chemistry",
      icon: Beaker,
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50 dark:bg-pink-950/20",
      available: false,
    },
    {
      id: "biologia",
      name: "Biología",
      nameEn: "Biology",
      icon: Dna,
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
      available: false,
    },
    {
      id: "historia",
      name: "Historia",
      nameEn: "History",
      icon: Landmark,
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50 dark:bg-amber-950/20",
      available: false,
    },
    {
      id: "geografia",
      name: "Geografía",
      nameEn: "Geography",
      icon: Globe2,
      color: "from-teal-500 to-cyan-600",
      bgColor: "bg-teal-50 dark:bg-teal-950/20",
      available: false,
    },
    {
      id: "literatura",
      name: "Literatura",
      nameEn: "Literature",
      icon: BookMarked,
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
      available: false,
    },
    {
      id: "espanol",
      name: "Español",
      nameEn: "Spanish",
      icon: Languages,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      available: false,
    },
  ];

  return (
    <div className="container max-w-6xl mx-auto px-4 py-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-black mb-2">
          {locale === "es"
            ? "Elige tu materia de estudio"
            : "Choose your subject"}
        </h1>
        <p className="text-muted-foreground">
          {locale === "es"
            ? "Domina cada área del examen UNAM • Más materias próximamente"
            : "Master each area of the UNAM exam • More subjects coming soon"}
        </p>
      </motion.div>

      {/* Subjects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {subjects.map((subject, i) => {
          const Icon = subject.icon;

          return (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
            >
              {subject.available ? (
                <Link href={`/dashboard/${subject.id}`}>
                  <div
                    className={`group relative overflow-hidden rounded-3xl border-2 border-border/50 ${subject.bgColor} p-6 hover:shadow-xl hover:border-border transition-all duration-300 cursor-pointer h-full`}
                  >
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-2xl bg-linear-to-br ${subject.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2">
                      {locale === "es" ? subject.name : subject.nameEn}
                    </h3>

                    {/* Stats */}
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>
                        {subject.lessonCount}{" "}
                        {locale === "es" ? "lecciones" : "lessons"}
                      </p>
                      <p>
                        {subject.exerciseCount}{" "}
                        {locale === "es" ? "ejercicios" : "exercises"}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div
                        className={`w-8 h-8 rounded-full bg-linear-to-br ${subject.color} flex items-center justify-center`}
                      >
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <div
                  className={`relative overflow-hidden rounded-3xl border-2 border-dashed border-border/30 ${subject.bgColor} p-6 opacity-60 h-full`}
                >
                  {/* Coming Soon Badge */}
                  <div className="absolute top-3 right-3">
                    <div className="flex items-center gap-1 px-3 py-1 bg-muted/80 backdrop-blur rounded-full text-xs font-semibold">
                      <Sparkles className="w-3 h-3" />
                      {locale === "es" ? "Próximamente" : "Coming Soon"}
                    </div>
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-linear-to-br ${subject.color} flex items-center justify-center mb-4 opacity-50`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    {locale === "es" ? subject.name : subject.nameEn}
                    <Lock className="w-4 h-4 text-muted-foreground" />
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground">
                    {locale === "es"
                      ? "En desarrollo..."
                      : "In development..."}
                  </p>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Progress hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 rounded-full text-sm">
          <Sparkles className="w-4 h-4" />
          {locale === "es"
            ? "¡Comienza con Matemáticas y recorre tu camino de aprendizaje!"
            : "Start with Mathematics and follow your learning path!"}
        </div>
      </motion.div>
    </div>
  );
}
