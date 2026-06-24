import Container from "./Container";
import { cn } from "@/lib/cn";

/** Vertical section with consistent rhythm. `tone` sets the background. */
export default function Section({
  children,
  tone = "paper",
  className,
}: {
  children: React.ReactNode;
  tone?: "paper" | "surface" | "slate";
  className?: string;
}) {
  const tones = {
    paper: "bg-paper",
    surface: "bg-surface",
    slate: "bg-slate text-white/80",
  };
  return (
    <section className={cn(tones[tone], className)}>
      <Container className="py-16 sm:py-20 lg:py-24">{children}</Container>
    </section>
  );
}

/** Centered or left-aligned heading block used at the top of sections. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "light",
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-wider",
            tone === "dark" ? "text-clay-soft" : "text-clay-deep",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-2xl font-semibold tracking-tight sm:text-3xl",
          tone === "dark" ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            tone === "dark" ? "text-white/70" : "text-body",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
