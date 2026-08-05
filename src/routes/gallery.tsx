import { createFileRoute } from "@tanstack/react-router";

import { CtaBanner } from "@/components/cta-banner";
import { MediaGallery } from "@/components/media-gallery";
import { PageBanner } from "@/components/page-banner";
import { SectionHeading } from "@/components/section-heading";
import { SiteLayout } from "@/components/site-layout";
import { galleryItems } from "@/data/portfolio";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Aran Media & Digital Printing" },
      {
        name: "description",
        content:
          "Photo and video gallery from recent Aran Media projects and events in Harur and across Dharmapuri district.",
      },
      { property: "og:title", content: "Gallery | Aran Media & Digital Printing" },
      {
        property: "og:description",
        content: "High-quality photos and videos from recent Aran Media projects and events.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <SiteLayout>
      <PageBanner
        title="Gallery"
        eyebrow="Gallery"
        description="A wider visual record of the events, shoots and print jobs we have delivered recently."
      />

      <section aria-labelledby="gallery-grid" className="container-page section-y">
        <SectionHeading
          id="gallery-grid"
          eyebrow="Recent frames"
          title="From our latest projects"
          description="Select any frame to open it in a larger view."
        />
        <div className="mt-10">
          <MediaGallery
            items={galleryItems.map((item, index) => ({
              ...item,
              title: `Frame ${index + 1}`,
              caption: item.alt,
            }))}
            emptyMessage="Our gallery is being updated with fresh work. Please check back soon."
          />
        </div>
      </section>

      <CtaBanner
        title="Ready to create your own gallery?"
        description="Book coverage for your next function and receive edited photos, films and prints from one team."
      />
    </SiteLayout>
  );
}
