"use client";

import React, { useState } from "react";
import { Field, FormStatus, inputClass } from "../site/fields";

const empty = { user_name: "", user_email: "", phone: "", message: "" };

// Sends to /api/contact, which emails the team from the Shama Gmail account.
export default function PartnerForm() {
  const [form, setForm] = useState(empty);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setForm(empty);
      setStatus({ type: "success", message: "Thank you! We've received your message and will be in touch soon." });
    } catch {
      setStatus({ type: "error", message: "Your message didn't send. Please try again, or email shama@shamaapp.com." });
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={submit} className="grid gap-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <Field id="user_name" label="Full name">
          <input id="user_name" name="user_name" type="text" value={form.user_name} onChange={change} placeholder="Your name" autoComplete="name" required className={inputClass} />
        </Field>
        <Field id="user_email" label="Email">
          <input id="user_email" name="user_email" type="email" value={form.user_email} onChange={change} placeholder="you@example.com" autoComplete="email" required className={inputClass} />
        </Field>
        <Field id="phone" label="Phone number">
          <input id="phone" name="phone" type="tel" value={form.phone} onChange={change} placeholder="+234…" autoComplete="tel" required className={inputClass} />
        </Field>
      </div>
      <Field id="message" label="Message">
        <textarea id="message" name="message" value={form.message} onChange={change} placeholder="How would you like to partner with us?" required rows={5} className={`${inputClass} resize-y`} />
      </Field>
      {status && <FormStatus {...status} />}
      <button
        type="submit"
        disabled={sending}
        className="glow-btn w-full justify-self-start rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-px disabled:opacity-60 sm:w-auto"
      >
        {sending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
