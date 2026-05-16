import { Play, ArrowRight } from "lucide-react";
import { DEMO_VIDEO_URL } from "../lib/constants";
import { Reveal } from "../components/Reveal";

export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <div className="relative glass-strong rounded-[26px] overflow-hidden px-6 sm:px-12 py-14 md:py-20 text-center">
            <div
              className="absolute inset-0 opacity-70 pointer-events-none"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 0%, rgba(99,102,241,0.35), transparent 70%), radial-gradient(60% 80% at 50% 100%, rgba(56,189,248,0.28), transparent 70%)",
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.18] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
                maskImage:
                  "radial-gradient(ellipse 70% 50% at 50% 50%, black 30%, transparent 75%)",
              }}
            />
            <div className="relative">
              <div className="inline-flex items-center gap-2 chip">
                <span className="w-1.5 h-1.5 rounded-full bg-azure-400 pulse-dot" />
                Ready to see the loop close
              </div>
              <h2 className="mt-6 text-[40px] sm:text-[52px] md:text-[66px] leading-[1.03] tracking-[-0.028em] font-medium text-gradient max-w-3xl mx-auto">
                From tenant message to{" "}
                <span className="serif-italic accent-gradient">resolved workflow.</span>
              </h2>
              <p className="mt-6 text-ink-300 text-[15.5px] md:text-[17px] leading-[1.55] max-w-xl mx-auto">
                Chris.AI helps small real-estate operators move faster without
                losing control.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={DEMO_VIDEO_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-primary"
                >
                  <Play size={13} className="fill-current" />
                  Watch demo
                </a>
                <a href="#product" className="btn-ghost">
                  View dashboard concept
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
