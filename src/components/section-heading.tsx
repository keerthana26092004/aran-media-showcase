import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h2" | "h3";
  className?: string;
  id?: string;
  /** Render the heading over a dark navy surface. */
  onDark?: boolean;
}

/**
 * Consistent eyebrow + heading + supporting copy block used by every section.
 * Follows the Aran poster styling: spectrum rules beside the eyebrow and a short
 * spectrum underline beneath the title.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Heading = "h2",
  className,
  id,
  onDark = false,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-3",
        centered ? "mx-auto items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <div className="flex items-center gap-3">
          {centered ? (
            <span aria-hidden="true" className="rule-spectrum hidden w-12 rotate-180 sm:block" />
          ) : null}
          <p
            className={cn(
              "text-sm font-semibold uppercase tracking-[0.18em]",
              onDark ? "text-gold" : "text-brand",
            )}
          >
            {eyebrow}
          </p>
          <span aria-hidden="true" className="rule-spectrum hidden w-12 sm:block" />
        </div>
      ) : null}
      <Heading
        id={id}
        className={cn(
          "text-3xl sm:text-4xl lg:text-[2.75rem]",
          onDark ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {title}
      </Heading>
      <span aria-hidden="true" className="rule-spectrum w-24" />
      {description ? (
        <p
          className={cn(
            "text-base leading-relaxed sm:text-lg",
            onDark ? "text-primary-foreground/80" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
