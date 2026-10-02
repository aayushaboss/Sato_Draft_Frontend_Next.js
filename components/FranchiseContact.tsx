"use client";

import { useRef, useState, type FormEvent } from "react";

type Enquiry = { name: string; phone: string; city: string };

/** "Contact" button that opens a small franchise enquiry form in a modal. */
export default function FranchiseContact() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [sent, setSent] = useState<Enquiry | null>(null);

  const open = () => {
    setSent(null);
    dialogRef.current?.showModal();
    // React handles autoFocus itself, so the dialog would otherwise focus the close button first.
    requestAnimationFrame(() => dialogRef.current?.querySelector<HTMLInputElement>('input[name="name"]')?.focus());
  };
  const close = () => dialogRef.current?.close();

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Enquiry;
    // TODO: send `data` to the backend once one exists. Frontend only for now.
    setSent(data);
  };

  return (
    <>
      <button type="button" className="pill" onClick={open}>
        Contact
      </button>

      <dialog
        ref={dialogRef}
        className="enquiry"
        aria-labelledby="enquiry-title"
        // Clicking the dimmed backdrop (the dialog element itself, outside the panel) closes it.
        onClick={(e) => e.target === e.currentTarget && close()}
      >
        <div className="enquiry-panel">
          <button type="button" className="enquiry-close" aria-label="Close" onClick={close}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          {sent ? (
            <div className="enquiry-done">
              <span className="enquiry-check" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              </span>
              <h3 id="enquiry-title">Thanks, {sent.name.split(" ")[0]}.</h3>
              <p>
                We&apos;ve got your details. Our team will call you on {sent.phone} about bringing SATO to {sent.city}.
              </p>
              <button type="button" className="enquiry-submit" onClick={close}>
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div className="eyebrow-jp">加盟 — Franchise</div>
              <h3 id="enquiry-title">Bring SATO to your city</h3>
              <p className="enquiry-sub">Leave your details and our team will get in touch.</p>
              <label>
                <span>Name</span>
                <input name="name" required autoComplete="name" />
              </label>
              <label>
                <span>Phone number</span>
                <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" pattern="[0-9 +\-]{7,}" title="Digits, spaces, + or - only" />
              </label>
              <label>
                <span>City</span>
                <input name="city" required autoComplete="address-level2" />
              </label>
              <button type="submit" className="enquiry-submit">
                Send
              </button>
            </form>
          )}
        </div>
      </dialog>
    </>
  );
}
