"use client";

import { MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { site } from "@/config/site";
import { useI18n } from "@/i18n/language";

export function Location() {
  const { t } = useI18n();
  return (
    <section id="location" aria-labelledby="location-title" className="scroll-mt-24 px-4 py-8">
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <Reveal>
          <h2 id="location-title" className="text-2xl font-semibold text-ink md:text-3xl">
            {t.locationTitle}
          </h2>
          <p className="mt-4 flex items-start gap-2 text-base text-ink">
            <MapPin className="mt-1 h-4 w-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
            <span>{t.address}</span>
          </p>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pressable mt-5 inline-flex h-11 items-center justify-center rounded-full bg-ink px-4 text-sm font-medium text-ivory"
          >
            {t.directions}
          </a>
        </Reveal>
        <Reveal delay={0.08} className="overflow-hidden rounded-2xl border border-line bg-cream">
          <iframe
            title={t.mapTitle}
            src={site.mapsEmbed}
            className="h-72 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            suppressHydrationWarning
          />
        </Reveal>
      </div>
    </section>
  );
}
