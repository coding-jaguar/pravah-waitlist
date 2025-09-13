"use client";

import Image from "next/image";
import { WaitlistForm } from "../waitlist-form";
import { ValuePoints } from "../ValuePoints";

export function HeroSection() {
  return (
    <section className="relative isolate">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.png"
          alt="Aurora waves background"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />
      </div>

      <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-6 py-24 md:py-32">
        <div className="max-w-5xl text-center">
          {/* Micro-tag */}
          <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-slate-400">
            Aim • Align • Accelerate
          </p>

          {/* Gradient Headline */}
          <h1 className="font-display text-[2.6rem] leading-tight tracking-tight md:text-[3.2rem] md:leading-tight">
            <span className="bg-gradient-to-r from-pravah-teal via-pravah-violet to-pravah-pink bg-clip-text text-transparent">
              In the age of AI, slow down to move fast.
            </span>
          </h1>

          {/* Premium Subline */}
          <p className="mt-4 text-[1.08rem] leading-relaxed text-pravah-slate text-pretty">
            AI accelerates everything, good and bad.{" "}
            <span className="text-slate-100">Pravah</span> helps you pause to
            aim true, then surge forward in the right direction. We raise daily{" "}
            <span className="text-slate-100">energy</span> with science-backed
            micro-nudges so <span className="text-slate-100">happiness</span>{" "}
            and <span className="text-slate-100">productivity</span> rise
            together.
          </p>

          {/* Visual + Form */}
          <div className="relative mx-auto mt-8 w-full max-w-2xl overflow-hidden rounded-2xl ring-1 ring-white/10">
            <Image
              src="/images/human-1.png"
              alt="Ambitious human, tired silhouette"
              fill
              className="object-cover opacity-80"
            />
            <div className="relative bg-black/30 p-6 backdrop-blur-sm md:p-8">
              <WaitlistForm />
              <p className="mt-3 text-xs text-slate-300">
                Find your spark. Build your flow. Join the first wave.
              </p>
            </div>
          </div>
          <ValuePoints />
        </div>
      </div>
    </section>
  );
}
