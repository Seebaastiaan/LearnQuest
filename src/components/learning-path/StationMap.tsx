"use client";

import type { Locale, Topic } from "@/lib/types";
import { t } from "@/lib/types";
import { useProgressStore, useSettingsStore } from "@/stores";
import * as LucideIcons from "lucide-react";
import { Check, Lock, Play, Star, TrainFront } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { getPathCharacter, PathCharacter } from "./PathCharacter";

interface StationMapProps {
  topics: Topic[];
  subjectId?: string;
}

type StationStatus = "locked" | "available" | "in-progress" | "completed" | "perfect";

function getTopicIcon(iconName: string) {
  const icons = LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>;
  return icons[iconName] || LucideIcons.BookOpen;
}

const statusColors = {
  locked: {
    bg: "bg-slate-100 dark:bg-slate-900",
    border: "border-slate-300 dark:border-slate-700",
    text: "text-slate-400 dark:text-slate-500",
    track: "bg-slate-200 dark:bg-slate-800",
    icon: "text-slate-400 dark:text-slate-500",
  },
  available: {
    bg: "bg-amber-50 dark:bg-amber-950/30",
    border: "border-amber-400 dark:border-amber-500",
    text: "text-amber-700 dark:text-amber-300",
    track: "bg-amber-200 dark:bg-amber-800",
    icon: "text-amber-600 dark:text-amber-400",
  },
  "in-progress": {
    bg: "bg-sky-50 dark:bg-sky-950/30",
    border: "border-sky-400 dark:border-sky-500",
    text: "text-sky-700 dark:text-sky-300",
    track: "bg-sky-200 dark:bg-sky-800",
    icon: "text-sky-600 dark:text-sky-400",
  },
  completed: {
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    border: "border-emerald-400 dark:border-emerald-500",
    text: "text-emerald-700 dark:text-emerald-300",
    track: "bg-emerald-200 dark:bg-emerald-800",
    icon: "text-emerald-600 dark:text-emerald-400",
  },
  perfect: {
    bg: "bg-amber-50 dark:bg-amber-950/30",
    border: "border-amber-500 dark:border-amber-400",
    text: "text-amber-700 dark:text-amber-300",
    track: "bg-amber-300 dark:bg-amber-700",
    icon: "text-amber-600 dark:text-amber-400",
  },
};

export function StationMap({ topics, subjectId = "default" }: StationMapProps) {
  const locale = useSettingsStore((s) => s.locale) as Locale;
  const lessonProgress = useProgressStore((s) => s.lessonProgress);
  const isTopicUnlocked = useProgressStore((s) => s.isTopicUnlocked);

  const getTopicStatus = (topic: Topic): StationStatus => {
    if (!isTopicUnlocked(topic.id, topic.prerequisites)) return "locked";

    const topicLessons = topic.lessons;
    const completedLessons = topicLessons.filter((l) => {
      const progress = lessonProgress[l.id];
      return progress?.status === "completed" || progress?.status === "perfect";
    });

    if (completedLessons.length === 0) return "available";
    if (completedLessons.length < topicLessons.length) return "in-progress";

    const allPerfect = topicLessons.every(
      (l) => lessonProgress[l.id]?.status === "perfect",
    );
    return allPerfect ? "perfect" : "completed";
  };

  const getCompletedLessonCount = (topic: Topic): number => {
    return topic.lessons.filter((l) => {
      const progress = lessonProgress[l.id];
      return progress?.status === "completed" || progress?.status === "perfect";
    }).length;
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="absolute left-1/2 top-24 bottom-24 w-1.5 -translate-x-1/2 rounded-full overflow-hidden">
        {topics.map((topic, idx) => {
          const status = getTopicStatus(topic);
          const nextStatus = idx < topics.length - 1 ? getTopicStatus(topics[idx + 1]) : null;
          const colors = statusColors[status];
          
          let trackColor = colors.track;
          if (status === "completed" || status === "perfect") {
            if (nextStatus && (nextStatus === "completed" || nextStatus === "perfect" || nextStatus === "in-progress" || nextStatus === "available")) {
              trackColor = colors.track;
            } else if (nextStatus) {
              trackColor = `linear-to-b from-${colors.track.replace('bg-', '')} to-slate-200 dark:to-slate-800`;
            }
          } else if (status === "in-progress") {
            trackColor = colors.track;
          } else {
            trackColor = "bg-slate-200 dark:bg-slate-800";
          }
          
          return (
            <motion.div
              key={`track-${topic.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className={`absolute left-0 right-0 ${idx === 0 ? 'top-0 h-24' : idx === topics.length - 1 ? 'bottom-0 h-24' : 'top-0 bottom-0'}`}
              style={{
                background: trackColor,
                opacity: status === "locked" ? 0.3 : 1,
              }}
            />
          );
        })}
      </div>

      <div className="space-y-0 relative">
        {topics.map((topic, index) => {
          const status = getTopicStatus(topic);
          const Icon = getTopicIcon(topic.icon);
          const completedCount = getCompletedLessonCount(topic);
          const totalLessons = topic.lessons.length;
          const isLocked = status === "locked";
          const isAvailable = status === "available";
          const isPerfect = status === "perfect";
          const isCompleted = status === "completed";
          const isInProgress = status === "in-progress";
          const colors = statusColors[status];

          const firstAvailableLesson =
            topic.lessons.find((l) => {
              const progress = lessonProgress[l.id];
              return !progress || progress.status === "available" || progress.status === "in-progress";
            }) || topic.lessons[0];

          const isLeft = index % 2 === 0;
          const character = getPathCharacter(index, topics.length, subjectId, isLeft);

          return (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.12,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              className={`relative py-3 ${isLeft ? 'pr-8 sm:pr-16' : 'pl-8 sm:pl-16'}`}
            >
              <div className={`relative flex items-center ${isLeft ? 'justify-end' : 'justify-start'}`}>
                {/* Animated Lottie character decoration */}
                {character && (
                  <PathCharacter
                    src={character.src}
                    label={character.label}
                    side={character.side}
                    size={52}
                    delay={index * 0.12 + 0.3}
                  />
                )}
                {isLocked ? (
                  <div className={`flex items-center gap-4 max-w-sm ${isLeft ? 'flex-row-reverse text-right' : ''}`}>
                    <div className={`relative ${isLeft ? 'order-2' : 'order-1'}`}>
                      <motion.div
                        className={`w-16 h-16 rounded-full flex items-center justify-center border-4 ${colors.bg} ${colors.border}`}
                      >
                        <Lock className={`w-6 h-6 ${colors.icon}`} />
                      </motion.div>
                    </div>
                    <div className={`${isLeft ? 'order-1' : 'order-2'}`}>
                      <h3 className="font-bold text-base text-slate-500 dark:text-slate-400">
                        {t(topic.title, locale)}
                      </h3>
                      <p className="text-xs text-slate-400 dark:text-slate-500">
                        {t(topic.description, locale)}
                      </p>
                    </div>
                  </div>
                ) : (
                  <Link href={`/lesson/${firstAvailableLesson.id}`} className="block">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center gap-4 max-w-sm ${isLeft ? 'flex-row-reverse text-right' : ''}`}
                    >
                      <div className={`relative ${isLeft ? 'order-2' : 'order-1'}`}>
                        {isAvailable && (
                          <motion.div
                            className="absolute inset-0 rounded-full"
                            animate={{
                              boxShadow: [
                                "0 0 0 0 rgba(251, 191, 36, 0.4)",
                                "0 0 0 8px rgba(251, 191, 36, 0)",
                              ],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeOut",
                            }}
                          />
                        )}
                        <motion.div
                          className={`w-16 h-16 rounded-full flex items-center justify-center border-4 shadow-lg ${colors.bg} ${colors.border}`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {isPerfect ? (
                            <div className="relative">
                              <Star className={`w-7 h-7 ${colors.icon} fill-current`} />
                              <motion.div
                                className="absolute -top-1 -right-1"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                              >
                                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                              </motion.div>
                            </div>
                          ) : isCompleted ? (
                            <Check className={`w-7 h-7 ${colors.icon}`} />
                          ) : isInProgress ? (
                            <Icon className={`w-7 h-7 ${colors.icon}`} />
                          ) : (
                            <Play className={`w-6 h-6 ml-1 ${colors.icon}`} />
                          )}
                        </motion.div>
                      </div>
                      
                      <div className={`${isLeft ? 'order-1' : 'order-2'}`}>
                        <div className="flex items-center gap-2 mb-1">
                          {isPerfect && (
                            <span className="text-[10px] bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded-full font-medium">
                              ★ ESTRELLA
                            </span>
                          )}
                          <h3 className={`font-bold text-base ${colors.text}`}>
                            {t(topic.title, locale)}
                          </h3>
                        </div>
                        <p className={`text-xs ${isLocked ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'}`}>
                          {t(topic.description, locale)}
                        </p>
                        
                        {!isLocked && (
                          <div className="flex items-center gap-2 mt-2">
                            <div className="flex-1 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                              <motion.div
                                className={`h-full rounded-full ${
                                  isPerfect
                                    ? "bg-amber-400"
                                    : isCompleted
                                      ? "bg-emerald-400"
                                      : "bg-sky-400"
                                }`}
                                initial={{ width: 0 }}
                                animate={{
                                  width: `${totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0}%`,
                                }}
                                transition={{
                                  delay: 0.4 + index * 0.1,
                                  duration: 0.6,
                                }}
                              />
                            </div>
                            <span className={`text-[10px] font-medium ${colors.text}`}>
                              {completedCount}/{totalLessons}
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </Link>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: topics.length * 0.12 + 0.3 }}
        className="flex justify-center pt-6"
      >
        <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-sm">
          <TrainFront className="w-4 h-4" />
          <span>{locale === "es" ? "Fin del camino" : "End of path"}</span>
        </div>
      </motion.div>
    </div>
  );
}
