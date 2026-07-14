import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { COMPANY, FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/site-data";
import { DynamicIcon } from "@/components/DynamicIcon";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-[oklch(0.13_0.03_265)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt={`${COMPANY.brand} logo`} width={40} height={40} loading="lazy" className="h-9 w-9" />
            <span className="font-display text-lg font-bold">Samurai<span className="gradient-text"> AI</span></span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {COMPANY.product} - enterprise AI infrastructure for intelligent workflows, automation, and data intelligence at scale.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            A product of <span className="text-foreground">{COMPANY.name}</span>
          </p>
          <div className="mt-5 flex gap-3">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
              >
                <DynamicIcon name={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Product</h4>
          <ul className="mt-4 space-y-2.5">
            {FOOTER_LINKS.product.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Company</h4>
          <ul className="mt-4 space-y-2.5">
            {FOOTER_LINKS.company.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Support</h4>
          <ul className="mt-4 space-y-2.5">
            {FOOTER_LINKS.support.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-8">
          <div className="grid gap-6 text-sm text-muted-foreground md:grid-cols-3">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-foreground">Registered Office</p>
                <p className="mt-1">{COMPANY.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-foreground">Contact</p>
                <a href={`mailto:${COMPANY.email}`} className="mt-1 block hover:text-foreground">{COMPANY.email}</a>
                <a href={`mailto:${COMPANY.salesEmail}`} className="block hover:text-foreground">{COMPANY.salesEmail}</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-foreground">Phone</p>
                <a href={`tel:${COMPANY.phoneHref}`} className="mt-1 block hover:text-foreground">{COMPANY.phone}</a>
                <p className="mt-1 text-xs">CIN: {COMPANY.cin}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <div className="flex gap-5">
            {FOOTER_LINKS.legal.map((l) => (
              <Link key={l.to} to={l.to} className="hover:text-foreground">{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
