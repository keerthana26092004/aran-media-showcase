import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";

import heroImage from "@/assets/hero-media.jpg";
import celebrationImage from "@/assets/gallery-celebration.jpg";
import printImage from "@/assets/service-print.jpg";
import { CtaBanner } from "@/components/cta-banner";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { SiteLayout } from "@/components/site-layout";
import { TestimonialCard } from "@/components/testimonial-card";
import { TrustStrip, heroTrustPoints } from "@/components/trust-strip";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/data/content";
import { services } from "@/data/services";
import { business, whatsappLink } from "@/data/site";

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
<section className="flex h-[calc(100vh-69px)] items-center overflow-hidden bg-gradient-navy-light text-primary-foreground sm:h-[calc(100vh-81px)]">
  <div className="container-page grid h-full gap-8 py-6 md:py-8 lg:grid-cols-2 lg:items-center lg:gap-10 lg:py-8">          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              {business.name}
            </p>
<h1 className="text-4xl sm:text-5xl lg:text-[3rem] leading-tight">              Creative Solutions For{" "}
              <span className="text-gradient-brand">Every Occasion</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-primary-foreground/80">
              Photography, videography, drone coverage, event management and high-quality digital
              printing — delivered by one team in Harur, so you never have to coordinate between
              vendors again.
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
                  <MessageCircle aria-hidden="true" />
                  WhatsApp
                </a>
              </Button>
            </div>
<ul className="grid gap-2 pt-1 sm:grid-cols-2">              {heroTrustPoints.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex min-w-0 items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/10 text-gold"
                  >
                    <Icon className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold text-primary-foreground">{title}</span>
                    <span className="block text-sm text-primary-foreground/70">{description}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <img
              src={heroImage}
              alt="Event stage lit in pink and gold being filmed at dusk with a drone overhead"
              width={1600}
              height={1104}
className="w-full max-h-[420px] rounded-3xl object-cover shadow-e3 sm:col-span-2"            />
            <img
              src={printImage}
              alt="Colourful banners printed on a large-format press"
              width={1200}
              height={800}
              loading="lazy"
              className="h-48 w-full rounded-2xl object-cover shadow-e2"
            />
            <img
              src={celebrationImage}
              alt="Pastel baby shower decor with a balloon and floral arch"
              width={1200}
              height={800}
              loading="lazy"
              className="h-48 w-full rounded-2xl object-cover shadow-e2"
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="home-services" className="container-page section-y">
        <SectionHeading
          id="home-services"
          eyebrow="What we do"
          title="Our Services"
          description="Four core services, one accountable team. Every project runs through the same review and delivery process."
        />
        <ul className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <li key={service.slug} className="flex">
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
      </section>

      <CtaBanner />

      <section aria-labelledby="home-why" className="bg-surface">
        <div className="container-page section-y">
          <SectionHeading
            id="home-why"
            eyebrow="Why Aran Media"
            title="Built on quality, speed and trust"
            description="Clients come back because the process is predictable: clear quotations, approved proofs and delivery on the promised date."
          />
          <div className="mt-10">
            <TrustStrip />
          </div>
        </div>
      </section>

      <section aria-labelledby="home-testimonials" className="container-page section-y">
        <SectionHeading
          id="home-testimonials"
          eyebrow="Client stories"
          title="What our customers say"
        />
        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial) => (
            <li key={testimonial.id} className="flex">
              <TestimonialCard testimonial={testimonial} />
            </li>
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
