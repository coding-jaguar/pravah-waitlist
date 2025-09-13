Perfect 🚀 — here’s a **`DESIGN.md`** you can drop in alongside your `README.md`. It’s a lightweight **cheat sheet** for developers/designers to quickly grab the right colors, fonts, and usage rules while coding.

---

# 🎨 Pravah Design Cheat Sheet

Quick reference for building **Pravah Waitlist** UI consistently.
Keep everything **cosmic, dark, and glowing**.

---

## 🌌 Colors

### Backgrounds

```css
pravah-night   #0B0D10   /* main page background */
pravah-indigo  #1A103F   /* cards / dark gradients */
pravah-navy    #08121F   /* footer / overlays */
```

### Neon Glow

```css
pravah-teal    #22D3EE
pravah-violet  #A78BFA
pravah-pink    #F472B6
pravah-orange  #FF6B3D   /* rocket exhaust */
pravah-yellow  #FACC15   /* spark highlights */
```

### Text

```css
pravah-white   #F1F5F9   /* headlines */
pravah-slate   #94A3B8   /* secondary text */
```

---

## 🔤 Fonts

- **Headlines:** `Space Grotesk` (bold, wide, futuristic)
- **Body text:** `Inter` (clean, highly readable)

Tailwind setup (`tailwind.config.ts`):

```ts
extend: {
  fontFamily: {
    sans: ["Inter", "sans-serif"],
    display: ["Space Grotesk", "sans-serif"],
  },
}
```

Usage:

```html
<h1
  class="font-display text-5xl bg-gradient-to-r from-pravah-teal via-pravah-violet to-pravah-pink bg-clip-text text-transparent"
>
  Pravah — tiny sparks, real momentum
</h1>
<p class="font-sans text-pravah-slate">
  Boost your daily energy with micro-nudges.
</p>
```

---

## 🖼 Image Rules

### Backgrounds

- **`hero-bg.png`** → only for hero section.
- **`starfield.png`** → only for footer.
- **`glowing-cta-gradient.png`** → only for CTA block.
- **`floating-spheres.png`** → filler/dividers.
- **`sunrise-hope.png`** → vision/philosophy section only.

### Features

- **Spark ⚡** → energy activation → `feature-spark.png`
- **Leaf 🌱** → growth & balance → `feature-leaf.png`
- **Rocket 🚀** → momentum & progress → `feature-rocket.png`
  → Use at **200–400px**, with `rounded-xl`.

### Human Figures

- **`human-1.png` / `human-2.png` / `human-3.png`**
  → Use sparingly, one per section, only on dark backgrounds.

---

## ✨ Usage Guidelines

✅ Always use `next/image` with `object-cover` for backgrounds.
✅ Use `opacity-70` or dark overlays to keep text readable.
✅ Place text **next to** visuals rather than directly on top.
✅ Keep sections visually distinct — one major image per section.

❌ Don’t reuse the same image in multiple sections.
❌ Don’t crop out glow effects.
❌ Don’t mix with unrelated stock photos.

---

👉 This file is meant for **quick reference while coding** — for full details, see `README.md`.

---
