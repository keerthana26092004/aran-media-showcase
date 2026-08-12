import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

import { CtaBanner } from "@/components/cta-banner";
import { PageBanner } from "@/components/page-banner";
import { SectionHeading } from "@/components/section-heading";
import { SiteLayout } from "@/components/site-layout";
import { TestimonialCard } from "@/components/testimonial-card";
import { testimonials } from "@/data/content";

const PAGE_SIZE = 6;

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials | Aran Media & Digital Printing" },
      {
        name: "description",
        content:
          "Read reviews from wedding families, shops, schools and developers who have worked with Aran Media & Digital Printing in Harur.",
      },
      { property: "og:title", content: "Testimonials | Aran Media & Digital Printing" },
      {
        property: "og:description",
        content: "Customer reviews and success stories from Aran Media clients.",
      },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  const average = (
    testimonials.reduce((sum, item) => sum + item.rating, 0) / testimonials.length
  ).toFixed(1);

  const pageCount = Math.ceil(testimonials.length / PAGE_SIZE);
  const [page, setPage] = useState(0);

  const visible = useMemo(
    () => testimonials.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE),
    [page],
  );

  return (
    <SiteLayout>
      <PageBanner
        title="Testimonials"
        eyebrow="Testimonials"
        description={`Averaging ${average} out of 5 across ${testimonials.length} recent reviews from families and businesses in and around Harur.`}
      />

      <section aria-labelledby="testimonials-list" className="container-page section-y">
        <SectionHeading
          id="testimonials-list"
          eyebrow="In their words"
          title="Client experiences"
          description="Every review below comes from a completed project — printing, events, drone coverage or films."
        />

        <ul className="mt-10 grid gap-6 pt-3 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((testimonial) => (
            <li key={testimonial.id} className="flex">
              <TestimonialCard testimonial={testimonial} />
            </li>
          ))}
        </ul>

        {pageCount > 1 ? (
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous reviews"
              disabled={page === 0}
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              className="flex size-11 items-center justify-center rounded-full border border-input bg-background text-foreground transition-all hover:-translate-y-0.5 hover:border-brand hover:text-brand disabled:pointer-events-none disabled:opacity-40"
            >
              <ChevronLeft aria-hidden="true" className="size-5" />
            </button>

            <p className="text-sm font-medium text-muted-foreground">
              Page {page + 1} of {pageCount}
            </p>

            <button
              type="button"
              aria-label="Next reviews"
              disabled={page === pageCount - 1}
              onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
              className="flex size-11 items-center justify-center rounded-full bg-gradient-brand text-brand-foreground shadow-e1 transition-all hover:-translate-y-0.5 hover:shadow-e2 disabled:pointer-events-none disabled:opacity-40"
            >
              <ChevronRight aria-hidden="true" className="size-5" />
            </button>
          </div>
        ) : null}
      </section>

      <div className="pb-16 sm:pb-20 lg:pb-24">
        <CtaBanner
          title="Become our next success story"
          description="Tell us what you need and we will show you exactly how we would deliver it."
        />
      </div>
    </SiteLayout>
  );
}
