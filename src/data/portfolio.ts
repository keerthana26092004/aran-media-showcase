import printImage from "@/assets/service-print.jpg";
import eventsImage from "@/assets/service-events.jpg";
import droneImage from "@/assets/service-drone.jpg";
import videoImage from "@/assets/service-video.jpg";
import celebrationImage from "@/assets/gallery-celebration.jpg";
import heroImage from "@/assets/hero-media.jpg";

import type { ServiceCategory } from "./services";

export interface PortfolioItem {
  id: string;
  title: string;
  category: ServiceCategory;
  categoryLabel: string;
  description: string;
  src: string;
  alt: string;
}

export const portfolioCategories: { value: ServiceCategory | "all"; label: string }[] = [
  { value: "all", label: "All Work" },
  { value: "printing", label: "Printing" },
  { value: "events", label: "Events" },
  { value: "drone", label: "Drone" },
  { value: "videography", label: "Videography" },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "retail-flex-campaign",
    title: "Retail Flex & Banner Campaign",
    category: "printing",
    categoryLabel: "Printing",
    description: "Season sale banners, flex boards and posters for a Harur retail chain.",
    src: printImage,
    alt: "Vivid retail sale banners printed on a large-format press",
  },
  {
    id: "corporate-stationery",
    title: "Corporate Stationery Set",
    category: "printing",
    categoryLabel: "Printing",
    description: "Visiting cards, brochures and folders printed with a matte laminate finish.",
    src: printImage,
    alt: "Stacks of printed brochures, flyers and visiting cards on a counter",
  },
  {
    id: "wedding-reception",
    title: "Wedding Reception Decor",
    category: "events",
    categoryLabel: "Events",
    description: "Floral stage design, lighting and full-day media coverage for a family wedding.",
    src: eventsImage,
    alt: "Wedding couple on a floral reception stage with warm lighting",
  },
  {
    id: "baby-shower",
    title: "Baby Shower Celebration",
    category: "events",
    categoryLabel: "Events",
    description: "Pastel decor, balloon arch and candid photography for a punch function.",
    src: celebrationImage,
    alt: "Pastel baby shower hall with balloon arch and floral backdrop",
  },
  {
    id: "temple-town-aerials",
    title: "Temple Town Aerial Series",
    category: "drone",
    categoryLabel: "Drone",
    description: "Golden-hour aerial stills commissioned for a tourism print campaign.",
    src: droneImage,
    alt: "Aerial photograph of a temple town beside a river at sunset",
  },
  {
    id: "real-estate-aerials",
    title: "Real Estate Aerial Survey",
    category: "drone",
    categoryLabel: "Drone",
    description: "Plot boundary and approach-road aerials for a layout launch brochure.",
    src: droneImage,
    alt: "High altitude aerial view of a residential layout and fields",
  },
  {
    id: "wedding-film",
    title: "Cinematic Wedding Film",
    category: "videography",
    categoryLabel: "Videography",
    description: "Three-camera coverage cut into a teaser, highlight film and full ceremony edit.",
    src: videoImage,
    alt: "Videographer filming a wedding couple with a gimbal-mounted camera",
  },
  {
    id: "brand-promo",
    title: "Showroom Promo Video",
    category: "videography",
    categoryLabel: "Videography",
    description: "Thirty-second promotional spot produced for social media and in-store screens.",
    src: heroImage,
    alt: "Event stage lit in pink and gold being filmed at night",
  },
];

export const galleryItems = [
  { src: heroImage, alt: "Event stage lit in pink and gold with a drone overhead at dusk" },
  { src: eventsImage, alt: "Wedding reception stage with floral arches and guests" },
  { src: celebrationImage, alt: "Baby shower decor with balloons and a floral arch" },
  { src: droneImage, alt: "Aerial view of a temple town and river at golden hour" },
  { src: videoImage, alt: "Cinema camera filming a couple against bokeh lights" },
  { src: printImage, alt: "Colourful banners and printed collateral in the print shop" },
];
