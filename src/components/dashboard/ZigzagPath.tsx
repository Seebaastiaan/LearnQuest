"use client";

import {
  PathCharacter,
  SUBJECT_CHARACTERS,
} from "@/components/learning-path/PathCharacter";
import type { Topic } from "@/lib/types";
import type { UserLessonProgress } from "@/lib/types/user";
import { useSettingsStore } from "@/stores";
import { CheckCircle2, Crown, Gift, Lock, Star } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useMemo } from "react";

// ─── Node types ───
type NodeType = "lesson" | "chest" | "exam";
type NodeState = "completed" | "perfect" | "current" | "locked";

interface PathNode {
  id: string;
  type: NodeType;
  label: string;
  state: NodeState;
  lessonId?: string;
  topicTitle?: string;
  /** Whether this node starts a new topic section */
  isTopicStart: boolean;
}

interface ZigzagPathProps {
  topics: Topic[];
  lessonProgress: Record<string, UserLessonProgress>;
  subjectId?: string;
}

/**
 * Convert topics + lessons into a flat node list for the path.
 */
function buildPathNodes(
  topics: Topic[],
  lessonProgress: Record<string, UserLessonProgress>,
  locale: "es" | "en",
): PathNode[] {
  const nodes: PathNode[] = [];
  let foundCurrent = false;
  let lastTopicTitle = "";

  for (let ti = 0; ti < topics.length; ti++) {
    const topic = topics[ti];

    for (const lesson of topic.lessons) {
      const progress = lessonProgress[lesson.id];

      let state: NodeState;
      if (progress?.status === "perfect") {
        state = "perfect";
      } else if (progress?.status === "completed") {
        state = "completed";
      } else if (
        !foundCurrent &&
        (!progress ||
          progress.status === "available" ||
          progress.status === "in-progress")
      ) {
        state = "current";
        foundCurrent = true;
      } else {
        state = "locked";
      }

      if (!foundCurrent && !progress && nodes.length === 0) {
        state = "current";
        foundCurrent = true;
      }

      const topicTitle = topic.title[locale] || topic.title.es;
      const isTopicStart = topicTitle !== lastTopicTitle;
      if (isTopicStart) {
        lastTopicTitle = topicTitle;
      }

      nodes.push({
        id: lesson.id,
        type: "lesson",
        label: lesson.title[locale] || lesson.title.es,
        state,
        lessonId: lesson.id,
        topicTitle,
        isTopicStart,
      });
    }

    // After each topic (except last), add a reward chest
    if (ti < topics.length - 1) {
      const allCompleted = topic.lessons.every((l) => {
        const p = lessonProgress[l.id];
        return p?.status === "completed" || p?.status === "perfect";
      });

      nodes.push({
        id: `chest-${topic.id}`,
        type: "chest",
        label: locale === "es" ? "Cofre de recompensa" : "Reward chest",
        state: allCompleted ? "completed" : "locked",
        isTopicStart: false,
      });
    }
  }

  // Final exam node
  const allDone = topics.every((t) =>
    t.lessons.every((l) => {
      const p = lessonProgress[l.id];
      return p?.status === "completed" || p?.status === "perfect";
    }),
  );

  nodes.push({
    id: "final-exam",
    type: "exam",
    label: locale === "es" ? "Examen Final" : "Final Exam",
    state: allDone ? "current" : "locked",
    isTopicStart: false,
  });

  return nodes;
}

// ─── Path geometry ───
// Duolingo-style S-curve: nodes snake in a repeating pattern
// Each "swing" is a half-arc: center → side → center → opposite side → center
// Pattern repeats every 5 nodes in a full S-curve cycle

const NODE_SPACING_Y = 90; // vertical distance between nodes
const PATH_WIDTH = 120; // max horizontal offset from center
const TRAIL_WIDTH = 14; // thickness of the connecting trail (increased for visibility)

/**
 * Generate the horizontal offset for each node index.
 * Creates a smooth S-curve pattern like Duolingo.
 * Pattern: center → right → center → left → center (repeat)
 */
function getNodeX(index: number): number {
  // Use a sine wave for smooth S-curve
  // Full cycle = 8 nodes, so each node is π/4 radians apart
  const angle = (index * Math.PI) / 3.5;
  return Math.sin(angle) * PATH_WIDTH;
}

/**
 * Determine if a Lottie character should appear at this node index,
 * and which character to show. Uses the subject-specific character set
 * with smart distribution to fill empty spaces without crowding.
 *
 * Distribution strategy:
 * - Every 3rd node gets a character (well-spaced like Duolingo)
 * - Alternates themed characters with encouragement characters
 * - Chests always get a milestone trophy character
 * - Characters appear on the opposite side of the S-curve position
 */
function getCharacterForNode(
  index: number,
  totalNodes: number,
  nodeType: NodeType,
  subjectId: string,
): { src: string; label: string; side: "left" | "right" } | null {
  const charSet = SUBJECT_CHARACTERS[subjectId] || SUBJECT_CHARACTERS.default;
  const nodeX = getNodeX(index);
  const isRight = nodeX > 0;

  // Special milestone character for chests and exams
  if (nodeType === "chest" || nodeType === "exam") {
    return {
      src: charSet.milestone.src,
      label: charSet.milestone.label,
      side: isRight ? "left" : "right",
    };
  }

  // Don't show on first two nodes (START tooltip and first lesson)
  if (index < 2) return null;

  // Calculate spacing: for zigzag paths, every 3 nodes is good density
  // ~30% of lesson nodes get characters = well-distributed, not crowded
  const interval = totalNodes < 12 ? 3 : 4;

  // Start offset varies slightly to avoid monotonous pattern
  const startOffset = 2;
  if ((index - startOffset) % interval !== 0) return null;

  const placementIndex = Math.floor((index - startOffset) / interval);
  if (placementIndex < 0) return null;

  // Alternate: themed, themed, encouragement, themed, themed, encouragement...
  const cyclePos = placementIndex % 3;
  const isEncouragement = cyclePos === 2;

  let char: { src: string; label: string };

  if (isEncouragement) {
    const encIndex =
      Math.floor(placementIndex / 3) % charSet.encouragement.length;
    char = charSet.encouragement[encIndex];
  } else {
    const themedPlacement = placementIndex - Math.floor(placementIndex / 3);
    const charIndex = themedPlacement % charSet.characters.length;
    char = charSet.characters[charIndex];
  }

  return {
    src: char.src,
    label: char.label,
    // Character appears on the opposite side of the node
    side: isRight ? "left" : "right",
  };
}

/**
 * Get the segment of the trail path between two node indices.
 */
function buildSegmentPath(fromIndex: number, toIndex: number): string {
  const from = {
    x: getNodeX(fromIndex),
    y: fromIndex * NODE_SPACING_Y,
  };
  const to = {
    x: getNodeX(toIndex),
    y: toIndex * NODE_SPACING_Y,
  };

  const cpY = (to.y - from.y) * 0.55;
  return `M ${from.x} ${from.y} C ${from.x} ${from.y + cpY}, ${to.x} ${to.y - cpY}, ${to.x} ${to.y}`;
}

// ─── Trail colors ───
const TRAIL_COMPLETED = "#58CC02";
const TRAIL_CURRENT = "#1CB0F6";
const TRAIL_LOCKED = "#E5E5E5";
const TRAIL_LOCKED_DARK = "#475569";

export function ZigzagPath({
  topics,
  lessonProgress,
  subjectId = "default",
}: ZigzagPathProps) {
  const locale = useSettingsStore((s) => s.locale);
  const nodes = useMemo(
    () => buildPathNodes(topics, lessonProgress, locale),
    [topics, lessonProgress, locale],
  );

  const totalHeight = (nodes.length - 1) * NODE_SPACING_Y;
  const svgPadding = 80; // extra padding on sides for node circles
  const svgWidth = PATH_WIDTH * 2 + svgPadding * 2;
  const svgHeight = totalHeight + svgPadding * 2;
  const originX = svgWidth / 2; // center of SVG

  // Pre-compute trail segments with colors
  const segments = useMemo(() => {
    const segs: {
      path: string;
      color: string;
      colorDark: string;
      dashed: boolean;
    }[] = [];
    for (let i = 0; i < nodes.length - 1; i++) {
      const fromState = nodes[i].state;
      const toState = nodes[i + 1].state;

      // Segment is completed if BOTH endpoints are completed/perfect
      const bothDone =
        (fromState === "completed" || fromState === "perfect") &&
        (toState === "completed" || toState === "perfect");
      // Segment leads to current node
      const toCurrent = toState === "current";
      // Segment is from current node forward
      const fromCurrent = fromState === "current";

      let color: string;
      let colorDark: string;
      let dashed: boolean;

      if (bothDone) {
        color = TRAIL_COMPLETED;
        colorDark = TRAIL_COMPLETED;
        dashed = false;
      } else if (toCurrent || fromCurrent) {
        color = TRAIL_CURRENT;
        colorDark = TRAIL_CURRENT;
        dashed = false;
      } else {
        color = TRAIL_LOCKED;
        colorDark = TRAIL_LOCKED_DARK;
        dashed = true;
      }

      segs.push({
        path: buildSegmentPath(i, i + 1),
        color,
        colorDark,
        dashed,
      });
    }
    return segs;
  }, [nodes]);

  return (
    <div className="relative w-full flex justify-center py-6">
      {/* Decorative background gradient (Duolingo style) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/10 pointer-events-none" />

      <div className="relative" style={{ width: svgWidth, height: svgHeight }}>
        {/* SVG trail layer */}
        <svg
          className="absolute inset-0"
          width={svgWidth}
          height={svgHeight}
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          fill="none"
        >
          <defs>
            {/* Shadow filter for trail */}
            <filter
              id="trail-shadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="0" dy="2" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.3" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g transform={`translate(${originX}, ${svgPadding})`}>
            {/* Trail segments with shadow */}
            {segments.map((seg, i) => (
              <g key={`trail-${i}`}>
                {/* Shadow layer */}
                {!seg.dashed && (
                  <path
                    d={seg.path}
                    stroke="rgba(0,0,0,0.15)"
                    strokeWidth={TRAIL_WIDTH}
                    strokeLinecap="round"
                    fill="none"
                    transform="translate(0, 3)"
                  />
                )}
                {/* Main trail */}
                <path
                  d={seg.path}
                  stroke={seg.color}
                  className={
                    seg.color === TRAIL_LOCKED ? "dark:stroke-slate-600" : ""
                  }
                  strokeWidth={TRAIL_WIDTH}
                  strokeLinecap="round"
                  strokeDasharray={seg.dashed ? "8 12" : "none"}
                  fill="none"
                  style={{ opacity: seg.dashed ? 0.5 : 1 }}
                />
              </g>
            ))}
          </g>
        </svg>

        {/* Node layer — HTML elements positioned over the SVG */}
        {nodes.map((node, i) => {
          const nodeX = originX + getNodeX(i);
          const nodeY = svgPadding + i * NODE_SPACING_Y;
          const character = getCharacterForNode(
            i,
            nodes.length,
            node.type,
            subjectId,
          );

          return (
            <div
              key={node.id}
              className="absolute"
              style={{
                left: nodeX,
                top: nodeY,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Topic section header — positioned to the side */}
              {node.isTopicStart && node.topicTitle && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap"
                >
                  <div className="px-3 py-1 rounded-full bg-white dark:bg-slate-800 border-2 border-[#E5E5E5] dark:border-slate-600 shadow-sm">
                    <span className="text-[11px] font-bold text-[#AFAFAF] dark:text-slate-400 uppercase tracking-wider">
                      {node.topicTitle}
                    </span>
                  </div>
                </motion.div>
              )}

              {/* Animated Lottie character decoration */}
              {character && (
                <PathCharacter
                  side={character.side}
                  src={character.src}
                  label={character.label}
                  size={node.type === "chest" || node.type === "exam" ? 64 : 56}
                  delay={i * 0.04 + 0.2}
                />
              )}

              {/* Node button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: i * 0.04,
                  duration: 0.3,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <PathNodeButton node={node} />
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Helper: resolve the icon for a node ───
function getNodeIcon(
  nodeType: NodeType,
  nodeState: NodeState,
  iconColorClass: string,
) {
  if (nodeType === "chest")
    return <Gift className={`w-7 h-7 ${iconColorClass}`} />;
  if (nodeType === "exam")
    return <Crown className={`w-7 h-7 ${iconColorClass}`} />;
  if (nodeState === "perfect")
    return <Star className={`w-7 h-7 ${iconColorClass} fill-current`} />;
  if (nodeState === "completed")
    return <CheckCircle2 className={`w-7 h-7 ${iconColorClass}`} />;
  if (nodeState === "locked")
    return <Lock className={`w-6 h-6 ${iconColorClass}`} />;
  // current
  return <Star className={`w-7 h-7 ${iconColorClass}`} />;
}

// ─── Individual node button ───
function PathNodeButton({ node }: { node: PathNode }) {
  const locale = useSettingsStore((s) => s.locale);

  const sizeClass =
    node.type === "chest" || node.type === "exam"
      ? "w-16 h-16"
      : "w-[66px] h-[66px]";

  const stateStyles = {
    completed: {
      bg: "bg-[#58CC02]",
      shadow: "shadow-[0_6px_0_0_#46a302]",
      iconColor: "text-white",
      ring: "",
    },
    perfect: {
      bg: "bg-[#FFC800]",
      shadow: "shadow-[0_6px_0_0_#d4a600]",
      iconColor: "text-white",
      ring: "",
    },
    current: {
      bg: "bg-[#1CB0F6]",
      shadow: "shadow-[0_6px_0_0_#1899d6]",
      iconColor: "text-white",
      ring: "ring-4 ring-[#1CB0F6]/30",
    },
    locked: {
      bg: "bg-[#E5E5E5] dark:bg-slate-700",
      shadow: "shadow-[0_6px_0_0_#ccc] dark:shadow-[0_6px_0_0_#475569]",
      iconColor: "text-[#AFAFAF] dark:text-slate-400",
      ring: "",
    },
  };

  const style = stateStyles[node.state];
  const icon = getNodeIcon(node.type, node.state, style.iconColor);

  const buttonContent = (
    <div className="relative flex flex-col items-center">
      {/* Pulse animation for current node */}
      {node.state === "current" && (
        <motion.div
          className="absolute rounded-full bg-[#1CB0F6]/20"
          style={{
            width: "calc(100% + 16px)",
            height: "calc(100% + 16px)",
            top: -8,
            left: -8,
          }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* Node circle */}
      <motion.div
        whileHover={node.state !== "locked" ? { scale: 1.1 } : undefined}
        whileTap={node.state !== "locked" ? { scale: 0.92, y: 4 } : undefined}
        className={`
          ${sizeClass} rounded-full flex items-center justify-center
          ${style.bg} ${style.shadow} ${style.ring}
          transition-all duration-100
          ${node.state !== "locked" ? "cursor-pointer active:translate-y-[4px] active:shadow-[0_2px_0_0_rgba(0,0,0,0.15)]" : "cursor-default"}
        `}
      >
        {icon}
      </motion.div>

      {/* START tooltip for current node */}
      {node.state === "current" && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: [0, -4, 0] }}
          transition={{
            opacity: { duration: 0.3 },
            y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="mt-2 px-4 py-1.5 rounded-xl bg-[#1CB0F6] text-white text-xs font-extrabold uppercase tracking-wider shadow-[0_3px_0_0_#1899d6]"
        >
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1CB0F6] rotate-45 rounded-sm" />
          {locale === "es" ? "\u00a1EMPEZAR!" : "START!"}
        </motion.div>
      )}
    </div>
  );

  if (node.type === "lesson" && node.state !== "locked" && node.lessonId) {
    return <Link href={`/lesson/${node.lessonId}`}>{buttonContent}</Link>;
  }

  return buttonContent;
}
