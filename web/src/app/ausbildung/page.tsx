import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { eduCards } from "@/data/content";

export const metadata: Metadata = {
  title: "Ausbildung & Qualifikation",
  description:
    "Vom digitalen Berichtsheft (BLOK) über den Photovoltaik-Manager bis zu den Sachverständigen: Nachwuchs und Qualifizierung im Dachdeckerhandwerk Brandenburg.",
};

export default function AusbildungPage() {
  return (
    <>
      <PageHero
        eyebrow="Nachwuchs & Qualifikation"
        title="Das Handwerk von morgen — heute ausgebildet."
        intro="Vom digitalen Berichtsheft bis zur Spezialisierung: Wir begleiten Auszubildende und Betriebe auf dem Weg zu geprüfter Kompetenz."
      />

      <Section tone="paper">
        <div className="relative aspect-[21/9] overflow-hidden rounded-xl border border-line">
          <Image
            src="/images/pv-roofer.jpg"
            alt="Dachdecker montiert eine Photovoltaik-Anlage auf einem Ziegeldach"
            fill
            sizes="(min-width: 1024px) 1100px, 100vw"
            className="object-cover object-[center_30%]"
          />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {eduCards.map((c) => (
            <article
              key={c.title}
              className="flex flex-col rounded-xl border border-line bg-paper p-7"
            >
              <span className="inline-flex w-fit rounded-full bg-surface-2 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-clay-deep">
                {c.tag}
              </span>
              <h2 className="mt-4 text-lg font-semibold text-ink">{c.title}</h2>
              <p className="mt-3 flex-1 leading-relaxed text-body">{c.text}</p>
              <Link
                href="/kontakt"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-clay-deep hover:text-clay"
              >
                Mehr erfahren <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
