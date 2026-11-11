"use client";

import { site } from "@/config/site";
import { useI18n } from "@/i18n/language";
import { track, type TrackEvent } from "@/lib/tracking";
import { whatsappHref } from "@/lib/whatsapp";

type ContactLinkProps = {
  kind: "whatsapp" | "phone";
  placement: string;
  message?: string;
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
};

export function ContactLink({ kind, placement, message, className, ariaLabel, children }: ContactLinkProps) {
  const { t } = useI18n();
  const href = kind === "phone" ? `tel:${site.phoneTel}` : whatsappHref(message ?? t.whatsappGeneral);
  const ready = kind === "phone" ? Boolean(site.phoneTel) : Boolean(site.whatsapp);

  if (!ready) {
    return (
      <span className={`${className ?? ""} cursor-not-allowed opacity-60`} aria-disabled="true">
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      target={kind === "whatsapp" ? "_blank" : undefined}
      rel={kind === "whatsapp" ? "noopener noreferrer" : undefined}
      onClick={() => {
        const specific: TrackEvent = kind === "phone" ? "PhoneClick" : "WhatsAppClick";
        track("Contact", { placement, channel: kind });
        track(specific, { placement });
      }}
    >
      {children}
    </a>
  );
}
