"use client";

import { Languages } from "lucide-react";
import { createContext, useContext, useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { langFromTag } from "@/i18n/detect";
import { dictionary, languageOptions, type Copy, type Lang } from "@/i18n/dictionary";

const LanguageContext = createContext<{
  lang: Lang;
  t: Copy;
  setLang: (lang: Lang) => void;
} | null>(null);

const listeners = new Set<() => void>();

function browserLang(): Lang {
  const tags = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const tag of tags) {
    const lang = langFromTag(tag || "");
    if (lang) return lang;
  }
  return "ar";
}

function readLang(): Lang {
  const saved = window.localStorage.getItem("prestige-lang");
  if (saved === "en" || saved === "fr" || saved === "ar") return saved;
  return browserLang();
}

function remember(lang: Lang) {
  window.localStorage.setItem("prestige-lang", lang);
  document.cookie = `prestige-lang=${lang}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function LanguageProvider({ initialLang, children }: { initialLang: Lang; children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, readLang, () => initialLang);

  useEffect(() => {
    const copy = dictionary[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = copy.dir;
    document.title = copy.metaTitle;
  }, [lang]);

  const setLang = (next: Lang) => {
    remember(next);
    listeners.forEach((listener) => listener());
  };

  return (
    <LanguageContext.Provider value={{ lang, t: dictionary[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useI18n must be used within LanguageProvider");
  return value;
}

export function LanguageSelector() {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className="pressable inline-flex h-10 items-center gap-1.5 rounded-full border border-line px-2.5 text-ink hover:border-ink"
        aria-label={t.language}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
      >
        <Languages className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden="true" />
        <span className="font-latin text-xs font-semibold tracking-wide" dir="ltr">
          {lang.toUpperCase()}
        </span>
      </button>
      {open ? (
        <ul
          id={listId}
          role="listbox"
          aria-label={t.language}
          className="absolute end-0 z-50 mt-2 w-28 overflow-hidden rounded-2xl border border-line bg-paper py-1 shadow-[0_16px_40px_-24px_rgba(53,36,23,0.45)]"
        >
          {languageOptions.map((option) => {
            const selected = option.id === lang;
            return (
              <li key={option.id} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  className={`flex w-full items-center justify-between px-3 py-2 text-sm ${
                    selected ? "bg-cream font-medium text-ink" : "text-ink-soft hover:bg-ivory"
                  }`}
                  onClick={() => {
                    setLang(option.id);
                    setOpen(false);
                  }}
                >
                  <span dir="ltr">{option.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
