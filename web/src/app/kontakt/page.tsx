import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { CONTACT } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Sprechen Sie mit der Geschäftsstelle des Landesinnungsverbandes des Dachdeckerhandwerks Land Brandenburg in Potsdam — zu Mitgliedschaft, Sachverständigen oder Presse.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Sprechen wir über Ihre Mitgliedschaft."
        intro="Ob Beitritt, Sachverständigen-Anfrage oder Presse — die Geschäftsstelle in Potsdam ist für Sie da."
      />

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          {/* Contact details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-clay-deep">
                Geschäftsstelle
              </h2>
              <p className="mt-3 leading-relaxed text-ink">
                {CONTACT.street}
                <br />
                {CONTACT.city}
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  CONTACT.street + " " + CONTACT.city,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-clay-deep hover:text-clay"
              >
                Route planen <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-clay-deep">
                Telefon &amp; Fax
              </h2>
              <p className="mt-3 text-ink">
                <a href={CONTACT.phoneHref} className="hover:text-clay-deep">
                  {CONTACT.phone}
                </a>
                <br />
                <span className="text-sm text-muted">Fax: {CONTACT.fax}</span>
              </p>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-clay-deep">
                E-Mail
              </h2>
              <p className="mt-3">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-ink hover:text-clay-deep"
                >
                  {CONTACT.email}
                </a>
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-xl border border-line bg-surface p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-ink">Nachricht senden</h2>
            <p className="mt-1 text-sm text-muted">
              Wir melden uns kurzfristig zurück. Felder mit * sind Pflichtfelder.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
