"use client";

import { motion, useReducedMotion } from "motion/react";
import { useI18n } from "@/i18n/language";

export function MobileMenu({ onNavigate }: { onNavigate: () => void }) {
  const { t } = useI18n();
  const reduce = useReducedMotion();

  return (
    <motion.nav
      id="mobile-menu"
      aria-label={t.menuLabel}
      className="absolute inset-x-0 top-full z-40 border-b border-line bg-ivory px-4 py-4 shadow-[0_16px_30px_-24px_rgba(53,36,23,0.45)] lg:hidden"
      initial={reduce ? false : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
    >
      <ul className="grid gap-1">
        {t.nav.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="block rounded-xl px-3 py-3 text-base text-ink hover:bg-cream"
              onClick={onNavigate}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
