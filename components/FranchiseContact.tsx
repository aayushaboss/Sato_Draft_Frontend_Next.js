"use client";

import { useState, type FormEvent } from "react";

type Enquiry = { name: string; phone: string; city: string };

/** Inline franchise enquiry form; swaps to a thank-you message on submit. */
export default function FranchiseContact() {
  const [sent, setSent] = useState<Enquiry | null>(null);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Enquiry;
    // TODO: send `data` to the backend once one exists. Frontend only for now.
    setSent(data);
  };

  if (sent) {
    return (
      <div className="enquiry-done" role="status">
        <span className="enquiry-check" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
        </span>
        <h3>Thanks, {sent.name.trim().split(/\s+/)[0]}.</h3>
        <p>We&apos;ve got your details. Our team will call you on {sent.phone} about bringing SATO to {sent.city}.</p>
      </div>
    );
  }

  return (
    <form className="enquiry" onSubmit={submit}>
      <div className="eyebrow">ENQUIRE NOW</div>
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
      <button type="submit" className="pill">
        Submit
      </button>
    </form>
  );
}
