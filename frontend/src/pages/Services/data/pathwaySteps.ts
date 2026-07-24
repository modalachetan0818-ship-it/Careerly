export type PathwayStepVisual = {
  rotateX: number;
  rotateY: number;
  translateZ: number;
  floatAmp: number;
  floatDur: number;
};

export type PathwayCheckpoint = {
  id: string;
  label: string;
  hint: string;
};

export type PathwayStep = {
  id: string;
  number: string;
  title: string;
  lead: string;
  body: string;
  durationHint: string;
  checkpoints: PathwayCheckpoint[];
  visual: PathwayStepVisual;
  accentStop: number;
};

export const PATHWAY_STEPS: PathwayStep[] = [
  {
    id: "discover",
    number: "01",
    title: "Discover your lane",
    lead: "Name the direction before you chase openings.",
    body: "We start with your stage, skills, and constraints — IT or Non-IT, campus or experienced — so the path ahead is honest.",
    durationHint: "Conversation + profile map",
    checkpoints: [
      { id: "c1", label: "Stage check", hint: "Student, switcher, or professional" },
      { id: "c2", label: "Skill snapshot", hint: "What you can show today" },
      { id: "c3", label: "Lane choice", hint: "IT, Non-IT, or exploratory" },
    ],
    visual: { rotateX: 0, rotateY: 0, translateZ: 40, floatAmp: 8, floatDur: 5.2 },
    accentStop: 0.12,
  },
  {
    id: "prepare",
    number: "02",
    title: "Prepare with intention",
    lead: "Resume, story, and interview muscle — together.",
    body: "Guidance turns into artifacts: a clearer resume, talking points, and practice so you apply with confidence instead of hope.",
    durationHint: "Guided prep sprint",
    checkpoints: [
      { id: "c1", label: "Resume direction", hint: "Proof points that scan well" },
      { id: "c2", label: "Narrative polish", hint: "Why you, why this role" },
      { id: "c3", label: "Interview drills", hint: "Behavioral + role questions" },
    ],
    visual: { rotateX: 0, rotateY: 0, translateZ: 56, floatAmp: 10, floatDur: 4.6 },
    accentStop: 0.34,
  },
  {
    id: "match",
    number: "03",
    title: "Match & introduce",
    lead: "Openings filtered for fit, not volume.",
    body: "We connect you to curated roles — or introduce you to hiring partners — after screening for alignment on both sides.",
    durationHint: "Curated introductions",
    checkpoints: [
      { id: "c1", label: "Role shortlist", hint: "Fewer, stronger options" },
      { id: "c2", label: "Partner brief", hint: "What the hiring side needs" },
      { id: "c3", label: "Warm intro", hint: "Context carried forward" },
    ],
    visual: { rotateX: 0, rotateY: 0, translateZ: 64, floatAmp: 7, floatDur: 5.8 },
    accentStop: 0.58,
  },
  {
    id: "advance",
    number: "04",
    title: "Advance with support",
    lead: "Through interviews toward a confident yes.",
    body: "You are not alone after the intro. We stay available for clarity, follow-ups, and the decisions that come with offers.",
    durationHint: "Ongoing until clarity",
    checkpoints: [
      { id: "c1", label: "Round prep", hint: "What to expect next" },
      { id: "c2", label: "Decision support", hint: "Offer and fit conversations" },
      { id: "c3", label: "Next chapter", hint: "Onward with a clearer path" },
    ],
    visual: { rotateX: 0, rotateY: 0, translateZ: 72, floatAmp: 9, floatDur: 4.9 },
    accentStop: 0.82,
  },
];

export const PATHWAY_SECTION = {
  eyebrow: "The Careerly Path",
  title: "How the journey unfolds",
  lead: "Four deliberate stages — from naming your lane to walking into interviews with support behind you.",
} as const;
