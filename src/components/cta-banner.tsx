import { Link } from "@tanstack/react-router";
import { Phone, Sparkles } from "lucide-react";

import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { Reveal } from "@/components/reveal";
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
    <section className="container-page py-14 md:py-20">
      <Reveal className="relative">
        <div
          aria-hidden="true"
          className="absolute -inset-3 -z-10 hidden rotate-1 rounded-[2.5rem] bg-gradient-brand opacity-25 blur-md sm:block"
        />
<div className="relative overflow-hidden rounded-[2rem] rounded-tr-[4.5rem] bg-gradient-navy px-6 pb-10 pt-12 text-primary-foreground shadow-lg sm:rounded-tr-[6rem] sm:pt-14 md:px-12 md:pb-14">
  <div aria-hidden="true" className="pointer-events-none absolute inset-0">
    <span className="bg-dot-grid absolute bottom-4 right-8 hidden size-28 text-primary-foreground/10 [mask-image:radial-gradient(circle,black,transparent_75%)] lg:block" />
    <span className="absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-primary-foreground/10" />
  </div>

 

  <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
    <div className="flex max-w-xl flex-col gap-3">
      <span aria-hidden="true" className="h-1.5 w-14 rounded-full bg-gradient-brand" />
      <h2 className="text-2xl sm:text-3xl lg:text-4xl">{title}</h2>
      <p className="text-base text-primary-foreground/80 sm:text-lg">
        {description}
      </p>
    </div>

 <div className="flex flex-wrap items-center gap-3 lg:justify-end">
  <Button asChild size="lg" className="shadow-md">
    <Link to="/quote">{primaryLabel}</Link>
  </Button>

  <Button asChild variant="onDark">
    <a
      href={whatsappLink(
        `Hello ${business.shortName}, I would like a quotation.`
      )}
    >
      <WhatsAppIcon aria-hidden="true" />
      WhatsApp us
    </a>
  </Button>
</div>
  </div>
</div>
      </Reveal>
    </section>
  );
}
