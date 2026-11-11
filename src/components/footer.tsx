"use client";

import { BrandIcon } from "@/components/brand-icon";
import { Reveal } from "@/components/reveal";
import { site } from "@/config/site";
import { useI18n } from "@/i18n/language";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-line px-4 pb-28 pt-8 md:pb-8">
      <Reveal className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-ink">
        <p className="font-latin text-sm font-semibold tracking-[0.14em]">PRESTIGE ORAL</p>
        <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-ink-soft hover:text-ink">
          {t.address}
        </a>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {site.phoneDisplay ? (
            <a href={`tel:${site.phoneTel}`} dir="ltr" className="hover:text-ink-soft">
              {site.phoneDisplay}
            </a>
          ) : null}
          <a href="#booking" className="hover:text-ink-soft">
            {t.whatsappShort}
          </a>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-ink-soft">
            <BrandIcon icon="instagram" className="h-4 w-4" />
            {t.instagram}
          </a>
          <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-ink-soft">
            <BrandIcon icon="facebook" className="h-4 w-4" />
            {t.facebook}
          </a>
        </div>
        <p className="text-ink-soft">{t.copyright}</p>
      </Reveal>
    </footer>
  );
}
