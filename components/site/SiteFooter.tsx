import Link from "next/link";
import {
  CONTACT_EMAIL,
  DONATE_URL,
  Socials,
  STUDIO_URL,
  WHATSAPP_URL,
} from "../../lib/site";
import { Button, Pill } from "./ui";

const columns = [
  {
    header: "Shama",
    links: [
      { name: "About us", href: "/about-us" },
      { name: "FAQs", href: "/#faq" },
      { name: "Join the waitlist", href: "/#waitlist" },
    ],
  },
  {
    header: "Get involved",
    links: [
      { name: "Partner with us", href: "/partner" },
      { name: "Become an ambassador", href: "/ambassador" },
      { name: "Donate", href: DONATE_URL },
    ],
  },
  {
    header: "Ministries",
    links: [
      { name: "Shama Studio", href: STUDIO_URL },
      { name: "Upload your sermons", href: STUDIO_URL },
    ],
  },
  {
    header: "Contact",
    links: [
      { name: "WhatsApp", href: WHATSAPP_URL },
      { name: "Email us", href: `mailto:${CONTACT_EMAIL}` },
    ],
  },
];

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const cls = "text-sm text-fg-2 transition-colors hover:text-fg";
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink pt-20 text-fg">
      <div className="wrap">
        <div className="grid justify-items-center gap-5 pb-16 text-center">
          <Pill>For ministries</Pill>
          <h2 className="max-w-[16ch] text-[clamp(30px,4.4vw,52px)] font-semibold leading-[1.05]">
            Your sermons deserve <span className="accent">a bigger room.</span>
          </h2>
          <p className="max-w-[48ch] text-fg-2">
            List your sermons and songs on Shama for free with Shama Studio.
          </p>
          <Button href={STUDIO_URL} variant="ghost">
            See Shama Studio
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-8 border-t border-line py-12 md:grid-cols-4">
          {columns.map((c) => (
            <div key={c.header} className="grid content-start gap-3">
              <h3 className="font-mono text-[11px] font-normal uppercase tracking-[0.16em] text-fg-3">
                {c.header}
              </h3>
              {c.links.map((l) => (
                <FooterLink key={l.name} href={l.href}>
                  {l.name}
                </FooterLink>
              ))}
            </div>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="select-none text-center font-display text-[clamp(110px,26vw,360px)] font-bold leading-[0.78] tracking-[-0.05em] text-transparent [background-clip:text] [-webkit-background-clip:text] bg-[linear-gradient(180deg,rgba(185,178,255,.75),rgba(72,63,178,.15)_70%,transparent)] -mb-[0.12em]"
        >
          shama
        </div>

        <div className="relative z-10 flex flex-wrap justify-between gap-4 border-t border-line py-5 text-xs text-fg-3">
          <span>© {new Date().getFullYear()} Shama Technologies. All rights reserved.</span>
          <span className="flex flex-wrap gap-4">
            {Socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-fg"
              >
                {s.name}
              </a>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
