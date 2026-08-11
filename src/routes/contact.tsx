import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { PageBanner } from "@/components/page-banner";
import { QuoteForm } from "@/components/quote-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { business, fullAddress, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Aran Media & Digital Printing | Harur" },
      {
        name: "description",
        content:
          "Contact Aran Media & Digital Printing, Bye Pass Road, opp. State Bank of India, Harur, Tamil Nadu 636903. Call +91 82208 98006 or send an enquiry.",
      },
      { property: "og:title", content: "Contact Aran Media & Digital Printing" },
      {
        property: "og:description",
        content: "Address, phone, WhatsApp, map and enquiry form for our Harur studio.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: business.name,
          telephone: business.phoneDisplay,
          email: business.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: business.address.line1,
            addressLocality: "Harur",
            addressRegion: "Tamil Nadu",
            postalCode: "636903",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

const details = [
  { icon: MapPin, label: "Studio address", value: fullAddress, href: business.mapLink },
  { icon: Phone, label: "Phone", value: business.phoneDisplay, href: business.phoneHref },
  { icon: Mail, label: "Email", value: business.email, href: `mailto:${business.email}` },
  { icon: Clock, label: "Working hours", value: business.hours },
];

function ContactPage() {
  return (
    <SiteLayout>
      <PageBanner
        title="Contact Us"
        eyebrow="Contact Us"
        description="Visit the studio on Bye Pass Road, call us, or send an enquiry and we will get back to you the same working day."
      />

      <section aria-labelledby="contact-main" className="relative overflow-hidden bg-surface">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <span className="glow-blob animate-float-slow -left-20 -top-24 size-72 bg-brand/8 sm:size-96" />
          <span
            className="glow-blob animate-float-slow -bottom-24 -right-16 size-64 bg-info/10 sm:size-80"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="container-page relative section-y">
          <Reveal>
            <SectionHeading
              id="contact-main"
              align="left"
              eyebrow="Get in touch"
              title="We are one call away"
            />
          </Reveal>

          <div className="mt-8 grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
            <Reveal className="self-start">
              <QuoteForm
                title="Send us an enquiry"
                description="Share a few details about your requirement and our team will respond with pricing."
              />
            </Reveal>

            <Reveal delay={120} className="flex flex-col gap-6">
              <ul className="flex flex-col gap-4">
                {details.map(({ icon: Icon, label, value, href }) => (
                  <li
                    key={label}
                    className="flex min-w-0 gap-4 rounded-2xl border border-border bg-card p-5 shadow-e1 transition-all duration-300 hover:-translate-y-1 hover:shadow-e2"
                  >
                    <span
                      aria-hidden="true"
                      className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground shadow-e1"
                    >
                      <Icon className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                        {label}
                      </span>
                      {href ? (
                        <a
                          href={href}
                          className="break-words font-medium text-foreground hover:text-brand hover:underline"
                          {...(href.startsWith("http")
                            ? { target: "_blank", rel: "noreferrer noopener" }
                            : {})}
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="block break-words font-medium text-foreground">
                          {value}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <a
                    href={whatsappLink("Hello, I would like to know more about your services.")}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <WhatsAppIcon aria-hidden="true" />
                    Chat on WhatsApp
                  </a>
                </Button>
                <Button asChild variant="navy">
                  <a href={business.phoneHref}>
                    <Phone aria-hidden="true" />
                    Call now
                  </a>
                </Button>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-xl text-foreground">Find us in Harur</h3>
                <div className="overflow-hidden rounded-2xl border border-border shadow-e1 ring-1 ring-border transition-shadow duration-300 hover:shadow-e2">
                  <iframe
                    title={`Google Map showing the location of ${business.name} in Harur`}
                    src={business.mapEmbedSrc}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-72 w-full border-0"
                  />
                </div>
                <a
                  href={business.mapLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm font-semibold text-brand hover:underline"
                >
                  Open directions in Google Maps
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
