# SATO Ramen Bowl — Homepage

Next.js (App Router, TypeScript) build of the SATO Ramen Bowl homepage design.

## Run

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

- `app/page.tsx` — the homepage sections
- `app/globals.css` — all styles (responsive breakpoints at 600 / 640 / 760 / 900 / 1024px)
- `lib/content.ts` — dishes, menu cards, outlets, perks, reels
- `components/` — client components: `Nav`, `RamenCarousel`, `JoinForm`, `MotionController` (reveals, inertial scroll, parallax), and the `Placeholder` image block

Imagery is still striped placeholders, and outlet/contact details are `[bracketed]` stand-ins.
