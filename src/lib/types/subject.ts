import type { LucideIcon } from "lucide-react";

export interface Subject {
  id: string;
  name: string;
  nameEn: string;
  icon: LucideIcon;
  emoji: string;
  gradient: string;
  available: boolean;
  lessonCount?: number;
  exerciseCount?: number;
}
