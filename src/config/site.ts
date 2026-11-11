export type OfferId = "16" | "20";
export type ShadeId = "A1" | "B1" | "BL2" | "BL3";

export type Offer = {
  id: OfferId;
  teeth: string;
  price: string;
  amount: string;
  image: string;
  alt: string;
};

const phoneDisplay = process.env.NEXT_PUBLIC_PHONE_DISPLAY || "07 77 87 26 73";
const phoneTel = process.env.NEXT_PUBLIC_PHONE_TEL || "+212777872673";
const whatsapp = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "212777872673").replace(/\D/g, "");

export const site = {
  name: "Prestige Oral",
  city: "تمارة",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  phoneDisplay,
  phoneTel,
  whatsapp,
  pixelId: (process.env.NEXT_PUBLIC_META_PIXEL_ID || "").replace(/\D/g, ""),
  addressAr: "622 شارع مولاي علي الشريف، تمارة، المغرب",
  addressEn: "622 Avenue Moulay Ali Chrif, Témara, Morocco",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=622+Avenue+Moulay+Ali+Chrif+Temara",
  mapsEmbed: "https://maps.google.com/maps?q=622%20Avenue%20Moulay%20Ali%20Chrif%20Temara&hl=ar&z=16&output=embed",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/prestige_oral/",
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com/share/1GgmiXVYhE/",
  hoursNote: "أوقات العمل ستُضاف بعد تأكيدها من العيادة.",
  offers: [
    {
      id: "16",
      teeth: "16 سناً",
      price: "2,000",
      amount: "2000",
      image: "/images/smile-sixteen.jpg",
      alt: "صورة ابتسامة لإطلالة عرض 16 سناً",
    },
    {
      id: "20",
      teeth: "20 سناً",
      price: "2,300",
      amount: "2300",
      image: "/images/smile-twenty.jpg",
      alt: "صورة ابتسامة لإطلالة عرض 20 سناً",
    },
  ] satisfies Offer[],
  shades: [
    { id: "A1", color: "#E7E7E6" },
    { id: "B1", color: "#F3F3F2" },
    { id: "BL2", color: "#F8F8F8" },
    { id: "BL3", color: "#FFFFFF" },
  ] satisfies { id: ShadeId; color: string }[],
  disclaimer: "يتم تحديد العلاج المناسب وعدد الأسنان بعد استشارة الطبيب وتقييم الحالة.",
  shadeDisclaimer: "الدرجة النهائية تعتمد على تقييم الطبيب وتوصيته، واختيارك هنا ليس ضماناً للنتيجة.",
} as const;

export const navItems = [
  { href: "#top", label: "الرئيسية" },
  { href: "#offer", label: "العرض" },
  { href: "#why", label: "المميزات" },
  { href: "#results", label: "النتائج" },
  { href: "#location", label: "موقعنا" },
] as const;

export function offerById(id: OfferId) {
  return site.offers.find((offer) => offer.id === id) ?? site.offers[0];
}
