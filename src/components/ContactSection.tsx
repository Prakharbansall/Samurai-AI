import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { toast } from "sonner";
import { COMPANY } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/Reveal";

const info = [
  { icon: Phone, label: "Phone", value: COMPANY.phone, href: `tel:${COMPANY.phoneHref}` },
  { icon: Mail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: MapPin, label: "Address", value: COMPANY.address },
  { icon: Clock, label: "Hours", value: "Mon – Sat, 10:00 – 19:00 IST" },
];

export function ContactSection() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent!", {
        description: "Thank you for reaching out. Our team will get back to you shortly.",
      });
    }, 900);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <Reveal className="glass rounded-3xl p-6 sm:p-8">
        <form onSubmit={onSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" name="name" required placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required placeholder="you@company.com" />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" placeholder="+91 00000 00000" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" name="company" placeholder="Company name" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="interest">I'm interested in</Label>
            <Input id="interest" name="interest" placeholder="Demo, Early Access, Sales, Support" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">How can we help?</Label>
            <Textarea id="message" name="message" required rows={5} placeholder="Tell us about your organisation and AI goals..." />
          </div>
          <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
            {loading ? "Sending..." : "Contact Sales"}
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </Reveal>

      <Reveal delay={120} className="flex flex-col gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          {info.map((item) => (
            <div key={item.label} className="glass card-hover rounded-2xl p-5">
              <div className="grid h-11 w-11 place-items-center rounded-xl [background-image:var(--gradient-primary)]">
                <item.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="mt-1 block break-words text-sm text-foreground hover:text-primary">
                  {item.value}
                </a>
              ) : (
                <p className="mt-1 text-sm text-foreground">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="glass overflow-hidden rounded-2xl">
          <iframe
            title="Samurai Technology location map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=77.40%2C23.19%2C77.48%2C23.25&layer=mapnik&marker=23.22%2C77.44"
            className="h-64 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Reveal>
    </div>
  );
}
