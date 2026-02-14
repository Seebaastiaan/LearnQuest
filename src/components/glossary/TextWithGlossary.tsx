import { GlossaryTerm } from "@/components/glossary/GlossaryTerm";
import { findGlossaryTerms, mathGlossary } from "@/lib/data/glossary";
import type { Locale } from "@/lib/types";
import { Fragment } from "react";

interface TextWithGlossaryProps {
  text: string;
  locale: Locale;
  className?: string;
}

/**
 * Component that automatically detects and wraps glossary terms in text
 */
export function TextWithGlossary({
  text,
  locale,
  className,
}: TextWithGlossaryProps) {
  // Find all glossary terms in the text
  const terms = findGlossaryTerms(text);

  if (terms.length === 0) {
    return <span className={className}>{text}</span>;
  }

  // Create a regex pattern to match all terms
  // Sort by length (longest first) to match longer terms first
  const sortedTerms = terms.sort((a, b) => b.length - a.length);
  const pattern = new RegExp(
    `(${sortedTerms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "gi",
  );

  // Split text by terms and wrap matches
  const parts = text.split(pattern);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        // Check if this part matches a glossary term
        const matchedTerm = terms.find(
          (term) => part.toLowerCase() === term.toLowerCase(),
        );

        if (matchedTerm && mathGlossary[matchedTerm.toLowerCase()]) {
          return (
            <GlossaryTerm key={index} term={matchedTerm} locale={locale}>
              {part}
            </GlossaryTerm>
          );
        }

        return <Fragment key={index}>{part}</Fragment>;
      })}
    </span>
  );
}
