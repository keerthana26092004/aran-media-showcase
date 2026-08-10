import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { CtaBanner } from "@/components/cta-banner";
import { FeatureList } from "@/components/feature-list";
import { MediaGallery } from "@/components/media-gallery";
import { PageBanner } from "@/components/page-banner";
import { SectionHeading } from "@/components/section-heading";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { getService, services } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { name: service.name, short: service.short };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service unavailable | Aran Media" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.name} | Aran Media & Digital Printing`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.short },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.short },
      ],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServiceDetailPage,
});

function ServiceNotFound() {
  return (
    <SiteLayout>
      <PageBanner
        title="Service not found"
        eyebrow="Services"
        description="The service you were looking for does not exist. Browse our four service categories instead."
      />
      <section className="container-page section-y">
        <Button asChild>
          <Link to="/services">
            View all services
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </section>
    </SiteLayout>
  );
}

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const service = getService(slug);

  if (!service) return <ServiceNotFound />;

  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <SiteLayout>
      <PageBanner title={service.name} eyebrow={service.name} description={service.intro}>
        <Button asChild>
          <Link to="/quote">Get a quote for {service.name}</Link>
        </Button>
      </PageBanner>

      <section aria-labelledby="service-features" className="container-page section-y">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col gap-6">
            <SectionHeading
              id="service-features"
              align="left"
              eyebrow="What's included"
              title={`${service.name} features`}
            />
            <FeatureList items={service.features} columns={2} />
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-lg text-foreground">Why clients choose this package</h3>
              <FeatureList items={service.highlights} className="mt-4 gap-2" />
            </div>
          </div>
          <img
            src={service.image}
            alt={service.imageAlt}
            width={1200}
            height={800}
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-e2"
          />
        </div>
      </section>

      <section aria-labelledby="service-samples" className="bg-surface">
        <div className="container-page section-y">
          <SectionHeading
            id="service-samples"
            eyebrow="Sample work"
            title={`Recent ${service.name.toLowerCase()} work`}
            description="Select any image to open a larger view."
          />
          <div className="mt-10">
            <MediaGallery
              items={service.gallery.map((item) => ({
                ...item,
                title: service.name,
                caption: item.alt,
              }))}
              emptyMessage="Samples for this service are being photographed. Contact us for references in the meantime."
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="service-others" className="container-page section-y">
        <SectionHeading id="service-others" eyebrow="Also available" title="Other services" />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.slug} className="flex">
                <article className="flex w-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-e1">
                  <span
                    aria-hidden="true"
                    className={`flex size-11 items-center justify-center rounded-xl ${item.accentClass}`}
                  >
                    <Icon className="size-6" />
                  </span>
                  <h3 className="text-lg text-foreground">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.short}</p>
                  <Button asChild variant="link" className="mt-auto justify-start px-0">
                    <Link to="/services/$slug" params={{ slug: item.slug }}>
                      Explore {item.name}
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  </Button>
                </article>
              </li>
            );
          })}
        </ul>
      </section>

      <div className="pb-16 sm:pb-20 lg:pb-24">
        <CtaBanner primaryLabel={`Request ${service.name} pricing`} />
      </div>
    </SiteLayout>
  );
}
