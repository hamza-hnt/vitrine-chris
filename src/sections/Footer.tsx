import { Logo } from "../components/Logo";
import { NAV_LINKS } from "../lib/constants";

export function Footer() {
  return (
    <footer className="relative pt-14 pb-12 border-t border-white/5">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-sm text-ink-400 text-[13.5px] leading-[1.55]">
              The autonomous operating layer for rental property management.
              From tenant message to resolved workflow — with owner approval
              where it matters.
            </p>
            <p className="mt-6 font-mono text-[11px] text-ink-500">
              © {new Date().getFullYear()} Chris.AI · built for the hackathon
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <FooterCol
              title="Product"
              links={NAV_LINKS.map((l) => ({ label: l.label, href: l.href }))}
            />
            <FooterCol
              title="Stack"
              links={[
                { label: "OpenAI Agents", href: "#tech" },
                { label: "Twilio WhatsApp", href: "#tech" },
                { label: "SLNG STT", href: "#tech" },
                { label: "Tavily", href: "#tech" },
                { label: "PostgreSQL", href: "#tech" },
              ]}
            />
            <FooterCol
              title="Company"
              links={[
                { label: "Story", href: "#top" },
                { label: "Trust & safety", href: "#tech" },
                { label: "Contact", href: "#top" },
              ]}
            />
          </div>
        </div>

        {/* Decorative wordmark */}
        <div className="relative mt-14 select-none pointer-events-none">
          <div
            className="text-center text-[18vw] sm:text-[14vw] md:text-[12vw] leading-none tracking-[-0.04em] font-medium"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0) 70%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Chris<span className="serif-italic">.AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
        {title}
      </div>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="link-underline text-[13.5px] text-ink-200 hover:text-white"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
