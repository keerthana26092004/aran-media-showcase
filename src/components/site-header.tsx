import { Link } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { business, mainNav } from "@/data/site";

/**
 * Navy header matching the Aran Media brand poster: the full-colour logo sits on
 * deep navy so the white "Elan" script keeps its original contrast.
 */
const linkBase =
  "block rounded-md px-2 py-1 text-sm font-medium text-primary-foreground/80 transition-colors hover:text-gold";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass-panel sticky top-0 z-50 border-b border-primary-foreground/10 text-primary-foreground shadow-e1 transition-shadow">
      <div className="container-page grid grid-cols-[auto_1fr_auto] items-center gap-4 py-3">
        <Link
          to="/"
          className="flex min-w-0 items-center rounded-md"
          aria-label={`${business.name} — home`}
        >
          <img
            src="/Aran%20media%20logo.png"
            alt={`${business.name} logo`}
            width={1024}
            height={411}
            className="h-11 w-auto shrink-0 sm:h-14"
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden min-w-0 justify-center xl:flex">
          <ul className="flex flex-wrap items-center justify-center gap-1">
            {mainNav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={linkBase}
                  activeProps={{
                    className:
                      "text-gold font-semibold border-b-2 border-gold rounded-none pb-0.5",
                  }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 justify-self-end">
          <Button asChild size="sm" className="hidden rounded-full sm:inline-flex">
            <Link to="/quote">Get a Quote</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="onDark"
                size="icon"
                className="xl:hidden"
                aria-label="Open navigation menu"
              >
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(20rem,85vw)] overflow-y-auto bg-primary text-primary-foreground"
            >
              <SheetTitle className="text-lg text-primary-foreground">Menu</SheetTitle>
              <nav aria-label="Mobile navigation" className="mt-6">
                <ul className="flex flex-col gap-1">
                  {mainNav.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-3 py-3 text-base font-medium text-primary-foreground/85 hover:bg-primary-foreground/10 hover:text-gold"
                        activeProps={{
                          className: "bg-primary-foreground/10 text-gold font-semibold",
                        }}
                        activeOptions={{ exact: item.to === "/" }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-6 flex flex-col gap-3">
                <Button asChild className="rounded-full" onClick={() => setOpen(false)}>
                  <Link to="/quote">Get a Quote</Link>
                </Button>
                <Button asChild variant="onDark">
                  <a href={business.phoneHref}>
                    <Phone aria-hidden="true" />
                    {business.phoneDisplay}
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
