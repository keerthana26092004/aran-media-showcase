import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import type { PortfolioItem } from "@/data/portfolio";

interface PortfolioShowcaseProps {
  featured: PortfolioItem;
  /** Anchor id of the full filterable grid this card scrolls to. */
  targetId: string;
}

const stackAccents = ["bg-gold", "bg-info", "bg-violet", "bg-brand"] as const;
const stackTilts = ["-rotate-12", "-rotate-6", "rotate-6", "rotate-12"] as const;

/** Fanned photo-card stack + intro copy, used to open the Portfolio page. */
export function PortfolioShowcase({ featured, targetId }: PortfolioShowcaseProps) {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="glow-blob animate-float-slow -left-20 -top-24 size-72 bg-brand/8 sm:size-96" />
        <span
          className="glow-blob animate-float-slow -bottom-24 -right-16 size-64 bg-gold/10 sm:size-80"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container-page relative section-y">
        <Reveal className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
            {stackAccents.map((accent, index) => (
              <span
                key={accent}
                aria-hidden="true"
                className={`absolute inset-0 rounded-[2rem] shadow-e1 ${accent} ${stackTilts[index]}`}
              />
            ))}

            <div className="absolute inset-0 overflow-hidden rounded-[2rem] shadow-e4 ring-1 ring-border">
              <img
                src={featured.src}
                alt={featured.alt}
                width={900}
                height={1125}
                className="size-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent p-5">
                <span className="min-w-0">
                  <span className="block truncate font-display text-lg font-semibold text-primary-foreground">
                    {featured.title}
                  </span>
                  <span className="block text-sm text-primary-foreground/75">
                    {featured.categoryLabel}
                  </span>
                </span>
              </div>
            </div>

            <a
              href={`#${targetId}`}
              aria-label="View the full portfolio"
              className="absolute -bottom-5 -right-5 flex size-14 items-center justify-center rounded-full bg-gradient-brand text-brand-foreground shadow-e3 transition-transform duration-300 hover:-translate-y-1 hover:rotate-45"
            >
              <ArrowUpRight aria-hidden="true" className="size-6" />
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                Portfolio
              </p>
              <span aria-hidden="true" className="rule-spectrum w-12" />
            </div>
            <h2 className="text-3xl text-foreground sm:text-4xl">Work that speaks for itself</h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              This portfolio features projects we have delivered for families, businesses and
              institutions across Harur and Dharmapuri district — printing, events, drone coverage
              and videography, each approached with the same planning and attention to detail.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              We aim to produce work that is clean, professional and visually strong. Take a look
              through what we have delivered and see how we bring ideas and moments to life.
            </p>
            <a
              href={`#${targetId}`}
              className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-foreground underline-offset-4 transition-colors hover:text-brand hover:underline"
            >
              View all projects
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
