import Image from "next/image";
import { WaitlistForm } from "../waitlist-form";

export function TransformationSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          {/* Micro-tag */}
          <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-slate-400">
            Aim • Align • Accelerate
          </p>

          {/* Gradient Headline */}
          <h2 className="font-display text-[1.9rem] leading-tight tracking-tight md:text-[2.3rem] md:leading-tight">
            <span className="bg-gradient-to-r from-pravah-teal via-pravah-violet to-pravah-pink bg-clip-text text-transparent">
              Move fast, only in the right direction.
            </span>
          </h2>

          {/* Premium body copy */}
          <p className="mt-4 text-[1.05rem] leading-relaxed text-pravah-slate text-pretty">
            Pravah orchestrates{" "}
            <span className="text-slate-200">evidence-based micro-actions</span>{" "}
            so effort feels lighter and progress compounds.{" "}
            <span className="text-slate-100">Energy first.</span> Clarity next.
            Then{" "}
            <em className="not-italic text-slate-100">
              action that actually compounds
            </em>
            .
          </p>

          {/* Futuristic bullets */}
          <ul className="mt-6 space-y-2 text-[0.98rem] leading-relaxed text-slate-300">
            <li>
              • Measure what matters:{" "}
              <span className="text-slate-100">vitality, mood, focus</span> — in
              seconds.
            </li>
            <li>
              • Nudge the levers:{" "}
              <span className="text-slate-100">
                movement, mindfulness, light, fuel
              </span>{" "}
              , right when biology wants it.
            </li>
            <li>
              • Wearable-smart coaching: let{" "}
              <span className="text-slate-100">AI learn your rhythm</span> and
              amplify your best hours.
            </li>
          </ul>

          {/* CTA */}
          <div className="mt-8 max-w-md">
            <WaitlistForm />
            <p className="mt-2 text-xs text-slate-400">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Human-3: Fully glowing (outcome) */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-white/10">
          <Image
            src="/images/human-3.png"
            alt="Human fully energized, glowing silhouette"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
