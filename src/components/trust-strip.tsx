"use client";

import { CalendarDays, Palette, ShieldCheck, Users } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { useI18n } from "@/i18n/language";

const icons = [ShieldCheck, Palette, Users, CalendarDays];

export function TrustStrip() {
  const { t } = useI18n();
  const items = t.trust.map((item, index) => ({ ...item, icon: icons[index], href: index === 0 ? "#warranty" : undefined }));

  return (
    <section aria-label={t.trustLabel} className="px-4 py-8">
      <ul className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => {
          const Icon = item.icon;
          const content = (
            <>
              <Icon className="h-5 w-5 shrink-0 text-gold-deep" strokeWidth={1.5} aria-hidden="true" />
              <span>
                <span className="block text-sm font-medium text-ink">{item.title}</span>
                <span className="mt-1 block text-sm leading-relaxed text-ink-soft">{item.body}</span>
              </span>
            </>
          );
          return (
            <Reveal key={item.title} delay={index * 0.04}>
              <li className="h-full rounded-2xl border border-line bg-paper p-4">
                {item.href ? (
                  <a href={item.href} className="flex items-start gap-3">
                    {content}
                  </a>
                ) : (
                  <div className="flex items-start gap-3">{content}</div>
                )}
              </li>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
