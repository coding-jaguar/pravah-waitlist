"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";

export function WaitlistForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const payload = {
      email: String(formData.get("email") || "").trim(),
      firstName: String(formData.get("firstName") || "").trim(),
      currentEnergyLevel: formData.get("currentEnergyLevel")
        ? Number(formData.get("currentEnergyLevel"))
        : undefined,
      location: String(formData.get("location") || "").trim(),
      goal: String(formData.get("goal") || "").trim(),
      consentToUpdate: formData.get("consentToUpdate") === "on",
    };

    // Require consent before submitting
    if (!payload.consentToUpdate) {
      setStatus("error");
      toast.error("Please agree to receive emails to join the waitlist.");
      return;
    }

    let res: Response;
    try {
      res = await fetch("/api/waitlist", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
      });
      console.log("res", res);
    } catch {
      setStatus("error");
      toast.error("Network error.", {
        description: "Please check your connection.",
      });
      return;
    }

    let data: unknown = null;
    try {
      data = await res.json();
    } catch {
      // ignore JSON parse errors
    }
    console.log("data", data);

    if (res.ok) {
      setStatus("success");
      form.reset();
      toast.success("You are in! 🎉", {
        description: "We will send you early updates.",
      });
    } else {
      setStatus("error");
      const maybeError =
        typeof data === "object" && data !== null && "error" in data
          ? (data as { error: unknown }).error
          : undefined;
      const message =
        typeof maybeError === "string"
          ? maybeError
          : res.statusText || "Something went wrong.";
      toast.error(message, {
        description:
          typeof maybeError === "string" ? undefined : "Please try again.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4">
      <div aria-live="polite" className="min-h-[1.25rem] text-sm">
        {status === "success" && (
          <p className="text-green-400">You are in! 🎉</p>
        )}
        {status === "error" && (
          <p className="text-red-400">Something went wrong.</p>
        )}
      </div>

      <Input
        type="email"
        name="email"
        placeholder="Email *"
        required
        className="bg-slate-900/40 border-slate-700 text-slate-100 placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-pravah-teal/60"
      />
      <Input
        type="text"
        name="firstName"
        placeholder="First Name"
        className="bg-slate-900/40 border-slate-700 text-slate-100 placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-pravah-teal/60"
      />
      <Input
        type="number"
        name="currentEnergyLevel"
        placeholder="Energy or Excitement Level (1-10)"
        min={1}
        max={10}
        className="bg-slate-900/40 border-slate-700 text-slate-100 placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-pravah-teal/60"
      />
      <Input
        type="text"
        name="location"
        placeholder="Location"
        className="bg-slate-900/40 border-slate-700 text-slate-100 placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-pravah-teal/60"
      />
      <select
        name="goal"
        defaultValue=""
        className="w-full rounded-md border bg-slate-900/40 border-slate-700 text-slate-100 focus-visible:ring-2 focus-visible:ring-pravah-teal/60 focus-visible:outline-none px-3 py-2"
      >
        <option value="" disabled>
          Select your goal (optional)
        </option>
        <option value="improve_energy">Improve energy</option>
        <option value="reduce_stress">Reduce stress</option>
        <option value="build_healthy_habits">Build healthy habits</option>
        <option value="increase_productivity">Increase productivity</option>
        <option value="sleep_better">Sleep better</option>
        <option value="other">Other</option>
      </select>

      <label className="flex items-center space-x-2 text-sm text-slate-300">
        <input
          type="checkbox"
          name="consentToUpdate"
          required
          className="h-4 w-4 rounded border-slate-600 bg-slate-900/40"
        />
        <span>
          I agree to receive emails from the creators about Pravah and future
          products.
        </span>
      </label>

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-gradient-to-r from-pravah-teal via-pravah-violet to-pravah-pink text-slate-900 hover:opacity-90 disabled:opacity-60"
      >
        {status === "loading" ? "Joining..." : "Join Waitlist"}
      </Button>

      <p className="text-center text-xs text-slate-500">
        No spam. Unsubscribe anytime.
      </p>
    </form>
  );
}
