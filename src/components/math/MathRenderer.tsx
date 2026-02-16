"use client";

import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";

interface MathRendererProps {
  math: string;
  block?: boolean;
  className?: string;
}

/**
 * Checks if the text contains LaTeX math expressions.
 * Returns true if it contains math symbols or LaTeX commands.
 */
function containsMath(text: string): boolean {
  // Check for common LaTeX patterns
  const mathPatterns = [
    /\\\w+/,           // LaTeX commands like \frac, \sqrt
    /\^\{/,            // Superscripts
    /\_\{/,            // Subscripts
    /\$\$/,            // Display math markers
    /\$/,              // Inline math markers
    /\\frac/,          // Fractions
    /\\sqrt/,          // Square roots
    /\\text/,          // Text in math mode
    /\{.*\}/,          // Curly braces (common in LaTeX)
  ];
  
  return mathPatterns.some(pattern => pattern.test(text));
}

export function MathRenderer({
  math,
  block = false,
  className = "",
}: MathRendererProps) {
  if (!math) return null;

  // If the text doesn't contain LaTeX/math expressions, render as plain text
  if (!containsMath(math)) {
    return <span className={className}>{math}</span>;
  }

  // Otherwise, render with KaTeX
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
  } catch (error) {
    // If KaTeX fails to parse, fall back to plain text
    console.warn("KaTeX rendering failed:", error);
    return <span className={className}>{math}</span>;
  }
}

// Re-export for convenience
export { BlockMath, InlineMath };
