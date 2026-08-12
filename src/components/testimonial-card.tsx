import { Star } from "lucide-react";

import type { Testimonial } from "@/data/content";

/** Star rating with an accessible text equivalent. */
function Rating({ value }: { value: number }) {
  return (
    <p className="flex items-center gap-1">
      <span className="sr-only">{value} out of 5 stars</span>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          aria-hidden="true"
          className={
            star <= value ? "size-4 fill-gold text-gold" : "size-4 text-muted-foreground/40"
          }
        />
      ))}
    </p>
  );
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col overflow-visible rounded-2xl border border-border bg-card shadow-e1 transition-all duration-300 hover:-translate-y-1 hover:shadow-e2">
      <div className="relative mx-4 mt-4 flex items-center gap-3 rounded-xl bg-gradient-navy px-4 py-3 pr-14 text-primary-foreground shadow-e1">
        <span className="min-w-0">
          <span className="block truncate font-semibold text-primary-foreground">
            {testimonial.name}
          </span>
          <span className="block truncate text-sm text-primary-foreground/75">
            {testimonial.role}
          </span>
        </span>

        <span
          aria-hidden="true"
          className="absolute -right-3 -top-3 flex size-14 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-base font-semibold text-brand-foreground ring-4 ring-card"
        >
          {testimonial.initials}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6 pt-5">
        <Rating value={testimonial.rating} />
        <blockquote className="flex-1">
          <p className="text-base leading-relaxed text-foreground">“{testimonial.quote}”</p>
        </blockquote>
      </div>
    </figure>
  );
}
