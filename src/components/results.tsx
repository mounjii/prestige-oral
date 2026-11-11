"use client";

import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { useI18n } from "@/i18n/language";

const cases = [
  {
    id: "gaps",
    wide: false,
    frame: "aspect-[4/5]",
    before: { src: "/images/cases/1-before.jpg", width: 455, height: 583 },
    after: { src: "/images/cases/1-after.jpg", width: 455, height: 583 },
  },
  {
    id: "shade",
    wide: false,
    frame: "aspect-[4/5]",
    before: { src: "/images/cases/2-before.jpg", width: 454, height: 572 },
    after: { src: "/images/cases/2-after.jpg", width: 454, height: 572 },
  },
  {
    id: "arch",
    wide: true,
    frame: "aspect-square",
    before: { src: "/images/cases/3-before.jpg", width: 439, height: 465 },
    after: { src: "/images/cases/3-after.jpg", width: 439, height: 465 },
  },
  {
    id: "smile",
    wide: true,
    frame: "aspect-[19/10]",
    before: { src: "/images/cases/4-before.jpg", width: 472, height: 248 },
    after: { src: "/images/cases/4-after.jpg", width: 472, height: 248 },
  },
] as const;

function Pair({
  before,
  after,
  beforeLabel,
  afterLabel,
  frame,
}: {
  before: { src: string; width: number; height: number };
  after: { src: string; width: number; height: number };
  beforeLabel: string;
  afterLabel: string;
  frame: string;
}) {
  const shots = [
    { photo: before, label: beforeLabel, pill: "bg-cream text-ink" },
    { photo: after, label: afterLabel, pill: "bg-ink text-ivory" },
  ];
  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-3">
      {shots.map((shot) => (
        <figure key={shot.photo.src}>
          <div className={`overflow-hidden rounded-xl bg-ivory ${frame}`}>
            <Image
              src={shot.photo.src}
              alt={shot.label}
              width={shot.photo.width}
              height={shot.photo.height}
              sizes="(max-width: 1024px) 46vw, 520px"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <figcaption className="mt-2 text-center">
            <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${shot.pill}`}>{shot.label}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function Results() {
  const { t } = useI18n();
  return (
    <section id="results" aria-labelledby="results-title" className="scroll-mt-24 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 id="results-title" className="text-2xl font-semibold text-ink md:text-3xl">
            {t.resultsTitle}
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft">{t.resultsBody}</p>
        </Reveal>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {cases.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.05} className={item.wide ? "lg:col-span-2" : undefined}>
              <article className="rounded-2xl border border-line bg-paper p-3 shadow-[0_18px_40px_-30px_rgba(53,36,23,0.45)] sm:p-4">
                <div className={item.wide ? "mx-auto max-w-3xl" : undefined}>
                  <Pair
                    before={item.before}
                    after={item.after}
                    beforeLabel={t.resultsBefore}
                    afterLabel={t.resultsAfter}
                    frame={item.frame}
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
