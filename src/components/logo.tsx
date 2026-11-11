import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="#top" className="inline-flex items-center gap-2.5 rounded-sm" aria-label="Prestige Oral">
      <Image
        src="/images/logo-tooth.png"
        alt=""
        width={640}
        height={561}
        priority
        className="brand-mark shrink-0"
      />
      <span className="hidden min-[380px]:flex flex-col items-start leading-none">
        <span className="font-latin text-[12px] font-semibold tracking-[0.14em] text-ink sm:text-[13px]">
          PRESTIGE ORAL
        </span>
        <span className="mt-1 font-latin text-[8px] tracking-[0.16em] text-ink-soft sm:text-[9px]">
          CLINIQUE DENTAIRE
        </span>
      </span>
    </Link>
  );
}
