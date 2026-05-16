import {
  Building2,
  Inbox,
  ShieldAlert,
  Clock4,
  TrendingUp,
  Search,
  Settings2,
  Bell,
  CheckCircle2,
  Circle,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { Eyebrow } from "../components/Eyebrow";
import { Reveal } from "../components/Reveal";

const metrics = [
  { icon: Building2, label: "Active units", value: "42", delta: "+3" },
  { icon: Inbox, label: "Open requests", value: "11", delta: "−2" },
  { icon: ShieldAlert, label: "Pending approvals", value: "4", delta: "+1" },
  { icon: Clock4, label: "Avg. resolution", value: "31h", delta: "−12%" },
];

const requests = [
  { id: "REQ-2034", unit: "14 Lafayette · 3F", issue: "Leak under kitchen sink", status: "owner-approval", priority: "med" },
  { id: "REQ-2033", unit: "Place des Vosges · 2A", issue: "Boiler not heating", status: "scheduling", priority: "high" },
  { id: "REQ-2031", unit: "Belleville · 5C", issue: "Window seal worn", status: "quoted", priority: "low" },
  { id: "REQ-2029", unit: "Bastille · 1B", issue: "Doorbell intercom", status: "resolved", priority: "low" },
];

const recent = [
  { time: "09:14", text: "Tenant message qualified · REQ-2034", who: "Chris" },
  { time: "09:18", text: "Owner approved · cap €180", who: "Owner" },
  { time: "09:21", text: "Provider contacted · Karim", who: "Chris" },
  { time: "09:38", text: "Visit slot proposed · Sat 10:30", who: "Provider" },
];

export function DashboardPreview() {
  return (
    <section className="relative py-24 md:py-32">
      <div
        className="orb"
        style={{
          right: "-180px",
          top: "10%",
          width: "520px",
          height: "520px",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.16), transparent 70%)",
        }}
      />
      <div className="container-x relative">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <Reveal>
            <Eyebrow index="05">Dashboard preview</Eyebrow>
            <h2 className="mt-6 text-[34px] md:text-[46px] leading-[1.05] tracking-[-0.025em] font-medium text-gradient">
              Your portfolio, finally <span className="serif-italic accent-gradient">in one place.</span>
            </h2>
            <p className="mt-6 text-ink-300 text-[15.5px] leading-[1.6]">
              A role-scoped view of every unit, request and pending approval —
              backed by the agent’s audit trail.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <DashboardMock />
        </Reveal>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="relative mt-14">
      <div
        className="absolute -inset-4 rounded-[28px] blur-2xl opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 0%, rgba(99,102,241,0.25), transparent 70%), radial-gradient(60% 60% at 90% 100%, rgba(56,189,248,0.18), transparent 70%)",
        }}
      />
      <div className="relative glass-strong rounded-[22px] overflow-hidden">
        {/* App chrome */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-white/5">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            </div>
            <span className="hidden sm:inline ml-3 chip !text-[10.5px]">
              <span className="w-1.5 h-1.5 rounded-full bg-azure-400 pulse-dot" />
              dashboard.chris.ai
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2 chip !text-[10.5px]">
            <Search size={11} />
            search portfolio, units, requests…
            <span className="ml-3 font-mono text-ink-500">⌘K</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded-lg hairline flex items-center justify-center text-ink-200 hover:bg-white/5">
              <Bell size={14} />
            </button>
            <button className="w-8 h-8 rounded-lg hairline flex items-center justify-center text-ink-200 hover:bg-white/5">
              <Settings2 size={14} />
            </button>
            <span className="ml-1 w-8 h-8 rounded-full bg-gradient-to-br from-iris-500 to-azure-400 text-ink-950 flex items-center justify-center text-[12px] font-medium">
              MB
            </span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-0">
          {/* Sidebar */}
          <aside className="hidden lg:flex col-span-2 flex-col gap-1 p-4 border-r border-white/5">
            {[
              { label: "Overview", active: true },
              { label: "Requests" },
              { label: "Approvals" },
              { label: "Properties" },
              { label: "Providers" },
              { label: "Audit log" },
            ].map((i) => (
              <div
                key={i.label}
                className={`px-3 py-2 rounded-lg text-[12.5px] flex items-center justify-between ${
                  i.active
                    ? "bg-white/[0.05] text-ink-50 hairline"
                    : "text-ink-300 hover:text-ink-100"
                }`}
              >
                <span>{i.label}</span>
                {i.label === "Approvals" && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-300/30">
                    4
                  </span>
                )}
              </div>
            ))}
            <div className="mt-auto pt-3 border-t border-white/5">
              <div className="rounded-xl hairline p-3 bg-white/[0.02]">
                <div className="flex items-center gap-2 text-ink-100 text-[12px]">
                  <Sparkles size={13} />
                  Chris hint
                </div>
                <p className="mt-1.5 text-[11px] text-ink-400 leading-snug">
                  3 quotes ready to review — 2 are within owner cap.
                </p>
              </div>
            </div>
          </aside>

          {/* Main */}
          <div className="col-span-12 lg:col-span-10 p-4 sm:p-6">
            {/* Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl hairline p-4 bg-white/[0.02]"
                >
                  <div className="flex items-center justify-between text-ink-300 text-[12px]">
                    <span className="flex items-center gap-2">
                      <m.icon size={13} />
                      {m.label}
                    </span>
                    <span className="font-mono text-[10.5px] text-emerald-300/80">
                      {m.delta}
                    </span>
                  </div>
                  <div className="mt-2 flex items-end justify-between">
                    <div className="text-[28px] tracking-tight text-ink-50 font-medium">
                      {m.value}
                    </div>
                    <Sparkline />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-12 gap-3">
              {/* Open requests */}
              <div className="col-span-12 lg:col-span-7 rounded-xl hairline bg-white/[0.02] overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
                  <div className="text-[13px] text-ink-50 font-medium">
                    Open requests
                  </div>
                  <div className="font-mono text-[10.5px] text-ink-400">
                    {requests.length} of 11
                  </div>
                </div>
                <ul className="divide-y divide-white/5">
                  {requests.map((r) => (
                    <li
                      key={r.id}
                      className="px-4 py-3 flex items-center justify-between gap-4 hover:bg-white/[0.02]"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <StatusDot status={r.status} />
                        <div className="min-w-0">
                          <div className="text-[12.5px] text-ink-100 truncate">
                            {r.issue}
                          </div>
                          <div className="text-[11px] font-mono text-ink-400 truncate">
                            {r.id} · {r.unit}
                          </div>
                        </div>
                      </div>
                      <StatusPill status={r.status} priority={r.priority} />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Request detail */}
              <div className="col-span-12 lg:col-span-5 rounded-xl hairline bg-white/[0.02] p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-mono text-[10.5px] text-ink-400">REQ-2034 · open</div>
                    <div className="mt-1 text-[13.5px] text-ink-50 font-medium">
                      Leak under kitchen sink
                    </div>
                  </div>
                  <button className="btn-ghost !py-1.5 !px-3 !text-[12px]">
                    Open <ArrowUpRight size={12} />
                  </button>
                </div>

                <ol className="mt-4 space-y-3">
                  {[
                    { done: true, label: "Tenant message qualified" },
                    { done: true, label: "Owner notified · plan sent" },
                    { done: false, label: "Owner approval · cap €180", pending: true },
                    { done: false, label: "Provider visit scheduled" },
                  ].map((s, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {s.done ? (
                        <CheckCircle2 size={15} className="text-emerald-400 mt-0.5" />
                      ) : (
                        <Circle
                          size={15}
                          className={`mt-0.5 ${
                            s.pending ? "text-amber-300" : "text-ink-500"
                          }`}
                        />
                      )}
                      <span
                        className={`text-[12.5px] leading-snug ${
                          s.done
                            ? "text-ink-200"
                            : s.pending
                            ? "text-amber-200"
                            : "text-ink-400"
                        }`}
                      >
                        {s.label}
                      </span>
                    </li>
                  ))}
                </ol>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  <button className="btn-primary !py-2 !text-[12.5px] justify-center">
                    Approve
                  </button>
                  <button className="btn-ghost !py-2 !text-[12.5px] justify-center">
                    Request quote
                  </button>
                </div>
              </div>

              {/* Recent actions */}
              <div className="col-span-12 rounded-xl hairline bg-white/[0.02] overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
                  <div className="text-[13px] text-ink-50 font-medium flex items-center gap-2">
                    <TrendingUp size={14} />
                    Recent actions
                  </div>
                  <div className="font-mono text-[10.5px] text-ink-400">last 30 min</div>
                </div>
                <ul className="divide-y divide-white/5">
                  {recent.map((r, i) => (
                    <li
                      key={i}
                      className="px-4 py-2.5 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="font-mono text-[11px] text-ink-400 w-12 shrink-0">
                          {r.time}
                        </span>
                        <span className="text-[12.5px] text-ink-100 truncate">
                          {r.text}
                        </span>
                      </div>
                      <span className="font-mono text-[10.5px] text-ink-400 shrink-0">
                        ◷ {r.who}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sparkline() {
  return (
    <svg width="64" height="28" viewBox="0 0 64 28" className="text-iris-400">
      <defs>
        <linearGradient id="sl" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="rgba(129,140,248,0.45)" />
          <stop offset="1" stopColor="rgba(129,140,248,0)" />
        </linearGradient>
      </defs>
      <path
        d="M0,20 L8,16 L16,18 L24,12 L32,15 L40,8 L48,12 L56,6 L64,10 L64,28 L0,28 Z"
        fill="url(#sl)"
      />
      <path
        d="M0,20 L8,16 L16,18 L24,12 L32,15 L40,8 L48,12 L56,6 L64,10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}

const statusColor: Record<string, string> = {
  "owner-approval": "bg-amber-400",
  scheduling: "bg-iris-400",
  quoted: "bg-azure-400",
  resolved: "bg-emerald-400",
};

function StatusDot({ status }: { status: string }) {
  return (
    <span className="relative inline-flex w-2 h-2">
      <span className={`absolute inset-0 rounded-full ${statusColor[status]}`} />
      {status !== "resolved" && (
        <span className={`absolute inset-0 rounded-full ${statusColor[status]} opacity-40 animate-ping`} />
      )}
    </span>
  );
}

function StatusPill({ status, priority }: { status: string; priority: string }) {
  const label =
    status === "owner-approval"
      ? "Owner approval"
      : status === "scheduling"
      ? "Scheduling"
      : status === "quoted"
      ? "Quoted"
      : "Resolved";
  const tone =
    status === "owner-approval"
      ? "text-amber-200 border-amber-300/30 bg-amber-400/10"
      : status === "scheduling"
      ? "text-iris-300 border-iris-400/30 bg-iris-500/10"
      : status === "quoted"
      ? "text-azure-300 border-azure-400/30 bg-azure-500/10"
      : "text-emerald-200 border-emerald-300/30 bg-emerald-400/10";
  return (
    <div className="flex items-center gap-2 shrink-0">
      <span className="hidden sm:inline font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-400">
        {priority}
      </span>
      <span
        className={`text-[10.5px] font-mono px-2 py-0.5 rounded-full border ${tone}`}
      >
        {label}
      </span>
    </div>
  );
}
