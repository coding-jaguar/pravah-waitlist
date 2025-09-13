import Image from "next/image";
import { WaitlistForm } from "../waitlist-form";

export function FinalCtaSection() {
  return (
    <section className="relative isolate py-16 md:py-24">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/glowing-cta-gradient.png"
          alt="Glowing gradient background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="mx-auto max-w-3xl px-6">
        <h3 className="font-display text-center text-3xl md:text-4xl text-white">
          Energy is everything.
        </h3>
        <p className="mt-3 text-center text-pravah-slate">
          Slow down to aim. Move fast in the right direction. Join the first
          wave shaping a clearer, calmer, more powerful day.
        </p>
        <div className="mt-8">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
