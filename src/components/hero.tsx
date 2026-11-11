"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { BrandIcon } from "@/components/brand-icon";
import { Stagger, StaggerItem } from "@/components/reveal";
import { useI18n } from "@/i18n/language";
import { buttons } from "@/lib/buttons";

export function Hero() {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate min-h-[92dvh] scroll-mt-24 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { opacity: 0, scale: 1.06 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src="/images/hero-bg-mobile.jpg"
          alt={t.heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_18%] md:hidden"
        />
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="hidden object-cover object-center md:block"
        />
      </motion.div>
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,#FAF7F2_0%,rgba(250,247,242,0.94)_24%,rgba(250,247,242,0.55)_48%,rgba(250,247,242,0)_74%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto flex min-h-[92dvh] max-w-6xl flex-col justify-end px-4 pb-12 pt-16 sm:pb-16">
        <Stagger>
          <StaggerItem>
            <h1 id="hero-title" className="max-w-[14ch] text-4xl font-semibold leading-[1.25] text-ink md:text-5xl">
              {t.heroTitle}
            </h1>
          </StaggerItem>
          <StaggerItem>
            <span className="mt-4 block h-px w-16 bg-gold" aria-hidden="true" />
          </StaggerItem>
          <StaggerItem>
            <p className="mt-4 max-w-[34rem] text-base leading-relaxed text-ink-soft">{t.heroBody}</p>
          </StaggerItem>
          <StaggerItem>
            <div className="mt-6">
              <a href="#booking" className={`${buttons.whatsapp} w-full sm:w-auto`}>
                <BrandIcon icon="whatsapp" className="h-4 w-4" />
                {t.whatsapp}
              </a>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
