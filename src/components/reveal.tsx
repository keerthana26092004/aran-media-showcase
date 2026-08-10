import type { ElementType, ReactNode } from "react";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Stagger delay in ms, applied via inline transition-delay. */
  delay?: number;
}

/**
 * Fades and lifts children into place the first time they scroll into view.
 * No-JS and reduced-motion users still see fully visible content — the
 * `reveal-on-scroll` base styles only affect opacity/transform, never layout.
 */
export function Reveal({ children, as: Tag = "div", className, delay = 0 }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={cn("reveal-on-scroll", inView && "reveal-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
