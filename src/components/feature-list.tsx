import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

interface FeatureListProps {
  items: readonly string[];
  columns?: 1 | 2;
  className?: string;
  /** Accent classes for the check badge, so lists inherit the service colour. */
  iconClassName?: string;
}

/** Accessible checked list used for service features and highlights. */
export function FeatureList({
  items,
  columns = 1,
  className,
  iconClassName,
}: FeatureListProps) {
  return (
    <ul
      className={cn(
        "grid gap-3",
        columns === 2 ? "sm:grid-cols-2" : "grid-cols-1",
        className,
      )}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className={cn(
              "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand",
              iconClassName,
            )}
          >
            <Check className="size-4" />
          </span>
          <span className="min-w-0 text-base text-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );
}
