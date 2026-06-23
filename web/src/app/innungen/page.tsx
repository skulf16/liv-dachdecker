import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { innungen } from "@/data/innungen";

export const metadata: Metadata = {
  title: "Innungen",
  description:
    "Acht regionale Dachdecker-Innungen in Brandenburg — von der Prignitz bis zur Uckermark. Finden Sie Ihre Innung und den richtigen Ansprechpartner.",
};

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-clay" fill="none" aria-hidden="true">
      <path
        d="M5 4h4l2 5-3 2a12 12 0 005 5l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-clay" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export default function InnungenPage() {
  return (
    <>
      <PageHero
        eyebrow="Innungen"
        title="Acht Innungen. Eine in Ihrer Nähe."
        intro="Von der Prignitz bis zur Uckermark, von Potsdam bis Oder-Spree — finden Sie Ihre regionale Dachdecker-Innung und den richtigen Ansprechpartner."
      />

      <Section tone="paper">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {innungen.map((i) => (
            <article
              key={i.name}
              className="flex flex-col rounded-xl border border-line bg-paper p-6"
            >
              <h2 className="text-lg font-semibold text-ink">{i.name}</h2>
              <p className="mt-1 text-sm text-body">
                {i.obermeisterRole}{" "}
                <span className="font-medium text-ink">{i.obermeister}</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {i.org}
                <br />
                {i.address}
              </p>
              <div className="mt-4 space-y-2 border-t border-line pt-4 text-sm">
                <a
                  href={i.phoneHref}
                  className="flex items-center gap-2 text-body hover:text-clay-deep"
                >
                  <PhoneIcon />
                  {i.phoneDisplay}
                </a>
                <a
                  href={`mailto:${i.email}`}
                  className="flex items-center gap-2 break-all text-body hover:text-clay-deep"
                >
                  <MailIcon />
                  {i.email}
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
