"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";
import { LanguageSelector, useI18n } from "@/i18n/language";

export function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting), {
      rootMargin: "-72px 0px 0px 0px",
      threshold: 0,
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-30 border-b transition-shadow ${
        scrolled || open ? "border-line bg-ivory/95 shadow-[0_10px_30px_-24px_rgba(53,36,23,0.65)]" : "border-transparent bg-ivory/80"
      } backdrop-blur-md`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-3 sm:gap-3 sm:px-4">
        <Logo />
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Prestige Oral">
          {t.nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-ink hover:text-ink-soft">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSelector />
          <button
            type="button"
            className="pressable grid h-10 w-10 place-items-center rounded-full border border-line text-ink lg:hidden"
            aria-label={open ? t.menuClose : t.menuOpen}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
          </button>
        </div>
      </div>
      {open ? <MobileMenu onNavigate={() => setOpen(false)} /> : null}
    </header>
  );
}
