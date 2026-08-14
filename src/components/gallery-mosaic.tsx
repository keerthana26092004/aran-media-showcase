import { Camera } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { galleryItems } from "@/data/portfolio";

/** Ten tiles, cycling through the available gallery photos. Desktop
 *  placement (two tall "anchor" frames flanking a denser centre) is
 *  defined in styles.css as `.gallery-mosaic` nth-child rules. */
const tiles = Array.from({ length: 10 }, (_, index) => galleryItems[index % galleryItems.length]!);

interface GalleryMosaicProps {
  /** Called when the "View Gallery" badge/button is activated. */
  onView: () => void;
  /** Label for both the floating badge and the mobile button. */
  label?: string;
  /** Optional heading rendered above the mosaic (omit to match the bare Gallery-page look). */
  eyebrow?: string;
  title?: string;
  description?: string;
}

/** Asymmetric bento-style photo collage with a floating "View Gallery" badge. */
export function GalleryMosaic({
  onView,
  label = "View Gallery",
  eyebrow,
  title,
  description,
}: GalleryMosaicProps) {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="glow-blob animate-float-slow -left-16 -top-20 size-72 bg-brand/8 sm:size-96" />
        <span
          className="glow-blob animate-float-slow -bottom-24 -right-16 size-64 bg-gold/10 sm:size-80"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container-page relative section-y">
        {title ? (
          <Reveal className="mb-10">
            <SectionHeading
              {...(eyebrow ? { eyebrow } : {})}
              title={title}
              {...(description ? { description } : {})}
            />
          </Reveal>
        ) : null}

        <Reveal className="relative">
          <div className="gallery-mosaic grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:auto-rows-[11rem] lg:gap-5">
            {tiles.map((tile, index) => (
              <div
                key={`${tile.src}-${index}`}
                className="group aspect-[4/3] overflow-hidden rounded-2xl shadow-e1 ring-1 ring-border transition-all duration-500 hover:-translate-y-1 hover:shadow-e2 lg:aspect-auto"
              >
                <img
                  src={tile.src}
                  alt={tile.alt}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onView}
            className="glass-panel absolute left-1/2 top-1/2 hidden size-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1.5 rounded-full text-center text-primary-foreground shadow-e4 ring-8 ring-surface transition-transform duration-300 hover:scale-105 lg:flex"
          >
            <Camera aria-hidden="true" className="size-6 text-gold" />
            <span className="text-sm font-semibold">{label}</span>
          </button>

          <div className="mt-8 flex justify-center lg:hidden">
            <button
              type="button"
              onClick={onView}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-navy px-6 py-3 text-sm font-semibold text-primary-foreground shadow-e2 transition-transform hover:-translate-y-0.5"
            >
              <Camera aria-hidden="true" className="size-4" />
              {label}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
