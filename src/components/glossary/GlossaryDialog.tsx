"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import type { GlossaryEntry } from "@/lib/data/glossary";
import { useSettingsStore } from "@/stores";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

interface GlossaryDialogProps {
  isOpen: boolean;
  onClose: () => void;
  glossary: Record<string, GlossaryEntry>;
  subjectName: string;
}

export function GlossaryDialog({
  isOpen,
  onClose,
  glossary,
  subjectName,
}: GlossaryDialogProps) {
  const locale = useSettingsStore((s) => s.locale);
  const [searchQuery, setSearchQuery] = useState("");

  // Get unique terms (avoid duplicates from different language keys)
  const uniqueTerms = useMemo(() => {
    const seen = new Set<string>();
    const terms: Array<{ key: string; entry: GlossaryEntry }> = [];

    Object.entries(glossary).forEach(([key, entry]) => {
      const termText = entry.term[locale] || entry.term.es;
      if (!seen.has(termText)) {
        seen.add(termText);
        terms.push({ key, entry });
      }
    });

    return terms.sort((a, b) => {
      const aText = a.entry.term[locale] || a.entry.term.es;
      const bText = b.entry.term[locale] || b.entry.term.es;
      return aText.localeCompare(bText, locale);
    });
  }, [glossary, locale]);

  // Filter terms based on search query
  const filteredTerms = useMemo(() => {
    if (!searchQuery.trim()) return uniqueTerms;

    const query = searchQuery.toLowerCase();
    return uniqueTerms.filter(({ entry }) => {
      const term = (entry.term[locale] || entry.term.es).toLowerCase();
      const definition = (
        entry.definition[locale] || entry.definition.es
      ).toLowerCase();
      return term.includes(query) || definition.includes(query);
    });
  }, [uniqueTerms, searchQuery, locale]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {locale === "es" ? "Guía de estudio" : "Study guide"} -{" "}
            {subjectName}
          </DialogTitle>
        </DialogHeader>

        {/* Search bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder={
              locale === "es" ? "Buscar término..." : "Search term..."
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>

        {/* Glossary terms list */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {filteredTerms.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              {locale === "es"
                ? "No se encontraron términos"
                : "No terms found"}
            </p>
          ) : (
            filteredTerms.map(({ key, entry }) => (
              <div
                key={key}
                className="border rounded-lg p-4 hover:bg-accent/50 transition-colors"
              >
                <h3 className="font-bold text-lg mb-2">
                  {entry.term[locale] || entry.term.es}
                </h3>
                <p className="text-muted-foreground">
                  {entry.definition[locale] || entry.definition.es}
                </p>
                {entry.examples && (
                  <div className="mt-2 text-sm text-muted-foreground italic">
                    {entry.examples[locale] || entry.examples.es}
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer with count */}
        <div className="text-sm text-muted-foreground text-center pt-2 border-t">
          {locale === "es"
            ? `${filteredTerms.length} término${filteredTerms.length !== 1 ? "s" : ""}`
            : `${filteredTerms.length} term${filteredTerms.length !== 1 ? "s" : ""}`}
        </div>
      </DialogContent>
    </Dialog>
  );
}
