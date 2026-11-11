"use client";

import { useRef, useState } from "react";
import { Reveal } from "@/components/reveal";
import { site, type OfferId } from "@/config/site";
import { useI18n } from "@/i18n/language";
import { useBooking } from "@/lib/booking";
import { buttons } from "@/lib/buttons";
import { track } from "@/lib/tracking";
import { todayIso, validateAppointment, type FieldErrors } from "@/lib/validation";
import { bookingWhatsappMessage, whatsappHref } from "@/lib/whatsapp";

const fieldClass =
  "h-12 w-full rounded-xl border border-line bg-paper px-3 text-base text-ink outline-none placeholder:text-ink-soft focus-visible:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold";

export function AppointmentForm() {
  const { t } = useI18n();
  const { teeth, setTeeth, setFormActive } = useBooking();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [minDate, setMinDate] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [pending, setPending] = useState(false);
  const [ready, setReady] = useState(false);
  const [fallbackUrl, setFallbackUrl] = useState("");
  const started = useRef(false);

  function markStart() {
    if (started.current) return;
    started.current = true;
    track("AppointmentFormStart", { placement: "form" });
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const today = todayIso();
    setMinDate(today);
    const nextErrors = validateAppointment({ fullName, phone, teeth, shade: "", date }, t.errors, today);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0 || (teeth !== "16" && teeth !== "20")) return;

    setPending(true);
    const url = whatsappHref(
      bookingWhatsappMessage(
        { fullName, phone, teeth, date },
        t,
        t.offers[teeth].teeth,
      ),
    );
    track("AppointmentFormSubmit", { teeth });
    const popup = window.open(url, "_blank", "noopener,noreferrer");
    setFallbackUrl(popup ? "" : url);
    setReady(true);
    setPending(false);
  }

  return (
    <section id="booking" aria-labelledby="booking-title" className="scroll-mt-24 px-4 py-10">
      <div className="mx-auto max-w-xl">
        <Reveal>
          <h2 id="booking-title" className="text-2xl font-semibold text-ink md:text-3xl">
            {t.formTitle}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">{t.formBody}</p>
        </Reveal>
        <form
          className="mt-6 grid gap-4 rounded-2xl border border-line bg-paper p-5"
          noValidate
          onSubmit={onSubmit}
          onFocusCapture={() => {
            setFormActive(true);
            if (!minDate) setMinDate(todayIso());
            markStart();
          }}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFormActive(false);
          }}
        >
          <label className="grid gap-2 text-sm font-medium text-ink">
            {t.fullName}
            <input
              name="fullName"
              autoComplete="name"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              className={fieldClass}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? "name-error" : undefined}
            />
            {errors.fullName ? (
              <span id="name-error" className="text-sm font-normal text-[#8c3a32]">
                {errors.fullName}
              </span>
            ) : null}
          </label>

          <label className="grid gap-2 text-sm font-medium text-ink">
            {t.phone}
            <input
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              dir="ltr"
              placeholder="0612345678"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className={`${fieldClass} text-start`}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : "phone-help"}
            />
            <span id="phone-help" className="text-sm font-normal text-ink-soft">
              {t.phoneHelp}
            </span>
            {errors.phone ? (
              <span id="phone-error" className="text-sm font-normal text-[#8c3a32]">
                {errors.phone}
              </span>
            ) : null}
          </label>

          <fieldset className="grid gap-2">
            <legend className="text-sm font-medium text-ink">{t.teeth}</legend>
            <div className="grid grid-cols-2 gap-2">
              {site.offers.map((offer) => (
                <label
                  key={offer.id}
                  className={`flex h-12 cursor-pointer items-center justify-center rounded-xl border text-sm ${
                    teeth === offer.id ? "border-gold bg-cream font-medium text-ink" : "border-line text-ink"
                  }`}
                >
                  <input
                    type="radio"
                    name="teeth"
                    value={offer.id}
                    checked={teeth === offer.id}
                    onChange={() => setTeeth(offer.id as OfferId)}
                    className="sr-only"
                  />
                  {t.offers[offer.id].teeth}
                </label>
              ))}
            </div>
            {errors.teeth ? <span className="text-sm text-[#8c3a32]">{errors.teeth}</span> : null}
          </fieldset>

          <label className="grid gap-2 text-sm font-medium text-ink">
            {t.date}
            <input
              name="date"
              type="date"
              dir="ltr"
              min={minDate || undefined}
              value={date}
              onChange={(event) => setDate(event.target.value)}
              className={fieldClass}
              aria-invalid={Boolean(errors.date)}
              aria-describedby={errors.date ? "date-error" : undefined}
            />
            {errors.date ? (
              <span id="date-error" className="text-sm font-normal text-[#8c3a32]">
                {errors.date}
              </span>
            ) : null}
          </label>

          <button type="submit" className={buttons.whatsapp} disabled={pending}>
            {pending ? t.submitting : t.submit}
          </button>
          <p className="text-sm leading-relaxed text-ink-soft">{t.formNote}</p>
          {ready ? (
            <p className="rounded-xl bg-cream px-3 py-3 text-sm leading-relaxed text-ink" role="status">
              {t.formReady}
            </p>
          ) : null}
          {fallbackUrl ? (
            <a href={fallbackUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-ink underline">
              {t.formFallback}
            </a>
          ) : null}
        </form>
      </div>
    </section>
  );
}
