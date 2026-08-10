// import { Link } from "@tanstack/react-router";
// import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";

// import { Reveal } from "@/components/reveal";
// import { business, fullAddress, mainNav } from "@/data/site";
// import { services } from "@/data/services";

// const socialIcons = { facebook: Facebook, instagram: Instagram, youtube: Youtube } as const;

// export function SiteFooter() {
//   return (
//     <footer className="relative">
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-x-0 top-0 -translate-y-[99%] overflow-hidden leading-[0]"
//       >
//         <svg
//           viewBox="0 0 1440 100"
//           preserveAspectRatio="none"
//           className="h-14 w-full text-primary sm:h-20"
//         >
//           <path
//             fill="currentColor"
//             d="M0,40 C240,100 480,0 720,32 C960,64 1200,8 1440,48 L1440,100 L0,100 Z"
//           />
//         </svg>
//       </div>

//       <div className="relative overflow-hidden bg-gradient-navy text-primary-foreground">
//         <div aria-hidden="true" className="pointer-events-none absolute inset-0">
//           <span className="glow-blob animate-float-slow -left-20 top-0 size-72 bg-brand/20 sm:size-96" />
//           <span
//             className="glow-blob animate-float-slow -right-16 bottom-0 size-64 bg-gold/15 sm:size-80"
//             style={{ animationDelay: "2s" }}
//           />
//         </div>

//         <div className="container-page relative py-8 md:py-10">
//           <Reveal className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//             <div className="flex flex-col gap-3">
//               <img
//                 src="/Aran%20media%20logo.png"
//                 alt={`${business.name} logo`}
//                 width={1024}
//                 height={411}
//                 loading="lazy"
//                 className="mt-2 h-11 w-auto sm:h-14"
//               />
//               <p className="text-sm leading-relaxed text-primary-foreground/75">
//                 One team for photography, videography, drone coverage, event management and
//                 digital printing in Harur and across Dharmapuri district.
//               </p>
//               <ul className="flex items-center gap-3">
//                 {business.social.map((item) => {
//                   const Icon = socialIcons[item.icon];
//                   return (
//                     <li key={item.label}>
//                       <a
//                         href={item.href}
//                         target="_blank"
//                         rel="noreferrer noopener"
//                         aria-label={`${business.shortName} on ${item.label}`}
//                         className="flex size-9 items-center justify-center rounded-full border border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-primary-foreground hover:text-primary hover:shadow-e2"
//                       >
//                         <Icon aria-hidden="true" className="size-5" />
//                       </a>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>

//             <nav aria-labelledby="footer-links" className="flex flex-col gap-4">
//               <h2 id="footer-links" className="text-lg text-primary-foreground">
//                 Quick Links
//               </h2>
//               <ul className="flex flex-col gap-2">
//                 {mainNav.map((item) => (
//                   <li key={item.to}>
//                     <Link
//                       to={item.to}
//                       className="rounded-sm text-sm text-primary-foreground/80 transition-colors hover:text-gold hover:underline"
//                     >
//                       {item.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </nav>

//             <nav aria-labelledby="footer-services" className="flex flex-col gap-4">
//               <h2 id="footer-services" className="text-lg text-primary-foreground">
//                 Our Services
//               </h2>
//               <ul className="flex flex-col gap-2">
//                 {services.map((service) => (
//                   <li key={service.slug}>
//                     <Link
//                       to="/services/$slug"
//                       params={{ slug: service.slug }}
//                       className="rounded-sm text-sm text-primary-foreground/80 transition-colors hover:text-gold hover:underline"
//                     >
//                       {service.name}
//                     </Link>
//                   </li>
//                 ))}
//                 <li>
//                   <Link
//                     to="/quote"
//                     className="rounded-sm text-sm text-primary-foreground/80 transition-colors hover:text-gold hover:underline"
//                   >
//                     Get Quote
//                   </Link>
//                 </li>
//               </ul>
//             </nav>

//             <div className="flex flex-col gap-4">
//               <h2 className="text-lg text-primary-foreground">Contact</h2>
//               <address className="flex flex-col gap-3 text-sm not-italic text-primary-foreground/80">
//                 <span className="flex gap-3">
//                   <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-gold" />
//                   <span className="min-w-0">{fullAddress}</span>
//                 </span>
//                 <a
//                   href={business.phoneHref}
//                   className="flex gap-3 transition-colors hover:text-primary-foreground"
//                 >
//                   <Phone aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-gold" />
//                   <span className="min-w-0">{business.phoneDisplay}</span>
//                 </a>
//                 <a
//                   href={`mailto:${business.email}`}
//                   className="flex gap-3 transition-colors hover:text-primary-foreground"
//                 >
//                   <Mail aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-gold" />
//                   <span className="min-w-0 break-all">{business.email}</span>
//                 </a>
//               </address>
//               <p className="text-sm text-primary-foreground/70">{business.hours}</p>
//             </div>
//           </Reveal>
//         </div>

//         <div className="relative border-t border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm">
//           <div className="container-page flex flex-col gap-2 py-3 text-sm text-primary-foreground/70 sm:flex-row sm:items-center sm:justify-between">
//             <p>
//               © {new Date().getFullYear()} {business.name}. All rights reserved.
//             </p>
//             <p>Harur, Tamil Nadu · {business.tagline}</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
  
import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { business, fullAddress, mainNav } from "@/data/site";
import { services } from "@/data/services";

const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
} as const;

export function SiteFooter() {
  return (
   <footer className="relative overflow-hidden">
  {/* Wavy top edge */}
  <div
    aria-hidden="true"
    className="relative z-10 h-16 w-full overflow-hidden"
  >
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full"
    >
      <path
        d="
  M0 35
  C150 10 300 10 450 35
  C600 60 750 60 900 35
  C1050 10 1200 10 1350 35
  C1390 42 1420 42 1440 35
  L1440 80
  L0 80
  Z
"
        fill="currentColor"
        className="text-[#11163f]"
      />
    </svg>
  </div>

  {/* Actual footer background */}
  <div className="relative -mt-[1px] overflow-hidden bg-gradient-navy text-primary-foreground">
    
    {/* Background decorative blobs */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
    >
      <span className="glow-blob animate-float-slow -left-20 top-0 size-72 bg-brand/20 sm:size-96" />

      <span
        className="glow-blob animate-float-slow -right-16 bottom-0 size-64 bg-gold/15 sm:size-80"
        style={{ animationDelay: "2s" }}
      />
    </div>

    {/* Footer content */}
    <div className="container-page relative py-8 md:py-10">
      <Reveal className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {/* Brand / Logo */}
        <div className="flex min-w-0 max-w-[230px] flex-col gap-3">
          <img
            src="/Aran%20media%20logo.png"
            alt={`${business.name} logo`}
            width={1024}
            height={411}
            loading="lazy"
            className="mt-2 h-11 w-auto max-w-[210px] object-contain object-left sm:h-14"
          />

          <p className="max-w-[210px] text-sm leading-relaxed text-primary-foreground/75">
            One team for photography, videography, drone coverage, event
            management and digital printing in Harur and across Dharmapuri
            district.
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
                    className="flex size-9 items-center justify-center rounded-full border border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-primary-foreground hover:text-primary hover:shadow-e2"
                  >
                    <Icon
                      aria-hidden="true"
                      className="size-5"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Quick Links */}
        <nav
          aria-labelledby="footer-links"
          className="flex flex-col gap-4"
        >
          <h2
            id="footer-links"
            className="text-lg text-primary-foreground"
          >
            Quick Links
          </h2>

          <ul className="flex flex-col gap-2">
            {mainNav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="rounded-sm text-sm text-primary-foreground/80 transition-colors hover:text-gold hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <nav
          aria-labelledby="footer-services"
          className="flex flex-col gap-4"
        >
          <h2
            id="footer-services"
            className="text-lg text-primary-foreground"
          >
            Our Services
          </h2>

          <ul className="flex flex-col gap-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="rounded-sm text-sm text-primary-foreground/80 transition-colors hover:text-gold hover:underline"
                >
                  {service.name}
                </Link>
              </li>
            ))}

            <li>
              <Link
                to="/quote"
                className="rounded-sm text-sm text-primary-foreground/80 transition-colors hover:text-gold hover:underline"
              >
                Get Quote
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact */}
        <div className="flex min-w-0 flex-col gap-4">
          <h2 className="text-lg text-primary-foreground">
            Contact
          </h2>

          <address className="flex flex-col gap-3 text-sm not-italic text-primary-foreground/80">
            <span className="flex gap-3">
              <MapPin
                aria-hidden="true"
                className="mt-0.5 size-5 shrink-0 text-gold"
              />
              <span className="min-w-0">{fullAddress}</span>
            </span>

            <a
              href={business.phoneHref}
              className="flex gap-3 transition-colors hover:text-primary-foreground"
            >
              <Phone
                aria-hidden="true"
                className="mt-0.5 size-5 shrink-0 text-gold"
              />
              <span className="min-w-0">
                {business.phoneDisplay}
              </span>
            </a>

            <a
              href={`mailto:${business.email}`}
              className="flex gap-3 transition-colors hover:text-primary-foreground"
            >
              <Mail
                aria-hidden="true"
                className="mt-0.5 size-5 shrink-0 text-gold"
              />
              <span className="min-w-0 break-all">
                {business.email}
              </span>
            </a>
          </address>

          <p className="text-sm text-primary-foreground/70">
            {business.hours}
          </p>
        </div>

      </Reveal>
    </div>

    {/* Copyright */}
    <div className="bg-black/10">
      <div className="container-page flex flex-col gap-2 py-3 text-sm text-primary-foreground/70 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </p>

        <p>
          Harur, Tamil Nadu · {business.tagline}
        </p>
      </div>
    </div>
  </div>
</footer>
  );
}