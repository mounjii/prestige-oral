"use client";

import { useEffect, useState } from "react";
import { BrandIcon } from "@/components/brand-icon";
import { useI18n } from "@/i18n/language";
import { useBooking } from "@/lib/booking";

export function MobileBar() {
  const { t } = useI18n();
  const { formActive } = useBooking();
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => setPastHero(!entry.isIntersecting), { threshold: 0 });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (!pastHero || formActive) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ivory/95 px-3 pt-2 backdrop-blur-md md:hidden pb-[max(0.6rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto max-w-lg">
        <a
          href="#booking"
          className="pressable inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-whatsapp text-sm font-medium text-ink"
        >
          <BrandIcon icon="whatsapp" className="h-4 w-4" />
          {t.whatsapp}
        </a>
      </div>
    </div>
  );
}
