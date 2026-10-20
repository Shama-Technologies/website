"use client";

import React, { useState } from "react";

type State = "idle" | "sending" | "done" | "error";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setState("error");
      setError("Enter a valid email address.");
      return;
    }
    setState("sending");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (!res.ok) throw new Error();
      setState("done");
    } catch {
      setState("error");
      setError("Something went wrong. Please try again.");
    }
  };

  if (state === "done") {
    return (
      <p role="status" className="flex items-center gap-2.5 text-sm text-[#DCD8FF]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="text-live" aria-hidden="true">
          <path d="M5 12l5 5L20 7" />
        </svg>
        You&apos;re on the list. We&apos;ll email you the day Shama launches.
      </p>
    );
  }

  return (
    <div id="waitlist" className="grid w-full max-w-[460px] scroll-mt-28 grid-cols-1 gap-2">
      <form
        onSubmit={submit}
        noValidate
        className="flex w-full gap-2 rounded-full border border-line-2 bg-ink-2/80 p-1.5"
      >
        <span className="sr-only">
          <label htmlFor="wl-email">Email address</label>
        </span>
        <input
          id="wl-email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state === "error") setState("idle");
          }}
          placeholder="Your email address"
          autoComplete="email"
          required
          aria-invalid={state === "error"}
          aria-describedby={state === "error" ? "wl-error" : undefined}
          className="min-w-0 flex-1 bg-transparent px-3.5 text-sm text-fg outline-none placeholder:text-fg-3"
        />
        <button
          type="submit"
          disabled={state === "sending"}
          className="glow-btn whitespace-nowrap rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-px disabled:opacity-60"
        >
          {state === "sending" ? "Joining…" : "Join the waitlist"}
        </button>
      </form>
      {state === "error" && (
        <p id="wl-error" role="alert" className="px-4 text-xs text-[#FF9C9C]">
          {error}
        </p>
      )}
    </div>
  );
}
