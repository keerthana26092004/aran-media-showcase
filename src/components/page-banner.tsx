import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

interface PageBannerProps {
  title: string;
  description?: string;
  eyebrow?: string;
  children?: ReactNode;
}

/** Dark navy page header used at the top of every inner page. */
export function PageBanner({ title, description, eyebrow, children }: PageBannerProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-navy text-primary-foreground">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="glow-blob -right-20 -top-24 size-72 bg-brand/25" />
        <span className="glow-blob -bottom-28 -left-16 size-72 bg-gold/15" />
      </div>

      <div className="container-page relative flex flex-col items-center py-7 text-center md:py-9 lg:py-11">
        <nav aria-label="Breadcrumb" className="mb-3">
          <ol className="flex flex-wrap items-center justify-center gap-1 text-sm text-primary-foreground/70">
            <li>
              <Link to="/" className="rounded-sm hover:text-primary-foreground hover:underline">
                Home
              </Link>
            </li>

            <li aria-hidden="true" className="flex items-center">
              <ChevronRight className="size-4" />
            </li>

            <li className="font-medium text-primary-foreground">{eyebrow ?? title}</li>
          </ol>
        </nav>

        <div className="mx-auto flex max-w-3xl flex-col items-center gap-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl">{title}</h1>

          {description ? (
            <p className="text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              {description}
            </p>
          ) : null}

          {children ? (
            <div className="flex flex-wrap justify-center gap-3 pt-1">{children}</div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
