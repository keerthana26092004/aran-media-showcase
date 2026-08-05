import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h2" | "h3";
  className?: string;
  id?: string;
}

/** Consistent eyebrow + heading + supporting copy block used by every section. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Heading = "h2",
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-3",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">{eyebrow}</p>
      ) : null}
      <Heading id={id} className="text-3xl text-foreground sm:text-4xl lg:text-[2.75rem]">
        {title}
      </Heading>
      {description ? (
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
