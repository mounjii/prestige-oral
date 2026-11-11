"use client";

import { AppointmentForm } from "@/components/appointment-form";
import { FinalCta } from "@/components/appointment";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Location } from "@/components/location";
import { MobileBar } from "@/components/mobile-bar";
import { Offer } from "@/components/offer";
import { Results } from "@/components/results";
import { ShadeSection } from "@/components/tooth-shade";
import { TrustStrip } from "@/components/trust-strip";
import { Veneers } from "@/components/veneers";
import { ViewTracker } from "@/components/view-tracker";
import { Warranty } from "@/components/warranty";
import { Why } from "@/components/why";
import { useI18n } from "@/i18n/language";

export function HomeScreen() {
  const { t } = useI18n();
  return (
    <>
      <a
        href="#booking"
        className="pointer-events-none absolute start-4 top-3 z-50 -translate-y-24 rounded-full bg-ink px-4 py-2 text-sm text-ivory opacity-0 focus:pointer-events-auto focus:translate-y-0 focus:opacity-100"
      >
        {t.skip}
      </a>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Offer />
        <Warranty />
        <ShadeSection />
        <Veneers />
        <Why />
        <Results />
        <AppointmentForm />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <MobileBar />
      <ViewTracker />
    </>
  );
}
