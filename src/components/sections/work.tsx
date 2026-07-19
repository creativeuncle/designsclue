"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    name: "Northline Robotics",
    category: "Product site, Web app",
    year: "2026",
    image: "https://picsum.photos/seed/clue-work-northline/1000/750",
  },
  {
    name: "Fernbank Coffee Co.",
    category: "Brand, E-commerce",
    year: "2025",
    image: "https://picsum.photos/seed/clue-work-fernbank/1000/750",
  },
  {
    name: "Marlow Health",
    category: "Product design, iOS",
    year: "2025",
    image: "https://picsum.photos/seed/clue-work-marlow/1000/750",
  },
  {
    name: "Onward Freight",
    category: "Dashboard, Marketing site",
    year: "2024",
    image: "https://picsum.photos/seed/clue-work-onward/1000/750",
  },
];

export function Work() {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !wrap.current || !track.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const ctx = gsap.context(() => {
        const distance =
          track.current!.scrollWidth - wrap.current!.clientWidth;

        gsap.to(track.current, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: wrap.current,
            start: "top top",
            end: () => `+=${distance}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      }, wrap);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, [reduce]);

  return (
    <section id="work" ref={wrap} className="relative overflow-hidden py-24 md:py-32">
      <Container>
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Selected work
          </h2>
          <p className="max-w-[32ch] text-sm text-muted">
            A handful of the products and brands we&apos;ve shipped in the
            last two years.
          </p>
        </Reveal>
      </Container>

      <div
        ref={track}
        className="flex gap-6 px-6 md:px-10 lg:w-max lg:gap-8 lg:pr-[10vw]"
      >
        {PROJECTS.map((project) => (
          <a
            key={project.name}
            href="#contact"
            className="group relative block w-[85vw] shrink-0 sm:w-[60vw] lg:w-[32vw]"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border">
              <Image
                src={project.image}
                alt={`${project.name} project preview`}
                fill
                sizes="(min-width: 1024px) 32vw, 80vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-medium tracking-tight">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{project.category}</p>
              </div>
              <div className="flex shrink-0 items-center gap-2 pt-1 text-sm text-muted">
                {project.year}
                <ArrowUpRight
                  size={16}
                  className="text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
