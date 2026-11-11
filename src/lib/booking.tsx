"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { OfferId, ShadeId } from "@/config/site";

type BookingValue = {
  teeth: OfferId | "";
  shade: ShadeId | "";
  formActive: boolean;
  setTeeth: (teeth: OfferId | "") => void;
  setShade: (shade: ShadeId | "") => void;
  setFormActive: (active: boolean) => void;
};

const BookingContext = createContext<BookingValue | null>(null);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [teeth, setTeeth] = useState<OfferId | "">("");
  const [shade, setShade] = useState<ShadeId | "">("");
  const [formActive, setFormActive] = useState(false);
  const value = useMemo(
    () => ({ teeth, shade, formActive, setTeeth, setShade, setFormActive }),
    [teeth, shade, formActive],
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const value = useContext(BookingContext);
  if (!value) throw new Error("useBooking must be used within BookingProvider");
  return value;
}
