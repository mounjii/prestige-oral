"use client";

import Image from "next/image";
import { BrandIcon } from "@/components/brand-icon";
import { Reveal } from "@/components/reveal";
import { useI18n } from "@/i18n/language";
import { buttons } from "@/lib/buttons";

export function FinalCta() {
  const { t } = useI18n();
  return (
    <section aria-labelledby="final-title" className="px-4 py-8">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl bg-ink px-5 py-12 text-center text-ivory sm:px-10">
        <Image
          src="/images/logo-tooth.png"
          alt=""
          width={640}
          height={561}
          className="brand-watermark pointer-events-none absolute -inset-e-8 top-1/2 -translate-y-1/2 opacity-[0.16]"
        />
        <h2 id="final-title" className="relative text-2xl font-semibold sm:text-4xl">
          {t.ctaTitle}
        </h2>
        <p className="relative mx-auto mt-3 max-w-md text-sm leading-relaxed text-ivory/85 sm:text-base">{t.ctaBody}</p>
        <div className="relative mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#booking" className={`${buttons.whatsapp} w-full sm:w-auto`}>
            <BrandIcon icon="whatsapp" className="h-4 w-4" />
            {t.whatsapp}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
