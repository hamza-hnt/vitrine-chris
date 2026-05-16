import { Mic, CheckCheck, ShieldCheck } from "lucide-react";
import { Eyebrow } from "../components/Eyebrow";
import { Reveal } from "../components/Reveal";

const flowSteps = [
  "Tenant reports a leak through WhatsApp text or voice.",
  "Chris transcribes voice if needed and creates a plan.",
  "Owner approves or supplies a preferred worker.",
  "Chris contacts the worker and coordinates availability.",
  "Dashboard tracks progress, actions and open approvals.",
];

type Msg = {
  who: "tenant" | "chris" | "owner";
  name: string;
  time: string;
  text: string;
  voice?: { seconds: string };
  meta?: "delivered" | "seen";
};

const messages: Msg[] = [
  {
    who: "tenant",
    name: "Léa · Tenant",
    time: "09:14",
    text: "Hi Chris, I have a leak under the kitchen sink. It started this morning, there’s a small puddle.",
    voice: { seconds: "0:21" },
    meta: "seen",
  },
  {
    who: "chris",
    name: "Chris.AI",
    time: "09:14",
    text: "I’ll qualify the issue and send the owner a structured plan. Could you send a quick photo of the cabinet?",
  },
  {
    who: "owner",
    name: "M. Bernard · Owner",
    time: "09:18",
    text: "Contact Karim. Ask me before approving quotes above €180.",
  },
  {
    who: "chris",
    name: "Chris.AI",
    time: "09:18",
    text: "Got it. I’ll coordinate the visit with Karim and keep everyone updated.",
  },
];

export function DemoFlow() {
  return (
    <section id="demo" className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow index="03">Demo flow</Eyebrow>
              <h2 className="mt-6 text-[34px] md:text-[46px] leading-[1.05] tracking-[-0.025em] font-medium text-gradient">
                Built for the full{" "}
                <span className="serif-italic accent-gradient">three-party loop.</span>
              </h2>
              <p className="mt-6 text-ink-300 text-[15.5px] leading-[1.6] max-w-md">
                Tenant, owner and worker each see the right slice of the
                conversation. Chris carries the context between them — and
                logs every decision.
              </p>

              <ol className="mt-10 space-y-3">
                {flowSteps.map((s, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 group"
                  >
                    <span className="mt-0.5 w-7 h-7 rounded-full hairline flex items-center justify-center text-[12px] font-mono text-ink-100 bg-white/[0.02] shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-ink-200 text-[14.5px] leading-[1.55] pt-0.5">
                      {s}
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <ChatMock />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChatMock() {
  return (
    <div className="relative">
      <div
        className="absolute -inset-4 rounded-[28px] blur-2xl opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 60% at 30% 30%, rgba(99,102,241,0.28), transparent 70%), radial-gradient(60% 60% at 80% 80%, rgba(56,189,248,0.22), transparent 70%)",
        }}
      />
      <div className="relative glass-strong rounded-[22px] overflow-hidden">
        {/* WhatsApp-ish header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-br from-iris-500 to-azure-400 text-ink-950 font-medium text-[13px]">
              C
            </div>
            <div>
              <div className="text-[13.5px] text-ink-50 font-medium tracking-tight">
                Chris · #14 Rue Lafayette · 3F
              </div>
              <div className="text-[11.5px] font-mono text-ink-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Tenant · Owner · Chris.AI
              </div>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 chip !text-[10.5px]">
            <ShieldCheck size={11} />
            isolation · property_id #2034
          </div>
        </div>

        <div className="px-4 sm:px-6 py-6 space-y-3 bg-[radial-gradient(110%_60%_at_50%_0%,rgba(99,102,241,0.06),transparent_60%)]">
          {messages.map((m, i) => (
            <Bubble key={i} msg={m} />
          ))}

          {/* Action footer */}
          <div className="!mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-white/5">
            <Action label="Plan drafted" />
            <Action label="Approved · cap €180" />
            <Action label="Karim contacted" />
            <Action label="Visit scheduled" pending />
          </div>
        </div>
      </div>
    </div>
  );
}

function Bubble({ msg }: { msg: Msg }) {
  const isRight = msg.who === "owner";
  const align = isRight ? "justify-end" : "justify-start";

  const tone =
    msg.who === "chris"
      ? "bg-gradient-to-br from-iris-500/15 to-azure-500/10 border-iris-400/25 text-ink-50"
      : msg.who === "owner"
      ? "bg-emerald-500/10 border-emerald-400/20 text-ink-50"
      : "bg-white/[0.04] border-white/[0.07] text-ink-100";

  return (
    <div className={`flex ${align}`}>
      <div className={`max-w-[82%] sm:max-w-[78%] rounded-2xl border ${tone} px-4 py-3`}>
        <div className="flex items-center justify-between gap-3 text-[10.5px] font-mono text-ink-400">
          <span className="uppercase tracking-[0.14em]">{msg.name}</span>
          <span>{msg.time}</span>
        </div>
        {msg.voice && (
          <div className="mt-2 flex items-center gap-3 bg-black/30 rounded-xl px-3 py-2.5 border border-white/5">
            <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
              <Mic size={13} className="text-ink-50" />
            </span>
            <svg width="120" height="20" viewBox="0 0 120 20" className="opacity-80">
              {Array.from({ length: 26 }).map((_, i) => {
                const h = 4 + Math.abs(Math.sin(i * 0.9)) * 14;
                return (
                  <rect
                    key={i}
                    x={i * 4.6}
                    y={(20 - h) / 2}
                    width="2"
                    height={h}
                    rx="1"
                    fill={i < 14 ? "#a5b4ff" : "rgba(255,255,255,0.25)"}
                  />
                );
              })}
            </svg>
            <span className="font-mono text-[11px] text-ink-300">{msg.voice.seconds}</span>
          </div>
        )}
        <p className="mt-2 text-[13.5px] leading-[1.5] text-ink-100">{msg.text}</p>
        {msg.meta && (
          <div className="mt-1.5 flex items-center justify-end gap-1 text-[10.5px] text-ink-400 font-mono">
            <CheckCheck size={12} />
            {msg.meta}
          </div>
        )}
      </div>
    </div>
  );
}

function Action({ label, pending }: { label: string; pending?: boolean }) {
  return (
    <div className="flex items-center gap-2 rounded-xl hairline px-3 py-2 bg-white/[0.02]">
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          pending ? "bg-amber-400 pulse-dot" : "bg-emerald-400"
        }`}
      />
      <span className="text-[11.5px] font-mono text-ink-200 tracking-tight truncate">
        {label}
      </span>
    </div>
  );
}
