export type ServiceAccent = "gold" | "tan" | "cream" | "ink";

export type ServiceHighlight = {
  id: string;
  label: string;
  detail: string;
};

export type ServiceOutcome = {
  id: string;
  title: string;
  description: string;
};

export type ServiceDeepDiveBlock = {
  id: string;
  heading: string;
  body: string;
  bullets: string[];
};

export type CareerlyService = {
  id: string;
  index: string;
  title: string;
  short: string;
  summary: string;
  audience: string[];
  accent: ServiceAccent;
  tiltBias: { x: number; y: number; z: number };
  depth: number;
  highlights: ServiceHighlight[];
  outcomes: ServiceOutcome[];
  deepDive: ServiceDeepDiveBlock[];
  keywords: string[];
};

export const CAREERLY_SERVICES: CareerlyService[] = [
  {
    id: "it-job-matching",
    index: "01",
    title: "IT job matching",
    short: "Roles curated for builders and learners.",
    summary:
      "Frontend, backend, QA, data, and internship roles curated for students and working professionals.",
    audience: ["students", "switchers", "professionals"],
    accent: "gold",
    tiltBias: { x: -6, y: 8, z: 28 },
    depth: 48,
    highlights: [
      { id: "stack-fit", label: "Stack fit", detail: "Matched to your languages, tools, and learning curve." },
      { id: "role-clarity", label: "Role clarity", detail: "JD decoding so you apply with intention, not noise." },
      { id: "interview-path", label: "Interview path", detail: "Prep checkpoints before you walk into technical rounds." },
    ],
    outcomes: [
      { id: "o1", title: "Focused shortlist", description: "A tighter set of roles that fit your skill stage." },
      { id: "o2", title: "Application readiness", description: "Resume and portfolio notes aligned to IT hiring." },
    ],
    deepDive: [
      {
        id: "dd1",
        heading: "What we match",
        body: "From internships to mid-level engineering tracks across Bengaluru and hybrid setups.",
        bullets: ["Frontend & UI engineering", "Backend & APIs", "QA & automation", "Data & analytics internships"],
      },
      {
        id: "dd2",
        heading: "How matching works",
        body: "We combine your goals, stack, and timeline — then connect you to openings that make sense.",
        bullets: ["Skill and interest mapping", "Role screening with partners", "Guided next-step conversations"],
      },
    ],
    keywords: ["IT", "engineering", "internship", "frontend", "backend", "QA", "data"],
  },
  {
    id: "non-it-placements",
    index: "02",
    title: "Non-IT placements",
    short: "Business roles with clear entry points.",
    summary:
      "HR, sales, admin, counseling, and business roles across Bengaluru and hybrid setups.",
    audience: ["students", "switchers", "employers"],
    accent: "tan",
    tiltBias: { x: 5, y: -7, z: 24 },
    depth: 42,
    highlights: [
      { id: "domain-fit", label: "Domain fit", detail: "HR, sales, admin, and counseling pathways." },
      { id: "local-reach", label: "Local reach", detail: "Bengaluru-first openings with hybrid options." },
      { id: "first-role", label: "First-role support", detail: "Guidance for graduates entering business tracks." },
    ],
    outcomes: [
      { id: "o1", title: "Role shortlist", description: "Business and ops roles matched to your strengths." },
      { id: "o2", title: "Interview confidence", description: "Talking points that translate campus experience into value." },
    ],
    deepDive: [
      {
        id: "dd1",
        heading: "Placement lanes",
        body: "Non-IT does not mean undefined — we map concrete lanes with hiring partners.",
        bullets: ["HR & people operations", "Sales & client success", "Admin & coordination", "Counseling & support roles"],
      },
      {
        id: "dd2",
        heading: "What employers get",
        body: "Screened candidates who understand the role, not generic applications.",
        bullets: ["Pre-screened profiles", "Role-fit conversations", "Offline coordination when needed"],
      },
    ],
    keywords: ["HR", "sales", "admin", "counseling", "business", "Bengaluru"],
  },
  {
    id: "career-guidance",
    index: "03",
    title: "Career guidance",
    short: "Clarity before you apply.",
    summary:
      "Resume direction, interview readiness, and role fit conversations so you apply with clarity.",
    audience: ["students", "switchers", "professionals"],
    accent: "cream",
    tiltBias: { x: -4, y: -5, z: 36 },
    depth: 56,
    highlights: [
      { id: "resume", label: "Resume direction", detail: "Structure and proof points that hiring managers scan for." },
      { id: "interview", label: "Interview readiness", detail: "Practice frameworks for behavioral and role questions." },
      { id: "fit", label: "Role-fit talks", detail: "Honest conversations about where you should aim next." },
    ],
    outcomes: [
      { id: "o1", title: "Clear narrative", description: "A career story that holds together on paper and in interviews." },
      { id: "o2", title: "Next-step plan", description: "Concrete actions for the next 30–90 days." },
    ],
    deepDive: [
      {
        id: "dd1",
        heading: "Guidance sessions",
        body: "We help you decide what to pursue — then how to present yourself for it.",
        bullets: ["Goal and constraint mapping", "Resume and LinkedIn direction", "Mock interview practice"],
      },
      {
        id: "dd2",
        heading: "Who benefits most",
        body: "Final-year students, career switchers, and professionals who feel stuck mid-path.",
        bullets: ["Campus-to-career transitions", "IT and Non-IT lane decisions", "Re-entry after a pause"],
      },
    ],
    keywords: ["guidance", "resume", "interview", "clarity", "career"],
  },
  {
    id: "campus-fresher",
    index: "04",
    title: "Campus & fresher focus",
    short: "A confident first step.",
    summary:
      "Pathways for final-year students and fresh graduates who want a confident first step.",
    audience: ["students"],
    accent: "gold",
    tiltBias: { x: 7, y: 4, z: 32 },
    depth: 44,
    highlights: [
      { id: "campus", label: "Campus pathways", detail: "Programs tuned for final-year timelines." },
      { id: "fresher", label: "Fresher entry", detail: "Roles that welcome first-job energy with structure." },
      { id: "confidence", label: "Confidence build", detail: "Practice and feedback before high-stakes interviews." },
    ],
    outcomes: [
      { id: "o1", title: "First-role readiness", description: "You know what to apply for and how to show up." },
      { id: "o2", title: "Campus-to-offer path", description: "A paced plan from applications to interviews." },
    ],
    deepDive: [
      {
        id: "dd1",
        heading: "Designed for campus calendars",
        body: "We respect exam seasons, placement windows, and the need for early clarity.",
        bullets: ["Final-year planning", "Internship-to-job bridges", "Fresher interview prep"],
      },
      {
        id: "dd2",
        heading: "What freshers receive",
        body: "Not just job links — a guided path into IT or Non-IT careers.",
        bullets: ["Role education", "Application hygiene", "Partner introductions when ready"],
      },
    ],
    keywords: ["campus", "fresher", "graduate", "first job", "internship"],
  },
  {
    id: "experienced-hiring",
    index: "05",
    title: "Experienced hiring",
    short: "Level up with intention.",
    summary:
      "Latent opportunities for professionals ready to level up into stronger IT or Non-IT roles.",
    audience: ["professionals", "switchers", "employers"],
    accent: "ink",
    tiltBias: { x: -8, y: 6, z: 40 },
    depth: 52,
    highlights: [
      { id: "latent", label: "Latent roles", detail: "Opportunities that are not always on public boards." },
      { id: "level-up", label: "Level-up mapping", detail: "Title, scope, and compensation conversations grounded in reality." },
      { id: "switch", label: "Smart switches", detail: "Adjacent moves that leverage what you already know." },
    ],
    outcomes: [
      { id: "o1", title: "Targeted outreach", description: "Introductions aligned to your experience band." },
      { id: "o2", title: "Negotiation clarity", description: "Talking points for scope and growth, not guesswork." },
    ],
    deepDive: [
      {
        id: "dd1",
        heading: "For working professionals",
        body: "When you are ready for a stronger role, we help you move with precision.",
        bullets: ["Experience audit", "Role targeting", "Partner-side screening coordination"],
      },
      {
        id: "dd2",
        heading: "For hiring teams",
        body: "Access candidates who are already operating at the level you need.",
        bullets: ["Pre-vetted experience", "Faster shortlists", "Offline hiring support"],
      },
    ],
    keywords: ["experienced", "mid-level", "hiring", "level up", "professionals"],
  },
  {
    id: "partner-careerly",
    index: "06",
    title: "Partner with Careerly",
    short: "Source talent with us.",
    summary:
      "Companies can work with us offline to source talent quickly — we handle screening and outreach.",
    audience: ["employers"],
    accent: "gold",
    tiltBias: { x: 4, y: -9, z: 46 },
    depth: 60,
    highlights: [
      { id: "screen", label: "Screening", detail: "We filter for role fit before you spend interview time." },
      { id: "outreach", label: "Outreach", detail: "Candidate communication handled with Careerly care." },
      { id: "offline", label: "Offline partnership", detail: "Direct coordination when your hiring sprint needs speed." },
    ],
    outcomes: [
      { id: "o1", title: "Faster shortlists", description: "Qualified profiles without drowning in applications." },
      { id: "o2", title: "Campus + experienced mix", description: "Access both fresher and experienced talent lanes." },
    ],
    deepDive: [
      {
        id: "dd1",
        heading: "Partnership model",
        body: "We work alongside your hiring team — screening, outreach, and introductions.",
        bullets: ["Role briefing", "Candidate pipeline", "Interview coordination support"],
      },
      {
        id: "dd2",
        heading: "Ideal partners",
        body: "Growing teams in Bengaluru who need reliable IT and Non-IT talent.",
        bullets: ["Startups scaling teams", "SMEs with recurring hiring", "Campus hiring seasons"],
      },
    ],
    keywords: ["partner", "hiring", "employer", "screening", "talent"],
  },
];

export function getServiceById(id: string): CareerlyService | undefined {
  return CAREERLY_SERVICES.find((s) => s.id === id);
}

export function getServicesForAudience(audienceId: string): CareerlyService[] {
  return CAREERLY_SERVICES.filter((s) => s.audience.includes(audienceId));
}
