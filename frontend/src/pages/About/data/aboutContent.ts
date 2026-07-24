export const ABOUT_HERO = {
  eyebrow: "About us",
  title: "About Careerly",
  lead: "Your Career. Our Mission. Success Together. — clear guidance and placements for IT and Non-IT paths in Bengaluru and beyond.",
  primaryCta: { label: "Talk to us", href: "/contact" },
  secondaryCta: { label: "Explore services", href: "/services" },
} as const;

export const AT_A_GLANCE = {
  title: "At a Glance",
  body: "Careerly is a Bengaluru-based career partner connecting students and professionals with IT and Non-IT opportunities — with clarity at every step.",
} as const;

export type InfoCard = {
  id: string;
  title: string;
  body: string[];
};

export const INFO_CARDS: InfoCard[] = [
  {
    id: "overview",
    title: "Overview — Who we are",
    body: [
      "Careerly helps candidates move from ambition to offer with honest counseling, thoughtful matching, and support that continues beyond the first conversation.",
      "Whether you are a student taking a first step or a professional ready to level up, we focus on fit — across IT and Non-IT roles in Bengaluru and beyond.",
    ],
  },
  {
    id: "promise",
    title: "Our promise",
    body: [
      "We do not flood you with noise. We listen, clarify your path, and connect you with opportunities that match your stage, skills, and goals.",
      "For hiring partners, we bring screened candidates who understand the role — so every introduction feels intentional.",
    ],
  },
];

export type WhyPoint = {
  id: string;
  title: string;
  detail: string;
};

export const WHY_CHOOSE = {
  title: "Why Choose Careerly?",
  lead: "Result-oriented hiring support for candidates and employers — grounded in clarity, not volume.",
  points: [
    {
      id: "clarity",
      title: "Clarity before you apply",
      detail:
        "Guidance on role fit, resumes, and interviews so you apply with intention — not guesswork.",
    },
    {
      id: "matching",
      title: "Thoughtful matching",
      detail:
        "IT and Non-IT openings curated for your stage: campus, fresher, switcher, or experienced professional.",
    },
    {
      id: "support",
      title: "Support through decisions",
      detail:
        "We stay with you through conversations, offers, and next steps — so placements feel deliberate.",
    },
  ] satisfies WhyPoint[],
} as const;

export type ServiceSnap = {
  id: string;
  title: string;
  line: string;
  icon: "it" | "nonit" | "guidance" | "campus";
};

export const SERVICES_SNAPSHOT = {
  title: "How we help",
  lead: "Four ways Careerly supports your career journey.",
  items: [
    {
      id: "it-job-matching",
      title: "IT job matching",
      line: "Roles curated for builders and learners across engineering tracks.",
      icon: "it",
    },
    {
      id: "non-it-placements",
      title: "Non-IT placements",
      line: "Business, HR, sales, and admin roles with clear entry points.",
      icon: "nonit",
    },
    {
      id: "career-guidance",
      title: "Career guidance",
      line: "Resume direction, interview readiness, and role-fit clarity.",
      icon: "guidance",
    },
    {
      id: "campus-fresher",
      title: "Campus & fresher focus",
      line: "Pathways for final-year students and first-job confidence.",
      icon: "campus",
    },
  ] satisfies ServiceSnap[],
} as const;

export type TrustPillar = {
  id: string;
  label: string;
  detail: string;
};

export const TRUST_STRIP = {
  title: "What we stand for",
  pillars: [
    {
      id: "bengaluru",
      label: "Bengaluru-based",
      detail: "Rooted in J P Nagar, serving candidates and employers locally.",
    },
    {
      id: "lanes",
      label: "IT & Non-IT",
      detail: "Both technical and business pathways under one roof.",
    },
    {
      id: "audience",
      label: "Students & professionals",
      detail: "From campus first steps to experienced career moves.",
    },
    {
      id: "values",
      label: "Learn · Grow · Achieve · Succeed",
      detail: "Four words that shape how we counsel and connect.",
    },
  ] satisfies TrustPillar[],
} as const;

export const PRESENCE = {
  title: "Our presence",
  lead: "Visit us in Bengaluru — or reach the team by phone or online.",
  address:
    "No. 13, Saienclave Kothanur, Near GR Lavender Skalvi School Road, J P Nagar 8th Phase, Bangalore South — 560078",
  phoneDisplay: "+91 96864 48306",
  phoneHref: "tel:+919686448306",
  webDisplay: "careerly.info",
  webHref: "https://careerly.info",
  cta: { label: "Contact us", to: "/contact" },
} as const;
