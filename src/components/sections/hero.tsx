"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { PointerEvent } from "react";
import { ArrowDownRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { MagneticButton } from "@/components/ui/button";

export function Hero() {
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 20 });
  const sy = useSpring(py, { stiffness: 60, damping: 20 });

  const backTilt = {
    x: useTransform(sx, [-1, 1], [-14, 14]),
    y: useTransform(sy, [-1, 1], [-10, 10]),
  };
  const frontTilt = {
    x: useTransform(sx, [-1, 1], [10, -10]),
    y: useTransform(sy, [-1, 1], [8, -8]),
  };

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    px.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    py.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  }

  return (
    <section className="relative overflow-hidden pt-16 md:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]"
      />
      <Container className="grid grid-cols-1 items-center gap-14 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-24">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl font-semibold leading-[1.05] tracking-tighter text-balance md:text-6xl lg:text-7xl"
          >
            Websites that feel <em className="text-accent not-italic">inevitable.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-[46ch] text-lg leading-relaxed text-muted"
          >
            Clue designs and builds fast, distinctive websites and product
            interfaces for founders who refuse to look templated.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#contact">Start a project</MagneticButton>
            <MagneticButton href="#work" variant="ghost">
              <span className="flex items-center gap-2">
                View work
                <ArrowDownRight size={16} weight="bold" />
              </span>
            </MagneticButton>
          </motion.div>
        </div>

        <div
          onPointerMove={handlePointerMove}
          className="relative mx-auto hidden aspect-[4/5] w-full max-w-md sm:block"
        >
          <motion.div
            style={backTilt}
            className="absolute right-0 top-6 aspect-[3/4] w-[62%] overflow-hidden rounded-3xl border border-border"
          >
            <Image
              src="https://picsum.photos/seed/clue-agency-workspace/700/900"
              alt="Studio workspace, screens showing in-progress interface designs"
              fill
              sizes="(min-width: 1024px) 320px, 45vw"
              className="object-cover"
              priority
            />
          </motion.div>
          <motion.div
            style={frontTilt}
            className="absolute bottom-0 left-0 aspect-[4/5] w-[58%] overflow-hidden rounded-3xl border border-border shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
          >
            <Image
              src="https://picsum.photos/seed/clue-agency-desk/640/800"
              alt="Designer reviewing a product interface on a monitor"
              fill
              sizes="(min-width: 1024px) 300px, 42vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
