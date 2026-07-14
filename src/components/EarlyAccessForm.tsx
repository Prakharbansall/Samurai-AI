import { useState } from "react";
import { Send, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/Reveal";

export function EarlyAccessForm() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success("You're on the list!", {
        description: "We'll reach out shortly with your early access invitation.",
      });
    }, 900);
  };

  return (
    <Reveal className="glass relative overflow-hidden rounded-3xl p-8 sm:p-10">
      <div className="pointer-events-none absolute inset-0 [background:var(--gradient-hero)] opacity-50" />
      <div className="relative mx-auto max-w-xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
          <Sparkles className="h-3.5 w-3.5" />
          Limited Early Access
        </span>
        <h3 className="mt-5 text-2xl font-bold sm:text-3xl">Join the waitlist</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          Be among the first to deploy enterprise AI infrastructure. Early access partners receive priority onboarding and dedicated support.
        </p>
      </div>
      <form onSubmit={onSubmit} className="relative mx-auto mt-8 max-w-xl space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="ea-name">Full name</Label>
            <Input id="ea-name" name="name" required placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ea-email">Work email</Label>
            <Input id="ea-email" name="email" type="email" required placeholder="you@company.com" />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="ea-company">Company</Label>
            <Input id="ea-company" name="company" required placeholder="Company name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ea-role">Your role</Label>
            <Input id="ea-role" name="role" placeholder="e.g. CTO, VP Operations" />
          </div>
        </div>
        <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
          {loading ? "Submitting..." : "Request Early Access"}
          <Send className="h-4 w-4" />
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          No credit card required. We respect your privacy and never share your information.
        </p>
      </form>
    </Reveal>
  );
}
