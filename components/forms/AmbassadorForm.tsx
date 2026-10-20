"use client";

import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { Field, FormStatus, inputClass } from "../site/fields";

// Field names match the existing EmailJS template and Google Sheet columns.
const fields = [
  { name: "name", label: "Full name", type: "text", placeholder: "Your name", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", placeholder: "you@example.com", autoComplete: "email" },
  { name: "phone", label: "Phone number", type: "tel", placeholder: "+234…", autoComplete: "tel" },
  { name: "address", label: "Address", type: "text", placeholder: "Your address", autoComplete: "street-address" },
  { name: "institution", label: "Higher institution", type: "text", placeholder: "Name of your institution" },
  { name: "fellowship", label: "Campus fellowship, church or ministry", type: "text", placeholder: "Where you fellowship" },
  { name: "contribution", label: "How do you intend to contribute to Shama?", type: "text", placeholder: "Your contribution" },
  { name: "skill", label: "Do you have a digital skill? If yes, which?", type: "text", placeholder: "e.g. design, video editing, writing" },
];

export default function AmbassadorForm() {
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setSending(true);
    setStatus(null);

    // Also record the application in the Google Sheet, if configured.
    const sheet = process.env.NEXT_PUBLIC_SPREADSHEET;
    if (sheet) {
      const data = new FormData(form.current);
      fetch(sheet, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          [...data.entries()].map(([k, v]) => [k, String(v)])
        ).toString(),
      }).catch(() => {});
    }

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        form.current,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "" }
      );
      form.current.reset();
      setStatus({ type: "success", message: "Application received! We'll be in touch by email." });
    } catch (error) {
      console.error("Ambassador application failed", error);
      setStatus({ type: "error", message: "Your application didn't send. Please try again, or email technologiesshama@gmail.com." });
    } finally {
      setSending(false);
    }
  };

  return (
    <form ref={form} onSubmit={submit} className="grid gap-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {fields.map((f) => (
          <Field key={f.name} id={`amb-${f.name}`} label={f.label}>
            <input
              id={`amb-${f.name}`}
              name={f.name}
              type={f.type}
              placeholder={f.placeholder}
              autoComplete={f.autoComplete}
              required
              className={inputClass}
            />
          </Field>
        ))}
      </div>
      {status && <FormStatus {...status} />}
      <button
        type="submit"
        disabled={sending}
        className="glow-btn w-full justify-self-start rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-px disabled:opacity-60 sm:w-auto"
      >
        {sending ? "Sending…" : "Submit application"}
      </button>
    </form>
  );
}
