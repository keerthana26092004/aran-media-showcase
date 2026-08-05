export interface Testimonial {
  id: string;
  name: string;
  role: string;
  initials: string;
  rating: number;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "kavitha",
    name: "Kavitha R.",
    role: "Wedding client, Harur",
    initials: "KR",
    rating: 5,
    quote:
      "They handled our decor, photography and the drone coverage together, so we never had to chase three different vendors. The teaser reached us within a week.",
  },
  {
    id: "murugan",
    name: "Murugan S.",
    role: "Owner, textile showroom",
    initials: "MS",
    rating: 5,
    quote:
      "I needed twelve flex boards before a weekend sale. Artwork was corrected the same evening and everything was installed a day early.",
  },
  {
    id: "priya",
    name: "Priya Lakshmi",
    role: "Correspondent, matriculation school",
    initials: "PL",
    rating: 5,
    quote:
      "Annual day coverage, stage backdrop and 600 certificates came from one team. The colour on the printed backdrop matched our brochure exactly.",
  },
  {
    id: "arun",
    name: "Arun Kumar",
    role: "Real estate developer",
    initials: "AK",
    rating: 5,
    quote:
      "The aerial shots of our layout sold plots better than any floor plan. Clear communication and honest pricing throughout.",
  },
  {
    id: "devi",
    name: "Devi Shankar",
    role: "Baby shower client",
    initials: "DS",
    rating: 5,
    quote:
      "The decor matched the reference we shared, and the candid photographs of my daughter are framed at home now. Very patient team.",
  },
  {
    id: "raja",
    name: "Raja Vel",
    role: "Campaign coordinator",
    initials: "RV",
    rating: 4,
    quote:
      "Large print volumes at short notice during campaign season, delivered on schedule every single time.",
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    id: "services",
    question: "What services does Aran Media offer?",
    answer:
      "Digital and offset printing, event management and decor, drone photography and videography. Most clients combine two or more of these under a single booking.",
  },
  {
    id: "pricing",
    question: "How is pricing decided?",
    answer:
      "Printing is quoted per square foot or per unit depending on the material, while media and event work is quoted per package after we understand the venue, duration and deliverables. Share your requirement and you will receive an itemised quotation.",
  },
  {
    id: "turnaround",
    question: "How quickly can printing be delivered?",
    answer:
      "Visiting cards, pamphlets and small banners are typically ready within 24 to 48 hours. Large flex boards, offset runs and installations are scheduled once artwork is approved.",
  },
  {
    id: "delivery-media",
    question: "When will we receive photos and videos?",
    answer:
      "Edited photographs are delivered in two to three weeks. A cinematic teaser usually reaches you within a week of the function, with the full film following the photo delivery.",
  },
  {
    id: "booking",
    question: "How far in advance should we book an event?",
    answer:
      "For wedding season dates we recommend three to four weeks. Smaller functions and shoots can often be accommodated within a few days, subject to team availability.",
  },
  {
    id: "travel",
    question: "Do you travel outside Harur?",
    answer:
      "Yes. We regularly cover events across Dharmapuri, Salem, Tiruppattur and surrounding districts. Travel and stay are added transparently to the quotation.",
  },
  {
    id: "artwork",
    question: "We do not have print-ready artwork. Can you design it?",
    answer:
      "Yes. Our design team can create artwork from scratch or adapt what you already have, and you will see a proof before anything goes to print.",
  },
  {
    id: "payment",
    question: "What are the payment terms?",
    answer:
      "An advance confirms the booking or the print run, with the balance due on delivery. UPI, bank transfer and cash are accepted, and a GST invoice is issued on request.",
  },
];
