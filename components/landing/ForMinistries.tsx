import { STUDIO_URL } from "../../lib/site";
import Reveal from "../site/Reveal";
import { Button, Pill } from "../site/ui";

const steps = [
  ["Upload", "Drop in your sermons, songs or podcasts, one at a time or in batches."],
  ["Shama prepares it", "We optimise the audio and publish it to the app."],
  ["Followers hear first", "Everyone subscribed to your channel gets notified."],
  ["Watch it grow", "See plays, downloads and new followers in real time."],
];

export default function ForMinistries() {
  return (
    <section id="ministries" className="py-24">
      <div className="wrap">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-line-2 bg-[radial-gradient(circle_at_85%_0%,rgba(143,134,255,.4),transparent_50%),linear-gradient(140deg,#221E52,#121029_70%)] p-6 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
              <div className="grid content-start justify-items-start gap-5">
                <Pill>Shama Studio · for ministries</Pill>
                <h2 className="text-[clamp(30px,4.4vw,52px)] font-semibold leading-[1.05]">
                  Your ministry, <span className="accent">heard everywhere.</span>
                </h2>
                <p className="max-w-[46ch] text-fg-2">
                  Shama Studio is where churches, preachers and gospel artists publish to Shama.
                  It&apos;s free, and your followers are notified every time you upload.
                </p>
                <div className="flex flex-wrap gap-2.5">
                  <Button href={STUDIO_URL}>Open Shama Studio</Button>
                </div>
              </div>
              <ol className="grid gap-2.5">
                {steps.map(([title, body], i) => (
                  <li
                    key={title}
                    className="flex items-start gap-4 rounded-2xl border border-line bg-ink/50 p-4 backdrop-blur"
                  >
                    <span className="grid h-9 w-9 flex-none place-items-center rounded-xl bg-brand font-mono text-xs text-white shadow-[0_0_24px_-4px_var(--color-brand-2)]">
                      {i + 1}
                    </span>
                    <span className="grid gap-0.5">
                      <b className="font-display text-lg font-semibold">{title}</b>
                      <span className="text-sm text-fg-2">{body}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
