"use client";

import Image from "next/image";
import { Reveal, RevealImage } from "@/components/reveal";
import { site, type OfferId } from "@/config/site";
import { useI18n } from "@/i18n/language";
import { useBooking } from "@/lib/booking";
import { buttons } from "@/lib/buttons";

export function Offer() {
  const { t } = useI18n();
  const { setTeeth } = useBooking();

  function choose(id: OfferId) {
    setTeeth(id);
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section id="offer" aria-labelledby="offer-title" className="scroll-mt-24 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 id="offer-title" className="text-2xl font-semibold text-ink md:text-3xl">
            {t.offerTitle}
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-soft">{t.offerBody}</p>
        </Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {site.offers.map((offer, index) => (
            <Reveal key={offer.id} delay={index * 0.08}>
            <article
              className="overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_18px_40px_-30px_rgba(53,36,23,0.55)] motion-safe:transition motion-safe:hover:-translate-y-0.5"
            >
              <RevealImage className="aspect-[16/10] bg-cream">
                <Image src={offer.image} alt={t.offers[offer.id].teeth} fill sizes="(max-width: 768px) 100vw, 540px" className="object-cover" />
              </RevealImage>
              <div className="p-5">
                <h3 className="text-lg font-medium text-ink">{t.offers[offer.id].teeth}</h3>
                <p className="mt-2 text-3xl font-semibold tracking-tight text-ink">
                  {t.offers[offer.id].price}
                  <span className="ms-2 text-base font-normal text-ink-soft">{t.offers[offer.id].currency}</span>
                </p>
                <button type="button" className={`${buttons.offer} mt-5`} onClick={() => choose(offer.id)}>
                  {t.bookOffer}
                </button>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-ink-soft">{t.disclaimer}</p>
      </div>
    </section>
  );
}
