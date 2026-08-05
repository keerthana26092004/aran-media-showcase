import { Link } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";

import logo from "@/assets/aran-logo.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { business, mainNav } from "@/data/site";

const linkBase =
  "rounded-md px-2 py-1 text-sm font-medium text-foreground/80 transition-colors hover:text-brand";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3">
        <Link
          to="/"
          className="flex min-w-0 items-center rounded-md"
          aria-label={`${business.name} — home`}
        >
          <img
            src={logo}
            alt={`${business.name} logo`}
            width={1248}
            height={544}
            className="h-10 w-auto shrink-0 sm:h-12"
          />
        </Link>

        <div className="flex items-center gap-2">
          <nav aria-label="Main navigation" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={linkBase}
                    activeProps={{ className: "text-brand font-semibold" }}
                    activeOptions={{ exact: item.to === "/" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Button asChild variant="ghost" size="sm" className="hidden md:inline-flex">
            <a href={business.phoneHref}>
              <Phone aria-hidden="true" />
              <span className="sr-only">Call </span>
              {business.phoneDisplay}
            </a>
          </Button>

          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/quote">Get a Quote</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="xl:hidden"
                aria-label="Open navigation menu"
              >
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(20rem,85vw)] overflow-y-auto">
              <SheetTitle className="text-lg">Menu</SheetTitle>
              <nav aria-label="Mobile navigation" className="mt-6">
                <ul className="flex flex-col gap-1">
                  {mainNav.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-surface-alt"
                        activeProps={{ className: "bg-surface-alt text-brand font-semibold" }}
                        activeOptions={{ exact: item.to === "/" }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-6 flex flex-col gap-3">
                <Button asChild onClick={() => setOpen(false)}>
                  <Link to="/quote">Get a Quote</Link>
                </Button>
                <Button asChild variant="outline">
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
