import {
  MessageCircle,
  AudioLines,
  Cpu,
  ListChecks,
  ShieldCheck,
  Search,
  UserPlus,
  LayoutGrid,
  Database,
  GitBranch,
} from "lucide-react";
import { Eyebrow } from "../components/Eyebrow";
import { Reveal } from "../components/Reveal";

const items = [
  { icon: MessageCircle, label: "WhatsApp text + voice intake", body: "Inbound via Twilio Sandbox. No app to install." },
  { icon: AudioLines, label: "SLNG voice-note transcription", body: "Tenant audio becomes structured input." },
  { icon: Cpu, label: "OpenAI agent runtime", body: "Planning, tool calls, retries — orchestrated." },
  { icon: ListChecks, label: "Plan-first agent discipline", body: "Chris writes a plan before it acts." },
  { icon: ShieldCheck, label: "Owner approval workflows", body: "Thresholds, vetoes and explicit confirmations." },
  { icon: Search, label: "Tavily local provider search", body: "Geo-aware sourcing when no preferred worker." },
  { icon: UserPlus, label: "Provider registration & contact", body: "Onboard, save and re-use trusted contractors." },
  { icon: LayoutGrid, label: "Role-scoped dashboard", body: "Owners and tenants see only what they should." },
  { icon: Database, label: "Postgres memory + audit trail", body: "Relational facts and JSONB agent memory." },
  { icon: GitBranch, label: "Tool tracing & prompt evals", body: "Replay any decision Chris ever made." },
];

export function Capabilities() {
  return (
    <section id="product" className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow index="04">Product</Eyebrow>
            <h2 className="mt-6 text-[34px] md:text-[46px] leading-[1.05] tracking-[-0.025em] font-medium text-gradient">
              Capabilities, all in one{" "}
              <span className="serif-italic accent-gradient">agent surface.</span>
            </h2>
            <p className="mt-6 text-ink-300 text-[15.5px] leading-[1.6] max-w-2xl">
              Each capability is wired into the same agent loop and writes to the
              same audit trail — so the dashboard, the tenant chat and the owner
              approvals always tell the same story.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={(i % 5) * 0.04}>
              <article className="group relative glass rounded-2xl p-5 h-full overflow-hidden hover:border-white/15 transition-colors">
                <div
                  className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(99,102,241,0.25), transparent 65%)",
                  }}
                />
                <div className="flex items-center justify-between">
                  <span className="w-9 h-9 rounded-xl hairline flex items-center justify-center text-ink-50 bg-white/[0.02]">
                    <it.icon size={16} />
                  </span>
                  <span className="font-mono text-[10.5px] text-ink-400">
                    /{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-[14px] font-medium text-ink-50 tracking-tight leading-snug">
                  {it.label}
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-[1.55] text-ink-400">
                  {it.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
