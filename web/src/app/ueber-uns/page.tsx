import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Container from "@/components/Container";
import { stats } from "@/data/content";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Der Landesinnungsverband des Dachdeckerhandwerks Land Brandenburg — acht Innungen, rund 130 Mitgliedsbetriebe, eine geschlossene Stimme für das Handwerk.",
};

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title="Gemeinsam stärker als jedes Dach für sich."
        intro="Wir vertreten das Dachdeckerhandwerk in ganz Brandenburg — über alle Ebenen hinweg."
      />

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-5 leading-relaxed text-body">
            <p>
              Der Landesinnungsverband des Dachdeckerhandwerks Land Brandenburg
              ist der Zusammenschluss von acht regionalen Innungen mit rund 130
              Mitgliedsbetrieben. Wir unterstützen unsere Innungen in der
              täglichen Arbeit und geben dem Handwerk eine geschlossene, hörbare
              Stimme.
            </p>
            <p>
              Gegenüber industriellem Gewinnstreben, wachsender Bürokratie und
              Preisdruck setzen wir auf das, was zählt: solide Ausbildung,
              geprüfte Qualität und den Zusammenhalt eines Handwerks mit
              Tradition.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="relative aspect-[3/2] overflow-hidden rounded-xl border border-line">
              <Image
                src="/images/tiles-laying.jpg"
                alt="Dachdecker beim Eindecken eines Steildachs mit roten Tondachziegeln"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-line">
              <Image
                src="/images/minister.jpg"
                alt="Vertreter der Brandenburger Dachdecker-Innungen im Austausch mit der Landespolitik"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <section className="border-t border-line bg-surface">
        <Container className="py-14 lg:py-16">
          <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  {s.value}
                </dt>
                <dd className="mt-2 text-sm leading-snug text-muted">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
    </>
  );
}
