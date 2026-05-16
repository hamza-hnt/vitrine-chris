import {
  ShieldCheck,
  Gauge,
  KeySquare,
  ScrollText,
  Telescope,
  Sparkle,
  Users,
} from "lucide-react";
import { Eyebrow } from "../components/Eyebrow";
import { Reveal } from "../components/Reveal";

const trust = [
  { icon: ShieldCheck, title: "Owner keeps decision authority", body: "Approvals, vetoes and worker preferences sit with the owner — always." },
  { icon: Gauge, title: "Approval thresholds", body: "Per-property budget ceilings, escalation triggers and silent auto-approvals." },
  { icon: KeySquare, title: "Single-property isolation", body: "Every tool call is bound to one property_id. No cross-tenant leakage." },
  { icon: ScrollText, title: "Audit logs", body: "Every message, plan and tool call is durably recorded with a stable id." },
  { icon: Telescope, title: "Tool execution tracing", body: "Replay any decision with full context — inputs, outputs and rationale." },
  { icon: Sparkle, title: "Prompt evaluation", body: "Injection-resistant evals guard the agent against tenant-side manipulation." },
  { icon: Users, title: "Role-scoped access", body: "Owners, tenants and providers see only what they should — by design." },
];

export function Trust() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow index="07">Trust & control</Eyebrow>
              <h2 className="mt-6 text-[34px] md:text-[46px] leading-[1.05] tracking-[-0.025em] font-medium text-gradient">
                Autonomy with{" "}
                <span className="serif-italic accent-gradient">owner control.</span>
              </h2>
              <p className="mt-6 max-w-md text-ink-300 text-[15.5px] leading-[1.6]">
                Autonomous doesn’t mean unilateral. Chris is built so the owner
                stays in charge of the decisions that matter — and never has to
                trust a black box.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 chip">
                <ShieldCheck size={12} />
                Approvals · isolation · audit · evals
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-3">
              {trust.map((it, i) => (
                <Reveal key={it.title} delay={i * 0.04}>
                  <article className="glass rounded-2xl p-5 h-full hover:border-white/15 transition-colors">
                    <span className="w-9 h-9 rounded-xl hairline flex items-center justify-center text-ink-50 bg-white/[0.02]">
                      <it.icon size={16} />
                    </span>
                    <h3 className="mt-5 text-[14.5px] font-medium text-ink-50 tracking-tight">
                      {it.title}
                    </h3>
                    <p className="mt-1.5 text-[12.5px] leading-[1.55] text-ink-300">
                      {it.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
