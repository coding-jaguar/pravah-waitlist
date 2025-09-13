import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function ProblemSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
        {/* Human-2: Mid-glow (transition) */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-white/10">
          <Image
            src="/images/human-2.png"
            alt="Human in transition, beginning to glow"
            fill
            className="object-cover"
          />
        </div>

        <div>
          {/* Micro-tag */}
          <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-slate-400">
            The Hidden Cost of Speed
          </p>

          {/* Gradient Headline */}
          <h2 className="font-display text-[1.9rem] leading-tight tracking-tight md:text-[2.3rem] md:leading-tight">
            <span className="bg-gradient-to-r from-pravah-teal via-pravah-violet to-pravah-pink bg-clip-text text-transparent">
              Speed without direction burns out ambition.
            </span>
          </h2>

          {/* Compelling body */}
          <p className="mt-4 text-[1.05rem] leading-relaxed text-pravah-slate text-pretty">
            Endless hours. Scattered focus. Screen-heavy days. The result?
            Energy leaks everywhere.{" "}
            <span className="text-slate-100">
              Time managers make you go faster
            </span>
            , but Pravah helps you go{" "}
            <span className="text-slate-100">farther</span>—by restoring the one
            fuel that powers mood, clarity, and momentum:{" "}
            <em className="not-italic text-slate-100">energy</em>.
          </p>

          {/* Problem cards */}
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Card className="bg-slate-900/30 border-slate-800 rounded-xl hover:bg-slate-900/40 transition-colors">
              <CardHeader>
                <CardTitle className="font-display text-white text-lg leading-snug">
                  Afternoon Crashes
                </CardTitle>
                <CardDescription className="mt-1 text-slate-300 text-[0.95rem] leading-relaxed">
                  Fatigue spikes, focus slips, motivation vanishes.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-900/30 border-slate-800 rounded-xl hover:bg-slate-900/40 transition-colors">
              <CardHeader>
                <CardTitle className="font-display text-white text-lg leading-snug">
                  Chronic Stress
                </CardTitle>
                <CardDescription className="mt-1 text-slate-300 text-[0.95rem] leading-relaxed">
                  Mental overload steals clarity, creativity, and joy.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-900/30 border-slate-800 rounded-xl hover:bg-slate-900/40 transition-colors">
              <CardHeader>
                <CardTitle className="font-display text-white text-lg leading-snug">
                  Mis-aimed Hustle
                </CardTitle>
                <CardDescription className="mt-1 text-slate-300 text-[0.95rem] leading-relaxed">
                  Moving fast in the wrong direction only compounds burnout.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
