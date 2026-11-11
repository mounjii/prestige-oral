"use client";

import { ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { useI18n } from "@/i18n/language";

export function Warranty() {
  const { t } = useI18n();
  return (
    <section id="warranty" aria-labelledby="warranty-title" className="scroll-mt-24 px-4 py-6">
      <Reveal className="mx-auto flex max-w-6xl flex-col gap-4 rounded-2xl border border-line bg-cream px-5 py-6 sm:flex-row sm:items-start">
        <ShieldCheck className="h-8 w-8 shrink-0 text-gold-deep" strokeWidth={1.5} aria-hidden="true" />
        <div>
          <h2 id="warranty-title" className="text-2xl font-semibold text-ink">
            {t.warrantyTitle}
          </h2>
          <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink-soft">{t.warrantyBody}</p>
        </div>
      </Reveal>
    </section>
  );
}
