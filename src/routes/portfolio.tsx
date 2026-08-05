import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { CtaBanner } from "@/components/cta-banner";
import { MediaGallery } from "@/components/media-gallery";
import { PageBanner } from "@/components/page-banner";
import { SectionHeading } from "@/components/section-heading";
import { SiteLayout } from "@/components/site-layout";
import { portfolioCategories, portfolioItems } from "@/data/portfolio";
import type { ServiceCategory } from "@/data/services";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | Aran Media & Digital Printing" },
      {
        name: "description",
        content:
          "Browse completed printing, event, drone and videography projects delivered by Aran Media & Digital Printing in Harur.",
      },
      { property: "og:title", content: "Portfolio | Aran Media & Digital Printing" },
      {
        property: "og:description",
        content: "Completed projects across printing, events, drone photography and videography.",
      },
    ],
  }),
  component: PortfolioPage,
});

type Filter = ServiceCategory | "all";

function PortfolioPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(
    () => (filter === "all" ? portfolioItems : portfolioItems.filter((i) => i.category === filter)),
    [filter],
  );

  return (
    <SiteLayout>
      <PageBanner
        title="Our Portfolio"
        eyebrow="Portfolio"
        description="A selection of recent work across all four service categories. Filter by category, then select a project to view it larger."
      />

      <section aria-labelledby="portfolio-work" className="container-page section-y">
        <SectionHeading
          id="portfolio-work"
          eyebrow="Selected projects"
          title="Work we are proud of"
        />

        <div
          role="group"
          aria-label="Filter portfolio by category"
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {portfolioCategories.map((category) => {
            const isActive = filter === category.value;
            return (
              <button
                key={category.value}
                type="button"
                aria-pressed={isActive}
                onClick={() => setFilter(category.value)}
                className={
                  isActive
                    ? "rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-e1"
                    : "rounded-full border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-brand hover:text-brand"
                }
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <p aria-live="polite" className="mt-6 text-center text-sm text-muted-foreground">
          Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
        </p>

        <div className="mt-8">
          <MediaGallery
            items={visible.map((item) => ({
              src: item.src,
              alt: item.alt,
              title: item.title,
              caption: `${item.categoryLabel} — ${item.description}`,
            }))}
            emptyMessage="No projects published in this category yet. Contact us and we will share references directly."
          />
        </div>
      </section>

      <CtaBanner
        title="Want work like this for your project?"
        description="Send us your requirement and we will share a package built around it."
      />
    </SiteLayout>
  );
}
