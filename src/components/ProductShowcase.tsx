import { BarChart3, Bot, Workflow } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const showcases = [
  {
    icon: Workflow,
    title: "Workflow Builder",
    desc: "Visual interface for designing intelligent automation pipelines across your organisation.",
    preview: (
      <div className="space-y-2 p-4">
        {["Trigger: New lead created", "AI: Score & classify", "Action: Route to team"].map((step, i) => (
          <div key={step} className="flex items-center gap-3 rounded-lg border border-border bg-secondary/30 px-3 py-2">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/20 text-[10px] font-bold text-primary">{i + 1}</span>
            <span className="text-xs">{step}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Bot,
    title: "AI Assistant Console",
    desc: "Configure, monitor, and optimise conversational AI across every customer touchpoint.",
    preview: (
      <div className="space-y-2 p-4">
        <div className="rounded-lg bg-secondary/40 px-3 py-2 text-xs text-muted-foreground">How can I track my order status?</div>
        <div className="rounded-lg bg-primary/15 px-3 py-2 text-xs">Your order #48291 is in transit and expected to arrive by Friday. Would you like delivery updates via SMS?</div>
        <div className="flex gap-2">
          <span className="rounded-full bg-green-500/20 px-2 py-0.5 text-[10px] text-green-400">Resolved</span>
          <span className="rounded-full bg-secondary/60 px-2 py-0.5 text-[10px] text-muted-foreground">1.2s response</span>
        </div>
      </div>
    ),
  },
  {
    icon: BarChart3,
    title: "Intelligence Dashboard",
    desc: "Unified analytics for workflows, AI performance, and business outcomes in real time.",
    preview: (
      <div className="p-4">
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Efficiency", val: "94%" },
            { label: "Accuracy", val: "97%" },
            { label: "Uptime", val: "99.9%" },
          ].map((m) => (
            <div key={m.label} className="rounded-lg bg-secondary/30 p-2 text-center">
              <p className="font-display text-sm font-bold text-primary">{m.val}</p>
              <p className="text-[10px] text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 flex h-12 items-end gap-1">
          {[30, 50, 40, 70, 55, 80, 65, 90].map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-primary/50" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    ),
  },
];

export function ProductShowcase() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {showcases.map((s, i) => (
        <Reveal key={s.title} delay={i * 100} className="glass card-hover overflow-hidden rounded-2xl">
          <div className="border-b border-border bg-secondary/20">
            <div className="flex items-center gap-2 px-4 py-2.5">
              <div className="flex gap-1">
                <span className="h-2 w-2 rounded-full bg-red-500/60" />
                <span className="h-2 w-2 rounded-full bg-yellow-500/60" />
                <span className="h-2 w-2 rounded-full bg-green-500/60" />
              </div>
              <span className="text-[10px] text-muted-foreground">{s.title}</span>
            </div>
            {s.preview}
          </div>
          <div className="p-5">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl [background-image:var(--gradient-primary)]">
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="text-base font-semibold">{s.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
