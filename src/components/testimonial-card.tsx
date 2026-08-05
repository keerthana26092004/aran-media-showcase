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
    <figure className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-e1">
      <Rating value={testimonial.rating} />
      <blockquote className="flex-1">
        <p className="text-base leading-relaxed text-foreground">“{testimonial.quote}”</p>
      </blockquote>
      <figcaption className="flex min-w-0 items-center gap-3 border-t border-border pt-4">
        <span
          aria-hidden="true"
          className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-sm font-semibold text-brand-foreground"
        >
          {testimonial.initials}
        </span>
        <span className="min-w-0">
          <span className="block truncate font-semibold text-foreground">{testimonial.name}</span>
          <span className="block truncate text-sm text-muted-foreground">{testimonial.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
