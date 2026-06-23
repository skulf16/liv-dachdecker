import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum des Landesinnungsverbandes des Dachdeckerhandwerks Land Brandenburg.",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Impressum" />
      <Section tone="paper">
        <div className="legal max-w-3xl">
          <h2>Angaben gemäß § 5 DDG</h2>
          <p>
            <strong>
              Landesinnungsverband des Dachdeckerhandwerks Land Brandenburg
            </strong>
            <br />
            Hegelallee 44
            <br />
            14467 Potsdam
          </p>

          <h2>Vertreten durch</h2>
          <p>
            Landesinnungsmeister Karsten Kirchhoff{" "}
            <span className="todo">
              [bitte vertretungsberechtigte Person/en bestätigen bzw.
              Geschäftsführung ergänzen]
            </span>
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: 0331 – 71 90 91
            <br />
            Telefax: 0331 – 71 90 92
            <br />
            E-Mail:{" "}
            <a href="mailto:maske@liv-dachdecker.de">maske@liv-dachdecker.de</a>
          </p>

          <h2>Rechtsform &amp; Register</h2>
          <p>
            <span className="todo">
              [Rechtsform ergänzen — z. B. „eingetragener Verein". Bei e. V.:
              Registergericht und Vereinsregister-Nummer angeben, z. B.
              Amtsgericht Potsdam, VR …]
            </span>
          </p>

          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            <span className="todo">[USt-IdNr. ergänzen, sofern vorhanden]</span>
          </p>

          <h2>Redaktionell verantwortlich (§ 18 Abs. 2 MStV)</h2>
          <p>
            Karsten Kirchhoff
            <br />
            Anschrift wie oben{" "}
            <span className="todo">
              [verantwortliche Person und ladungsfähige Anschrift bestätigen]
            </span>
          </p>

          <h2>EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            .<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>

          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
            oder Sperrung der Nutzung von Informationen nach den allgemeinen
            Gesetzen bleiben hiervon unberührt.
          </p>

          <h2>Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich.
          </p>

          <h2>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht.
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>
      </Section>
    </>
  );
}
