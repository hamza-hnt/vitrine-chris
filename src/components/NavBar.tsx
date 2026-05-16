import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { DEMO_VIDEO_URL, NAV_LINKS } from "../lib/constants";
import { Play } from "lucide-react";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2.5" : "py-4"
      }`}
    >
      <div className="container-x">
        <div
          className={`flex items-center justify-between gap-4 rounded-full pl-4 pr-2 py-2 transition-all duration-300 ${
            scrolled ? "glass-strong shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]" : "border border-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 shrink-0">
            <Logo />
          </a>

          <nav className="hidden md:flex items-center gap-1 text-[13.5px] text-ink-200">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-underline px-3 py-1.5 rounded-full hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={DEMO_VIDEO_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-primary"
            >
              <Play size={13} className="fill-current" />
              Watch demo
            </a>
            <button
              className="md:hidden btn-ghost !px-3 !py-2"
              aria-label="Toggle navigation"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="block w-4 h-px bg-current" />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-2 flex flex-col">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-2.5 text-ink-100 text-sm rounded-xl hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
