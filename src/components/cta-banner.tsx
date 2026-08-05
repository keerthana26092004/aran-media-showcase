import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { business, whatsappLink } from "@/data/site";

interface CtaBannerProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
}

/** Conversion banner placed near the bottom of every page. */
export function CtaBanner({
  title = "Have a project in mind?",
  description = "Tell us about your event, print job or shoot and we will send an itemised quotation the same working day.",
  primaryLabel = "Get a free quote",
}: CtaBannerProps) {
  return (
    <section className="container-page py-12 md:py-16">
      <div className="flex flex-col gap-6 rounded-3xl bg-gradient-navy px-6 py-10 text-primary-foreground shadow-e2 md:px-12 md:py-14 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-2xl flex-col gap-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl">{title}</h2>
          <p className="text-base text-primary-foreground/80 sm:text-lg">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/quote">{primaryLabel}</Link>
          </Button>
          <Button asChild variant="onDark">
            <a href={whatsappLink(`Hello ${business.shortName}, I would like a quotation.`)}>
              <MessageCircle aria-hidden="true" />
              WhatsApp us
            </a>
          </Button>
          <Button asChild variant="onDark">
            <a href={business.phoneHref}>
              <Phone aria-hidden="true" />
              {business.phoneDisplay}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
