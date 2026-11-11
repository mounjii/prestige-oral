"use client";

import { CompareSlider } from "@/components/compare-slider";
import { useI18n } from "@/i18n/language";

export function Gallery() {
  const { t } = useI18n();

  return (
    <section id="results" aria-labelledby="results-title" className="scroll-mt-24 px-4 py-6">
      <div className="mx-auto max-w-[920px]">
        <div className="mb-5 flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-gold sm:w-16" aria-hidden="true" />
          <h2 id="results-title" className="text-center text-xl font-semibold text-ink sm:text-2xl">
            {t.resultsTitle}
          </h2>
          <span className="h-px w-10 bg-gold sm:w-16" aria-hidden="true" />
        </div>
        <CompareSlider
          src="/images/smile-compare.jpg"
          alt={t.resultsBody}
          before={t.resultsTitle}
          after={t.resultsTitle}
          label={t.resultsTitle}
        />
        <p className="mt-3 text-center text-xs text-ink-soft sm:text-sm">{t.resultsBody}</p>
      </div>
    </section>
  );
}
