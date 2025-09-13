import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

import { Sparkles, Brain, Cpu, Infinity } from "lucide-react";

export function ValuePoints() {
  return (
    <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-4">
      {/* Energy First */}
      <Card className="relative overflow-hidden bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
        <CardHeader>
          <div className="mb-2 flex items-center space-x-2">
            <Sparkles className="h-5 w-5 text-pravah-pink" />
            <CardTitle className="bg-gradient-to-r from-pravah-teal via-pravah-violet to-pravah-pink bg-clip-text text-transparent text-lg">
              Energy First
            </CardTitle>
          </div>
          <CardDescription className="text-slate-300 text-[0.98rem] leading-relaxed">
            Sharper focus, elevated mood, fewer mistakes.{" "}
            <span className="text-slate-100">
              Energy is the root multiplier
            </span>{" "}
            for everything you do.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Intelligent Nudges */}
      <Card className="relative overflow-hidden bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
        <CardHeader>
          <div className="mb-2 flex items-center space-x-2">
            <Brain className="h-5 w-5 text-pravah-violet" />
            <CardTitle className="bg-gradient-to-r from-pravah-teal via-pravah-violet to-pravah-pink bg-clip-text text-transparent text-lg">
              Intelligent Micro-Nudges
            </CardTitle>
          </div>
          <CardDescription className="text-slate-300 text-[0.98rem] leading-relaxed">
            AI-timed movement, mindful resets, breathing cues, and flow-state
            rituals tuned to your biology.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Adaptive Rhythm */}
      <Card className="relative overflow-hidden bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
        <CardHeader>
          <div className="mb-2 flex items-center space-x-2">
            <Cpu className="h-5 w-5 text-pravah-teal" />
            <CardTitle className="bg-gradient-to-r from-pravah-teal via-pravah-violet to-pravah-pink bg-clip-text text-transparent text-lg">
              Adaptive Rhythm Engine
            </CardTitle>
          </div>
          <CardDescription className="text-slate-300 text-[0.98rem] leading-relaxed">
            Learns from wearables, maps your energy curve, and{" "}
            <span className="text-slate-100">amplifies your best hours</span>{" "}
            without burnout.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Fatigue to Flow */}
      <Card className="relative overflow-hidden bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
        <CardHeader>
          <div className="mb-2 flex items-center space-x-2">
            <Infinity className="h-5 w-5 text-pravah-pink" />
            <CardTitle className="bg-gradient-to-r from-pravah-teal via-pravah-violet to-pravah-pink bg-clip-text text-transparent text-lg">
              From Fatigue to Flow
            </CardTitle>
          </div>
          <CardDescription className="text-slate-300 text-[0.98rem] leading-relaxed">
            Aligning{" "}
            <span className="text-slate-100">biology, psychology, and AI</span>{" "}
            into one seamless current of momentum.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
