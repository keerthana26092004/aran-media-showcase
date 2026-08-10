import { Award, Clock, HeartHandshake, Lightbulb, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ValueProp {
  icon: LucideIcon;
  title: string;
  description: string;
}

const values: ValueProp[] = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Calibrated printing and professional gear on every job, with no shortcuts.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Photographers, editors, designers and coordinators working as one crew.",
  },
  {
    icon: Clock,
    title: "On Time Delivery",
    description: "Committed dates for prints, teasers and final albums — and we keep them.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Satisfaction",
    description: "Proofs, reviews and revisions until you are happy with the result.",
  },
];

export const heroTrustPoints: ValueProp[] = [
  {
    icon: Award,
    title: "High Quality",
    description: "Sharp prints, clean audio, colour-accurate output.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Years of weddings, launches and print runs.",
  },
  {
    icon: Lightbulb,
    title: "Creative Ideas",
    description: "Concepts built around your occasion.",
  },
  {
    icon: Clock,
    title: "On Time Delivery",
    description: "Deadlines treated as commitments.",
  },
];

interface TrustStripProps {
  items?: ValueProp[];
  variant?: "light" | "dark";
}

/** Four value propositions, reused on Home and About. */
export function TrustStrip({ items = values, variant = "light" }: TrustStripProps) {
  const isDark = variant === "dark";

  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map(({ icon: Icon, title, description }) => (
        <li
          key={title}
          className={
            isDark
              ? "group flex flex-col gap-3 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-foreground/10"
              : "group flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-e1 transition-all duration-300 hover:-translate-y-1 hover:shadow-e2"
          }
        >
          <span
            aria-hidden="true"
            className={
              isDark
                ? "flex size-12 items-center justify-center rounded-xl bg-gold/20 text-gold shadow-e1 transition-transform duration-300 group-hover:scale-110"
                : "flex size-12 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground shadow-e1 transition-transform duration-300 group-hover:scale-110"
            }
          >
            <Icon className="size-6" />
          </span>
          <h3
            className={
              isDark ? "text-lg text-primary-foreground" : "text-lg text-foreground"
            }
          >
            {title}
          </h3>
          <p
            className={
              isDark
                ? "text-sm leading-relaxed text-primary-foreground/75"
                : "text-sm leading-relaxed text-muted-foreground"
            }
          >
            {description}
          </p>
        </li>
      ))}
    </ul>
  );
}

export { values as trustValues };
