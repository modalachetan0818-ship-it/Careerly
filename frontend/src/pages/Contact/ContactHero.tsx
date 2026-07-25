import { CinematicPageHero } from "../../components/CinematicPageHero";
import { GOOGLE_FORM_URL } from "../../constants/links";

export const CONTACT_HERO = {
  eyebrow: "Contact us",
  title: "Let’s talk about your next step",
  lead: "Reach Careerly for placements, career guidance, or hiring partnerships — we respond with clarity and next steps.",
  primaryCta: { label: "Talk to Careerly", href: GOOGLE_FORM_URL },
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
