import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { business, whatsappLink } from "@/data/site";

/** Floating WhatsApp shortcut plus a scroll-to-top control. */
export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-40 flex flex-col justify-end p-4 sm:p-6">
      <div className="pointer-events-auto ml-auto flex flex-col items-end gap-3">
        {showTop ? (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll back to top of page"
            className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-e2 transition-transform hover:-translate-y-0.5"
          >
            <ArrowUp aria-hidden="true" className="size-5" />
          </button>
        ) : null}
        <a
          href={whatsappLink(`Hello ${business.shortName}, I would like to enquire about your services.`)}
          target="_blank"
          rel="noreferrer noopener"
          className="flex size-14 items-center justify-center rounded-full bg-leaf text-primary-foreground shadow-e2 transition-transform hover:-translate-y-0.5"
        >
          <MessageCircle aria-hidden="true" className="size-7" />
          <span className="sr-only">Chat with us on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
