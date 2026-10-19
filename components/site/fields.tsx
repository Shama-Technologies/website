import React from "react";

export const inputClass =
  "w-full rounded-xl border border-line-2 bg-ink/60 px-4 py-3 text-sm text-fg outline-none transition placeholder:text-fg-3 focus:border-glow focus:bg-ink";

// A labelled dark form field.
export function Field({
  id,
  label,
  error,
  className = "",
  children,
}: {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`grid content-start gap-1.5 ${className}`}>
      <label htmlFor={id} className="text-sm font-medium text-fg-2">
        {label}
      </label>
      {children}
      {error && <p className="text-xs text-[#FF9C9C]">{error}</p>}
    </div>
  );
}

export function FormStatus({ type, message }: { type: "success" | "error"; message: string }) {
  return (
    <p
      role={type === "error" ? "alert" : "status"}
      className={`rounded-xl border px-4 py-3 text-sm ${
        type === "success"
          ? "border-live/40 bg-live/10 text-[#A6F0C6]"
          : "border-[#FF9C9C]/40 bg-[#FF9C9C]/10 text-[#FFC4C4]"
      }`}
    >
      {message}
    </p>
  );
}
