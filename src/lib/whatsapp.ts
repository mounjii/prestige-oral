import { site, type OfferId } from "@/config/site";
import type { Copy } from "@/i18n/dictionary";

export function whatsappHref(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type BookingRequest = {
  fullName: string;
  phone: string;
  teeth: OfferId;
  date: string;
};

function displayDate(iso: string) {
  const [year, month, day] = iso.split("-");
  if (!year || !month || !day) return iso;
  return `${day}/${month}/${year}`;
}

export function bookingWhatsappMessage(request: BookingRequest, copy: Copy, teethLabel: string) {
  const labels = copy.booking;
  return [
    labels.hello,
    "",
    `${labels.name}: ${request.fullName.trim()}`,
    `${labels.phone}: ${request.phone.trim()}`,
    `${labels.teeth}: ${teethLabel}`,
    `${labels.date}: ${displayDate(request.date)}`,
    "",
    labels.please,
    "",
    labels.thanks,
  ].join("\n");
}
