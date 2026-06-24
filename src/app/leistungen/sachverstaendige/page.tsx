import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Sachverständige des Dachdeckerhandwerks",
  description:
    "Geprüfte Sachverständige des Dachdeckerhandwerks Brandenburg erstellen neutrale, fundierte Gutachten bei Schadensfragen und Beurteilungen.",
};

const leistungen = [
  {
    title: "Schadensgutachten",
    text: "Neutrale Bewertung von Dach- und Abdichtungsschäden — als Grundlage für Sanierung, Versicherung oder rechtliche Klärung.",
  },
  {
    title: "Zustands- & Qualitätsbeurteilung",
    text: "Fachliche Einschätzung der Ausführungsqualität und des Zustands von Dächern, Abdichtungen und Anschlüssen.",
  },
  {
    title: "Beweissicherung",
    text: "Dokumentation des Ist-Zustands vor, während und nach Bauarbeiten zur Absicherung aller Beteiligten.",
  },
];

export default function SachverstaendigePage() {
  return (
    <>
      <PageHero
        eyebrow="Leistungen · Sachverständige"
        title="Geprüfte Sachverständige des Dachdeckerhandwerks."
        intro="Neutrale Kompetenz bei Schadensfragen und Beurteilungen — fundierte Gutachten von qualifizierten Sachverständigen des Dachdeckerhandwerks Brandenburg."
      />

      <Section tone="paper">
        <div className="max-w-2xl space-y-5 leading-relaxed text-body">
          <p>
            Die Sachverständigen des Dachdeckerhandwerks Brandenburg verbinden
            handwerkliche Praxis mit geprüfter fachlicher Qualifikation. Ihre
            Gutachten sind unabhängig, nachvollziehbar und vor Gericht wie
            gegenüber Versicherungen belastbar.
          </p>
          <p>
            Ob Bauherr, Betrieb, Versicherung oder Gericht — wir vermitteln den
            passenden Sachverständigen für Ihre Fragestellung.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {leistungen.map((l) => (
            <article
              key={l.title}
              className="rounded-xl border border-line bg-paper p-7"
            >
              <h2 className="text-lg font-semibold text-ink">{l.title}</h2>
              <p className="mt-3 leading-relaxed text-body">{l.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 rounded-md bg-clay px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-clay-deep"
          >
            Sachverständige anfragen <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Section>
    </>
  );
}
