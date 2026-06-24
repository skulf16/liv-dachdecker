import Link from "next/link";
import { CONTACT } from "@/lib/nav";

const footerNav = [
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Innungen", href: "/innungen" },
  { label: "Vorstand", href: "/vorstand" },
  { label: "Partner", href: "/partner" },
];

const footerService = [
  { label: "AZUBI-Lernplattform", href: "/ausbildung" },
  { label: "Photovoltaik-Manager", href: "/ausbildung" },
  { label: "Sachverständige", href: "/leistungen/sachverstaendige" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-slate text-white/70">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:pr-6">
            <p className="text-lg font-semibold tracking-tight text-white">
              <span className="text-clay-soft">LIV</span> Dachdecker
            </p>
            <p className="mt-1 text-sm text-white/50">Land Brandenburg</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Landesinnungsverband des Dachdeckerhandwerks Land Brandenburg.
              Acht Innungen, rund 130 Betriebe — vereint für ein Handwerk mit
              Bestand.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Navigation
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Service
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerService.map((item, i) => (
                <li key={`${item.href}-${i}`}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://www.dachdecker.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Betriebssuche ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Geschäftsstelle */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Geschäftsstelle
            </h2>
            <address className="mt-4 space-y-2 text-sm not-italic leading-relaxed">
              <p>
                {CONTACT.street}
                <br />
                {CONTACT.city}
              </p>
              <p>
                <a href={CONTACT.phoneHref} className="hover:text-white">
                  Tel. {CONTACT.phone}
                </a>
                <br />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                  {CONTACT.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <span className="text-white/50">
            © {year} Landesinnungsverband des Dachdeckerhandwerks Land
            Brandenburg
          </span>
          <div className="flex items-center gap-6">
            <Link href="/impressum" className="hover:text-white">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white">
              Datenschutz
            </Link>
            <a
              href="https://www.facebook.com/LivDachdeckerBrandenburg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white/50 hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M14 9h3l.4-3H14V4.3c0-.9.3-1.4 1.5-1.4H17V.2C16.6.1 15.6 0 14.5 0 12 0 10.3 1.5 10.3 4v2H7.5v3h2.8v9H14V9z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
