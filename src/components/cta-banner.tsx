import { Link } from "@tanstack/react-router";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { business, whatsappLink } from "@/data/site";

import eventsImage from "@/assets/service-events.jpg";
import droneImage from "@/assets/service-drone.jpg";
import ctaBg from "@/assets/cta-bg.jpg";
import printImage from "@/assets/service-print.jpg";
import videoImage from "@/assets/service-video.jpg";
import celebrationImage from "@/assets/gallery-celebration.jpg";
import heroImage from "@/assets/hero-media.jpg";

interface CtaBannerProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
}

/** Conversion banner placed near the bottom of every page. */
export function CtaBanner({
  title = "Have a project in mind?",
  description = "Tell us about your event, print job or shoot and we will send an itemised quotation the same working day.",
  primaryLabel = "Get a free quote",
}: CtaBannerProps) {
  return (
    <section className="container-page py-14 md:py-20">
      <Reveal className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-2 -z-10 hidden rounded-[3rem] bg-gradient-brand opacity-15 blur-2xl sm:block"
        />

        <div
          className="relative grid gap-6 overflow-hidden rounded-[2.5rem] px-6 py-10 shadow-e4 sm:px-10 sm:py-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-3 lg:overflow-visible h-85"
          style={{
            backgroundImage: `url(${ctaBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
          }}
        >
          {/* Content */}
          <div className="relative z-10 flex flex-col gap-5 lg:py-8">
            <h2 className="text-2xl text-foreground sm:text-3xl lg:text-4xl text-white">{title}</h2>

            <p className="max-w-md text-base text-muted-foreground sm:text-lg text-white">
              {description}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="whitespace-normal text-center shadow-glow-brand sm:whitespace-nowrap"
              >
                <Link to="/quote">{primaryLabel}</Link>
              </Button>

              <Button asChild variant="outline">
                <a href={whatsappLink(`Hello ${business.shortName}, I would like a quotation.`)}>
                  <WhatsAppIcon aria-hidden="true" />
                  WhatsApp us
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile / Tablet */}
          <div className="relative grid grid-cols-3 gap-1.5 lg:hidden">
            <div className="overflow-hidden rounded-xl border-4 border-white bg-white shadow-e3">
              <img
                src={eventsImage}
                alt="Wedding reception stage decorated with floral arches"
                width={480}
                height={480}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-xl border-4 border-white bg-white shadow-e3">
              <img
                src={droneImage}
                alt="Aerial view of a temple town and river at golden hour"
                width={480}
                height={480}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-xl border-4 border-white bg-white p-3 shadow-e3">
              <img
                src="/Aran%20media%20logo.png"
                alt={`${business.name} logo`}
                width={1024}
                height={411}
                loading="lazy"
                className="aspect-square w-full object-contain"
              />
            </div>
          </div>

          {/* Desktop collage */}
          <div className="relative hidden lg:block lg:min-h-[18rem]">
            {/* Image 1 */}
            <div className="absolute left-10 top-1/2 w-36 -translate-y-1/2 -rotate-6 overflow-hidden rounded-xl border-4 border-white bg-white shadow-e3 transition-transform duration-500 hover:rotate-0 xl:left-14 xl:w-40">
              <img
                src={eventsImage}
                alt="Wedding reception stage decorated with floral arches"
                width={480}
                height={480}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="absolute left-[40%] top-1/2 w-36 -translate-y-1/2 rotate-3 overflow-hidden rounded-xl border-4 border-white bg-white shadow-e3 transition-transform duration-500 hover:rotate-0 xl:w-40">
              <img
                src={droneImage}
                alt="Aerial view of a temple town and river at golden hour"
                width={480}
                height={480}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </div>

            {/* Logo */}
            <div className="absolute right-8 top-1/2 w-32 -translate-y-1/2 rotate-6 overflow-hidden rounded-xl border-4 border-white bg-white p-3 shadow-e3 transition-transform duration-500 hover:rotate-0 xl:right-12 xl:w-36">
              <img
                src="/Aran%20media%20logo.png"
                alt={`${business.name} logo`}
                width={1024}
                height={411}
                loading="lazy"
                className="aspect-square w-full object-contain"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
