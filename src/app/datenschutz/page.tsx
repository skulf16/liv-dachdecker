import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung des Landesinnungsverbandes des Dachdeckerhandwerks Land Brandenburg.",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Datenschutzerklärung" />
      <Section tone="paper">
        <div className="legal max-w-3xl">
          <p>
            <em>
              Diese Datenschutzerklärung ist eine sorgfältig vorbereitete
              Vorlage. Bitte vor Veröffentlichung durch eine fachkundige Person
              / Datenschutzbeauftragte/n prüfen und an die tatsächlich
              eingesetzten Dienste anpassen.
            </em>
          </p>

          <h2>1. Verantwortlicher</h2>
          <p>
            Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            <br />
            <strong>
              Landesinnungsverband des Dachdeckerhandwerks Land Brandenburg
            </strong>
            <br />
            Hegelallee 44, 14467 Potsdam
            <br />
            Telefon: 0331 – 71 90 91 · E-Mail:{" "}
            <a href="mailto:maske@liv-dachdecker.de">maske@liv-dachdecker.de</a>
          </p>
          <p>
            <span className="todo">
              [Sofern bestellt: Kontaktdaten des/der Datenschutzbeauftragten
              ergänzen.]
            </span>
          </p>

          <h2>2. Allgemeines zur Datenverarbeitung</h2>
          <p>
            Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich
            nur, soweit dies zur Bereitstellung einer funktionsfähigen Website
            sowie unserer Inhalte und Leistungen erforderlich ist.
            Rechtsgrundlagen sind insbesondere Art. 6 Abs. 1 DSGVO (Einwilligung,
            Vertrag, berechtigtes Interesse).
          </p>

          <h2>3. Hosting &amp; Server-Logfiles</h2>
          <p>
            Beim Aufruf dieser Website erhebt der Hosting-Anbieter automatisch
            Informationen, die Ihr Browser übermittelt (Server-Logfiles):
            Browsertyp und -version, verwendetes Betriebssystem, Referrer-URL,
            Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und
            IP-Adresse. Diese Daten dienen der technischen Bereitstellung,
            Sicherheit und Stabilität (Art. 6 Abs. 1 lit. f DSGVO) und werden
            nach kurzer Zeit gelöscht.
          </p>
          <p>
            <span className="todo">
              [Hosting-Anbieter benennen und ggf. Auftragsverarbeitungsvertrag
              (AVV) erwähnen.]
            </span>
          </p>

          <h2>4. Kontaktaufnahme</h2>
          <p>
            Wenn Sie uns per E-Mail oder über das Kontaktformular kontaktieren,
            werden Ihre Angaben (Name, E-Mail-Adresse, ggf. Betrieb, Telefon,
            Nachricht) zur Bearbeitung Ihrer Anfrage verarbeitet (Art. 6 Abs. 1
            lit. b bzw. f DSGVO). Das Kontaktformular dieser Website öffnet Ihr
            lokales E-Mail-Programm; es werden hierbei keine Formulardaten auf
            dem Server gespeichert. Die Daten werden gelöscht, sobald sie für die
            Zweckerreichung nicht mehr erforderlich sind.
          </p>

          <h2>5. Schriftarten</h2>
          <p>
            Diese Website bindet die Schriftart „Inter" ein. Die Schriftdateien
            werden lokal vom eigenen Server ausgeliefert (Self-Hosting); es
            erfolgt hierbei keine Verbindung zu Servern Dritter und keine
            Übertragung Ihrer IP-Adresse an Google.
          </p>

          <h2>6. Cookies</h2>
          <p>
            Diese Website setzt für ihren Betrieb keine Tracking- oder
            Marketing-Cookies. Technisch notwendige Cookies können zum Betrieb
            erforderlich sein (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
          <p>
            <span className="todo">
              [Falls künftig Statistik-/Marketing-Dienste oder ein Cookie-Banner
              eingesetzt werden, hier ergänzen.]
            </span>
          </p>

          <h2>7. Externe Links</h2>
          <p>
            Unsere Website verweist auf externe Angebote (z. B. Innungen,
            Partner, soziale Netzwerke). Mit Anklicken eines solchen Links
            verlassen Sie unseren Verantwortungsbereich; für die
            Datenverarbeitung der Drittanbieter gelten deren
            Datenschutzbestimmungen.
          </p>

          <h2>8. Ihre Rechte</h2>
          <p>
            Ihnen stehen gegenüber dem Verantwortlichen folgende Rechte
            hinsichtlich Ihrer personenbezogenen Daten zu:
          </p>
          <ul>
            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>
              Widerspruchsrecht (Art. 21 DSGVO) und Widerruf erteilter
              Einwilligungen (Art. 7 Abs. 3 DSGVO)
            </li>
          </ul>

          <h2>9. Beschwerderecht bei der Aufsichtsbehörde</h2>
          <p>
            Unbeschadet anderweitiger Rechtsbehelfe steht Ihnen ein
            Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu. Zuständig
            ist: Die Landesbeauftragte für den Datenschutz und für das Recht auf
            Akteneinsicht Brandenburg (LDA Brandenburg), Stahnsdorfer Damm 77,
            14532 Kleinmachnow.
          </p>

          <h2>10. SSL-/TLS-Verschlüsselung</h2>
          <p>
            Diese Seite nutzt aus Sicherheitsgründen eine SSL-/TLS-
            Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie am
            „https://" in der Adresszeile Ihres Browsers.
          </p>

          <h2>11. Aktualität</h2>
          <p>
            Es gilt die jeweils aktuelle, auf dieser Website veröffentlichte
            Fassung dieser Datenschutzerklärung.{" "}
            <span className="todo">[Stand/Datum ergänzen.]</span>
          </p>
        </div>
      </Section>
    </>
  );
}
