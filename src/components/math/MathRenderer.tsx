"use client";

import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";

interface MathRendererProps {
  math: string;
  block?: boolean;
  className?: string;
}

type Segment =
  | { type: "text"; content: string }
  | { type: "inline"; content: string }
  | { type: "block"; content: string };

/**
 * Splits a string into text and math segments.
 * Handles $$...$$ (block) and $...$ (inline) delimiters.
 * If the string has no $ delimiters, returns it as a single raw-latex segment.
 */
function parseSegments(text: string): Segment[] {
  // If no $ signs, treat the whole string as raw LaTeX (legacy math-topic format)
  if (!text.includes("$")) {
    return [{ type: "inline", content: text }];
  }

  const segments: Segment[] = [];
  let i = 0;

  while (i < text.length) {
    // Try $$...$$ first
    if (text[i] === "$" && text[i + 1] === "$") {
      const end = text.indexOf("$$", i + 2);
      if (end !== -1) {
        segments.push({ type: "block", content: text.slice(i + 2, end) });
        i = end + 2;
        continue;
      }
    }

    // Try $...$
    if (text[i] === "$") {
      const end = text.indexOf("$", i + 1);
      if (end !== -1) {
        segments.push({ type: "inline", content: text.slice(i + 1, end) });
        i = end + 1;
        continue;
      }
    }

    // Plain text — collect until next $
    const nextDollar = text.indexOf("$", i);
    if (nextDollar === -1) {
      segments.push({ type: "text", content: text.slice(i) });
      break;
    } else {
      segments.push({ type: "text", content: text.slice(i, nextDollar) });
      i = nextDollar;
    }
  }

  return segments.filter((s) => s.content !== "");
}

/**
 * Checks if the text contains LaTeX math expressions that need KaTeX rendering.
 */
function containsMath(text: string): boolean {
  const mathPatterns = [
    /\\\w+/, // LaTeX commands like \frac, \sqrt
    /\^\{/, // Superscripts
    /\_\{/, // Subscripts
    /\$/, // Dollar-sign delimiters
  ];
  return mathPatterns.some((pattern) => pattern.test(text));
}

export function MathRenderer({
  math,
  block = false,
  className = "",
}: MathRendererProps) {
  if (!math) return null;

  // Plain text — no rendering needed
  if (!containsMath(math)) {
    return <span className={className}>{math}</span>;
  }

  // String uses $...$ delimiters or pure LaTeX — parse into segments
  const segments = parseSegments(math);

  // Single raw-latex segment (no $ delimiters), legacy path
  if (segments.length === 1 && !math.includes("$")) {
    try {
      return (
        <span className={className}>
          {block ? (
            <BlockMath math={math} errorColor="#EF4444" />
          ) : (
            <InlineMath math={math} errorColor="#EF4444" />
          )}
        </span>
      );
    } catch {
      return <span className={className}>{math}</span>;
    }
  }

  // Mixed content: render each segment
  return (
    <span className={className}>
      {segments.map((seg, i) => {
        if (seg.type === "text") {
          return <span key={i}>{seg.content}</span>;
        }
        try {
          return seg.type === "block" ? (
            <BlockMath key={i} math={seg.content} errorColor="#EF4444" />
          ) : (
            <InlineMath key={i} math={seg.content} errorColor="#EF4444" />
          );
        } catch {
          return <span key={i}>{seg.content}</span>;
        }
      })}
    </span>
  );
}

// Re-export for convenience
export { BlockMath, InlineMath };
