import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
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
          href={whatsappLink(
            `Hello ${business.shortName}, I would like to enquire about your services.`,
          )}
          target="_blank"
          rel="noreferrer noopener"
          className="animate-in fade-in slide-in-from-bottom-4 group relative flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-[#2CDE6B] to-[#128C7E] text-white shadow-e2 ring-4 ring-white/10 duration-500 transition-transform hover:-translate-y-1 hover:shadow-e3 active:scale-95 sm:size-16"
        >
          <span
            aria-hidden="true"
            className="animate-pulse-ring absolute inset-0 rounded-full bg-[#2CDE6B]"
          />
          <WhatsAppIcon
            aria-hidden="true"
            className="relative size-7 transition-transform duration-300 group-hover:scale-110 sm:size-8"
          />
          <span className="sr-only">Chat with us on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
