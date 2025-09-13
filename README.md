# 🌌 Pravah Waitlist

**Pravah** means _flow_ — this project is the landing page + waitlist for an app that helps people restore energy, build momentum, and pursue their goals without burning out.

The site’s purpose is simple:

- **Inspire visitors** with a hopeful vision (you _can_ feel more alive, more focused, more powerful).
- **Show them how** — through tiny, beautifully designed nudges that shift energy fast.
- **Convince them to join** — by capturing their email for the waitlist, so they’re part of the first wave.

---

## 📝 Copywriting Direction

The voice of Pravah should be:

- **Hopeful but grounded** → “A new way to live with energy.”
- **Philosophical but practical** → Inspired by cosmic imagery, delivered with clarity.
- **Personal and aspirational** → Speak to the _you_ who wants more spark, flow, and momentum.

### Core Messages

- **Headline (Hero):**
  _“Pravah — tiny sparks, real momentum.”_
- **Subtext:**
  _“We’re building a calm system of micro-nudges that lift your energy so you can pursue health, creativity, and dreams — without burnout.”_
- **Why it matters:**
  Energy is the root of everything. Without it, good intentions fade. With it, momentum becomes natural.
- **CTA:**
  _“Ready to find your spark? Join the first wave.”_

---

## 🎨 Design System

### Colors

- **Backgrounds**

  - Night: `#0B0D10`
  - Indigo: `#1A103F`
  - Navy: `#08121F`

- **Neon Glow**

  - Teal: `#22D3EE`
  - Violet: `#A78BFA`
  - Pink: `#F472B6`
  - Fiery Orange: `#FF6B3D`
  - Spark Yellow: `#FACC15`

- **Text**

  - White: `#F1F5F9`
  - Slate: `#94A3B8`

### Fonts

- **Headlines:** [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
- **Body text:** [Inter](https://fonts.google.com/specimen/Inter)

---

## 🖼 Image Assets

Stored in `/public/images/`.

### Hero / Backgrounds

- `hero-bg.png` → Aurora waves (hero section only).
- `starfield.png` → Footer.
- `glowing-cta-gradient.png` → CTA background.
- `floating-spheres.png` → Abstract filler.
- `sunrise-hope.png` → Vision/Philosophy section.

### Features

- `feature-spark.png` → ⚡ Energy activation (micro-nudges).
- `feature-leaf.png` → 🌱 Growth & calm design.
- `feature-rocket.png` → 🚀 Momentum & progress.

### Human Figures

- `human-1.png`, `human-2.png`, `human-3.png` → Energy silhouettes. Use sparingly.

---

## 🖼 Image Usage Guidelines

1. **One background per section** (no repeats).
2. **Features**: use medium size, `rounded-xl`.
3. **Humans**: one per section max, on dark backgrounds.
4. **Abstracts**: accents only, with opacity.
5. **Performance**: always `next/image`, lazy load non-hero.
6. ❌ Don’t crop glow effects or mix random stock photos.

---

## 📋 Waitlist Form Fields

The form convinces visitors to commit by asking just enough:

- **Email** (required)
- **First Name** (optional)
- **Current Energy Level (1–10)**
- **Location** (optional)
- **Goal** (optional)
- **Consent to Updates** (checkbox)

This balance → low friction signup, but also helps Pravah feel personal and intentional.

---

## 📂 File Structure

```
pravah-waitlist/
  app/
    page.tsx        # Landing page
    api/waitlist/   # API route for saving waitlist entries
  components/ui/    # shadcn/ui components
  public/images/    # design assets
  lib/              # db connection + models
  README.md
  DESIGN.md
  tailwind.config.ts
  package.json
```

---

## 🛠 Dev Setup

```bash
# Install deps
pnpm install

# Run dev server
pnpm dev
```

.env.local:

```bash
MONGODB_URI="your-mongodb-connection-string"
```

---

## ✅ Deployment

Deploy with [Vercel](https://vercel.com).

- Push to GitHub → Import into Vercel → Done.
- Add custom domain: e.g. `pravah.app`.

---

## 🚀 Roadmap

- [x] Cosmic visual design
- [x] Hero → Philosophy → Features → CTA → Footer
- [x] Mongoose waitlist backend
- [ ] Newsletter integration (Beehiiv/Resend)
- [ ] Analytics (Plausible/Vercel Analytics)
- [ ] Publish thought pieces on energy, momentum, philosophy

---

✨ The purpose of this landing page is not just to collect emails — it’s to **convince** visitors that Pravah is worth believing in. The design, copy, and visuals must all work together to say:

**“Energy is everything. We’ll help you unlock it. Join us.”**
