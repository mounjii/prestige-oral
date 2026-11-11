"use client";

import Image from "next/image";
import { Reveal, RevealImage } from "@/components/reveal";
import { useI18n } from "@/i18n/language";

export function Veneers() {
  const { t } = useI18n();
  return (
    <section id="veneers" aria-labelledby="veneer-title" className="scroll-mt-24 px-4 py-8">
      <div className="mx-auto grid max-w-6xl items-center gap-6 overflow-hidden rounded-2xl border border-line bg-paper md:grid-cols-2">
        <RevealImage className="aspect-[4/3] bg-cream">
          <Image
            src="/images/veneer-shell.jpg"
            alt={t.veneerAlt}
            fill
            sizes="(max-width: 768px) 100vw, 540px"
            className="object-cover"
          />
        </RevealImage>
        <Reveal className="px-5 py-6 md:px-8">
          <h2 id="veneer-title" className="text-2xl font-semibold text-ink md:text-3xl">
            {t.veneerTitle}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">{t.veneerBody}</p>
          <details className="mt-4">
            <summary className="cursor-pointer text-sm font-medium text-ink underline decoration-gold underline-offset-4">
              {t.veneerMore}
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{t.veneerMoreBody}</p>
          </details>
        </Reveal>
      </div>
    </section>
  );
}
