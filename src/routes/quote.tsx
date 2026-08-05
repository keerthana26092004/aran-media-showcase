import { createFileRoute } from "@tanstack/react-router";

import { FeatureList } from "@/components/feature-list";
import { PageBanner } from "@/components/page-banner";
import { QuoteForm } from "@/components/quote-form";
import { SectionHeading } from "@/components/section-heading";
import { SiteLayout } from "@/components/site-layout";
import { services } from "@/data/services";
import { business } from "@/data/site";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Get a Quote | Aran Media & Digital Printing" },
      {
        name: "description",
        content:
          "Request a customised quotation for printing, event management, drone photography or videography from Aran Media in Harur, Tamil Nadu.",
      },
      { property: "og:title", content: "Get a Quote | Aran Media & Digital Printing" },
      {
        property: "og:description",
        content: "Submit your project requirements and receive an itemised quotation.",
      },
    ],
  }),
  component: QuotePage,
});

function QuotePage() {
  return (
    <SiteLayout>
      <PageBanner
        title="Get a Quote"
        eyebrow="Get Quote"
        description="Tell us what you need — quantity, sizes, dates or coverage — and we will send an itemised quotation the same working day."
      />

      <section aria-labelledby="quote-main" className="container-page section-y">
        <SectionHeading
          id="quote-main"
          align="left"
          eyebrow="Quotation request"
          title="Priced around your requirement"
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <QuoteForm
            title="Project details"
            description="The more detail you share, the more accurate your quotation will be."
            showBudget
          />

          <aside className="flex flex-col gap-6" aria-label="What happens next">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="text-xl text-foreground">How it works</h2>
              <ol className="mt-4 flex flex-col gap-4">
                {[
                  "Send your requirement using the form, WhatsApp or a phone call.",
                  "We confirm the scope, sizes and dates — and ask anything that is unclear.",
                  "You receive an itemised quotation with delivery dates.",
                  "On approval we schedule the work and share proofs before production.",
                ].map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-sm font-semibold text-brand-foreground"
                    >
                      {index + 1}
                    </span>
                    <span className="min-w-0 text-base text-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-e1">
              <h2 className="text-xl text-foreground">Services you can quote for</h2>
              <FeatureList
                items={[...services.map((service) => service.name), "Combined event + print package"]}
                className="mt-4 gap-2"
              />
            </div>

            <p className="text-base text-muted-foreground">
              Prefer to talk it through? Call{" "}
              <a href={business.phoneHref} className="font-semibold text-brand hover:underline">
                {business.phoneDisplay}
              </a>{" "}
              during {business.hours.toLowerCase()}.
            </p>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
