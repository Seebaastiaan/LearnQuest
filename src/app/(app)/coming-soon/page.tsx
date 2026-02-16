"use client";

import { useSettingsStore } from "@/stores";
import { Construction, Rocket, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ComingSoonPage() {
  const locale = useSettingsStore((s) => s.locale);
  const searchParams = useSearchParams();
  const feature = searchParams.get("feature");

  const featureNames: Record<string, { es: string; en: string }> = {
    curriculum: { es: "Temario", en: "Curriculum" },
    leagues: { es: "Ligas", en: "Leagues" },
    missions: { es: "Misiones", en: "Missions" },
    quests: { es: "Misiones", en: "Quests" },
  };

  const currentFeature = feature
    ? featureNames[feature]
    : { es: "Esta función", en: "This feature" };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center">
        {/* Animated Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8 flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl">
              <Rocket className="w-16 h-16 text-white" />
            </div>
            {/* Sparkles */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-2 -right-2"
            >
              <Sparkles className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-2 -left-2"
            >
              <Sparkles className="w-6 h-6 text-blue-400 fill-blue-400" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl font-extrabold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {locale === "es" ? "¡Próximamente!" : "Coming Soon!"}
          </h1>
          <p className="text-lg text-muted-foreground mb-2">
            {locale === "es"
              ? `${currentFeature.es} estará disponible pronto`
              : `${currentFeature.en} will be available soon`}
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            {locale === "es"
              ? "Estamos trabajando duro para traerte nuevas funciones increíbles"
              : "We're working hard to bring you amazing new features"}
          </p>
        </motion.div>

        {/* Construction Icon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted/50 mb-8"
        >
          <Construction className="w-5 h-5 text-orange-500" />
          <span className="text-sm font-semibold text-muted-foreground">
            {locale === "es" ? "En construcción" : "Under construction"}
          </span>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-200"
          >
            {locale === "es" ? "Volver al inicio" : "Back to home"}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
