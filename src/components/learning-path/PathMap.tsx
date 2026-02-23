"use client";

import type { Locale, Topic } from "@/lib/types";
import { t } from "@/lib/types";
import { useProgressStore, useSettingsStore } from "@/stores";
import * as LucideIcons from "lucide-react";
import { Check, ChevronRight, Lock, Play, Star } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

interface PathMapProps {
  topics: Topic[];
}

type TopicNodeStatus =
  | "locked"
  | "available"
  | "in-progress"
  | "completed"
  | "perfect";

function getTopicIcon(iconName: string) {
  const icons = LucideIcons as unknown as Record<
    string,
    React.ComponentType<{ className?: string }>
  >;
  const Icon = icons[iconName];
  return Icon || LucideIcons.BookOpen;
}

export function PathMap({ topics }: PathMapProps) {
  const locale = useSettingsStore((s) => s.locale) as Locale;
  const lessonProgress = useProgressStore((s) => s.lessonProgress);
  const isTopicUnlocked = useProgressStore((s) => s.isTopicUnlocked);

  const getTopicStatus = (topic: Topic): TopicNodeStatus => {
    if (!isTopicUnlocked(topic.id, topic.prerequisites ?? [])) return "locked";

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
    <div className="relative max-w-lg mx-auto py-8 px-4">
      {/* Path connector line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-border via-border to-transparent -translate-x-1/2 rounded-full" />

      <div className="space-y-6 relative">
        {topics.map((topic, index) => {
          const status = getTopicStatus(topic);
          const Icon = getTopicIcon(topic.icon);
          const completedCount = getCompletedLessonCount(topic);
          const totalLessons = topic.lessons.length;
          const isLocked = status === "locked";

          // Find first available lesson
          const firstAvailableLesson =
            topic.lessons.find((l) => {
              const progress = lessonProgress[l.id];
              return (
                !progress ||
                progress.status === "available" ||
                progress.status === "in-progress"
              );
            }) || topic.lessons[0];

          return (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 200,
              }}
              className={`relative ${index % 2 === 0 ? "mr-auto pr-4" : "ml-auto pl-4"}`}
              style={{ maxWidth: "85%" }}
            >
              {isLocked ? (
                <div className="bg-muted/50 rounded-3xl p-5 border-2 border-dashed border-border opacity-60">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center">
                      <Lock className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-muted-foreground">
                        {t(topic.title, locale)}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {t(topic.description, locale)}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <Link href={`/lesson/${firstAvailableLesson.id}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`bg-card rounded-3xl p-5 border-2 transition-all cursor-pointer shadow-lg
                      ${
                        status === "perfect"
                          ? "border-amber-400 shadow-amber-100 dark:shadow-amber-950/20"
                          : status === "completed"
                            ? "border-green-400 shadow-green-100 dark:shadow-green-950/20"
                            : status === "in-progress"
                              ? "border-sky-400 shadow-sky-100 dark:shadow-sky-950/20"
                              : "border-border hover:border-primary/50 shadow-sm"
                      }
                    `}
                  >
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md ${topic.bgGradient}`}
                      >
                        {status === "perfect" ? (
                          <Star className="w-6 h-6 fill-white" />
                        ) : status === "completed" ? (
                          <Check className="w-6 h-6" />
                        ) : (
                          <Icon className="w-6 h-6" />
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-base">
                          {t(topic.title, locale)}
                        </h3>
                        <p className="text-xs text-muted-foreground truncate">
                          {t(topic.description, locale)}
                        </p>
                        {/* Progress bar */}
                        <div className="mt-2 flex items-center gap-2">
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full rounded-full ${
                                status === "perfect"
                                  ? "bg-amber-400"
                                  : status === "completed"
                                    ? "bg-green-400"
                                    : "bg-sky-400"
                              }`}
                              initial={{ width: 0 }}
                              animate={{
                                width: `${totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0}%`,
                              }}
                              transition={{
                                delay: 0.3 + index * 0.1,
                                duration: 0.5,
                              }}
                            />
                          </div>
                          <span className="text-[10px] text-muted-foreground font-medium">
                            {completedCount}/{totalLessons}
                          </span>
                        </div>
                      </div>

                      {/* Action */}
                      <div className="shrink-0">
                        {status === "available" || status === "in-progress" ? (
                          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                            <Play className="w-4 h-4 ml-0.5" />
                          </div>
                        ) : (
                          <ChevronRight className="w-5 h-5 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
