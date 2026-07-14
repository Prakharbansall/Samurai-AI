export const COMPANY = {
  name: "SAMURAI TECHNOLOGY PRIVATE LIMITED",
  shortName: "Samurai Technology",
  brand: "Samurai AI",
  product: "Samurai AI Platform",
  tagline: "Enterprise AI infrastructure for intelligent business operations",
  founder: "Chirag Chaudhary",
  established: "6 March 2026",
  incorporationYear: "2026",
  cin: "U62090MP2026PTC082549",
  email: "contact@aisamuraiai.in",
  salesEmail: "sales@aisamuraiai.in",
  supportEmail: "support@aisamuraiai.in",
  phone: "+91 8290350018",
  phoneHref: "+918290350018",
  domain: "aisamuraiai.in",
  website: "https://aisamuraiai.in",
  address:
    "LIG 43, 3C Saket Nagar, Near H.E. Hospital, Bhopal, Huzur, Madhya Pradesh, India – 462024",
};

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/company/samurai-ai", icon: "Linkedin" },
  { label: "X (Twitter)", href: "https://x.com/samuraiaiplatform", icon: "Twitter" },
  { label: "GitHub", href: "https://github.com/samurai-ai", icon: "Github" },
  { label: "YouTube", href: "https://youtube.com/@samuraiaiplatform", icon: "Youtube" },
] as const;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Platform", to: "/platform" },
  { label: "About", to: "/about" },
  { label: "Roadmap", to: "/roadmap" },
  { label: "Insights", to: "/blog" },
  { label: "Pricing", to: "/pricing" },
] as const;

export const FOOTER_LINKS = {
  product: [
    { label: "Platform Overview", to: "/platform" },
    { label: "Product Roadmap", to: "/roadmap" },
    { label: "Release Notes", to: "/updates" },
    { label: "Pricing", to: "/pricing" },
  ],
  company: [
    { label: "About Us", to: "/about" },
    { label: "Insights", to: "/blog" },
    { label: "Careers", to: "/careers" },
    { label: "Contact", to: "/contact" },
  ],
  support: [
    { label: "Help Center", to: "/help" },
    { label: "FAQ", to: "/help#faq" },
    { label: "Request Demo", to: "/contact" },
    { label: "Early Access", to: "/#early-access" },
  ],
  legal: [
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms & Conditions", to: "/terms" },
  ],
} as const;

export const PLATFORM_FEATURES = [
  {
    icon: "BrainCircuit",
    title: "Intelligent Workflows",
    desc: "Orchestrate complex business processes with AI-driven automation that adapts to your operations and scales on demand.",
  },
  {
    icon: "MessagesSquare",
    title: "Conversational AI Layer",
    desc: "Deploy context-aware assistants across customer support, internal knowledge, and team collaboration - unified on one platform.",
  },
  {
    icon: "Database",
    title: "Data Intelligence Hub",
    desc: "Transform enterprise data into actionable insights, forecasts, and dashboards that power strategic decision-making.",
  },
  {
    icon: "Workflow",
    title: "Process Automation Engine",
    desc: "Eliminate repetitive tasks and connect your existing tools through a modular, API-first automation architecture.",
  },
  {
    icon: "Sparkles",
    title: "Generative AI Studio",
    desc: "Build and deploy enterprise-grade generative applications with built-in governance, guardrails, and compliance controls.",
  },
  {
    icon: "Cpu",
    title: "ML Model Infrastructure",
    desc: "Train, deploy, and monitor machine learning models on reliable, cloud-native infrastructure designed for production workloads.",
  },
  {
    icon: "ShieldCheck",
    title: "Enterprise Security",
    desc: "End-to-end encryption, role-based access, audit trails, and privacy-by-design architecture for regulated industries.",
  },
  {
    icon: "Plug",
    title: "Open API Ecosystem",
    desc: "Integrate seamlessly with your existing stack through RESTful APIs, webhooks, and pre-built connectors for major platforms.",
  },
] as const;

export const PLATFORM_PILLARS = [
  { icon: "Layers", title: "Modular Architecture", desc: "Composable modules you activate as you grow - no rip-and-replace required." },
  { icon: "TrendingUp", title: "Infinite Scalability", desc: "Cloud-native infrastructure that handles growth from hundreds to millions of operations." },
  { icon: "ShieldCheck", title: "Enterprise Reliability", desc: "99.9% uptime SLA, redundant systems, and continuous monitoring built in." },
  { icon: "Plug", title: "API-First Design", desc: "Every capability exposed through secure APIs for seamless ecosystem integration." },
  { icon: "Globe", title: "Multi-Region Ready", desc: "Deploy across regions with data residency controls for global compliance." },
  { icon: "Zap", title: "Real-Time Processing", desc: "Low-latency inference and event-driven workflows for time-critical operations." },
  { icon: "Lock", title: "Data Sovereignty", desc: "Your data stays yours - full control over storage, processing, and retention policies." },
  { icon: "RefreshCw", title: "Continuous Evolution", desc: "Regular platform updates with backward-compatible APIs and zero-downtime rollouts." },
];

export const HOW_IT_WORKS = [
  { title: "Connect Your Ecosystem", desc: "Integrate your data sources, tools, and workflows through our secure API layer and pre-built connectors." },
  { title: "Configure Intelligence", desc: "Select platform modules, define automation rules, and tailor AI models to your business objectives." },
  { title: "Deploy & Scale", desc: "Launch across teams and channels with enterprise-grade reliability, monitoring, and governance controls." },
  { title: "Measure & Optimise", desc: "Track outcomes through unified analytics dashboards and continuously improve performance with platform insights." },
];

export const USE_CASES = [
  {
    icon: "Headset",
    title: "Customer Experience",
    outcome: "Reduce response times by 70% and resolve 85% of queries without human intervention.",
    audience: "Support, CX, and operations teams at growth-stage companies.",
  },
  {
    icon: "BarChart3",
    title: "Revenue Intelligence",
    outcome: "Improve forecast accuracy by 40% and identify high-value opportunities in real time.",
    audience: "Sales, finance, and leadership teams in B2B enterprises.",
  },
  {
    icon: "FileSearch",
    title: "Document Intelligence",
    outcome: "Process thousands of documents daily with 95%+ extraction accuracy and full audit trails.",
    audience: "Legal, compliance, and back-office teams in regulated industries.",
  },
  {
    icon: "Factory",
    title: "Operations Automation",
    outcome: "Cut manual processing time in half and eliminate errors across supply chain workflows.",
    audience: "Operations and logistics teams in manufacturing and distribution.",
  },
];

export const WHY_PLATFORM = [
  { icon: "Building2", title: "Built for Enterprise", desc: "Production-grade infrastructure with the security, compliance, and reliability enterprises demand." },
  { icon: "TrendingUp", title: "Designed to Scale", desc: "Architecture that grows with your business - from early adoption to enterprise-wide deployment." },
  { icon: "ShieldCheck", title: "Security First", desc: "SOC 2-aligned practices, encryption at every layer, and granular access controls." },
  { icon: "Rocket", title: "Rapid Time-to-Value", desc: "Pre-built modules and intuitive configuration get you live in days, not quarters." },
  { icon: "Headset", title: "Dedicated Success Team", desc: "Onboarding, training, and ongoing optimisation support from AI specialists." },
  { icon: "PiggyBank", title: "Predictable Economics", desc: "Transparent, usage-based pricing with no hidden infrastructure costs." },
  { icon: "Lightbulb", title: "Innovation Pipeline", desc: "Continuous platform enhancements driven by the latest advances in AI research." },
  { icon: "HeartHandshake", title: "Partnership Model", desc: "We succeed when you succeed - long-term collaboration, not one-off engagements." },
];

export const GROWTH_STRATEGY = [
  { phase: "Phase 1", title: "Foundation", period: "2026", desc: "Launch core platform modules, onboard early access partners, and establish India market presence." },
  { phase: "Phase 2", title: "Expansion", period: "2026–2027", desc: "Scale across enterprise verticals, expand API ecosystem, and grow the partner network." },
  { phase: "Phase 3", title: "Global Reach", period: "2027–2028", desc: "Multi-region deployment, industry-specific solutions, and international market entry." },
  { phase: "Phase 4", title: "AI Ecosystem", period: "2028+", desc: "Third-party marketplace, developer community, and autonomous enterprise intelligence." },
];

export const ROADMAP = [
  { quarter: "Q1 2026", status: "completed", title: "Platform Foundation", items: ["Core workflow engine", "API gateway & authentication", "Admin dashboard v1", "Early access programme launch"] },
  { quarter: "Q2 2026", status: "in-progress", title: "Intelligence Layer", items: ["Conversational AI module", "Document intelligence", "Analytics dashboard v2", "Enterprise SSO integration"] },
  { quarter: "Q3 2026", status: "planned", title: "Enterprise Scale", items: ["Multi-tenant architecture", "Advanced ML model hosting", "Compliance & audit module", "Partner API marketplace"] },
  { quarter: "Q4 2026", status: "planned", title: "Ecosystem Growth", items: ["Industry solution packs", "Mobile companion app", "Real-time collaboration", "Global data residency options"] },
  { quarter: "2027", status: "planned", title: "Autonomous Operations", items: ["Self-optimising workflows", "Predictive operations engine", "Third-party developer platform", "International expansion"] },
];

export const RELEASE_NOTES = [
  { version: "v1.2.0", date: "March 2026", title: "Analytics Dashboard v2", highlights: ["Real-time performance metrics", "Custom report builder", "Team usage insights", "Export to PDF and CSV"] },
  { version: "v1.1.0", date: "February 2026", title: "Conversational AI Module", highlights: ["Multi-channel deployment", "Knowledge base integration", "Conversation analytics", "Custom persona configuration"] },
  { version: "v1.0.0", date: "January 2026", title: "Platform Launch", highlights: ["Workflow automation engine", "RESTful API suite", "Role-based access control", "Early access programme"] },
];

export const INDUSTRIES = [
  { icon: "Stethoscope", title: "Healthcare" },
  { icon: "Landmark", title: "Finance" },
  { icon: "ShoppingBag", title: "Retail" },
  { icon: "GraduationCap", title: "Education" },
  { icon: "Factory", title: "Manufacturing" },
  { icon: "Truck", title: "Logistics" },
  { icon: "Building2", title: "Real Estate" },
  { icon: "Rocket", title: "Technology" },
  { icon: "ShoppingCart", title: "E-commerce" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Samurai AI Platform reduced our customer support backlog by 68% within the first month. The workflow automation alone transformed how our team operates.",
    name: "Priya Sharma",
    role: "VP Operations, FinEdge Solutions",
    company: "FinEdge Solutions",
  },
  {
    quote:
      "We evaluated several AI platforms before choosing Samurai. The modular architecture let us start with document intelligence and expand without disruption.",
    name: "Rajesh Mehta",
    role: "CTO, LogiStream India",
    company: "LogiStream India",
  },
  {
    quote:
      "The analytics dashboard gives our leadership team visibility we never had before. Forecast accuracy improved dramatically after deploying the revenue intelligence module.",
    name: "Ananya Krishnan",
    role: "Director of Strategy, NovaRetail",
    company: "NovaRetail",
  },
  {
    quote:
      "As an early access partner, we've seen the platform evolve rapidly. The team's responsiveness and the reliability of the infrastructure exceeded our expectations.",
    name: "Vikram Patel",
    role: "Founder & CEO, HealthBridge Tech",
    company: "HealthBridge Tech",
  },
];

export const FAQS = [
  {
    q: "What is the Samurai AI Platform?",
    a: "Samurai AI Platform is an enterprise-grade AI infrastructure that unifies intelligent workflows, conversational AI, data intelligence, and automation into a single, scalable ecosystem. It is designed for organisations that want to deploy AI at scale without building everything from scratch.",
  },
  {
    q: "Who is the platform built for?",
    a: "We serve growth-stage companies and enterprises across finance, healthcare, retail, logistics, and technology - teams that need reliable AI infrastructure to automate operations, improve decision-making, and deliver better customer experiences.",
  },
  {
    q: "How does pricing work?",
    a: "We offer flexible, usage-based plans tailored to your scale and module requirements. Visit our Pricing page for current tiers, or contact our sales team for enterprise agreements with dedicated support and custom SLAs.",
  },
  {
    q: "How quickly can we get started?",
    a: "Most organisations are operational within two to four weeks. Our modular onboarding process, pre-built connectors, and dedicated success team ensure a smooth deployment without disrupting your existing operations.",
  },
  {
    q: "How do you handle data security and privacy?",
    a: "Security is foundational to our architecture. We implement encryption in transit and at rest, role-based access controls, comprehensive audit trails, and privacy-by-design principles. We align with enterprise compliance requirements and support data residency preferences.",
  },
  {
    q: "Can the platform integrate with our existing systems?",
    a: "Yes. Samurai AI Platform is API-first by design. Connect your CRM, ERP, databases, and communication tools through RESTful APIs, webhooks, and pre-built connectors - no rip-and-replace required.",
  },
  {
    q: "What ongoing support is included?",
    a: "All plans include platform monitoring, documentation, and email support. Growth and Enterprise tiers add dedicated success managers, priority response times, and quarterly business reviews.",
  },
  {
    q: "How do I request a demo or join early access?",
    a: "Use the Early Access form on our homepage, visit the Contact page to schedule a demo, or email our sales team at sales@aisamuraiai.in. We respond within one business day.",
  },
];

export const HELP_ARTICLES = [
  { title: "Getting Started with Samurai AI Platform", category: "Onboarding", desc: "Account setup, initial configuration, and your first workflow in under 30 minutes." },
  { title: "API Authentication & Integration Guide", category: "Developers", desc: "Secure API keys, OAuth flows, webhooks, and connector setup for your stack." },
  { title: "Configuring Workflow Automation", category: "Platform", desc: "Build, test, and deploy intelligent workflows with triggers, conditions, and actions." },
  { title: "Managing Users & Permissions", category: "Administration", desc: "Role-based access, team management, SSO configuration, and audit logging." },
  { title: "Understanding Usage & Billing", category: "Billing", desc: "Monitor consumption, interpret invoices, and optimise your plan for cost efficiency." },
  { title: "Troubleshooting Common Issues", category: "Support", desc: "Resolve connectivity, performance, and integration issues with step-by-step guides." },
];

export const BLOG_POSTS = [
  { tag: "Platform", date: "Mar 2026", title: "Why Enterprise AI Needs a Unified Platform, Not Point Solutions", excerpt: "Fragmented AI tools create integration debt. A platform approach delivers compounding value across your organisation." },
  { tag: "Strategy", date: "Feb 2026", title: "The ROI Framework for AI Infrastructure Investments", excerpt: "How forward-thinking leaders measure and communicate the business impact of AI platform adoption." },
  { tag: "Automation", date: "Feb 2026", title: "Intelligent Workflows: Beyond Basic Automation", excerpt: "How AI-driven workflows adapt to changing conditions and deliver outcomes traditional automation cannot." },
  { tag: "Enterprise", date: "Jan 2026", title: "Building Trust in Enterprise AI: Security, Governance, and Compliance", excerpt: "The architectural decisions that make AI platforms enterprise-ready from day one." },
  { tag: "Product", date: "Jan 2026", title: "Samurai AI Platform v1.0: What We Built and Why", excerpt: "An inside look at our platform foundation and the vision driving our product roadmap." },
  { tag: "Industry", date: "Dec 2025", title: "AI Transformation in Indian Enterprises: Opportunities Ahead", excerpt: "Market trends, adoption patterns, and how Indian businesses are leveraging AI infrastructure." },
];

export const PRICING_TIERS = [
  {
    name: "Starter",
    price: "Coming Soon",
    desc: "For teams exploring AI automation with core platform modules.",
    features: ["Up to 5 users", "Core workflow engine", "Basic analytics", "Email support", "API access"],
    cta: "Join Waitlist",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "Coming Soon",
    desc: "For scaling organisations deploying AI across multiple teams.",
    features: ["Up to 50 users", "All platform modules", "Advanced analytics", "Priority support", "SSO integration", "Custom workflows"],
    cta: "Request Demo",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For large organisations with advanced security and compliance needs.",
    features: ["Unlimited users", "Dedicated infrastructure", "Custom SLAs", "Success manager", "Compliance module", "On-premise options"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export const FOUNDER_STORY = {
  headline: "Building the AI infrastructure India deserves",
  paragraphs: [
    "Chirag Chaudhary founded Samurai Technology with a clear conviction: Indian enterprises deserve world-class AI infrastructure built for their scale, complexity, and ambition - not adapted Western tools with local pricing.",
    "After years working at the intersection of machine learning, product engineering, and enterprise software, Chirag saw a recurring pattern. Companies wanted to adopt AI but were blocked by fragmented tools, integration complexity, and the absence of a unified platform they could trust.",
    "Samurai AI Platform was born to solve that problem. Registered as SAMURAI TECHNOLOGY PRIVATE LIMITED in March 2026, the company is building modular, API-first AI infrastructure that lets organisations deploy intelligence across their operations - securely, reliably, and at scale.",
    "Today, Samurai Technology is onboarding early access partners across finance, healthcare, retail, and logistics - proving that enterprise-grade AI platforms can be built in India, for the world.",
  ],
};

// Legacy exports for gradual migration
export const SERVICES = PLATFORM_FEATURES;
export const WHY_US = WHY_PLATFORM;
export const PROCESS = HOW_IT_WORKS;
export const TECHNOLOGIES = PLATFORM_PILLARS.map((p) => p.title);
