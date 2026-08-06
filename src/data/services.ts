import { Camera, Drone, Printer, PartyPopper, Video, type LucideIcon } from "lucide-react";

import printImage from "@/assets/service-print.jpg";
import eventsImage from "@/assets/service-events.jpg";
import droneImage from "@/assets/service-drone.jpg";
import videoImage from "@/assets/service-video.jpg";
import celebrationImage from "@/assets/gallery-celebration.jpg";

export type ServiceCategory = "printing" | "events" | "drone" | "videography";

export interface Service {
  slug: ServiceCategory;
  name: string;
  short: string;
  intro: string;
  features: string[];
  highlights: string[];
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  accentClass: string;
  /** Brand accent key from the Aran poster: print=blue, events=pink, drone=green, video=violet. */
  accent: "info" | "brand" | "leaf" | "violet";
  gallery: { src: string; alt: string }[];
}

export const services: Service[] = [
  {
    slug: "printing",
    name: "Digital Print Service",
    short:
      "Banners, flex, backdrops, offset jobs and everyday stationery printed with vibrant colour and a premium finish.",
    intro:
      "From a single visiting card to a full shop-front flex board, our in-house digital and offset presses deliver sharp, colour-accurate printing with a turnaround measured in hours rather than days.",
    features: [
      "High quality digital printing",
      "Banners, flex and backdrops",
      "Offset printing",
      "Visiting cards, brochures and pamphlets",
      "Fast turnaround",
      "Vibrant colours and premium finish",
    ],
    highlights: [
      "Colour-calibrated proofs before every large print run",
      "Weather-resistant inks for outdoor flex and hoardings",
      "Design support if you do not have print-ready artwork",
    ],
    image: printImage,
    imageAlt: "Large-format press producing vivid printed banners beside stacks of brochures",
    icon: Printer,
    accentClass: "bg-info text-primary-foreground",
    accent: "info",
    gallery: [
      { src: printImage, alt: "Colourful banner rolling off a large-format printer" },
      { src: celebrationImage, alt: "Printed backdrop and decor set up for a celebration" },
    ],
  },
  {
    slug: "events",
    name: "Event Management",
    short:
      "Weddings, baby showers, birthdays and ceremonies planned, decorated and covered end to end.",
    intro:
      "We handle the decor, the stage, the coverage and the timeline so your family can stay with the guests. One coordinator owns your event from the first sketch to the final handover of albums.",
    features: [
      "Wedding functions",
      "Baby shower (Punch)",
      "Birthday functions",
      "New born baby shoot",
      "Puberty ceremony",
      "Customized decor",
      "Complete event planning",
    ],
    highlights: [
      "Site visit and decor mock-up before confirmation",
      "Dedicated coordinator on the day of the function",
      "Photo, video and print requirements handled by one team",
    ],
    image: eventsImage,
    imageAlt: "Wedding reception stage decorated with floral arches and warm lighting",
    icon: PartyPopper,
    accentClass: "bg-brand text-brand-foreground",
    accent: "brand",
    gallery: [
      { src: eventsImage, alt: "Couple on a floral wedding reception stage" },
      { src: celebrationImage, alt: "Pastel baby shower decor with balloon arch and floral setup" },
    ],
  },
  {
    slug: "drone",
    name: "Drone Photography",
    short:
      "Licensed aerial photography and video for events, real estate, institutions and landscapes.",
    intro:
      "Aerial coverage changes how a venue, a property or a procession reads on screen. Our pilots plan every flight around your location and deliver high-resolution stills alongside stabilised 4K footage.",
    features: [
      "Aerial photography",
      "Stunning landscape shots",
      "Real estate photography",
      "Event aerial coverage",
      "High resolution images",
      "Creative angles",
    ],
    highlights: [
      "4K stabilised aerial video with colour grading",
      "Top-down and reveal shots planned with your venue",
      "Safe, permission-aware flying in crowded venues",
    ],
    image: droneImage,
    imageAlt: "Aerial view of a South Indian town, temple and river at golden hour",
    icon: Drone,
    accentClass: "bg-leaf text-primary-foreground",
    accent: "leaf",
    gallery: [
      { src: droneImage, alt: "Golden hour aerial shot of a temple town beside a river" },
      { src: eventsImage, alt: "Event venue captured from above during a function" },
    ],
  },
  {
    slug: "videography",
    name: "Videography",
    short:
      "Wedding films, cinematic teasers, promotional videos and documentaries with professional editing.",
    intro:
      "Multi-camera coverage, clean audio and an edit that keeps the story moving. We shoot weddings, corporate launches, campaign coverage and institutional films.",
    features: [
      "Wedding videography",
      "Event coverage",
      "Promotional videos",
      "Cinematic teasers",
      "Documentary films",
      "Professional editing",
    ],
    highlights: [
      "Multi-camera setups with wireless audio capture",
      "Teaser delivered within a week of the function",
      "Deliverables sized for TV, YouTube and Instagram",
    ],
    image: videoImage,
    imageAlt: "Videographer filming a couple with a cinema camera on a gimbal",
    icon: Video,
    accentClass: "bg-violet text-primary-foreground",
    accent: "violet",
    gallery: [
      { src: videoImage, alt: "Cinema camera on a gimbal filming a wedding couple" },
      { src: eventsImage, alt: "Reception stage being filmed during an event" },
    ],
  },
];

export const serviceIcons = { Camera };

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
