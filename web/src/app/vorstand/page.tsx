import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { boardLead, boardMembers, type BoardMember } from "@/data/vorstand";

export const metadata: Metadata = {
  title: "Vorstand",
  description:
    "Der ehrenamtliche Vorstand des Landesinnungsverbandes des Dachdeckerhandwerks Land Brandenburg — gewählte Praktiker aus den Betrieben.",
};

function Person({ p, lead = false }: { p: BoardMember; lead?: boolean }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-line bg-paper p-5">
      <span
        className={
          "flex shrink-0 items-center justify-center rounded-full font-semibold " +
          (lead
            ? "h-14 w-14 bg-clay text-base text-white"
            : "h-12 w-12 bg-surface-2 text-sm text-clay-deep")
        }
        aria-hidden="true"
      >
        {p.monogram}
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-clay-deep">
          {p.role}
        </p>
        <p className="text-lg font-semibold text-ink">{p.name}</p>
        <p className="mt-0.5 text-sm text-muted">{p.firm}</p>
      </div>
    </div>
  );
}

export default function VorstandPage() {
  return (
    <>
      <PageHero
        eyebrow="Vorstand"
        title="Die Köpfe hinter dem Verband."
        intro="Gewählte Praktiker aus den Betrieben Brandenburgs — sie führen den Landesinnungsverband ehrenamtlich und mit Handschlagqualität."
      />

      <Section tone="paper">
        <div className="grid gap-6 md:grid-cols-2">
          {boardLead.map((p) => (
            <Person key={p.name} p={p} lead />
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {boardMembers.map((p) => (
            <Person key={p.name} p={p} />
          ))}
        </div>
      </Section>
    </>
  );
}
