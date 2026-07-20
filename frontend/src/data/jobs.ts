export type JobCategory = "IT" | "Non-IT";
export type ExperienceLevel = "Fresher" | "Experienced";

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  category: JobCategory;
  experience: ExperienceLevel;
  type: "Full-time" | "Internship" | "Contract";
  salary: string;
  posted: string;
  skills: string[];
  description: string;
  responsibilities: string[];
  eligibility: string[];
}

export const jobs: Job[] = [
  {
    id: "fe-dev-01",
    title: "Junior Frontend Developer",
    company: "NovaTech Solutions",
    location: "Bengaluru / Hybrid",
    category: "IT",
    experience: "Fresher",
    type: "Full-time",
    salary: "3.5–5 LPA",
    posted: "2026-07-10",
    skills: ["React", "JavaScript", "HTML/CSS", "Git"],
    description:
      "Join a product team building modern web apps. Ideal for students and fresh graduates who love clean UI and learning fast.",
    responsibilities: [
      "Build responsive UI components in React",
      "Collaborate with designers on pixel-perfect screens",
      "Fix bugs and write reusable styles",
      "Participate in code reviews and standups",
    ],
    eligibility: [
      "B.E / B.Tech / BCA / MCA or equivalent",
      "Strong fundamentals in HTML, CSS, JavaScript",
      "Portfolio or academic projects preferred",
    ],
  },
  {
    id: "be-dev-02",
    title: "Backend Developer (Node.js)",
    company: "CloudBridge Labs",
    location: "Bengaluru",
    category: "IT",
    experience: "Experienced",
    type: "Full-time",
    salary: "8–12 LPA",
    posted: "2026-07-08",
    skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
    description:
      "Build and scale APIs for a growing SaaS platform. 1–3 years of backend experience preferred.",
    responsibilities: [
      "Design and maintain RESTful APIs",
      "Optimize database queries and indexes",
      "Integrate third-party services",
      "Ensure security and reliable deployments",
    ],
    eligibility: [
      "1+ years professional backend experience",
      "Solid understanding of databases and auth",
      "Comfortable with Git and Agile workflows",
    ],
  },
  {
    id: "qa-03",
    title: "Software Test Engineer Intern",
    company: "QualityFirst Systems",
    location: "Bengaluru / Remote",
    category: "IT",
    experience: "Fresher",
    type: "Internship",
    salary: "Stipend 15–25k/mo",
    posted: "2026-07-12",
    skills: ["Manual Testing", "Bug Reporting", "SQL Basics"],
    description:
      "Hands-on internship for students who want to enter QA and quality engineering.",
    responsibilities: [
      "Write and execute test cases",
      "Log and track defects clearly",
      "Support regression cycles",
      "Learn basic automation concepts",
    ],
    eligibility: [
      "Final-year students or recent graduates",
      "Attention to detail and clear communication",
      "Willingness to learn tools and processes",
    ],
  },
  {
    id: "data-04",
    title: "Data Analyst",
    company: "InsightPath Analytics",
    location: "Bengaluru",
    category: "IT",
    experience: "Experienced",
    type: "Full-time",
    salary: "6–9 LPA",
    posted: "2026-07-05",
    skills: ["SQL", "Excel", "Power BI", "Python"],
    description:
      "Turn raw business data into clear insights for hiring and operations stakeholders.",
    responsibilities: [
      "Build dashboards and recurring reports",
      "Clean and analyze datasets",
      "Present findings to non-technical teams",
      "Partner with product and HR ops",
    ],
    eligibility: [
      "1–2 years experience in analytics or related roles",
      "Strong SQL and visualization skills",
      "Clear written and verbal communication",
    ],
  },
  {
    id: "hr-05",
    title: "HR Executive — Talent Acquisition",
    company: "PeopleFirst Partners",
    location: "Bengaluru",
    category: "Non-IT",
    experience: "Fresher",
    type: "Full-time",
    salary: "3–4.5 LPA",
    posted: "2026-07-11",
    skills: ["Recruitment", "Communication", "MS Office"],
    description:
      "Screen candidates, coordinate interviews, and support campus hiring drives for IT and Non-IT roles.",
    responsibilities: [
      "Source and screen resumes",
      "Schedule interviews and follow ups",
      "Maintain hiring trackers",
      "Support onboarding paperwork",
    ],
    eligibility: [
      "MBA / BBA / any graduate with HR interest",
      "Excellent communication in English",
      "Comfortable with high-volume hiring seasons",
    ],
  },
  {
    id: "sales-06",
    title: "Business Development Executive",
    company: "GrowLink Ventures",
    location: "Bengaluru / Field",
    category: "Non-IT",
    experience: "Experienced",
    type: "Full-time",
    salary: "4–7 LPA + incentives",
    posted: "2026-07-07",
    skills: ["Sales", "Negotiation", "CRM", "Presentation"],
    description:
      "Own client outreach for career and staffing solutions across Bengaluru South.",
    responsibilities: [
      "Generate leads and close partnership deals",
      "Present Careerly / client offerings",
      "Maintain CRM pipelines",
      "Hit monthly revenue targets",
    ],
    eligibility: [
      "1+ years B2B or field sales experience",
      "Self-driven and target oriented",
      "Local travel readiness",
    ],
  },
  {
    id: "admin-07",
    title: "Office Administrator",
    company: "Careerly Operations",
    location: "J P Nagar, Bengaluru",
    category: "Non-IT",
    experience: "Fresher",
    type: "Full-time",
    salary: "2.8–3.8 LPA",
    posted: "2026-07-09",
    skills: ["Administration", "Coordination", "MS Office"],
    description:
      "Keep the new Careerly office running smoothly — schedules, visitors, and day-to-day ops.",
    responsibilities: [
      "Manage front desk and visitor flow",
      "Coordinate meetings and vendor calls",
      "Maintain files and inventory",
      "Support event and opening logistics",
    ],
    eligibility: [
      "Any graduate with strong organization skills",
      "Polite professional presence",
      "Basic Excel / email proficiency",
    ],
  },
  {
    id: "content-08",
    title: "Content & Career Counseling Associate",
    company: "Careerly Guidance Desk",
    location: "Bengaluru / Hybrid",
    category: "Non-IT",
    experience: "Experienced",
    type: "Contract",
    salary: "4–6 LPA",
    posted: "2026-07-06",
    skills: ["Counseling", "Writing", "Workshops", "Career Guidance"],
    description:
      "Guide students on career paths and create helpful content for Careerly programs.",
    responsibilities: [
      "Conduct one-to-one guidance sessions",
      "Write career tips and workshop materials",
      "Support resume review clinics",
      "Track student outcomes",
    ],
    eligibility: [
      "Background in education, HR, or counseling",
      "Empathy and structured coaching style",
      "Strong writing skills",
    ],
  },
];

export function getJobById(id: string): Job | undefined {
  return jobs.find((job) => job.id === id);
}

export function formatPostedDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
