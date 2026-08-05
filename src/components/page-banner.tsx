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
    <section className="bg-gradient-navy text-primary-foreground">
      <div className="container-page py-12 md:py-16 lg:py-20">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-primary-foreground/70">
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
        <div className="flex max-w-3xl flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl">{title}</h1>
          {description ? (
            <p className="text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              {description}
            </p>
          ) : null}
          {children ? <div className="flex flex-wrap gap-3 pt-2">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
