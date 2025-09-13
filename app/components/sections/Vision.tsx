import Image from "next/image";
import { WaitlistForm } from "../waitlist-form";

export function VisionSection() {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/sunrise-hope.png"
          alt="Sunrise of hope"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-20">
        <div>
          <h3 className="font-display text-3xl md:text-4xl">
            A calmer, more powerful day.
          </h3>
          <p className="mt-3 max-w-2xl text-pravah-slate">
            Imagine ambition that feels light. In the age of AI, we build energy
            and clarity first, then let technology amplify your best direction.
            That’s Pravah.
          </p>
          <div className="mt-6 max-w-md">
            <WaitlistForm />
          </div>
        </div>

        {/* subtle depth */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-white/10">
          <Image
            src="/images/floating spheres.png"
            alt="Floating glass spheres"
            fill
            className="object-cover opacity-80"
          />
        </div>
      </div>
    </section>
  );
}
