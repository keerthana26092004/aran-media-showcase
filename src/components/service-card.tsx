import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { FeatureList } from "@/components/feature-list";
import { Button } from "@/components/ui/button";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  featureCount?: number;
}

/** Per-service accent styling taken from the Aran brand poster. */
const accentStyles = {
  info: {
    title: "text-info",
    rule: "bg-info",
    button: "bg-info text-primary-foreground",
    icon: "bg-info/10 text-info",
  },
  brand: {
    title: "text-brand",
    rule: "bg-brand",
    button: "bg-brand text-brand-foreground",
    icon: "bg-brand/10 text-brand",
  },
  leaf: {
    title: "text-leaf",
    rule: "bg-leaf",
    button: "bg-leaf text-primary-foreground",
    icon: "bg-leaf/10 text-leaf",
  },
  violet: {
    title: "text-violet",
    rule: "bg-violet",
    button: "bg-violet text-primary-foreground",
    icon: "bg-violet/10 text-violet",
  },
} as const;

/** Card used on the home page and the services overview. */
export function ServiceCard({ service, featureCount = 4 }: ServiceCardProps) {
  const Icon = service.icon;
  const headingId = `service-${service.slug}-title`;
  const accent = accentStyles[service.accent];

  return (
    <article
      aria-labelledby={headingId}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-e1 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-e2 focus-within:-translate-y-1.5 focus-within:shadow-e2"
    >
      <div className="aspect-[3/2] overflow-hidden bg-surface-alt">
        <img
          src={service.image}
          alt={service.imageAlt}
          width={1200}
          height={800}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex min-w-0 items-center gap-3">
          <span
            aria-hidden="true"
            className={`flex size-11 shrink-0 items-center justify-center rounded-full shadow-e1 ${service.accentClass}`}
          >
            <Icon className="size-6" />
          </span>
          <h3 id={headingId} className={`min-w-0 text-xl ${accent.title}`}>
            {service.name}
          </h3>
        </div>
        <span aria-hidden="true" className={`h-0.5 w-16 rounded-full ${accent.rule}`} />
        <p className="text-base text-muted-foreground">{service.short}</p>
        <FeatureList
          items={service.features.slice(0, featureCount)}
          className="gap-2"
          iconClassName={accent.icon}
        />
        <div className="mt-auto pt-2">
          <Button asChild size="sm" className={`rounded-full ${accent.button}`}>
            <Link to="/services/$slug" params={{ slug: service.slug }}>
              Learn More
              <span className="sr-only"> about {service.name}</span>
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
