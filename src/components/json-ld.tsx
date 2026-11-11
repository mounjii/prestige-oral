import { site } from "@/config/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: site.name,
    url: site.url,
    image: `${site.url}/images/hero-smile.jpg`,
    ...(site.phoneTel ? { telephone: site.phoneTel } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: "622 Avenue Moulay Ali Chrif",
      addressLocality: "Témara",
      addressCountry: "MA",
    },
    areaServed: "Témara",
    availableLanguage: ["ar"],
    priceRange: "2000-2300 MAD",
    makesOffer: site.offers.map((offer) => ({
      "@type": "Offer",
      name: `فينير مركب، ${offer.teeth}`,
      price: offer.amount,
      priceCurrency: "MAD",
      availability: "https://schema.org/InStock",
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
