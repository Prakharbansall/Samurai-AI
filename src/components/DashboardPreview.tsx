import { Activity, BarChart3, Bot, CheckCircle2, TrendingUp, Users, Zap } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const metrics = [
  { label: "Active Workflows", value: "247", change: "+12%", icon: Zap },
  { label: "AI Interactions", value: "18.4K", change: "+28%", icon: Bot },
  { label: "Success Rate", value: "97.2%", change: "+3.1%", icon: CheckCircle2 },
  { label: "Team Members", value: "34", change: "+5", icon: Users },
];

const chartBars = [40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88];

export function DashboardPreview() {
  return (
    <Reveal className="relative mx-auto max-w-5xl">
      <div className="absolute -inset-4 -z-10 rounded-3xl bg-primary/10 blur-3xl" />
      <div className="overflow-hidden rounded-2xl border border-border bg-[oklch(0.12_0.03_265)] shadow-elegant">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/70" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
            <span className="h-3 w-3 rounded-full bg-green-500/70" />
          </div>
          <span className="ml-3 text-xs text-muted-foreground">Samurai AI Platform - Command Center</span>
        </div>

        <div className="grid gap-4 p-4 sm:p-6 lg:grid-cols-3">
          {/* Sidebar */}
          <div className="hidden space-y-2 lg:block">
            {["Overview", "Workflows", "AI Models", "Analytics", "Integrations", "Settings"].map((item, i) => (
              <div
                key={item}
                className={`rounded-lg px-3 py-2 text-xs font-medium ${i === 0 ? "bg-primary/20 text-primary" : "text-muted-foreground"}`}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="space-y-4 lg:col-span-2">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-xl border border-border bg-secondary/30 p-3">
                  <div className="flex items-center justify-between">
                    <m.icon className="h-3.5 w-3.5 text-primary" />
                    <span className="text-[10px] font-medium text-green-400">{m.change}</span>
                  </div>
                  <p className="mt-2 font-display text-lg font-bold">{m.value}</p>
                  <p className="text-[10px] text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-border bg-secondary/20 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-primary" />
                  <span className="text-xs font-semibold">Platform Performance</span>
                </div>
                <span className="flex items-center gap-1 text-[10px] text-green-400">
                  <TrendingUp className="h-3 w-3" /> +24% this quarter
                </span>
              </div>
              <div className="mt-4 flex h-24 items-end gap-1.5">
                {chartBars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/40 to-primary"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-secondary/20 p-3">
                <div className="flex items-center gap-2">
                  <Activity className="h-3.5 w-3.5 text-accent" />
                  <span className="text-xs font-semibold">Live Workflows</span>
                </div>
                <div className="mt-3 space-y-2">
                  {["Customer Onboarding", "Invoice Processing", "Support Triage"].map((w) => (
                    <div key={w} className="flex items-center justify-between text-[10px]">
                      <span className="text-muted-foreground">{w}</span>
                      <span className="rounded-full bg-green-500/20 px-2 py-0.5 text-green-400">Active</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-border bg-secondary/20 p-3">
                <div className="flex items-center gap-2">
                  <Bot className="h-3.5 w-3.5 text-accent" />
                  <span className="text-xs font-semibold">AI Assistant</span>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="rounded-lg bg-primary/10 px-2.5 py-1.5 text-[10px] text-muted-foreground">
                    Analysing Q1 revenue trends across regions...
                  </div>
                  <div className="rounded-lg bg-secondary/60 px-2.5 py-1.5 text-[10px]">
                    Forecast updated: +18% projected growth in APAC segment.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
