"use client";

import { Gem, HeartHandshake, UserRound } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { useI18n } from "@/i18n/language";

const icons = [Gem, UserRound, HeartHandshake];

export function Why() {
  const { t } = useI18n();
  const features = t.features.map((feature, index) => ({ ...feature, icon: icons[index] }));
  return (
    <section id="why" aria-labelledby="why-title" className="scroll-mt-24 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 id="why-title" className="text-2xl font-semibold text-ink md:text-3xl">
            {t.whyTitle}
          </h2>
        </Reveal>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={index * 0.04}>
                <li className="flex h-full gap-3 rounded-2xl border border-line bg-cream/70 p-5 motion-safe:transition motion-safe:hover:bg-cream">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" strokeWidth={1.5} aria-hidden="true" />
                  <span>
                    <span className="block font-medium text-ink">{feature.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink-soft">{feature.body}</span>
                  </span>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
