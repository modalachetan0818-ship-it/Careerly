export type OutcomePillar = {
  id: string;
  index: string;
  title: string;
  lead: string;
  body: string;
  deliverables: string[];
  rotateX: number;
  rotateY: number;
  translateZ: number;
};

export const OUTCOME_PILLARS: OutcomePillar[] = [
  {
    id: "clarity",
    index: "A",
    title: "Clarity you can act on",
    lead: "A named lane and a near-term plan.",
    body: "You leave conversations knowing what to pursue, what to pause, and what proof to build next.",
    deliverables: [
      "Lane recommendation (IT / Non-IT / explore)",
      "30–90 day action outline",
      "Role-fit language for applications",
    ],
    rotateX: 14,
    rotateY: -10,
    translateZ: 36,
  },
  {
    id: "readiness",
    index: "B",
    title: "Readiness that shows",
    lead: "Artifacts and practice, not vague advice.",
    body: "Resume direction, interview frameworks, and talking points that hold up under real hiring scrutiny.",
    deliverables: [
      "Resume structure notes",
      "Interview practice checkpoints",
      "Story arcs for campus or career pivots",
    ],
    rotateX: 8,
    rotateY: 16,
    translateZ: 48,
  },
  {
    id: "access",
    index: "C",
    title: "Access with context",
    lead: "Introductions that carry meaning.",
    body: "Curated roles and partner intros where both sides already understand the fit conversation.",
    deliverables: [
      "Filtered role shortlists",
      "Partner introductions when ready",
      "Screening notes that travel with you",
    ],
    rotateX: -10,
    rotateY: -14,
    translateZ: 54,
  },
  {
    id: "momentum",
    index: "D",
    title: "Momentum through decisions",
    lead: "Support past the first yes.",
    body: "Follow-ups, offer conversations, and the confidence to choose a path that fits your stage.",
    deliverables: [
      "Round-by-round prep cues",
      "Offer and fit discussions",
      "A clearer next chapter, not just a job link",
    ],
    rotateX: 6,
    rotateY: 12,
    translateZ: 42,
  },
];

export const OUTCOME_SECTION = {
  eyebrow: "What you walk away with",
  title: "Outcomes, not just openings",
  lead: "Careerly is built so each engagement leaves you with clarity, readiness, access, and momentum — whether you are applying or hiring.",
} as const;
