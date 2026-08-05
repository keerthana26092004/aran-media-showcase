import { createFileRoute } from "@tanstack/react-router";

import { CtaBanner } from "@/components/cta-banner";
import { PageBanner } from "@/components/page-banner";
import { SectionHeading } from "@/components/section-heading";
import { SiteLayout } from "@/components/site-layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/content";
import { business, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Aran Media & Digital Printing" },
      {
        name: "description",
        content:
          "Answers about pricing, print turnaround, photo and video delivery, bookings, travel and payment terms at Aran Media & Digital Printing.",
      },
      { property: "og:title", content: "Frequently Asked Questions | Aran Media" },
      {
        property: "og:description",
        content: "Common questions about our services, pricing, timelines and booking process.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <SiteLayout>
      <PageBanner
        title="Frequently Asked Questions"
        eyebrow="FAQ"
        description="Pricing, timelines, booking and delivery — the questions customers ask us most often."
      />

      <section aria-labelledby="faq-list" className="container-page section-y">
        <SectionHeading id="faq-list" eyebrow="Good to know" title="Before you book" />
        <div className="mx-auto mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="rounded-2xl border border-border bg-card px-5 shadow-e1"
              >
                <AccordionTrigger className="py-5 text-left font-display text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="mt-8 rounded-2xl border border-border bg-surface p-6 text-base text-foreground">
            Still have a question? Call{" "}
            <a href={business.phoneHref} className="font-semibold text-brand hover:underline">
              {business.phoneDisplay}
            </a>{" "}
            or{" "}
            <a
              href={whatsappLink("Hello, I have a question about your services.")}
              target="_blank"
              rel="noreferrer noopener"
              className="font-semibold text-brand hover:underline"
            >
              message us on WhatsApp
            </a>
            .
          </p>
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
