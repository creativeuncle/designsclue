"use client";

import { useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import type { PointerEvent } from "react";
import { Noise } from "@/components/ui/noise";
import { cn } from "@/lib/utils";

type VariantKey = "A" | "B" | "C";

const VARIANTS: Record<
  VariantKey,
  { blobs: { color: string; className: string; drift: string }[] }
> = {
  A: {
    blobs: [
      { color: "#4F5BFF", className: "-left-32 -top-24 h-[560px] w-[560px]", drift: "animate-drift-1" },
      { color: "#7C3AED", className: "left-1/4 top-1/3 h-[420px] w-[420px]", drift: "animate-drift-2" },
      { color: "#22D3EE", className: "-right-24 bottom-0 h-[480px] w-[480px]", drift: "animate-drift-3" },
    ],
  },
  B: {
    blobs: [
      { color: "#FFC93F", className: "-left-24 -top-16 h-[560px] w-[560px]", drift: "animate-drift-1" },
      { color: "#7ED957", className: "-left-10 top-1/4 h-[460px] w-[460px]", drift: "animate-drift-2" },
      { color: "#2F6BFF", className: "-right-20 bottom-0 h-[520px] w-[520px]", drift: "animate-drift-3" },
    ],
  },
  C: {
    blobs: [
      { color: "#FF5FA2", className: "-left-28 -top-20 h-[560px] w-[560px]", drift: "animate-drift-1" },
      { color: "#FF8A3D", className: "left-1/3 top-1/4 h-[440px] w-[440px]", drift: "animate-drift-2" },
      { color: "#7C3AED", className: "-right-24 bottom-0 h-[500px] w-[500px]", drift: "animate-drift-3" },
    ],
  },
};

export function Hero() {
  const [variant, setVariant] = useState<VariantKey>("B");
  const reduce = useReducedMotion();

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 40, damping: 20 });
  const sy = useSpring(py, { stiffness: 40, damping: 20 });
  const gx = useTransform(sx, [-1, 1], [-36, 36]);
  const gy = useTransform(sy, [-1, 1], [-28, 28]);

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    px.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    py.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  }

  return (
    <section
      onPointerMove={reduce ? undefined : handlePointerMove}
      className="relative isolate flex min-h-[100dvh] flex-col overflow-hidden bg-background pt-16 md:pt-20"
    >
      <div aria-hidden className="absolute inset-0">
        {VARIANTS[variant].blobs.map((blob, i) => (
          <div key={i} className={cn("absolute", blob.drift, blob.className)}>
            <motion.div
              style={reduce ? undefined : { x: gx, y: gy }}
              className="h-full w-full rounded-full blur-[110px]"
              animate={{ backgroundColor: blob.color }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/40 to-background" />
      </div>

      <Noise />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-24 text-center md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tighter text-balance md:text-6xl lg:text-7xl"
        >
          <span className="text-[#5B6CFF]">A</span>{" "}
          <span className="bg-gradient-to-b from-white to-[#9FB4FF] bg-clip-text text-transparent">
            Web
          </span>{" "}
          <span className="text-foreground">Design Agency</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-[52ch] text-lg leading-relaxed text-muted"
        >
          <span className="text-foreground/70">- </span>
          Born in 2017, Designs Clue is a web design agency based in
          Ludhiana specialising in Web Design, Branding, eCommerce, Digital
          Marketing and Organic SEO.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 flex items-center gap-2"
        >
          {(Object.keys(VARIANTS) as VariantKey[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setVariant(key)}
              aria-pressed={variant === key}
              aria-label={`Gradient variant ${key}`}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full border text-xs font-medium tracking-tight transition-colors",
                variant === key
                  ? "border-foreground/60 text-foreground"
                  : "border-border text-muted hover:border-foreground/30 hover:text-foreground",
              )}
            >
              {key}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
