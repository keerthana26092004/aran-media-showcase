import { createFileRoute } from "@tanstack/react-router";

import { CtaBanner } from "@/components/cta-banner";
import { PageBanner } from "@/components/page-banner";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { SiteLayout } from "@/components/site-layout";
import { services } from "@/data/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Services | Aran Media & Digital Printing" },
      {
        name: "description",
        content:
          "Digital print service, event management, drone photography and videography from Aran Media & Digital Printing in Harur, Tamil Nadu.",
      },
      { property: "og:title", content: "Our Services | Aran Media & Digital Printing" },
      {
        property: "og:description",
        content: "Explore printing, event management, drone photography and videography packages.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageBanner
        title="Our Services"
        eyebrow="Services"
        description="Media services and digital printing services, grouped into four categories. Choose a category to see the full feature list and sample work."
      />

      <section aria-labelledby="services-media" className="container-page section-y">
        <SectionHeading
          id="services-media"
          eyebrow="Media & print"
          title="Everything we offer"
          description="Combine any of these services in a single booking — pricing is quoted as one package."
        />
        <ul className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <li key={service.slug} className="flex">
              <ServiceCard service={service} featureCount={5} />
            </li>
          ))}
        </ul>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
