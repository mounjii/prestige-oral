"use client";

import { Reveal } from "@/components/reveal";
import { site, type ShadeId } from "@/config/site";
import { useI18n } from "@/i18n/language";
import { useBooking } from "@/lib/booking";

export function ToothShadeSelector({ compact = false }: { compact?: boolean }) {
  const { t } = useI18n();
  const { shade, setShade } = useBooking();

  return (
    <div>
      {!compact ? (
        <>
          <h2 id="shade-title" className="text-2xl font-semibold text-ink md:text-3xl">
            {t.shadeTitle}
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-soft">{t.shadeBody}</p>
        </>
      ) : null}
      <div className={`flex flex-wrap gap-3 ${compact ? "mt-3" : "mt-6"}`} role="radiogroup" aria-label={t.shadeGroup}>
        {site.shades.map((item) => {
          const selected = shade === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => setShade(selected ? "" : (item.id as ShadeId))}
              className={`flex w-[4.5rem] flex-col items-center gap-2 rounded-2xl border bg-paper px-2 py-3 ${
                selected ? "border-gold shadow-[0_0_0_1px_#B58A4A]" : "border-line"
              }`}
            >
              <span className="grid h-16 w-12 place-items-center rounded-xl bg-[#b9b9b6]" aria-hidden="true">
                <span
                  className="block h-12 w-8 border border-white/70"
                  style={{
                    backgroundColor: item.color,
                    borderRadius: "46% 46% 40% 40% / 30% 30% 70% 70%",
                  }}
                />
              </span>
              <span className="font-latin text-sm font-medium text-ink">{item.id}</span>
            </button>
          );
        })}
      </div>
      <p className="mt-3 text-sm text-ink">
        {t.shadeSelected}: <span className="font-latin font-medium">{shade || t.shadeNone}</span>
      </p>
      {!compact ? <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">{t.shadeDisclaimer}</p> : null}
    </div>
  );
}

export function ShadeSection() {
  return (
    <section id="shades" aria-labelledby="shade-title" className="scroll-mt-24 px-4 py-10">
      <Reveal className="mx-auto max-w-6xl">
        <ToothShadeSelector />
      </Reveal>
    </section>
  );
}
