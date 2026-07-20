import {
  Hero,
  Stats,
  Clients,
  Features,
  Pillars,
  Atmosphere,
  Mission,
  Tracks,
  Guidance,
  Testimonials,
} from "../../sections";

const content = {
  stats: [
    { value: "IT + Non-IT", label: "Career tracks" },
    { value: "95%", label: "Guided success" },
    { value: "Students", label: "& professionals" },
    { value: "Bengaluru", label: "Based & serving" },
  ],
  features: [
    {
      title: "Career clarity",
      text: "Discover where you fit — IT or Non-IT — with honest guidance tailored to your strengths.",
    },
    {
      title: "Skill pathways",
      text: "Build the skills employers look for with clear Learn → Grow steps for every stage.",
    },
    {
      title: "Resume & profile polish",
      text: "Present your story with impact so recruiters and hiring teams see your potential.",
    },
    {
      title: "Interview readiness",
      text: "Practice with role-focused coaching so you walk into every conversation confident.",
    },
    {
      title: "Mentor support",
      text: "Get practical advice from people who understand campus-to-career and career shifts.",
    },
    {
      title: "End-to-end guidance",
      text: "From first conversation to next step — Careerly stays with you through the journey.",
    },
  ],
  pillars: [
    {
      title: "Learn",
      text: "Build skills with guided paths for students entering IT and Non-IT careers.",
    },
    {
      title: "Grow",
      text: "Move from classroom readiness to workplace confidence with real mentorship.",
    },
    {
      title: "Achieve",
      text: "Reach milestones that match your profile — fresher or experienced.",
    },
    {
      title: "Succeed",
      text: "Your career, our mission, success together at Careerly.",
    },
  ],
  testimonials: [
    {
      quote:
        "Careerly helped me go from campus projects to a clear IT path with confidence.",
      name: "Ananya R.",
      role: "Software Engineer",
    },
    {
      quote:
        "The Non-IT guidance was practical and human — I finally knew what to aim for.",
      name: "Karthik M.",
      role: "HR Executive",
    },
    {
      quote:
        "Resume feedback and interview prep made the whole process feel manageable.",
      name: "Priya S.",
      role: "Business Analyst",
    },
  ],
};

export function Home() {
  return (
    <>
      <Hero />
      <Stats items={content.stats} />
      <Features items={content.features} />
      <Pillars items={content.pillars} />
      <Atmosphere />
      <Mission />
      <Tracks />
      <Guidance />
      <Testimonials items={content.testimonials} />
      <Clients />
    </>
  );
}
