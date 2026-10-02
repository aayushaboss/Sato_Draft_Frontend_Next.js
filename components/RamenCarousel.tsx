"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";
import { dishes } from "@/lib/content";

/** Signed distance of each bowl from the active one, wrapped into -2..2. */
const offsetsFor = (idx: number, n: number) =>
  Array.from({ length: n }, (_, i) => {
    const off = (((i - idx) % n) + n) % n;
    return off > 2 ? off - n : off;
  });

const Chevron = ({ dir }: { dir: "left" | "right" }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points={dir === "left" ? "15 6 9 12 15 18" : "9 6 15 12 9 18"} />
  </svg>
);

export default function RamenCarousel({ autoplay = true }: { autoplay?: boolean }) {
  // `raw` is unbounded so the bowl spin keeps accumulating in one direction.
  const [raw, setRaw] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hidden, setHidden] = useState<Set<number>>(new Set());

  const n = dishes.length;
  const idx = ((raw % n) + n) % n;
  const [prevIdx, setPrevIdx] = useState(idx);
  const step = (d: number) => setRaw((r) => r + d);

  useEffect(() => {
    if (!autoplay || paused) return;
    const t = setInterval(() => step(1), 4500);
    return () => clearInterval(t);
  }, [autoplay, paused]);

  const offsets = offsetsFor(idx, n);

  // A bowl wrapping from one end of the track to the other jumps without animating.
  // Computed during render so the jump and the hide land in the same commit.
  if (prevIdx !== idx) {
    const before = offsetsFor(prevIdx, n);
    setPrevIdx(idx);
    setHidden(new Set(offsets.flatMap((off, i) => (Math.abs(off - before[i]) > 2 ? [i] : []))));
  }

  // Re-enable transitions only after the browser has painted the jumped position.
  // A fixed timeout can fire before that paint, making the bowl slide back across the track.
  useEffect(() => {
    if (!hidden.size) return;
    let inner = 0;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => setHidden(new Set()));
    });
    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
    };
  }, [hidden]);

  const dish = dishes[idx];

  return (
    <section id="ramen" className="ramen" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div data-r="" className="ramen-title">
        OUR RAMEN
      </div>
      <div className="track">
        {dishes.map((d, i) => {
          const off = offsets[i];
          const a = Math.abs(off);
          const hide = hidden.has(i);
          const style = {
            "--off": off,
            "--scale": a === 0 ? 1 : 0.68,
            opacity: hide ? 0 : a === 2 ? 0.55 : 1,
            zIndex: 10 - a,
          } as CSSProperties;
          return (
            <div key={d.name} className={`bowl${hide ? " no-anim" : ""}`} style={style} onClick={() => step(off)}>
              <div className="bowl-face" style={{ transform: `rotate(${raw * -60}deg)` }}>
                <div className="bowl-spin-layer">
                  <div className="bowl-photo-wrap">
                    <Image src={d.img} alt={d.alt} fill sizes="(min-width: 1024px) 600px, 80vw" priority={i === 0} />
                  </div>
                </div>
              </div>
              {d.isNew && (
                <div className="new-badge">
                  <span>NEW</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="ramen-info">
        <h2 className="dish-name">{dish.name}</h2>
        <div className="ramen-controls">
          <button className="arrow" aria-label="Previous" onClick={() => step(-1)}>
            <Chevron dir="left" />
          </button>
          <div className="ramen-mid">
            <p className="dish-desc">{dish.desc}</p>
            <a href="#location" className="slurp">
              SLURP NOW
            </a>
          </div>
          <button className="arrow" aria-label="Next" onClick={() => step(1)}>
            <Chevron dir="right" />
          </button>
        </div>
        <div className="progress">
          <div style={{ width: `${((idx + 1) / n) * 100}%` }} />
        </div>
      </div>
    </section>
  );
}
