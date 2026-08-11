import { Star } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/data/content";

/** Track holds the list twice so the 0%→-50% loop is seamless. */
const track = [...testimonials, ...testimonials];

/** Continuously auto-scrolling (right to left) testimonial strip. */
export function TestimonialMarquee() {
  return (
    <section aria-labelledby="home-marquee-testimonials" className="bg-surface section-y">
      <Reveal>
        <div className="container-page">
          <SectionHeading
            id="home-marquee-testimonials"
            eyebrow="Client stories"
            title="Trusted across Harur and beyond"
          />
        </div>

        <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <ul className="marquee-track animate-marquee-rtl flex w-max gap-6 pl-6">
            {track.map((testimonial, index) => (
              <li
                key={`${testimonial.id}-${index}`}
                className="flex w-72 shrink-0 flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-e1 sm:w-80"
              >
                <p className="flex items-center gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, star) => (
                    <Star
                      key={star}
                      className={
                        star < testimonial.rating
                          ? "size-4 fill-gold text-gold"
                          : "size-4 text-border"
                      }
                    />
                  ))}
                </p>
                <p className="text-sm leading-relaxed text-foreground">“{testimonial.quote}”</p>
                <div className="mt-auto flex items-center gap-3 pt-2">
                  <span
                    aria-hidden="true"
                    className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-xs font-semibold text-brand-foreground"
                  >
                    {testimonial.initials}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </span>
                    <span className="block truncate text-xs text-muted-foreground">
                      {testimonial.role}
                    </span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
