export type BoardMember = {
  name: string;
  role: string;
  firm: string;
  monogram: string;
};

export const boardLead: BoardMember[] = [
  {
    name: "Karsten Kirchhoff",
    role: "Landesinnungsmeister",
    firm: "Dachdeckermeister Karsten Kirchhoff GmbH · Fehrbellin",
    monogram: "KK",
  },
  {
    name: "Mario Bayer",
    role: "stv. Landesinnungsmeister",
    firm: "Schaldach & Schröter Dachbau GmbH · Trebbin",
    monogram: "MB",
  },
];

export const boardMembers: BoardMember[] = [
  {
    name: "Nico Humburg",
    role: "Vorstand",
    firm: "H&S Dachdeckerei · Wusterwitz",
    monogram: "NH",
  },
  {
    name: "Marcel Lublow",
    role: "Vorstand",
    firm: "Dachdeckerei Lublow · Pritzwalk",
    monogram: "ML",
  },
  {
    name: "René Haase",
    role: "Vorstand",
    firm: "Dachdeckerei René Haase · Steinhöfel",
    monogram: "RH",
  },
  {
    name: "Alexander Lüderitz",
    role: "Vorstand",
    firm: "DDM Alexander Lüderitz · Brandenburg",
    monogram: "AL",
  },
  {
    name: "Sven Schönbrodt",
    role: "Vorstand",
    firm: "Dachdeckerei Sven Schönbrodt · Finowfurt",
    monogram: "SS",
  },
];
