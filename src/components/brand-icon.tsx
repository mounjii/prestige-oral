import { siFacebook, siInstagram, siWhatsapp } from "simple-icons";

export function BrandIcon({
  icon,
  className,
}: {
  icon: "whatsapp" | "instagram" | "facebook";
  className?: string;
}) {
  const path = icon === "whatsapp" ? siWhatsapp.path : icon === "instagram" ? siInstagram.path : siFacebook.path;
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" d={path} />
    </svg>
  );
}
