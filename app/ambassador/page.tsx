import AmbassadorForm from "../../components/forms/AmbassadorForm";
import Faq from "../../components/site/Faq";
import PageHero from "../../components/site/PageHero";
import Reveal from "../../components/site/Reveal";
import { Button, Pill, SectionHead } from "../../components/site/ui";
import { AmbassadorQuestionAnswer, BecomeAmbassador, WhyAmbassador } from "../../lib/data";

export const metadata = {
  title: 'Become a Shama Ambassador | Represent the Kingdom',
  description: 'Join the Shama Ambassador Program and help make Kingdom content accessible to believers worldwide. Enjoy exclusive content, leadership training, networking, and career development.',
  keywords: 'shama ambassador, christian ambassador program, campus fellowship, gospel outreach, kingdom ambassador nigeria',
  openGraph: {
    title: 'Become a Shama Ambassador | Represent the Kingdom',
    description: 'Join the Shama Ambassador Program — exclusive content access, leadership training, networking, and more.',
    url: 'https://shamaapp.com/ambassador',
    siteName: 'Shama',
    images: [{ url: 'https://shamaapp.com/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Become a Shama Ambassador',
    description: 'Join the Shama Ambassador Program and help spread Kingdom content worldwide.',
    images: ['https://shamaapp.com/og-image.png'],
  },
}

export default function AmbassadorPage() {
  return (
    <main className="overflow-hidden">
      <PageHero
        pill="Ambassador programme"
        image="/images/ambassadorHeroBg.png"
        title={
          <>
            Become a <span className="accent">Shama Ambassador.</span>
          </>
        }
      >
        <p className="max-w-[56ch] text-[17px] text-fg-2">
          Shama is on a mission to make Kingdom content easily accessible to believers across the
          world. As an ambassador, you&apos;ll help more people discover faith-based content that
          transforms lives.
        </p>
        <Button href="/ambassador#apply">Apply now</Button>
      </PageHero>

      <section className="py-24">
        <div className="wrap">
          <SectionHead
            pill="Why join"
            title={
              <>
                Grow while you <span className="accent">serve.</span>
              </>
            }
          />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WhyAmbassador.map((b, i) => (
              <Reveal as="li" key={b.title} delay={(i % 4) * 0.06}>
                <div className="group grid h-full content-start gap-4 rounded-3xl border border-line bg-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-line-2 hover:bg-brand/10">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 font-mono text-xs text-fg-3 transition group-hover:bg-brand group-hover:text-white">
                    0{i + 1}
                  </span>
                  <h3 className="text-lg font-semibold leading-tight">{b.title}</h3>
                  <p className="text-sm text-fg-2">{b.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="apply" className="scroll-mt-24 py-24">
        <div className="wrap grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
          <Reveal className="grid content-start justify-items-start gap-5 lg:sticky lg:top-28">
            <Pill>Who we&apos;re looking for</Pill>
            <h2 className="text-[clamp(30px,4.4vw,52px)] font-semibold leading-[1.05]">
              All you need to <span className="accent">become an ambassador.</span>
            </h2>
            <ul className="grid gap-3">
              {BecomeAmbassador.map((r) => (
                <li key={r} className="flex items-start gap-3 text-fg-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-none text-live" aria-hidden="true">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="rounded-[28px] border border-line-2 bg-[radial-gradient(circle_at_100%_0%,rgba(143,134,255,.25),transparent_50%),linear-gradient(180deg,rgba(28,25,64,.6),rgba(19,17,42,.6))] p-6 md:p-10">
            <h3 className="mb-6 text-2xl font-semibold">Apply to the programme</h3>
            <AmbassadorForm />
          </div>
        </div>
      </section>

      <Faq items={AmbassadorQuestionAnswer} />
    </main>
  );
}
