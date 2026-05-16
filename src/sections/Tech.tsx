import {
  Server,
  Database,
  MonitorSmartphone,
  MessageCircle,
  AudioLines,
  Search,
  Cpu,
  Lock,
  ScrollText,
  Activity,
} from "lucide-react";
import { Eyebrow } from "../components/Eyebrow";
import { Reveal } from "../components/Reveal";

const stack = [
  { icon: Server, title: "FastAPI backend", body: "Stateless workers behind a thin router." },
  { icon: Database, title: "PostgreSQL", body: "Relational facts. JSONB agent memory and traces." },
  { icon: MonitorSmartphone, title: "React / Vite dashboard", body: "Role-scoped for owners and tenants." },
  { icon: MessageCircle, title: "Twilio WhatsApp Sandbox", body: "Inbound and outbound conversational surface." },
  { icon: AudioLines, title: "SLNG Unified STT", body: "Reliable voice-note transcription." },
  { icon: Search, title: "Tavily search", body: "Local provider discovery on demand." },
  { icon: Cpu, title: "OpenAI Agents runtime", body: "Planning, tool use, recovery." },
  { icon: Lock, title: "Isolation guard", body: "Every action is scoped to a single property_id." },
  { icon: ScrollText, title: "Action logs", body: "A timeline you can replay and audit." },
  { icon: Activity, title: "Tool traces & prompt evals", body: "Confidence on what the agent actually did." },
];

const flow = [
  { label: "WhatsApp / Dashboard", tag: "surface" },
  { label: "FastAPI Router", tag: "ingress" },
  { label: "Property Context", tag: "scope" },
  { label: "Chris Agent", tag: "brain" },
  { label: "Tools", tag: "actions" },
  { label: "Postgres · Tavily · Twilio", tag: "world" },
  { label: "Dashboard Updates", tag: "feedback" },
];

export function Tech() {
  return (
    <section id="tech" className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow index="06">Architecture</Eyebrow>
            <h2 className="mt-6 text-[34px] md:text-[46px] leading-[1.05] tracking-[-0.025em] font-medium text-gradient">
              Deterministic where it matters.{" "}
              <span className="serif-italic accent-gradient">Agentic where it helps.</span>
            </h2>
            <p className="mt-6 text-ink-300 text-[15.5px] leading-[1.6] max-w-2xl">
              The plumbing is boring on purpose. Approvals, isolation and audit
              are deterministic. Routing, qualification and worker discovery are
              where Chris uses agentic reasoning.
            </p>
          </Reveal>
        </div>

        {/* Diagram */}
        <Reveal delay={0.1}>
          <div className="mt-14 relative glass-strong rounded-[22px] p-5 md:p-7 overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.12] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 0%, rgba(99,102,241,0.6), transparent 40%), radial-gradient(circle at 80% 100%, rgba(56,189,248,0.5), transparent 40%)",
              }}
            />
            <div className="relative flex flex-col lg:flex-row items-stretch gap-3">
              {flow.map((node, i) => (
                <div key={node.label} className="flex flex-col lg:flex-row items-center gap-3 flex-1">
                  <div className="w-full rounded-xl hairline bg-white/[0.02] px-3 py-3.5 text-center">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                      {node.tag}
                    </div>
                    <div className="mt-1 text-[12.5px] text-ink-50 leading-snug">
                      {node.label}
                    </div>
                  </div>
                  {i < flow.length - 1 && (
                    <div className="text-ink-500 font-mono text-[14px] hidden lg:block">
                      →
                    </div>
                  )}
                  {i < flow.length - 1 && (
                    <div className="text-ink-500 font-mono text-[14px] lg:hidden">
                      ↓
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
          {stack.map((it, i) => (
            <Reveal key={it.title} delay={(i % 5) * 0.04}>
              <article className="glass rounded-2xl p-5 h-full hover:border-white/15 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="w-9 h-9 rounded-xl hairline flex items-center justify-center text-ink-50 bg-white/[0.02]">
                    <it.icon size={16} />
                  </span>
                  <span className="font-mono text-[10.5px] text-ink-400">
                    layer {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-[14px] font-medium text-ink-50 tracking-tight">
                  {it.title}
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
