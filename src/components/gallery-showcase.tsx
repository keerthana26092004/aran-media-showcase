import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { portfolioItems } from "@/data/portfolio";

const pool = portfolioItems.slice(0, 7);

/** Shortest signed distance from `index` to `active` around the circular pool. */
function circularOffset(index: number, active: number, length: number) {
  let offset = index - active;
  if (offset > length / 2) offset -= length;
  if (offset < -length / 2) offset += length;
  return offset;
}

/** Fanned photo-card carousel: a stack of tilted cards with the active one
 *  raised and centred, prev/next controls, and a link to the full gallery. */
export function GalleryShowcase() {
  const [active, setActive] = useState(0);
  const activeItem = pool[active]!;

  const goTo = (index: number) => setActive(((index % pool.length) + pool.length) % pool.length);

  return (
    <section aria-labelledby="home-gallery" className="relative overflow-hidden bg-surface">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="glow-blob animate-float-slow -left-16 -top-20 size-72 bg-brand/8 sm:size-96" />
        <span
          className="glow-blob animate-float-slow -bottom-24 -right-16 size-64 bg-gold/10 sm:size-80"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container-page relative section-y">
        <Reveal>
          <SectionHeading
            id="home-gallery"
            eyebrow="Gallery"
            title="A closer look at our work"
            description="Photography, prints and events captured from recent projects."
          />
        </Reveal>

        <div className="mt-12 flex flex-col items-center gap-8">
          <div key={activeItem.id} className="animate-in fade-in slide-in-from-bottom-2 text-center duration-500">
            <p className="font-display text-xl font-semibold text-foreground sm:text-2xl">
              {activeItem.title}
            </p>
            <p className="text-sm text-muted-foreground">{activeItem.categoryLabel}</p>
          </div>

          <div className="relative flex h-56 w-full items-center justify-center sm:h-64 md:h-72">
            {pool.map((item, index) => {
              const offset = circularOffset(index, active, pool.length);
              const abs = Math.abs(offset);
              const isActive = offset === 0;
              const visible = abs <= 2;

              const scale = isActive ? 1.15 : Math.max(0.7, 1 - abs * 0.15);
              const translateX = `${offset * 68}%`;
              const translateY = isActive ? "-0.75rem" : "0px";
              const rotate = `${offset * 7}deg`;

              return (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Show ${item.title}`}
                  aria-current={isActive}
                  tabIndex={visible ? 0 : -1}
                  onClick={() => goTo(index)}
                  className="absolute w-32 shrink-0 cursor-pointer transition-all duration-500 ease-out sm:w-40 md:w-48"
                  style={{
                    transform: `translateX(${translateX}) translateY(${translateY}) scale(${scale}) rotate(${rotate})`,
                    opacity: visible ? 1 : 0,
                    zIndex: 20 - abs * 5,
                    pointerEvents: visible ? "auto" : "none",
                  }}
                >
                  <span
                    className={`block aspect-[3/4] overflow-hidden rounded-2xl bg-card ring-1 ring-border transition-shadow duration-500 ${
                      isActive ? "shadow-e4" : "shadow-e1"
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      width={600}
                      height={800}
                      loading="lazy"
                      className="size-full object-cover"
                    />
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Previous photo"
              onClick={() => goTo(active - 1)}
              className="flex size-11 items-center justify-center rounded-full border border-input bg-background text-foreground transition-all hover:-translate-y-0.5 hover:border-brand hover:text-brand"
            >
              <ChevronLeft aria-hidden="true" className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={() => goTo(active + 1)}
              className="flex size-11 items-center justify-center rounded-full bg-gradient-brand text-brand-foreground shadow-e1 transition-all hover:-translate-y-0.5 hover:shadow-e2"
            >
              <ChevronRight aria-hidden="true" className="size-5" />
            </button>
          </div>

          <Button asChild variant="outline">
            <Link to="/gallery">
              View Full Gallery
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
