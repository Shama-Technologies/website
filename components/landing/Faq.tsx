"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { HomeQuestionAnswer } from "../../lib/data";
import { SectionHead } from "../site/ui";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="scroll-mt-24 py-24">
      <div className="wrap max-w-[860px]">
        <SectionHead pill="FAQs" title="Questions, answered." />
        <div className="grid gap-2.5">
          {HomeQuestionAnswer.map((q, i) => {
            const isOpen = open === i;
            return (
              <div
                key={q.question}
                className={`rounded-2xl border transition-colors ${isOpen ? "border-line-2 bg-brand/10" : "border-line bg-white/[0.02]"}`}
              >
                <h3 className="font-body text-base font-medium tracking-normal">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    {q.question}
                    <span
                      className={`grid h-8 w-8 flex-none place-items-center rounded-full transition ${isOpen ? "rotate-45 bg-brand" : "bg-white/5"}`}
                      aria-hidden="true"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-fg-2">{q.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
