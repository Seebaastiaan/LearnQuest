"use client";

import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";

interface MathRendererProps {
  math: string;
  block?: boolean;
  className?: string;
}

export function MathRenderer({
  math,
  block = false,
  className,
}: MathRendererProps) {
  if (!math) return null;

  return (
    <span className={className}>
      {block ? (
        <BlockMath math={math} errorColor="#EF4444" />
      ) : (
        <InlineMath math={math} errorColor="#EF4444" />
      )}
    </span>
  );
}

// Re-export for convenience
export { BlockMath, InlineMath };
