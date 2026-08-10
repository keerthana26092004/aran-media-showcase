import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export interface MediaItem {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
}

interface MediaGalleryProps {
  items: MediaItem[];
  emptyMessage?: string;
  className?: string;
}

/**
 * Responsive image grid where every tile is a real button that opens an
 * accessible lightbox dialog. Used by Portfolio, Gallery and service pages.
 */
export function MediaGallery({
  items,
  emptyMessage = "Images for this category are being added. Please check back soon.",
  className,
}: MediaGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex === null ? null : items[activeIndex];

  if (items.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-border bg-surface px-6 py-12 text-center text-muted-foreground">
        {emptyMessage}
      </p>
    );
  }

  return (
    <>
      <ul className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3", className)}>
        {items.map((item, index) => (
          <li key={`${item.src}-${item.title ?? index}`} className="flex">
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-left shadow-e1 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow-brand focus-visible:-translate-y-1.5 focus-visible:shadow-glow-brand"
            >
              <span className="relative block aspect-[4/3] overflow-hidden bg-surface-alt">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/80 via-primary/0 to-primary/0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  <span className="translate-y-2 text-sm font-semibold text-primary-foreground transition-transform duration-300 group-hover:translate-y-0">
                    View larger
                  </span>
                </span>
              </span>
              <span className="flex flex-col gap-1 p-5">
                <span className="font-display text-lg font-semibold text-foreground">
                  {item.title ?? "View image"}
                </span>
                {item.caption ? (
                  <span className="text-sm text-muted-foreground">{item.caption}</span>
                ) : null}
                <span className="pt-1 text-sm font-semibold text-brand">
                  Open larger view
                  <span className="sr-only"> of {item.title ?? item.alt}</span>
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Dialog
        open={active !== null}
        onOpenChange={(open) => {
          if (!open) setActiveIndex(null);
        }}
      >
        <DialogContent className="max-w-4xl rounded-3xl p-4 sm:p-6">
          {active ? (
            <>
              <DialogTitle className="text-xl">{active.title ?? "Gallery image"}</DialogTitle>
              <DialogDescription>{active.caption ?? active.alt}</DialogDescription>
              <img
                src={active.src}
                alt={active.alt}
                width={1200}
                height={800}
                className="mt-2 w-full rounded-2xl object-contain"
              />
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
