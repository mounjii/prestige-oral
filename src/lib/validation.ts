import type { OfferId, ShadeId } from "@/config/site";

export type AppointmentInput = {
  fullName: string;
  phone: string;
  teeth: OfferId | "";
  shade: ShadeId | "";
  date: string;
};

export type FieldErrors = Partial<Record<"fullName" | "phone" | "teeth" | "date", string>>;

const moroccanPhone = /^(?:(?:\+|00)212|0)[5-7]\d{8}$/;

export function todayIso() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

export function validateAppointment(
  input: AppointmentInput,
  messages: { name: string; phone: string; teeth: string; date: string; datePast: string },
  today = todayIso(),
): FieldErrors {
  const errors: FieldErrors = {};
  if (input.fullName.trim().length < 3) errors.fullName = messages.name;
  const phone = input.phone.replace(/[\s-]/g, "");
  if (!moroccanPhone.test(phone)) errors.phone = messages.phone;
  if (input.teeth !== "16" && input.teeth !== "20") errors.teeth = messages.teeth;
  if (!input.date) errors.date = messages.date;
  else if (input.date < today) errors.date = messages.datePast;
  return errors;
}
