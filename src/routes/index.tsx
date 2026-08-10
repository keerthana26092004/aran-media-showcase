import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Camera,
  Clock,
  Drone,
  LayoutGrid,
  MapPin,
  PartyPopper,
  Printer,
  Star,
  Users,
} from "lucide-react";

import heroImage from "@/assets/hero-media.jpg";
import printImage from "@/assets/service-print.jpg";
import eventsImage from "@/assets/service-events.jpg";
import videoImage from "@/assets/service-video.jpg";
import { CtaBanner } from "@/components/cta-banner";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { SiteLayout } from "@/components/site-layout";
import { TestimonialCard } from "@/components/testimonial-card";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/data/content";
import { services } from "@/data/services";
import { business, whatsappLink } from "@/data/site";

const heroShowcase = [
  {
    image: printImage,
    icon: Printer,
    label: "Digital Printing",
    accent: "info" as const,
  },
  {
    image: eventsImage,
    icon: PartyPopper,
    label: "Event Management",
    accent: "brand" as const,
  },
  {
    image: videoImage,
    icon: Camera,
    label: "Photography & Videography",
    accent: "gold" as const,
  },
];

const showcaseAccent = {
  info: { ring: "ring-info", badge: "bg-info text-primary-foreground" },
  brand: { ring: "ring-brand", badge: "bg-brand text-brand-foreground" },
  gold: { ring: "ring-gold", badge: "bg-gold text-gold-foreground" },
} as const;



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aran Media & Digital Printing | Harur Photography & Print" },
      {
        name: "description",
        content:
          "Aran Media & Digital Printing in Harur offers digital print, event management, drone photography and videography. Creative solutions for every occasion.",
      },
      { property: "og:title", content: "Aran Media & Digital Printing | Harur" },
      {
        property: "og:description",
        content:
          "One team for printing, events, drone coverage and videography in Harur, Tamil Nadu.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
<section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-navy-light text-primary-foreground">        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <span className="glow-blob animate-float-slow -left-24 -top-24 size-72 bg-brand/30 sm:size-96" />
          <span
            className="glow-blob animate-float-slow right-[-4rem] top-1/3 size-64 bg-gold/25 sm:size-80"
            style={{ animationDelay: "1.5s" }}
          />
          <span
            className="glow-blob animate-float-slow bottom-[-6rem] left-1/3 size-72 bg-info/20 sm:size-96"
            style={{ animationDelay: "3s" }}
          />
        </div>

<div className="container-page relative py-6 md:py-8 lg:py-10">        
<div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-8">          
    <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                {business.name}
              </p>
              <h1 className="text-4xl leading-tight sm:text-5xl lg:text-[3.25rem]">
                <span className="block">Capturing Moments.</span>
                <span className="block">Creating Memories.</span>
                <span className="block text-gradient-brand">Printing Impressions.</span>
              </h1>
              <span aria-hidden="true" className="h-1.5 w-16 rounded-full bg-gradient-brand" />
              <p className="max-w-xl text-lg leading-relaxed text-primary-foreground/80">
                From candid photography to flawless prints, we bring your vision to life with
                creativity, precision and a passion for perfection — right here in Harur.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/quote">
                    Get a Quote
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="onDark">
                  <a
                    href={whatsappLink(`Hello ${business.shortName}, I saw your website.`)}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <WhatsAppIcon aria-hidden="true" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
              
            </div>

            <div className="relative pb-8 pr-4 pt-4">
              <span
                aria-hidden="true"
                className="bg-dot-grid absolute -bottom-2 -right-2 size-32 text-primary-foreground/15 [mask-image:radial-gradient(circle,black,transparent_75%)]"
              />

              <div className="relative rounded-[2rem] rounded-tl-[4.5rem] bg-gradient-spectrum p-[3px] shadow-e4">
                <img
                  src={heroImage}
                  alt="Event stage lit in pink and gold being filmed at dusk with a drone overhead"
                  width={1600}
                  height={1104}
                  className="aspect-[4/3] w-full rounded-[calc(2rem-3px)] rounded-tl-[calc(4.5rem-3px)] object-cover"
                />
              </div>

              <div className="glass-panel animate-float-slow absolute -top-2 right-0 flex size-14 items-center justify-center rounded-full shadow-e3 ring-1 ring-primary-foreground/15 sm:size-16">
                <Drone aria-hidden="true" className="size-7 text-gold" />
                <span className="sr-only">Aerial drone coverage</span>
              </div>

              <ul className="relative z-10 -mt-10 flex justify-center gap-3 px-2 sm:-mt-20 sm:gap-4">
                {heroShowcase.map((item, index) => {
                  const accent = showcaseAccent[item.accent];
                  const tilt = index === 0 ? "-rotate-3" : index === 2 ? "rotate-3" : "rotate-0";
                  return (
                    <li
                      key={item.label}
                      className={`w-28 shrink-0 sm:w-40 lg:w-44 ${
                        index === 1 ? "z-10 scale-110 sm:-translate-y-3" : ""
                      }`}
                    >
                      <div
                        className={`group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-e3 ring-[3px] transition-transform duration-500 hover:-translate-y-2 hover:rotate-0 ${accent.ring} ${tilt}`}
                      >
                        <img
                          src={item.image}
                          alt={item.label}
                          width={600}
                          height={450}
                          loading="lazy"
                          className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <span className="glass-panel absolute inset-x-1.5 bottom-1.5 flex items-center gap-1.5 rounded-full px-2 py-1.5 text-[10px] font-semibold leading-tight text-primary-foreground ring-1 ring-primary-foreground/15 sm:gap-2 sm:px-2.5 sm:text-xs">
                          <span
                            aria-hidden="true"
                            className={`flex size-4 shrink-0 items-center justify-center rounded-full sm:size-5 ${accent.badge}`}
                          >
                            <item.icon className="size-2.5 sm:size-3" />
                          </span>
                          <span>{item.label}</span>
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

         

          <div className="mt-10 flex flex-col gap-8 sm:mt-12 lg:flex-row lg:items-center lg:justify-between">
            
           
          </div>
        </div>
      </section>

      <section aria-labelledby="home-services" className="container-page section-y">
        <Reveal>
          <SectionHeading
            id="home-services"
            eyebrow="What we do"
            title="Our Services"
            description="Four core services, one accountable team. Every project runs through the same review and delivery process."
          />
        </Reveal>
        <ul className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.slug} as="li" delay={index * 80} className="flex">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </ul>
      </section>

      <CtaBanner />

      <section aria-labelledby="home-why" className="bg-surface">
        <div className="container-page section-y">
          <Reveal>
            <SectionHeading
              id="home-why"
              eyebrow="Why Aran Media"
              title="Built on quality, speed and trust"
              description="Clients come back because the process is predictable: clear quotations, approved proofs and delivery on the promised date."
            />
          </Reveal>
         
        </div>
      </section>

      <section aria-labelledby="home-testimonials" className="container-page section-y">
        <Reveal>
          <SectionHeading
            id="home-testimonials"
            eyebrow="Client stories"
            title="What our customers say"
          />
        </Reveal>
        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Reveal key={testimonial.id} as="li" delay={index * 80} className="flex">
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </ul>
        <div className="mt-8 flex justify-center">
          <Button asChild variant="outline">
            <Link to="/testimonials">
              Read all testimonials
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
