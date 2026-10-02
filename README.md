# SATO Ramen Bowl — Homepage

Next.js (App Router, TypeScript) build of the SATO Ramen Bowl homepage design.

## Run

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Pages

- `/` — the homepage
- `/devices` — responsive preview: the homepage in mobile (390), tablet (820) and desktop (1440) frames, with a switcher to view each one on its own

## Structure

- `app/page.tsx` — the homepage sections
- `app/globals.css` — all styles (responsive breakpoints at 600 / 640 / 760 / 900 / 1024px)
- `lib/content.ts` — dishes, menu cards, outlets, perks, reels
- `app/devices/page.tsx` + `components/DeviceShowcase.tsx` — the responsive preview page
- `components/` — client components: `Nav`, `RamenCarousel`, `JoinForm`, `MotionController` (reveals, inertial scroll, parallax), and the `Placeholder` image block

Imagery is still striped placeholders, and outlet/contact details are `[bracketed]` stand-ins.
