import { CinematicPageHero } from "../../components/CinematicPageHero";

export const CONTACT_HERO = {
  eyebrow: "Contact us",
  title: "Let’s talk about your next step",
  lead: "Reach Careerly for placements, career guidance, or hiring partnerships — we respond with clarity and next steps.",
  primaryCta: { label: "Send a message", href: "#contact-form" },
  secondaryCta: { label: "Call us", href: "tel:+919686448306" },
} as const;

export function ContactHero() {
  return (
    <CinematicPageHero
      titleId="contact-hero-title"
      eyebrow={CONTACT_HERO.eyebrow}
      title={CONTACT_HERO.title}
      lead={CONTACT_HERO.lead}
      primaryCta={CONTACT_HERO.primaryCta}
      secondaryCta={CONTACT_HERO.secondaryCta}
    />
  );
}
