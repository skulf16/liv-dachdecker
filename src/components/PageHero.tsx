import Container from "./Container";

export default function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-line bg-surface">
      <Container className="py-14 sm:py-16 lg:py-20">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-clay-deep">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-body">
            {intro}
          </p>
        )}
      </Container>
    </section>
  );
}
