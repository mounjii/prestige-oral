import type { Lang } from "@/i18n/dictionary";

export function isLang(value: string | undefined | null): value is Lang {
  return value === "ar" || value === "fr" || value === "en";
}

export function langFromTag(tag: string): Lang | null {
  const base = tag.toLowerCase().split("-")[0];
  if (base === "ar" || base === "fr" || base === "en") return base;
  return null;
}

export function langFromAccept(header: string | null): Lang {
  if (!header) return "ar";
  const parts = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { tag, q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const part of parts) {
    const lang = langFromTag(part.tag);
    if (lang) return lang;
  }
  return "ar";
}
