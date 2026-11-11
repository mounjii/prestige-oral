"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/reveal";
import { useI18n } from "@/i18n/language";

const clips = [
  {
    src: "/videos/veneer-wide.mp4",
    poster: "/videos/veneer-wide.jpg",
    label: "veneerWide" as const,
  },
  {
    src: "/videos/veneer-portrait.mp4",
    poster: "/videos/veneer-portrait.jpg",
    label: "veneerPortrait" as const,
  },
];

export function Veneers() {
  const { t } = useI18n();
  const scroller = useRef<HTMLDivElement>(null);
  const videos = useRef<(HTMLVideoElement | null)[]>([]);
  const soundOn = useRef(false);
  const advancing = useRef(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    videos.current.forEach((video, i) => {
      if (!video) return;
      if (i !== index) {
        video.pause();
        return;
      }
      video.currentTime = 0;
      video.muted = !soundOn.current;
      video.play().catch(() => {
        video.muted = true;
        soundOn.current = false;
        video.play().catch(() => undefined);
      });
    });
  }, [index]);

  function syncIndex() {
    if (advancing.current) return;
    const el = scroller.current;
    if (!el || el.clientWidth === 0) return;
    const next = Math.min(clips.length - 1, Math.round(el.scrollLeft / el.clientWidth));
    setIndex((current) => (current === next ? current : next));
  }

  function goTo(next: number) {
    const el = scroller.current;
    const target = (next + clips.length) % clips.length;
    advancing.current = true;
    setIndex(target);
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: target * el.clientWidth, behavior: reduce ? "auto" : "smooth" });
    window.setTimeout(() => {
      advancing.current = false;
    }, reduce ? 0 : 700);
  }

  function togglePlay(i: number) {
    const video = videos.current[i];
    if (!video) return;
    if (video.paused) video.play().catch(() => undefined);
    else video.pause();
  }

  return (
    <section id="veneers" aria-labelledby="veneer-title" className="scroll-mt-24 px-4 py-8">
      <div
        dir="ltr"
        className="mx-auto grid max-w-6xl items-center gap-6 rounded-2xl border border-line bg-paper p-4 sm:p-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-10 lg:p-8"
      >
        <div className="w-full max-w-[320px] justify-self-start">
          <div
            ref={scroller}
            onScroll={syncIndex}
            onScrollEnd={() => {
              advancing.current = false;
            }}
            className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {clips.map((clip, clipIndex) => (
              <figure key={clip.src} className="w-full shrink-0 snap-start">
                <div className="overflow-hidden rounded-[1.75rem] bg-ink shadow-[0_18px_40px_-28px_rgba(53,36,23,0.55)]">
                  <video
                    ref={(node) => {
                      videos.current[clipIndex] = node;
                    }}
                    className="aspect-[9/16] w-full bg-ink object-cover"
                    playsInline
                    preload="metadata"
                    poster={clip.poster}
                    aria-label={t[clip.label]}
                    onEnded={() => goTo(clipIndex + 1)}
                    onClick={() => togglePlay(clipIndex)}
                  >
                    <source src={clip.src} type="video/mp4" />
                  </video>
                </div>
              </figure>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-center gap-2">
            {clips.map((clip, dot) => (
              <button
                key={clip.src}
                type="button"
                aria-label={t[clip.label]}
                aria-current={dot === index}
                onClick={() => goTo(dot)}
                className={`h-1.5 rounded-full transition-[width,background-color] ${
                  dot === index ? "w-6 bg-ink" : "w-1.5 bg-line"
                }`}
              />
            ))}
          </div>
        </div>
        <Reveal>
          <div dir={t.dir}>
            <h2 id="veneer-title" className="text-2xl font-semibold text-ink md:text-3xl">
              {t.veneerTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft">{t.veneerBody}</p>
            <details className="mt-4">
              <summary className="cursor-pointer text-sm font-medium text-ink underline decoration-gold underline-offset-4">
                {t.veneerMore}
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">{t.veneerMoreBody}</p>
            </details>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
