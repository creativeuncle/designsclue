import { Container } from "@/components/ui/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

const STATS = [
  { value: "7", label: "years building for the web" },
  { value: "46", label: "products shipped to production" },
  { value: "12", label: "countries our clients work from" },
  { value: "94%", label: "of clients come back for a second project" },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <Container>
        <Reveal className="max-w-3xl">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl">
            We started Clue because most agency websites looked like the
            brief had been outsourced to a template.
          </h2>
          <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-muted">
            We are a small studio of designers and engineers who care about
            the details most teams skip: load time, motion that means
            something, and copy that sounds like a person wrote it.
          </p>
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-border pt-12 md:grid-cols-4">
          {STATS.map((stat) => (
            <RevealItem key={stat.label}>
              <div className="font-mono text-4xl font-medium tracking-tight text-accent md:text-5xl">
                {stat.value}
              </div>
              <p className="mt-3 max-w-[22ch] text-sm text-muted">
                {stat.label}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
