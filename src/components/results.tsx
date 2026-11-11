"use client";

import { Reveal } from "@/components/reveal";
import { useI18n } from "@/i18n/language";

export function Results() {
  const { t } = useI18n();
  return (
    <section id="results" aria-labelledby="results-title" className="scroll-mt-24 px-4 py-8">
      <Reveal className="mx-auto max-w-6xl rounded-2xl border border-dashed border-line bg-paper px-5 py-8">
        <h2 id="results-title" className="text-2xl font-semibold text-ink">
          {t.resultsTitle}
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft">{t.resultsBody}</p>
      </Reveal>
    </section>
  );
}
