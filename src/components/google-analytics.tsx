"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const GA_ID = "G-7NCVY58X4Y";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function GoogleAnalytics() {
  const pathname = usePathname();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded || !window.gtag) return;

    window.gtag("event", "page_view", {
      page_path: pathname + window.location.search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, loaded]);

  return (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      strategy="afterInteractive"
      onLoad={() => {
        window.dataLayer = window.dataLayer || [];

        window.gtag = function (...args: unknown[]) {
          window.dataLayer.push(args);
        };

        window.gtag("js", new Date());

        window.gtag("config", GA_ID, {
          send_page_view: false,
        });

        setLoaded(true);
      }}
    />
  );
}
