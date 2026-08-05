import { createFileRoute } from "@tanstack/react-router";

import { CtaBanner } from "@/components/cta-banner";
import { PageBanner } from "@/components/page-banner";
import { SectionHeading } from "@/components/section-heading";
import { SiteLayout } from "@/components/site-layout";
import { TestimonialCard } from "@/components/testimonial-card";
import { testimonials } from "@/data/content";

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
        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id} className="flex">
              <TestimonialCard testimonial={testimonial} />
            </li>
          ))}
        </ul>
      </section>

      <CtaBanner
        title="Become our next success story"
        description="Tell us what you need and we will show you exactly how we would deliver it."
      />
    </SiteLayout>
  );
}
