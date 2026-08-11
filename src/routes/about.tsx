import { createFileRoute } from "@tanstack/react-router";

import eventsImage from "@/assets/service-events.jpg";
import { CtaBanner } from "@/components/cta-banner";
import { FeatureList } from "@/components/feature-list";
import { PageBanner } from "@/components/page-banner";
import { SectionHeading } from "@/components/section-heading";
import { SiteLayout } from "@/components/site-layout";
import { TrustStrip } from "@/components/trust-strip";
import { business, fullAddress } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Aran Media & Digital Printing | Harur" },
      {
        name: "description",
        content:
          "Learn about Aran Media & Digital Printing in Harur — our story, mission, values and the team behind our media and printing services.",
      },
      { property: "og:title", content: "About Aran Media & Digital Printing" },
      {
        property: "og:description",
        content: "Our story, mission and values as a media production and digital printing house.",
      },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  { value: "500+", label: "Projects delivered" },
  { value: "4", label: "Core service lines" },
  { value: "10+", label: "Districts covered" },
  { value: "24 hrs", label: "Typical print turnaround" },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageBanner
        title="About Aran Media"
        eyebrow="About Us"
        description="A Harur-based media and print house bringing photography, videography, drone coverage, event management and printing under one roof."
      />

      <section aria-labelledby="about-story" className="container-page section-y">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-5">
            <SectionHeading
              id="about-story"
              align="left"
              eyebrow="Our story"
              title="One studio, every part of your project"
            />
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Aran Media & Digital Printing — known locally as Aran Elan — started as a small print
              counter on Bye Pass Road and grew into a full media house as customers kept asking for
              photography, video and decor alongside their printing.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Today the same team designs your artwork, prints your banners, decorates your stage,
              flies the drone and edits the film. That single point of accountability is why families,
              shops, schools and campaign teams across Dharmapuri district keep coming back.
            </p>
            <dl className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {milestones.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-1 rounded-2xl border border-border bg-card p-4 shadow-e1"
                >
                  <dt className="sr-only">{item.label}</dt>
                  <dd className="font-display text-2xl font-bold text-brand">{item.value}</dd>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </dl>
          </div>
          <img
            src={eventsImage}
            alt="Aran Media decorated wedding reception stage with floral arches"
            width={1200}
            height={800}
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-e2"
          />
        </div>
      </section>

      <section aria-labelledby="about-mission" className="relative overflow-hidden bg-surface">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <span className="glow-blob animate-float-slow -left-16 -top-20 size-72 bg-brand/10 sm:size-96" />
          <span
            className="glow-blob animate-float-slow -bottom-24 -right-16 size-64 bg-gold/12 sm:size-80"
            style={{ animationDelay: "2s" }}
          />
        </div>
        <div className="container-page relative section-y">
          <SectionHeading
            id="about-mission"
            eyebrow="Mission & values"
            title="What guides our work"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-e1">
              <h3 className="text-xl text-foreground">Our mission</h3>
              <p className="text-base text-muted-foreground">
                To make professional media and printing accessible to every family and business in
                our region, at honest prices and without the hassle of chasing multiple vendors.
              </p>
            </article>
            <article className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-e1">
              <h3 className="text-xl text-foreground">Our vision</h3>
              <p className="text-base text-muted-foreground">
                To be the most trusted creative partner in Dharmapuri district — the studio people
                recommend for weddings, launches and campaigns alike.
              </p>
            </article>
            <article className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-e1">
              <h3 className="text-xl text-foreground">Our commitments</h3>
              <FeatureList
                items={[
                  "Itemised quotations, no hidden charges",
                  "Proof approval before every print run",
                  "Delivery on the promised date",
                  "Your files stored safely and privately",
                ]}
                className="gap-2"
              />
            </article>
          </div>
        </div>
      </section>

      <section aria-labelledby="about-why" className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <span className="glow-blob animate-float-slow -right-20 -top-16 size-72 bg-info/10 sm:size-96" />
          <span
            className="glow-blob animate-float-slow -bottom-20 -left-16 size-64 bg-brand/8 sm:size-80"
            style={{ animationDelay: "1.5s" }}
          />
        </div>
        <div className="container-page relative section-y">
          <SectionHeading
            id="about-why"
            eyebrow="Why choose us"
            title="Four reasons clients stay"
          />
          <div className="mt-10">
            <TrustStrip />
          </div>
        </div>
      </section>

      <section aria-labelledby="about-team" className="relative overflow-hidden bg-surface">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <span className="glow-blob animate-float-slow -left-20 top-0 size-72 bg-violet/10 sm:size-96" />
          <span
            className="glow-blob animate-float-slow -bottom-24 -right-20 size-64 bg-gold/10 sm:size-80"
            style={{ animationDelay: "2.5s" }}
          />
          <span className="bg-dot-grid absolute right-8 top-10 hidden size-32 text-foreground/[0.06] [mask-image:radial-gradient(circle,black,transparent_75%)] lg:block" />
        </div>
        <div className="container-page relative section-y">
          <SectionHeading
            id="about-team"
            eyebrow="The team"
            title="Specialists, not generalists"
            description="Photographers, drone pilots, editors, designers, press operators and event coordinators — briefed together on every job."
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                role: "Photography & video",
                detail: "Candid, traditional and cinematic coverage with multi-camera crews.",
              },
              {
                role: "Drone operations",
                detail: "Trained pilots planning safe flights around crowded venues.",
              },
              {
                role: "Design & pre-press",
                detail: "Artwork creation, colour proofing and print-ready file preparation.",
              },
              {
                role: "Events & decor",
                detail: "Stage design, lighting and on-the-day coordination.",
              },
            ].map((member) => (
              <li
                key={member.role}
                className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-6 shadow-e1"
              >
                <h3 className="text-lg text-foreground">{member.role}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{member.detail}</p>
              </li>
            ))}
          </ul>
         
        </div>
      </section>

      <div className="pb-16 sm:pb-20 lg:pb-24">
        <CtaBanner
          title="Let's plan your next project together"
          description="Share your requirement and we will suggest the right combination of media and print services."
        />
      </div>
    </SiteLayout>
  );
}
