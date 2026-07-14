import {
  BrainCircuit, MessagesSquare, Cpu, Workflow, Sparkles, Lightbulb, Database,
  Settings2, Users, TrendingUp, ShieldCheck, Rocket, Headset, PiggyBank,
  HeartHandshake, Stethoscope, Landmark, ShoppingBag, GraduationCap, Factory,
  Truck, Building2, ShoppingCart, Plug, Globe, Zap, Lock, RefreshCw, Layers,
  BarChart3, FileSearch, Linkedin, Twitter, Github, Youtube, type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  BrainCircuit, MessagesSquare, Cpu, Workflow, Sparkles, Lightbulb, Database,
  Settings2, Users, TrendingUp, ShieldCheck, Rocket, Headset, PiggyBank,
  HeartHandshake, Stethoscope, Landmark, ShoppingBag, GraduationCap, Factory,
  Truck, Building2, ShoppingCart, Plug, Globe, Zap, Lock, RefreshCw, Layers,
  BarChart3, FileSearch, Linkedin, Twitter, Github, Youtube,
};

export function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] ?? Sparkles;
  return <Icon className={className} />;
}
