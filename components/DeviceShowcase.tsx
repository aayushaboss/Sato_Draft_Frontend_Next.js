"use client";

import { useEffect, useRef, useState } from "react";

type Device = {
  id: "mobile" | "tablet" | "desktop";
  label: string;
  screen: { w: number; h: number };
  bezel: number;
  radius: number;
  screenRadius: number;
};

const devices: Device[] = [
  { id: "mobile", label: "MOBILE · 390", screen: { w: 390, h: 844 }, bezel: 12, radius: 48, screenRadius: 36 },
  { id: "tablet", label: "TABLET · 820", screen: { w: 820, h: 1180 }, bezel: 16, radius: 40, screenRadius: 24 },
  { id: "desktop", label: "DESKTOP · 1440", screen: { w: 1440, h: 900 }, bezel: 0, radius: 12, screenRadius: 0 },
];

const GAP = 64;
const LABEL_H = 32; // label line + its gap above the frame

const frameSize = (d: Device) => ({ w: d.screen.w + d.bezel * 2, h: d.screen.h + d.bezel * 2 + LABEL_H });

type View = Device["id"] | "all";
const views: { id: View; label: string }[] = [
  { id: "all", label: "All" },
  { id: "mobile", label: "Mobile" },
  { id: "tablet", label: "Tablet" },
  { id: "desktop", label: "Desktop" },
];

export default function DeviceShowcase({ src = "/" }: { src?: string }) {
  const [view, setView] = useState<View>("all");
  const [avail, setAvail] = useState<{ w: number; h: number } | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stageRef.current!;
    const ro = new ResizeObserver(([e]) => setAvail({ w: e.contentRect.width, h: e.contentRect.height }));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const shown = view === "all" ? devices : devices.filter((d) => d.id === view);
  const sizes = shown.map(frameSize);
  const natural = {
    w: sizes.reduce((s, f) => s + f.w, 0) + GAP * (shown.length - 1),
    h: Math.max(...sizes.map((f) => f.h)),
  };
  const scale = avail ? Math.min(1, avail.w / natural.w, avail.h / natural.h) : 0;

  return (
    <div className="devices">
      <header className="devices-bar">
        <span className="devices-title">SATO Ramen Bowl · Responsive preview</span>
        <div className="devices-tabs" role="tablist">
          {views.map((v) => (
            <button key={v.id} role="tab" aria-selected={view === v.id} className={view === v.id ? "on" : ""} onClick={() => setView(v.id)}>
              {v.label}
            </button>
          ))}
        </div>
        <a href={src} target="_blank" rel="noreferrer" className="devices-open">
          Open full site ↗
        </a>
      </header>
      <div ref={stageRef} className="devices-stage">
        <div style={{ width: natural.w * scale, height: natural.h * scale, visibility: avail ? "visible" : "hidden" }}>
          <div className="devices-row" style={{ gap: GAP, transform: `scale(${scale})` }}>
            {/* All three stay mounted so switching views doesn't reload the iframes. */}
            {devices.map((d) => (
              <div key={d.id} className="device" hidden={!shown.includes(d)}>
                <span className="device-label">{d.label}</span>
                <div
                  className={`device-frame ${d.id}`}
                  style={{ padding: d.bezel, borderRadius: d.radius, width: d.screen.w + d.bezel * 2, height: d.screen.h + d.bezel * 2 }}
                >
                  <iframe src={src} title={`${d.label} preview`} style={{ width: d.screen.w, height: d.screen.h, borderRadius: d.screenRadius }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
