/**
 * Per-subject color theming utilities.
 *
 * Because Tailwind v4 requires complete class names at build time,
 * we map each subject ID to a concrete set of color tokens covering
 * surfaces, borders, accents, text, and shadows.
 */

export interface SubjectColorTokens {
  /** Light bg surface (e.g. bg-sky-50) */
  surface: string;
  /** Dark bg surface */
  surfaceDark: string;
  /** Border color */
  border: string;
  borderDark: string;
  /** Progress bar track */
  progressTrack: string;
  progressTrackDark: string;
  /** Progress bar fill gradient */
  progressFill: string;
  /** Accent text (e.g. percentage label) */
  accentText: string;
  accentTextDark: string;
  /** CTA button bg */
  ctaBg: string;
  ctaHover: string;
  ctaHoverDark: string;
  /** Shadow color class for icon box */
  iconShadow: string;
  /** Pulse ring rgba for Framer Motion */
  pulseColor: string;
}

const colorMap: Record<string, SubjectColorTokens> = {
  matematicas: {
    surface: "from-sky-50 via-blue-50/80 to-sky-50",
    surfaceDark: "dark:from-sky-950/40 dark:via-blue-950/30 dark:to-sky-950/40",
    border: "border-sky-200/60",
    borderDark: "dark:border-sky-800/40",
    progressTrack: "bg-sky-200/50",
    progressTrackDark: "dark:bg-sky-800/40",
    progressFill: "from-sky-400 to-blue-500",
    accentText: "text-sky-600",
    accentTextDark: "dark:text-sky-400",
    ctaBg: "bg-sky-500 dark:bg-sky-600",
    ctaHover: "group-hover:bg-sky-600",
    ctaHoverDark: "dark:group-hover:bg-sky-500",
    iconShadow: "shadow-sky-500/20 dark:shadow-sky-500/10",
    pulseColor: "rgba(14, 165, 233, 0.3)",
  },
  biologia: {
    surface: "from-emerald-50 via-green-50/80 to-emerald-50",
    surfaceDark:
      "dark:from-emerald-950/40 dark:via-green-950/30 dark:to-emerald-950/40",
    border: "border-emerald-200/60",
    borderDark: "dark:border-emerald-800/40",
    progressTrack: "bg-emerald-200/50",
    progressTrackDark: "dark:bg-emerald-800/40",
    progressFill: "from-emerald-400 to-green-500",
    accentText: "text-emerald-600",
    accentTextDark: "dark:text-emerald-400",
    ctaBg: "bg-emerald-500 dark:bg-emerald-600",
    ctaHover: "group-hover:bg-emerald-600",
    ctaHoverDark: "dark:group-hover:bg-emerald-500",
    iconShadow: "shadow-emerald-500/20 dark:shadow-emerald-500/10",
    pulseColor: "rgba(16, 185, 129, 0.3)",
  },
  fisica: {
    surface: "from-purple-50 via-violet-50/80 to-purple-50",
    surfaceDark:
      "dark:from-purple-950/40 dark:via-violet-950/30 dark:to-purple-950/40",
    border: "border-purple-200/60",
    borderDark: "dark:border-purple-800/40",
    progressTrack: "bg-purple-200/50",
    progressTrackDark: "dark:bg-purple-800/40",
    progressFill: "from-purple-400 to-violet-500",
    accentText: "text-purple-600",
    accentTextDark: "dark:text-purple-400",
    ctaBg: "bg-purple-500 dark:bg-purple-600",
    ctaHover: "group-hover:bg-purple-600",
    ctaHoverDark: "dark:group-hover:bg-purple-500",
    iconShadow: "shadow-purple-500/20 dark:shadow-purple-500/10",
    pulseColor: "rgba(168, 85, 247, 0.3)",
  },
  quimica: {
    surface: "from-pink-50 via-rose-50/80 to-pink-50",
    surfaceDark:
      "dark:from-pink-950/40 dark:via-rose-950/30 dark:to-pink-950/40",
    border: "border-pink-200/60",
    borderDark: "dark:border-pink-800/40",
    progressTrack: "bg-pink-200/50",
    progressTrackDark: "dark:bg-pink-800/40",
    progressFill: "from-pink-400 to-rose-500",
    accentText: "text-pink-600",
    accentTextDark: "dark:text-pink-400",
    ctaBg: "bg-pink-500 dark:bg-pink-600",
    ctaHover: "group-hover:bg-pink-600",
    ctaHoverDark: "dark:group-hover:bg-pink-500",
    iconShadow: "shadow-pink-500/20 dark:shadow-pink-500/10",
    pulseColor: "rgba(236, 72, 153, 0.3)",
  },
  "historia-universal": {
    surface: "from-amber-50 via-orange-50/80 to-amber-50",
    surfaceDark:
      "dark:from-amber-950/40 dark:via-orange-950/30 dark:to-amber-950/40",
    border: "border-amber-200/60",
    borderDark: "dark:border-amber-800/40",
    progressTrack: "bg-amber-200/50",
    progressTrackDark: "dark:bg-amber-800/40",
    progressFill: "from-amber-400 to-orange-500",
    accentText: "text-amber-600",
    accentTextDark: "dark:text-amber-400",
    ctaBg: "bg-amber-500 dark:bg-amber-600",
    ctaHover: "group-hover:bg-amber-600",
    ctaHoverDark: "dark:group-hover:bg-amber-500",
    iconShadow: "shadow-amber-500/20 dark:shadow-amber-500/10",
    pulseColor: "rgba(245, 158, 11, 0.3)",
  },
  "historia-mexico": {
    surface: "from-red-50 via-rose-50/80 to-red-50",
    surfaceDark: "dark:from-red-950/40 dark:via-rose-950/30 dark:to-red-950/40",
    border: "border-red-200/60",
    borderDark: "dark:border-red-800/40",
    progressTrack: "bg-red-200/50",
    progressTrackDark: "dark:bg-red-800/40",
    progressFill: "from-red-400 to-rose-500",
    accentText: "text-red-600",
    accentTextDark: "dark:text-red-400",
    ctaBg: "bg-red-500 dark:bg-red-600",
    ctaHover: "group-hover:bg-red-600",
    ctaHoverDark: "dark:group-hover:bg-red-500",
    iconShadow: "shadow-red-500/20 dark:shadow-red-500/10",
    pulseColor: "rgba(239, 68, 68, 0.3)",
  },
  geografia: {
    surface: "from-teal-50 via-cyan-50/80 to-teal-50",
    surfaceDark:
      "dark:from-teal-950/40 dark:via-cyan-950/30 dark:to-teal-950/40",
    border: "border-teal-200/60",
    borderDark: "dark:border-teal-800/40",
    progressTrack: "bg-teal-200/50",
    progressTrackDark: "dark:bg-teal-800/40",
    progressFill: "from-teal-400 to-cyan-500",
    accentText: "text-teal-600",
    accentTextDark: "dark:text-teal-400",
    ctaBg: "bg-teal-500 dark:bg-teal-600",
    ctaHover: "group-hover:bg-teal-600",
    ctaHoverDark: "dark:group-hover:bg-teal-500",
    iconShadow: "shadow-teal-500/20 dark:shadow-teal-500/10",
    pulseColor: "rgba(20, 184, 166, 0.3)",
  },
  literatura: {
    surface: "from-indigo-50 via-purple-50/80 to-indigo-50",
    surfaceDark:
      "dark:from-indigo-950/40 dark:via-purple-950/30 dark:to-indigo-950/40",
    border: "border-indigo-200/60",
    borderDark: "dark:border-indigo-800/40",
    progressTrack: "bg-indigo-200/50",
    progressTrackDark: "dark:bg-indigo-800/40",
    progressFill: "from-indigo-400 to-purple-500",
    accentText: "text-indigo-600",
    accentTextDark: "dark:text-indigo-400",
    ctaBg: "bg-indigo-500 dark:bg-indigo-600",
    ctaHover: "group-hover:bg-indigo-600",
    ctaHoverDark: "dark:group-hover:bg-indigo-500",
    iconShadow: "shadow-indigo-500/20 dark:shadow-indigo-500/10",
    pulseColor: "rgba(99, 102, 241, 0.3)",
  },
  espanol: {
    surface: "from-green-50 via-emerald-50/80 to-green-50",
    surfaceDark:
      "dark:from-green-950/40 dark:via-emerald-950/30 dark:to-green-950/40",
    border: "border-green-200/60",
    borderDark: "dark:border-green-800/40",
    progressTrack: "bg-green-200/50",
    progressTrackDark: "dark:bg-green-800/40",
    progressFill: "from-green-400 to-emerald-500",
    accentText: "text-green-600",
    accentTextDark: "dark:text-green-400",
    ctaBg: "bg-green-500 dark:bg-green-600",
    ctaHover: "group-hover:bg-green-600",
    ctaHoverDark: "dark:group-hover:bg-green-500",
    iconShadow: "shadow-green-500/20 dark:shadow-green-500/10",
    pulseColor: "rgba(34, 197, 94, 0.3)",
  },
};

/** Default fallback (slate) if subject ID isn't mapped */
const fallback: SubjectColorTokens = {
  surface: "from-slate-50 via-gray-50/80 to-slate-50",
  surfaceDark:
    "dark:from-slate-950/40 dark:via-gray-950/30 dark:to-slate-950/40",
  border: "border-slate-200/60",
  borderDark: "dark:border-slate-800/40",
  progressTrack: "bg-slate-200/50",
  progressTrackDark: "dark:bg-slate-800/40",
  progressFill: "from-slate-400 to-gray-500",
  accentText: "text-slate-600",
  accentTextDark: "dark:text-slate-400",
  ctaBg: "bg-slate-500 dark:bg-slate-600",
  ctaHover: "group-hover:bg-slate-600",
  ctaHoverDark: "dark:group-hover:bg-slate-500",
  iconShadow: "shadow-slate-500/20 dark:shadow-slate-500/10",
  pulseColor: "rgba(100, 116, 139, 0.3)",
};

export function getSubjectColors(subjectId: string): SubjectColorTokens {
  return colorMap[subjectId] ?? fallback;
}
