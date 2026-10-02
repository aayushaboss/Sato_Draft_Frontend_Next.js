"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // The overlay is hidden by CSS on wide screens; also reset state so it doesn't reappear on shrink.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <nav className="nav">
        <a href="#top" className="nav-logo">
          <Image src="/assets/logo-lockup.png" alt="SATO Ramen Bowl" width={98} height={36} priority />
        </a>
        <div className="nav-links">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <button
          className={`burger${open ? " open" : ""}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </nav>
      {open && (
        <div className="mobile-menu">
          <div className="mobile-menu-links">
            {navLinks.map((l, i) => (
              <a key={l.href} href={l.href} onClick={close}>
                {l.label}
                <span>0{i + 1}</span>
              </a>
            ))}
          </div>
          <a href="#location" className="pill" onClick={close}>
            Find your SATO
          </a>
        </div>
      )}
    </>
  );
}
