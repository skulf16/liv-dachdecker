import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section, { SectionHeading } from "@/components/Section";
import { pillars, benefits } from "@/data/content";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Stärke, Information und Marketing: die Vorteile einer Mitgliedschaft im Landesinnungsverband des Dachdeckerhandwerks Land Brandenburg im Detail.",
};

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        eyebrow="Leistungen"
        title="Drei Versprechen an jedes Mitglied."
        intro="Stärke, Information und Marketing — die Innungsorganisation arbeitet für den Betrieb, damit der Betrieb für das Dach arbeiten kann."
      />

      <Section tone="paper">
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.n}
              className="rounded-xl border border-line bg-paper p-7"
            >
              <span className="text-sm font-semibold text-clay">{p.n}</span>
              <h2 className="mt-3 text-xl font-semibold text-ink">{p.title}</h2>
              <p className="mt-3 leading-relaxed text-body">{p.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="surface" className="border-t border-line">
        <SectionHeading
          eyebrow="Im Detail"
          title="Ihre Vorteile als Mitglied"
          intro="Konkrete Leistungen, die im Betrieb ankommen — von Fachregeln über Gewährleistung bis zur Interessenvertretung."
        />
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {benefits.map((b) => (
            <div key={b.title} className="border-t border-line-strong pt-5">
              <h3 className="text-lg font-semibold text-ink">{b.title}</h3>
              <p className="mt-2 leading-relaxed text-body">{b.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-line bg-paper p-7 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <h3 className="text-lg font-semibold text-ink">
              Sachverständige des Dachdeckerhandwerks
            </h3>
            <p className="mt-2 max-w-2xl leading-relaxed text-body">
              Geprüfte Sachverständige erstellen neutrale Gutachten bei
              Schadensfragen und Beurteilungen.
            </p>
          </div>
          <Link
            href="/leistungen/sachverstaendige"
            className="mt-4 inline-flex shrink-0 items-center gap-2 rounded-md border border-line-strong px-5 py-3 text-sm font-semibold text-ink hover:border-ink hover:bg-surface sm:mt-0"
          >
            Mehr erfahren <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Section>
    </>
  );
}
