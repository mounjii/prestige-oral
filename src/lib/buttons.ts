const base =
  "pressable inline-flex h-11 items-center justify-center gap-2 rounded-full px-4 text-sm font-medium whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

export const buttons = {
  whatsapp: `${base} bg-whatsapp text-ink outline-ink hover:bg-[#1ebe5a]`,
  outline: `${base} border border-line bg-paper text-ink outline-ink hover:border-ink`,
  lightOutline: `${base} border border-ivory/70 bg-transparent text-ivory outline-ivory hover:bg-ivory/10`,
  headerCall:
    "pressable inline-flex h-10 items-center justify-center gap-2 rounded-full bg-ink px-4 text-sm font-medium text-ivory outline-ivory hover:bg-[#2a1c12]",
  offer:
    "pressable inline-flex h-11 items-center justify-center rounded-full bg-ink px-4 text-sm font-medium text-ivory outline-ivory hover:bg-[#2a1c12]",
};
