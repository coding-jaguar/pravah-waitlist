import Image from "next/image";
import { HeroSection } from "./components/sections/Hero";
import { ProblemSection } from "./components/sections/Problem";
import { LeversSection } from "./components/sections/Levers";
import { TransformationSection } from "./components/sections/Transformation";
import { VisionSection } from "./components/sections/Vision";
import { FinalCtaSection } from "./components/sections/FinalCta";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#0B0D10] text-pravah-white">
      <HeroSection />
      <LeversSection />
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <Image
            src="/images/cosmic-gradient.png"
            alt="Cosmic gradient background"
            fill
            priority
            className="object-cover opacity-70"
          />
        </div>
        <TransformationSection />
        <ProblemSection />
      </div>
      <VisionSection />
      <FinalCtaSection />

      <footer className="mx-auto max-w-7xl px-6 py-10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Pravah. No spam. Unsubscribe anytime.
      </footer>
    </main>
  );
}
