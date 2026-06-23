import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { partners } from "@/data/partner";

export const metadata: Metadata = {
  title: "Partner",
  description:
    "Über 40 namhafte Hersteller, Versicherer und Dienstleister stehen an der Seite des Brandenburger Dachdeckerhandwerks.",
};

export default function PartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner"
        title="Ein Netzwerk, das trägt."
        intro="Über 40 namhafte Hersteller, Versicherer und Dienstleister stehen an der Seite des Brandenburger Dachdeckerhandwerks."
      />

      <Section tone="paper">
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
          {partners.map((name) => (
            <li
              key={name}
              className="flex items-center justify-center bg-paper px-4 py-7 text-center text-sm font-medium text-ink"
            >
              {name}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">
          Auszug aus dem Partnernetzwerk des Landesinnungsverbandes.
        </p>
      </Section>
    </>
  );
}
