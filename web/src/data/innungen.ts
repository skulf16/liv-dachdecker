export type Innung = {
  name: string;
  obermeisterRole: string;
  obermeister: string;
  org: string;
  address: string;
  phoneDisplay: string;
  phoneHref: string;
  email: string;
};

// NOTE: Contact data was extracted from the source site and is not yet
// verified against the official records — confirm before going live.
export const innungen: Innung[] = [
  {
    name: "Innung Barnim",
    obermeisterRole: "Obermeister",
    obermeister: "DDM Marco Riemelt",
    org: "Kreishandwerkerschaft",
    address: "Eberswalder Straße 33, 16227 Eberswalde",
    phoneDisplay: "03334 / 25 69 0",
    phoneHref: "tel:+49333425690",
    email: "innung@kh-barnim.de",
  },
  {
    name: "Innung Brandenburg-Belzig",
    obermeisterRole: "Obermeisterin",
    obermeister: "Dipl.-Ing. Susann Mai",
    org: "Kreishandwerkerschaft",
    address: "Sankt-Annen-Straße 26, 14776 Brandenburg a.d.H.",
    phoneDisplay: "03381 / 52 65 - 0",
    phoneHref: "tel:+49338152650",
    email: "info@kh-brb.de",
  },
  {
    name: "Innung Oder-Spree",
    obermeisterRole: "Obermeister",
    obermeister: "DDM Thomas Charlet",
    org: "Kreishandwerkerschaft",
    address: "Wriezener Straße 61a, 15517 Fürstenwalde",
    phoneDisplay: "03361 / 34 27 04",
    phoneHref: "tel:+493361342704",
    email: "teichert@kreishandwerkerschaft-oder-spree.de",
  },
  {
    name: "Innung Ostprignitz-Ruppin",
    obermeisterRole: "Obermeister",
    obermeister: "DDM Karsten Kirchhoff",
    org: "Kreishandwerkerschaft",
    address: "Karl-Gustav-Straße 4, 16816 Neuruppin",
    phoneDisplay: "03391 / 82 18 00",
    phoneHref: "tel:+493391821800",
    email: "s.lindemann@kreishandwerkerschaft-opr.de",
  },
  {
    name: "Innung Potsdam",
    obermeisterRole: "Obermeister",
    obermeister: "DDM Ralf Bieder",
    org: "Kreishandwerkerschaft",
    address: "Hegelallee 15, 14467 Potsdam",
    phoneDisplay: "0331 / 27 00 231",
    phoneHref: "tel:+493312700231",
    email: "info@potsdamerhandwerk.de",
  },
  {
    name: "Innung Potsdam-Süd",
    obermeisterRole: "Obermeister",
    obermeister: "DDM Ronny Quappe",
    org: "Kreishandwerkerschaft",
    address: "Am Heideland 2, 14913 Jüterbog",
    phoneDisplay: "03372 / 42 07 34",
    phoneHref: "tel:+493372420734",
    email: "b-kley@handwerk-tf.de",
  },
  {
    name: "Innung Prignitz",
    obermeisterRole: "Obermeister",
    obermeister: "DDM Jens Hildebrandt",
    org: "Kreishandwerkerschaft",
    address: "Bahnhofsplatz 8, 19348 Perleberg",
    phoneDisplay: "03876 / 78 51 46",
    phoneHref: "tel:+493876785146",
    email: "info@handwerk-prignitz.de",
  },
  {
    name: "Innung Uckermark",
    obermeisterRole: "Obermeister",
    obermeister: "DDM Rico Tauchert",
    org: "Kreishandwerkerschaft",
    address: "Dr.-Wilhelm-Külz-Straße 40, 17291 Prenzlau",
    phoneDisplay: "03984 / 22 57",
    phoneHref: "tel:+4939842257",
    email: "info@khs-um.de",
  },
];
