"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-7NCVY58X4Y";
const GA_ID_PATTERN = /^G-[A-Z0-9]+$/;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function GoogleAnalytics() {
  const pathname = usePathname();
  const enabled = GA_ID_PATTERN.test(GA_ID);

  useEffect(() => {
    if (!enabled) return;
    const pagePath = `${pathname}${window.location.search}`;
    let cancelled = false;
    let attempts = 0;

    function sendPageView() {
      if (cancelled) return;
      if (typeof window.gtag !== "function") {
        if (attempts < 100) {
          attempts += 1;
          window.setTimeout(sendPageView, 50);
        }
        return;
      }
      window.gtag("event", "page_view", {
        page_path: pagePath,
        page_location: window.location.href,
        page_title: document.title,
      });
    }

    sendPageView();
    return () => {
      cancelled = true;
    };
  }, [enabled, pathname]);

  if (!enabled) return null;

  return (
    <>
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { send_page_view: false });
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
    </>
  );
}
