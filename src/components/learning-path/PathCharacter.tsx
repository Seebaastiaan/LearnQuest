"use client";

import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { useMemo } from "react";

// Lazy load Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Character animation data organized by subject
export interface PathCharacterSet {
  /** Subject-themed characters (shown along the path) */
  characters: {
    src: string;
    label: string;
  }[];
  /** Universal encouragement characters (mixed in between themed ones) */
  encouragement: {
    src: string;
    label: string;
  }[];
  /** Special characters for milestones/chests */
  milestone: {
    src: string;
    label: string;
  };
}

const ENCOURAGEMENT_POOL = [
  { src: "/animations/heart-buddy.json", label: "Heart" },
  { src: "/animations/speech-buddy.json", label: "Thinking" },
  { src: "/animations/thumbsup-buddy.json", label: "Thumbs Up" },
  { src: "/animations/star-buddy.json", label: "Star" },
];

const MATH_CHARACTERS: PathCharacterSet = {
  characters: [
    { src: "/animations/math-calculator.json", label: "Calculator" },
    { src: "/animations/math-pencil.json", label: "Pencil" },
    { src: "/animations/math-lightbulb.json", label: "Lightbulb" },
    { src: "/animations/math-pi.json", label: "Pi" },
    { src: "/animations/book-buddy.json", label: "Book" },
    { src: "/animations/rocket-buddy.json", label: "Rocket" },
  ],
  encouragement: ENCOURAGEMENT_POOL,
  milestone: { src: "/animations/trophy-buddy.json", label: "Trophy" },
};

const BIO_CHARACTERS: PathCharacterSet = {
  characters: [
    { src: "/animations/bio-dna.json", label: "DNA" },
    { src: "/animations/bio-microscope.json", label: "Microscope" },
    { src: "/animations/bio-leaf.json", label: "Leaf" },
    { src: "/animations/bio-frog.json", label: "Frog" },
    { src: "/animations/book-buddy.json", label: "Book" },
    { src: "/animations/rocket-buddy.json", label: "Rocket" },
  ],
  encouragement: ENCOURAGEMENT_POOL,
  milestone: { src: "/animations/trophy-buddy.json", label: "Trophy" },
};

const GEO_CHARACTERS: PathCharacterSet = {
  characters: [
    { src: "/animations/geo-globe.json", label: "Globe" },
    { src: "/animations/geo-compass.json", label: "Compass" },
    { src: "/animations/geo-mountain.json", label: "Mountain" },
    { src: "/animations/book-buddy.json", label: "Book" },
    { src: "/animations/rocket-buddy.json", label: "Rocket" },
  ],
  encouragement: ENCOURAGEMENT_POOL,
  milestone: { src: "/animations/trophy-buddy.json", label: "Trophy" },
};

// Default/general characters for any subject
const DEFAULT_CHARACTERS: PathCharacterSet = {
  characters: [
    { src: "/animations/star-buddy.json", label: "Star" },
    { src: "/animations/rocket-buddy.json", label: "Rocket" },
    { src: "/animations/book-buddy.json", label: "Book" },
    { src: "/animations/math-lightbulb.json", label: "Lightbulb" },
  ],
  encouragement: ENCOURAGEMENT_POOL,
  milestone: { src: "/animations/trophy-buddy.json", label: "Trophy" },
};

export const SUBJECT_CHARACTERS: Record<string, PathCharacterSet> = {
  matematicas: MATH_CHARACTERS,
  biologia: BIO_CHARACTERS,
  geografia: GEO_CHARACTERS,
  default: DEFAULT_CHARACTERS,
};

// ─── Inline Lottie component with fetch ───

function LottieAnimation({
  src,
  size = 64,
  className,
}: {
  src: string;
  size?: number;
  className?: string;
}) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <LottieInner src={src} />
    </div>
  );
}

function LottieInner({ src }: { src: string }) {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    fetch(src)
      .then((r) => r.json())
      .then(setAnimationData)
      .catch(() => {});
  }, [src]);

  if (!animationData) return null;

  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      style={{ width: "100%", height: "100%" }}
    />
  );
}

import { useEffect, useState } from "react";

// ─── PathCharacter: the animated character decoration ───

interface PathCharacterProps {
  /** Which side to place the character */
  side: "left" | "right";
  /** Animation data source path */
  src: string;
  /** Accessible label */
  label: string;
  /** Character size in pixels */
  size?: number;
  /** Delay for entry animation */
  delay?: number;
}

export function PathCharacter({
  side,
  src,
  label,
  size = 56,
  delay = 0,
}: PathCharacterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: -15 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        delay,
        duration: 0.5,
        type: "spring",
        stiffness: 180,
        damping: 14,
      }}
      className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
      style={{
        [side]: "calc(100% + 16px)",
      }}
      aria-label={label}
    >
      <motion.div
        animate={{
          y: [0, -6, 0],
          rotate: [0, 3, 0, -3, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay * 0.5,
        }}
        className="filter drop-shadow-md"
      >
        <LottieAnimation src={src} size={size} />
      </motion.div>
    </motion.div>
  );
}

/**
 * Smart distribution algorithm for placing Duolingo-style characters
 * along the learning path. Places characters in empty spaces with good
 * visual distribution — not too crowded, not too sparse.
 *
 * Strategy:
 * - Characters appear every 2-3 nodes depending on total path length
 * - Alternates between themed characters and encouragement characters
 * - Milestone character at the last node
 * - No character on the first node (gives room for the "START" tooltip)
 * - Characters always appear on the opposite side of the node's position
 */
export function getPathCharacter(
  index: number,
  totalNodes: number,
  subjectId: string,
  isLeft: boolean,
): { src: string; label: string; side: "left" | "right" } | null {
  const charSet = SUBJECT_CHARACTERS[subjectId] || SUBJECT_CHARACTERS.default;

  // Show milestone character at the last node
  if (index === totalNodes - 1 && totalNodes > 2) {
    return {
      src: charSet.milestone.src,
      label: charSet.milestone.label,
      side: isLeft ? "right" : "left",
    };
  }

  // Don't show on first node (START tooltip is there)
  if (index === 0) return null;

  // Calculate ideal spacing based on total nodes
  // Goal: ~30-40% of nodes should have characters (well-distributed, not crowded)
  // Short paths (<8): every 2 nodes
  // Medium paths (8-15): every 3 nodes  
  // Long paths (>15): every 3 nodes
  const interval = totalNodes < 8 ? 2 : 3;

  // Use a seeded offset to start characters at varied positions
  // This prevents all subjects from having identical placement patterns
  const subjectSeed = subjectId.length % 2;
  const startOffset = 1 + subjectSeed;

  if ((index - startOffset) % interval !== 0) return null;

  // Determine character placement number (0, 1, 2, 3...)
  const placementIndex = Math.floor((index - startOffset) / interval);
  if (placementIndex < 0) return null;

  // Alternate between themed characters and encouragement characters
  // Pattern: themed, themed, encouragement, themed, themed, encouragement...
  const cyclePos = placementIndex % 3;
  const isEncouragement = cyclePos === 2;

  let char: { src: string; label: string };

  if (isEncouragement) {
    // Pick from encouragement pool
    const encIndex = Math.floor(placementIndex / 3) % charSet.encouragement.length;
    char = charSet.encouragement[encIndex];
  } else {
    // Pick from themed characters (skip encouragement slots in counting)
    const themedPlacement = placementIndex - Math.floor(placementIndex / 3);
    const charIndex = themedPlacement % charSet.characters.length;
    char = charSet.characters[charIndex];
  }

  return {
    src: char.src,
    label: char.label,
    // Character on opposite side of the node
    side: isLeft ? "right" : "left",
  };
}
