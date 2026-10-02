"use client";

import { useState } from "react";

export default function JoinForm() {
  const [joined, setJoined] = useState(false);

  return (
    <>
      <form
        data-r=""
        className="join-form"
        onSubmit={(e) => {
          e.preventDefault();
          setJoined(true);
        }}
      >
        <input type="email" required placeholder="Your email" aria-label="Email" />
        <button type="submit">{joined ? "You're in" : "Unlock the menu"}</button>
      </form>
      <span data-r="" className="join-note">
        {joined ? "Awesome." : "Limited seats only."}
      </span>
    </>
  );
}
