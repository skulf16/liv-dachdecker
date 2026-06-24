import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import Section, { SectionHeading } from "@/components/Section";
import { stats, pillars } from "@/data/content";
import { partners } from "@/data/partner";

export default function Home() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative isolate overflow-hidden bg-slate text-white">
        <Image
          src="/images/roofers-team.jpg"
          alt=""
          fill
          loading="eager"
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate/95 via-slate/80 to-slate/40"
          aria-hidden="true"
        />
        <Container className="relative py-24 sm:py-28 lg:py-36">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-clay-soft">
              Landesinnungsverband · seit über 30 Jahren
            </p>
            <h1 className="text-3xl font-semibold leading-[1.1] tracking-tight text-white [hyphens:auto] sm:text-5xl lg:text-6xl">
              Acht Innungen, ein starkes Dachdeckerhandwerk.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Der Landesinnungsverband des Dachdeckerhandwerks Land Brandenburg
              bündelt rund 130 Betriebe — für faire Interessenvertretung in
              Politik und Wirtschaft, geprüfte Qualität und ein Handwerk mit
              Zukunft.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-md bg-clay px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-clay-deep"
              >
                Mitglied werden <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/innungen"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Ihre Innung finden
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== Stats ===== */}
      <section className="border-b border-line bg-paper">
        <Container>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-none lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="px-2 py-8 sm:px-4 lg:py-10">
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

      {/* ===== Leistungen / service cards ===== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Leistungen"
          title="Drei Versprechen an jedes Mitglied."
          intro="Stärke, Information und Marketing — die Innungsorganisation arbeitet für den Betrieb, damit der Betrieb für das Dach arbeiten kann."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.n}
              className="rounded-xl border border-line bg-paper p-7"
            >
              <span className="text-sm font-semibold text-clay">{p.n}</span>
              <h3 className="mt-3 text-xl font-semibold text-ink">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-body">{p.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 text-sm font-semibold text-clay-deep hover:text-clay"
          >
            Alle Vorteile der Mitgliedschaft <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Section>

      {/* ===== Mission band ===== */}
      <section className="bg-slate">
        <Container className="py-20 text-center lg:py-28">
          <blockquote className="mx-auto max-w-3xl text-2xl font-medium leading-snug text-white sm:text-3xl">
            „Auch ein Dachdecker braucht{" "}
            <span className="text-clay-soft">sicheren Boden</span> unter den
            Füßen."
          </blockquote>
          <p className="mt-6 text-sm uppercase tracking-wider text-white/40">
            Selbstverständnis des Landesinnungsverbandes
          </p>
        </Container>
      </section>

      {/* ===== Über uns teaser ===== */}
      <Section tone="paper">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-clay-deep">
              Über uns
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Gemeinsam stärker als jedes Dach für sich.
            </h2>
            <p className="mt-5 leading-relaxed text-body">
              Der Landesinnungsverband ist der Zusammenschluss von acht
              regionalen Innungen mit rund 130 Mitgliedsbetrieben. Wir
              unterstützen unsere Innungen in der täglichen Arbeit und geben dem
              Handwerk eine geschlossene, hörbare Stimme — gegenüber Politik,
              Verwaltung und Wirtschaft.
            </p>
            <div className="mt-7">
              <Link
                href="/ueber-uns"
                className="inline-flex items-center gap-2 text-sm font-semibold text-clay-deep hover:text-clay"
              >
                Mehr über den Verband <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line">
            <Image
              src="/images/tiles-laying.jpg"
              alt="Dachdecker beim Eindecken eines Steildachs mit roten Tondachziegeln"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* ===== Partner teaser ===== */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="Partner"
          title="Ein Netzwerk, das trägt."
          intro="Über 40 namhafte Hersteller, Versicherer und Dienstleister stehen an der Seite des Brandenburger Dachdeckerhandwerks."
        />
        <ul className="mt-10 flex flex-wrap gap-2.5">
          {partners.slice(0, 14).map((name) => (
            <li
              key={name}
              className="rounded-full border border-line bg-paper px-4 py-2 text-sm text-body"
            >
              {name}
            </li>
          ))}
          <li className="rounded-full px-4 py-2 text-sm font-medium text-clay-deep">
            <Link href="/partner" className="hover:text-clay">
              + viele weitere →
            </Link>
          </li>
        </ul>
      </Section>

      {/* ===== CTA ===== */}
      <section className="bg-slate-2">
        <Container className="py-20 text-center lg:py-24">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white">
            Werden Sie Teil einer starken Innung.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/70">
            Schließen Sie sich rund 130 Brandenburger Betrieben an — für geprüfte
            Qualität, faire Interessenvertretung und ein Handwerk, das
            zusammensteht.
          </p>
          <div className="mt-8">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-md bg-clay px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-clay-deep"
            >
              Mitglied werden <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
