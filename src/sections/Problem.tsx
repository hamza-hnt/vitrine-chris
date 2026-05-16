import { MessageSquareText, ShieldQuestion, Wrench, LayoutDashboard, Network } from "lucide-react";
import { Eyebrow } from "../components/Eyebrow";
import { Reveal } from "../components/Reveal";

const items = [
  {
    icon: MessageSquareText,
    title: "Tenant messages arrive everywhere",
    body: "WhatsApp, SMS, phone calls, voice notes, half-finished emails. Each one needs context before it can move.",
  },
  {
    icon: ShieldQuestion,
    title: "Owners need approval context",
    body: "Owners want to decide on workers, budgets and timing — but only when given a clear, summarised plan.",
  },
  {
    icon: Wrench,
    title: "Contractors need operational details",
    body: "Address, access codes, photos, availability windows, quote ceilings. Re-typed into chat for every visit.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards are updated manually",
    body: "Status, follow-ups and history live in spreadsheets and inboxes. Nothing reconciles itself.",
  },
  {
    icon: Network,
    title: "Coordination overhead compounds",
    body: "Per unit it’s manageable. Across a portfolio, it becomes the actual job — and the bottleneck to scale.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow index="01">The problem</Eyebrow>
              <h2 className="mt-6 text-[34px] md:text-[46px] leading-[1.05] tracking-[-0.025em] font-medium text-gradient">
                Property managers are stuck being{" "}
                <span className="serif-italic accent-gradient">human routers.</span>
              </h2>
              <p className="mt-6 max-w-md text-ink-300 text-[15.5px] leading-[1.6]">
                The hardest part of rental ops isn’t fixing things — it’s moving
                information between tenants, owners and contractors fast enough,
                with the right context, every single time.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 font-mono text-[12px] text-ink-400">
                <span className="w-1.5 h-1.5 rounded-full bg-iris-400" />
                Observed across owners managing 3 – 80 units.
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-3">
              {items.map((it, i) => (
                <Reveal key={it.title} delay={i * 0.05}>
                  <article className="glass rounded-2xl p-5 h-full group hover:border-white/15 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="w-9 h-9 rounded-lg hairline flex items-center justify-center text-ink-100 bg-white/[0.02]">
                        <it.icon size={16} />
                      </span>
                      <span className="font-mono text-[11px] text-ink-400">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-5 text-[15px] font-medium text-ink-50 tracking-tight">
                      {it.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-[1.55] text-ink-300">
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
