export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const mainNav: NavItem[] = [
  { label: "Über uns", href: "/ueber-uns" },
  {
    label: "Leistungen",
    href: "/leistungen",
    children: [
      { label: "Ihre Vorteile", href: "/leistungen" },
      { label: "Sachverständige", href: "/leistungen/sachverstaendige" },
    ],
  },
  { label: "Ausbildung", href: "/ausbildung" },
  { label: "Innungen", href: "/innungen" },
  { label: "Vorstand", href: "/vorstand" },
  { label: "Partner", href: "/partner" },
  { label: "Kontakt", href: "/kontakt" },
];

export const CONTACT = {
  name: "Landesinnungsverband des Dachdeckerhandwerks Land Brandenburg",
  street: "Hegelallee 44",
  city: "14467 Potsdam",
  phone: "0331 – 71 90 91",
  phoneHref: "tel:+4933171 9091",
  fax: "0331 – 71 90 92",
  email: "maske@liv-dachdecker.de",
};
