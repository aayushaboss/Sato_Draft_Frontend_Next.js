"use client";

import { useEffect } from "react";

const NAV_OFFSET = 68;

type Props = { smoothScroll?: boolean; parallax?: number };

/** Page-wide motion: staggered reveals, inertial wheel scroll, smooth anchor jumps and image parallax. */
export default function MotionController({ smoothScroll = true, parallax = 1 }: Props) {
  useEffect(() => {
    // Reveals
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const siblings = Array.from(el.parentElement?.children ?? []).filter((c) => c.hasAttribute("data-r"));
          el.style.transitionDelay = Math.min(Math.max(siblings.indexOf(el), 0), 5) * 90 + "ms";
          el.classList.add("is-in");
          // Drop the stagger once revealed so hover transitions respond instantly.
          setTimeout(() => (el.style.transitionDelay = ""), 1500);
          io.unobserve(el);
        }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    document.querySelectorAll("[data-r]").forEach((el) => io.observe(el));

    // Inertial scroll
    const vh = () => window.innerHeight;
    const max = () => document.documentElement.scrollHeight - vh();
    let cur = window.scrollY;
    let target = cur;
    let active = false;

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey || !smoothScroll) return;
      e.preventDefault();
      const d = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaMode === 2 ? e.deltaY * vh() : e.deltaY;
      if (!active) cur = window.scrollY;
      target = Math.max(0, Math.min(max(), target + d));
      active = true;
    };
    const sync = () => {
      if (!active) cur = target = window.scrollY;
    };
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href")!.slice(1);
      const el = id === "top" ? document.body : document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      cur = window.scrollY;
      target = Math.max(0, Math.min(max(), id === "top" ? 0 : el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET));
      active = true;
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("keydown", sync);
    document.addEventListener("click", onClick);

    // Frame loop: scroll lerp + parallax
    let raf = 0;
    const frame = () => {
      if (active) {
        cur += (target - cur) * 0.09;
        if (Math.abs(target - cur) < 0.4) {
          cur = target;
          active = false;
        }
        window.scrollTo(0, cur);
      }
      const h = vh();
      document.querySelectorAll<HTMLElement>("[data-par]").forEach((p) => {
        const r = p.getBoundingClientRect();
        if (r.bottom < 0 || r.top > h) return;
        const prog = (r.top + r.height / 2 - h / 2) / (h / 2 + r.height / 2);
        const inner = p.querySelector<HTMLElement>("[data-par-in]");
        if (inner) inner.style.transform = `translate3d(0,${(prog * 9 * parallax).toFixed(2)}%,0)`;
      });
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", sync);
      window.removeEventListener("keydown", sync);
      document.removeEventListener("click", onClick);
    };
  }, [smoothScroll, parallax]);

  return null;
}
