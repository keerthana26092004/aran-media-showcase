/** Single source of truth for business details and navigation. */

export const business = {
  name: "Aran Media & Digital Printing",
  shortName: "Aran Elan",
  tagline: "Creative Solutions For Every Occasion",
  address: {
    line1: "Bye Pass Road, opp. State Bank of India",
    line2: "Varnathirutha, Harur",
    region: "Tamil Nadu 636903",
    country: "India",
  },
  phoneDisplay: "+91 82208 98006",
  phoneHref: "tel:+918220898006",
  whatsappNumber: "918220898006",
  email: "aranmediaharur@gmail.com",
  hours: "Monday – Saturday, 9:00 AM – 8:00 PM",
  mapEmbedSrc:
    "https://www.google.com/maps?q=State%20Bank%20of%20India%2C%20Bye%20Pass%20Road%2C%20Harur%2C%20Tamil%20Nadu%20636903&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Bye+Pass+Road+opp+State+Bank+of+India+Varnathirutha+Harur+Tamil+Nadu+636903",
  social: [
    { label: "Facebook", href: "https://www.facebook.com/", icon: "facebook" },
    { label: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
    { label: "YouTube", href: "https://www.youtube.com/", icon: "youtube" },
  ],
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const fullAddress = [
  business.address.line1,
  business.address.line2,
  business.address.region,
].join(", ");

export const mainNav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Gallery", to: "/gallery" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact Us", to: "/contact" },
] as const;
