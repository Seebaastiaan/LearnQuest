"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { allTopics } from "@/lib/data/topics";
import { createClient } from "@/lib/supabase/client";
import type { Lesson, Topic } from "@/lib/types";
import { getLevelProgress } from "@/lib/utils/xp-calculator";
import { useGameStore, useProgressStore, useSettingsStore } from "@/stores";
import { BookOpen, Flame, Star, Trophy, Zap } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const locale = useSettingsStore((s) => s.locale);
  const { totalXp, level, currentStreak, longestStreak } = useGameStore();
  const { completedTopics, lessonProgress } = useProgressStore();

  const [user, setUser] = useState<{
    name: string;
    email: string;
    avatar: string;
  } | null>(null);

  useEffect(() => {
    async function loadUser() {
      const supabase = createClient();
      const {
        data: { user: authUser },
      } = await supabase.auth.getUser();

      if (authUser) {
        setUser({
          name:
            authUser.user_metadata?.full_name ||
            authUser.user_metadata?.name ||
            authUser.email?.split("@")[0] ||
            "Usuario",
          email: authUser.email || "",
          avatar:
            authUser.user_metadata?.avatar_url ||
            authUser.user_metadata?.picture ||
            `https://ui-avatars.com/api/?name=${encodeURIComponent(authUser.email || "U")}&background=0ea5e9&color=fff`,
        });
      }
    }
    loadUser();
  }, []);

  const levelProgress = getLevelProgress(totalXp);

  const totalLessons = allTopics.reduce(
    (acc: number, t: Topic) => acc + t.lessons.length,
    0,
  );
  const completedLessons = Object.values(lessonProgress).filter(
    (p) => p.status === "completed" || p.status === "perfect",
  ).length;
  const perfectLessons = Object.values(lessonProgress).filter(
    (p) => p.status === "perfect",
  ).length;

  const stats = [
    {
      icon: Zap,
      label: locale === "es" ? "XP Total" : "Total XP",
      value: totalXp,
      color: "text-amber-500",
      bg: "bg-amber-50 dark:bg-amber-950/30",
    },
    {
      icon: Trophy,
      label: locale === "es" ? "Nivel" : "Level",
      value: level,
      color: "text-purple-500",
      bg: "bg-purple-50 dark:bg-purple-950/30",
    },
    {
      icon: Flame,
      label: locale === "es" ? "Racha actual" : "Current streak",
      value: `${currentStreak} ${locale === "es" ? "días" : "days"}`,
      color: "text-orange-500",
      bg: "bg-orange-50 dark:bg-orange-950/30",
    },
    {
      icon: Flame,
      label: locale === "es" ? "Mejor racha" : "Best streak",
      value: `${longestStreak} ${locale === "es" ? "días" : "days"}`,
      color: "text-red-500",
      bg: "bg-red-50 dark:bg-red-950/30",
    },
    {
      icon: BookOpen,
      label: locale === "es" ? "Lecciones" : "Lessons",
      value: `${completedLessons}/${totalLessons}`,
      color: "text-sky-500",
      bg: "bg-sky-50 dark:bg-sky-950/30",
    },
    {
      icon: Star,
      label: locale === "es" ? "Perfectas" : "Perfect",
      value: perfectLessons,
      color: "text-green-500",
      bg: "bg-green-50 dark:bg-green-950/30",
    },
  ];

  return (
    <div className="container max-w-2xl mx-auto px-4 py-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        {/* Avatar */}
        <div className="relative w-20 h-20 mx-auto mb-4">
          {user?.avatar ? (
            <div className="relative w-20 h-20">
              <Image
                src={user.avatar}
                alt={user.name}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full object-cover shadow-lg border-4 border-white dark:border-slate-800"
              />
              <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-linear-to-br from-amber-400 to-amber-500 flex items-center justify-center shadow-md border-2 border-white dark:border-slate-800">
                <span className="text-xs text-white font-black">{level}</span>
              </div>
            </div>
          ) : (
            <div className="w-20 h-20 rounded-full bg-linear-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg">
              <span className="text-3xl text-white font-black">{level}</span>
            </div>
          )}
        </div>
        <h1 className="text-2xl font-black">
          {user?.name || (locale === "es" ? "Tu Perfil" : "Your Profile")}
        </h1>
        {user?.email && (
          <p className="text-sm text-muted-foreground mt-1">{user.email}</p>
        )}

        {/* Level progress */}
        <div className="max-w-xs mx-auto mt-4">
          <div className="flex justify-between text-xs text-muted-foreground mb-1">
            <span>Nivel {level}</span>
            <span>Nivel {level + 1}</span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-linear-to-r from-amber-400 to-amber-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${levelProgress}%` }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {totalXp % 100} / 100 XP
          </p>
        </div>
      </motion.div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Card className={`${stat.bg} border-0`}>
              <CardContent className="p-4 text-center">
                <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                <p className="text-xl font-black">{stat.value}</p>
                <p className="text-[10px] text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Topic progress */}
      <h2 className="font-bold text-lg mb-4">
        {locale === "es" ? "Progreso por tema" : "Progress by topic"}
      </h2>
      <div className="space-y-3">
        {allTopics.map((topic: Topic) => {
          const done = topic.lessons.filter((l: Lesson) => {
            const p = lessonProgress[l.id];
            return p?.status === "completed" || p?.status === "perfect";
          }).length;
          const total = topic.lessons.length;
          const pct = total > 0 ? Math.round((done / total) * 100) : 0;
          const isComplete = completedTopics.includes(topic.id);

          return (
            <Card key={topic.id} className="border-border/50">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm">
                      {topic.title[locale]}
                    </span>
                    {isComplete && (
                      <Badge variant="secondary" className="text-[10px]">
                        {locale === "es" ? "Completado" : "Complete"}
                      </Badge>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">
                    {done}/{total}
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      pct === 100
                        ? "bg-green-500"
                        : pct > 0
                          ? "bg-sky-500"
                          : "bg-muted"
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
