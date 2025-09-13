import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function LeversSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="grid gap-8 md:grid-cols-3">
        {/* ENERGY RESET (Lightning) */}
        <Card className="relative overflow-hidden bg-slate-900/30 border-slate-800 min-h-[22rem] md:min-h-[28rem] rounded-2xl">
          <Image
            src="/images/lightening.png"
            alt="Lightning energy reset background"
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
          <CardHeader className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
            <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-slate-400">
              Predict • Prevent • Perform
            </p>
            <CardTitle className="font-display text-[1.6rem] leading-tight md:text-[1.9rem] md:leading-tight tracking-tight text-white">
              <span className="bg-gradient-to-r from-pravah-teal via-pravah-violet to-pravah-pink bg-clip-text text-transparent">
                Neural Energy Reset
              </span>
            </CardTitle>
            <CardDescription className="mt-3 text-[0.98rem] md:text-[1.05rem] leading-relaxed text-slate-200/90 text-pretty">
              Our model forecasts dips{" "}
              <span className="text-slate-200">20–40 min</span> ahead from
              rhythm + wearable signals, then cues a{" "}
              <span className="text-slate-200">60–120s</span> protocol—posture,
              breath, micro-move, light.{" "}
              <em className="not-italic text-slate-100">
                Fewer mistakes, faster recovery.
              </em>
            </CardDescription>
          </CardHeader>
        </Card>

        {/* CALM GROWTH (Leaf) */}
        <Card className="relative overflow-hidden bg-slate-900/30 border-slate-800 min-h-[22rem] md:min-h-[28rem] rounded-2xl">
          <Image
            src="/images/leaf.png"
            alt="Leaf calm growth background"
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
          <CardHeader className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
            <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-slate-400">
              Breathe • Balance • Build
            </p>
            <CardTitle className="font-display text-[1.6rem] leading-tight md:text-[1.9rem] md:leading-tight tracking-tight text-white">
              <span className="bg-gradient-to-r from-pravah-teal via-pravah-violet to-pravah-pink bg-clip-text text-transparent">
                Adaptive Calm & Fuel
              </span>
            </CardTitle>
            <CardDescription className="mt-3 text-[0.98rem] md:text-[1.05rem] leading-relaxed text-slate-200/90 text-pretty">
              HRV-aware breathing and{" "}
              <span className="text-slate-200">1–3 min</span> mindful resets
              lower cortisol. Low-GI nutrition + hydration nudges prevent
              slumps; habit loops make consistency feel
              <span className="text-slate-100"> effortless</span>.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* MOMENTUM (Rocket) */}
        <Card className="relative overflow-hidden bg-slate-900/30 border-slate-800 min-h-[22rem] md:min-h-[28rem] rounded-2xl">
          <Image
            src="/images/rocket.png"
            alt="Rocket momentum background"
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
          <CardHeader className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
            <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-slate-400">
              Sense • Align • Accelerate
            </p>
            <CardTitle className="font-display text-[1.6rem] leading-tight md:text-[1.9rem] md:leading-tight tracking-tight text-white">
              <span className="bg-gradient-to-r from-pravah-teal via-pravah-violet to-pravah-pink bg-clip-text text-transparent">
                Autopilot Momentum
              </span>
            </CardTitle>
            <CardDescription className="mt-3 text-[0.98rem] md:text-[1.05rem] leading-relaxed text-slate-200/90 text-pretty">
              Wearable-smart coaching maps your circadian{" "}
              <span className="text-slate-200">flow windows</span> and adapts
              plans in real time, when to push, when to restore—so wins compound
              <span className="text-slate-100"> without burnout</span>.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}
