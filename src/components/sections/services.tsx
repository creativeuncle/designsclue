import Image from "next/image";
import {
  Code,
  CursorClick,
  FilmSlate,
  PenNib,
  SquaresFour,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    title: "Web Development",
    description:
      "Next.js and React builds that stay fast under real traffic, not just in a demo.",
    icon: Code,
    span: "lg:col-span-2 lg:row-span-2",
    image: "https://picsum.photos/seed/clue-service-development/900/900",
  },
  {
    title: "Brand & Identity",
    description: "Logo systems, type, and color built to survive five years.",
    icon: PenNib,
    span: "lg:col-span-1",
    gradient: true,
  },
  {
    title: "Product Design",
    description: "Interfaces for SaaS and mobile products, wired to research.",
    icon: CursorClick,
    span: "lg:col-span-1",
  },
  {
    title: "Motion & Interaction",
    description: "Scroll choreography and micro-interactions with intent.",
    icon: FilmSlate,
    span: "lg:col-span-1",
  },
  {
    title: "Web Design",
    description: "Landing pages and marketing sites that convert on a glance.",
    icon: SquaresFour,
    span: "lg:col-span-1",
    image: "https://picsum.photos/seed/clue-service-webdesign/900/700",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            What we do
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[220px]">
          {SERVICES.map((service) => (
            <Reveal key={service.title} className={service.span}>
              <div
                className={cn(
                  "group relative flex h-full min-h-[240px] flex-col justify-end overflow-hidden rounded-3xl border border-border p-7",
                  service.gradient && "bg-gradient-to-br from-accent/15 via-surface to-surface",
                  !service.gradient && !service.image && "bg-surface",
                )}
              >
                {service.image && (
                  <>
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 420px, 90vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
                  </>
                )}

                <service.icon
                  size={28}
                  weight="light"
                  className="relative z-10 mb-4 text-accent"
                />
                <h3 className="relative z-10 text-xl font-medium tracking-tight">
                  {service.title}
                </h3>
                <p className="relative z-10 mt-2 max-w-[32ch] text-sm text-muted">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
