"use client";

import { useEffect } from "react";
import { track } from "@/lib/tracking";

export function ViewTracker() {
  useEffect(() => {
    track("ViewContent", { content: "landing" });
  }, []);

  return null;
}
