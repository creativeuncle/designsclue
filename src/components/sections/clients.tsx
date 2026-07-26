import { Container } from "@/components/ui/container";
import { Logomark } from "@/components/ui/logomark";

const CLIENTS = [
  "Northline Robotics",
  "Fernbank Coffee Co.",
  "Marlow Health",
  "Onward Freight",
  "Kessler & Vine",
  "Loom Systems",
  "Basalt Interiors",
  "Periwinkle",
];

export function Clients() {
  const loop = [...CLIENTS, ...CLIENTS];

  return (
    <section className="border-y border-border py-14">
      <Container className="mb-8 px-6 md:px-10">
        <p className="text-sm text-muted">Trusted by teams at</p>
      </Container>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-marquee gap-16 py-2 motion-reduce:animate-none">
          {loop.map((name, i) => (
            <Logomark key={`${name}-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
