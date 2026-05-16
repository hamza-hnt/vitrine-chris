import { MessageCircle, Brain, ShieldCheck, Hammer, LayoutDashboard, ArrowRight } from "lucide-react";
import { Eyebrow } from "../components/Eyebrow";
import { Reveal } from "../components/Reveal";

const steps = [
  {
    icon: MessageCircle,
    title: "Tenant reports",
    body: "By text or voice on WhatsApp. No app to install, no form to fill.",
    tag: "Tenant",
  },
  {
    icon: Brain,
    title: "Chris qualifies & plans",
    body: "Reads context, transcribes voice, drafts a structured action plan.",
    tag: "Agent",
  },
  {
    icon: ShieldCheck,
    title: "Owner approves",
    body: "Receives a summary. Sets a worker, a budget cap, or asks a question.",
    tag: "Owner",
  },
  {
    icon: Hammer,
    title: "Worker coordinated",
    body: "Chris contacts the provider, syncs availability and confirms the visit.",
    tag: "Worker",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard updated",
    body: "Every action, message and approval is logged in real time.",
    tag: "Portfolio",
  },
];

export function Solution() {
  return (
    <section id="workflow" className="relative py-24 md:py-32">
      <div
        className="orb"
        style={{
          left: "-200px",
          top: "20%",
          width: "520px",
          height: "520px",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.18), transparent 70%)",
        }}
      />
      <div className="container-x relative">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow index="02">The solution</Eyebrow>
            <h2 className="mt-6 text-[34px] md:text-[46px] leading-[1.05] tracking-[-0.025em] font-medium text-gradient">
              One <span className="serif-italic accent-gradient">agent-driven workflow</span> per property.
            </h2>
            <p className="mt-6 text-ink-300 text-[15.5px] leading-[1.6] max-w-2xl">
              Chris.AI sits between the people who report, the people who decide,
              and the people who fix. Each property becomes a workflow with memory,
              context and accountability — and a human-readable trail.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14 relative">
            {/* horizontal flow line on desktop */}
            <div className="hidden lg:block absolute top-[64px] left-[6%] right-[6%] h-px dashed-x" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {steps.map((s, i) => (
                <div key={s.title} className="relative">
                  <div className="glass rounded-2xl p-5 h-full hover:border-white/15 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="w-10 h-10 rounded-xl hairline flex items-center justify-center bg-white/[0.02] text-ink-50">
                        <s.icon size={17} />
                      </span>
                      <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-400">
                        {s.tag}
                      </span>
                    </div>
                    <h3 className="mt-5 text-[15px] font-medium text-ink-50 tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-[1.55] text-ink-300">
                      {s.body}
                    </p>
                    <div className="mt-5 flex items-center justify-between text-ink-400 font-mono text-[10.5px]">
                      <span>step</span>
                      <span>0{i + 1} / 05</span>
                    </div>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-[55px] z-10 w-6 h-6 items-center justify-center rounded-full bg-ink-950 hairline">
                      <ArrowRight size={11} className="text-ink-200" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
