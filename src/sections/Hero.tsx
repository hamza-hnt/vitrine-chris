import { motion } from "framer-motion";
import { Play, ArrowRight, Sparkles } from "lucide-react";
import { DEMO_VIDEO_THUMBNAIL_URL } from "../lib/constants";
import { useDemoVideo } from "../components/DemoVideoContext";

export function Hero() {
  const { openDemoVideo } = useDemoVideo();

  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden">
      {/* Ambient orbs */}
      <div
        className="orb"
        style={{
          top: "-180px",
          left: "10%",
          width: "520px",
          height: "520px",
          background:
            "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.55), rgba(99,102,241,0) 70%)",
        }}
      />
      <div
        className="orb"
        style={{
          top: "-120px",
          right: "5%",
          width: "460px",
          height: "460px",
          background:
            "radial-gradient(circle at 70% 30%, rgba(56,189,248,0.45), rgba(56,189,248,0) 70%)",
        }}
      />
      <div className="absolute inset-0 grid-mask pointer-events-none" />

      <div className="container-x relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
          className="flex flex-col items-center text-center"
        >
          <div className="chip">
            <span className="relative inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-azure-400 pulse-dot" />
            </span>
            <Sparkles size={12} className="text-ink-200" />
            <span>AI-powered rental operations</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }}
            className="mt-7 max-w-[920px] text-[42px] leading-[1.04] tracking-[-0.028em] sm:text-[58px] md:text-[72px] font-medium text-gradient"
          >
            The autonomous <span className="serif-italic accent-gradient">operating layer</span> for
            rental property management.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
            className="mt-7 max-w-[640px] text-ink-300 text-[16.5px] md:text-[17.5px] leading-[1.55]"
          >
            Chris.AI turns tenant issues into structured, owner-approved workflows —
            from WhatsApp messages to repair coordination and dashboard visibility.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <button
              type="button"
              aria-haspopup="dialog"
              onClick={openDemoVideo}
              className="btn-primary"
            >
              <Play size={13} className="fill-current" />
              Watch demo
            </button>
            <a href="#workflow" className="btn-ghost">
              Explore workflow
              <ArrowRight size={14} />
            </a>
          </motion.div>
        </motion.div>

        {/* Demo video placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
          className="mt-16 md:mt-20 relative"
        >
          <VideoPlaceholder />
        </motion.div>

        {/* Trusted-by style marquee */}
        <div className="mt-16 md:mt-20">
          <p className="text-[11px] uppercase tracking-[0.24em] font-mono text-ink-400 text-center">
            Built on a modern agent stack
          </p>
          <div className="mt-5 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="marquee flex gap-10 whitespace-nowrap text-ink-300 text-[13.5px] tracking-tight">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="flex items-center gap-10 pr-10 shrink-0">
                  {[
                    "OpenAI Agents Runtime",
                    "Twilio WhatsApp",
                    "SLNG Voice STT",
                    "Tavily Search",
                    "FastAPI",
                    "PostgreSQL + JSONB",
                    "React / Vite",
                  ].map((label) => (
                    <span key={label} className="inline-flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-ink-500" />
                      {label}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoPlaceholder() {
  const { openDemoVideo } = useDemoVideo();

  return (
    <button
      type="button"
      aria-haspopup="dialog"
      onClick={openDemoVideo}
      className="group relative mx-auto block w-full max-w-[1080px] cursor-pointer border-0 bg-transparent p-0 text-left text-inherit"
      aria-label="Watch the Chris.AI demo"
    >
      {/* Outer halo */}
      <div
        className="absolute -inset-6 rounded-[28px] blur-2xl opacity-60 pointer-events-none"
        style={{
          background:
            "conic-gradient(from 220deg, rgba(99,102,241,0.22), rgba(56,189,248,0.18), rgba(99,102,241,0.22))",
        }}
      />

      <div className="relative glass-strong rounded-[22px] p-2.5 md:p-3">
        {/* Window chrome */}
        <div className="flex items-center justify-between px-3 pb-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-ink-400">
            <span className="w-1.5 h-1.5 rounded-full bg-azure-400 pulse-dot" />
            <span>live demo · chris.ai/demo</span>
          </div>
          <div className="text-[11px] font-mono text-ink-400">
            <span className="hidden sm:inline">02:14 · </span>HD
          </div>
        </div>

        <div
          className="relative aspect-[16/9] rounded-[14px] overflow-hidden"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 0%, rgba(99,102,241,0.25), rgba(10,10,18,0.6) 55%, rgba(6,6,12,1) 100%)",
          }}
        >
          <img
            src={DEMO_VIDEO_THUMBNAIL_URL}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-35 saturate-[0.75]"
            loading="lazy"
          />
          {/* subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />

          {/* center play button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <div className="relative">
              <span className="absolute inset-0 rounded-full bg-white/10 blur-2xl" />
              <span
                className="absolute -inset-3 rounded-full opacity-70"
                style={{
                  background:
                    "conic-gradient(from 90deg, rgba(99,102,241,0.55), rgba(56,189,248,0.55), rgba(99,102,241,0.55))",
                  filter: "blur(10px)",
                }}
              />
              <span className="relative w-[78px] h-[78px] md:w-[92px] md:h-[92px] rounded-full bg-white text-ink-950 flex items-center justify-center shadow-[0_20px_60px_-15px_rgba(56,189,248,0.5)] group-hover:scale-[1.04] transition-transform duration-300">
                <Play size={28} className="fill-current translate-x-[2px]" />
              </span>
            </div>
            <p className="mt-5 text-[13.5px] tracking-tight text-ink-100">
              Watch the product demo
            </p>
            <p className="mt-1 text-[12px] font-mono text-ink-400">
              opens here without leaving the site
            </p>
          </div>

          {/* corner UI hints */}
          <div className="absolute left-4 top-4 flex items-center gap-1.5 text-[11px] font-mono text-ink-300/80">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 blink" />
            REC · 2026-05-16
          </div>
          <div className="absolute right-4 top-4 text-[11px] font-mono text-ink-300/80">
            chris-agent v0.4
          </div>
          <div className="absolute left-4 bottom-4 right-4 flex items-center gap-3">
            <span className="text-[11px] font-mono text-ink-300/80">tenant → chris → owner → worker</span>
            <span className="flex-1 h-px bg-white/10" />
            <span className="text-[11px] font-mono text-ink-300/80">resolved</span>
          </div>
        </div>
      </div>
    </button>
  );
}
