import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";

import logo from "@/assets/aran-logo.png.asset.json";
import { business, fullAddress, mainNav } from "@/data/site";
import { services } from "@/data/services";

const socialIcons = { facebook: Facebook, instagram: Instagram, youtube: Youtube } as const;

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-page grid gap-10 py-12 md:grid-cols-2 md:py-16 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <img
            src={logo.url}
            alt={`${business.name} logo`}
            width={1024}
            height={411}
            loading="lazy"
            className="h-14 w-auto"
          />
          <p className="text-sm leading-relaxed text-primary-foreground/75">
            One team for photography, videography, drone coverage, event management and digital
            printing in Harur and across Dharmapuri district.
          </p>
          <ul className="flex items-center gap-3">
            {business.social.map((item) => {
              const Icon = socialIcons[item.icon];
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${business.shortName} on ${item.label}`}
                    className="flex size-11 items-center justify-center rounded-full border border-primary-foreground/25 transition-colors hover:bg-primary-foreground hover:text-primary"
                  >
                    <Icon aria-hidden="true" className="size-5" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <nav aria-labelledby="footer-links" className="flex flex-col gap-4">
          <h2 id="footer-links" className="text-lg text-primary-foreground">
            Quick Links
          </h2>
          <ul className="flex flex-col gap-2">
            {mainNav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="rounded-sm text-sm text-primary-foreground/80 hover:text-primary-foreground hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-services" className="flex flex-col gap-4">
          <h2 id="footer-services" className="text-lg text-primary-foreground">
            Our Services
          </h2>
          <ul className="flex flex-col gap-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="rounded-sm text-sm text-primary-foreground/80 hover:text-primary-foreground hover:underline"
                >
                  {service.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/quote"
                className="rounded-sm text-sm text-primary-foreground/80 hover:text-primary-foreground hover:underline"
              >
                Get Quote
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col gap-4">
          <h2 className="text-lg text-primary-foreground">Contact</h2>
          <address className="flex flex-col gap-3 text-sm not-italic text-primary-foreground/80">
            <span className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-gold" />
              <span className="min-w-0">{fullAddress}</span>
            </span>
            <a href={business.phoneHref} className="flex gap-3 hover:text-primary-foreground">
              <Phone aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-gold" />
              <span className="min-w-0">{business.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${business.email}`}
              className="flex gap-3 hover:text-primary-foreground"
            >
              <Mail aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-gold" />
              <span className="min-w-0 break-all">{business.email}</span>
            </a>
          </address>
          <p className="text-sm text-primary-foreground/70">{business.hours}</p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col gap-2 py-6 text-sm text-primary-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p>Harur, Tamil Nadu · {business.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
