import { ABOUT_HERO } from "../../data";
import { CinematicPageHero } from "../../../../components/CinematicPageHero";

export function AboutHero() {
  return (
    <CinematicPageHero
      titleId="about-hero-title"
      eyebrow={ABOUT_HERO.eyebrow}
      title={ABOUT_HERO.title}
      lead={ABOUT_HERO.lead}
      primaryCta={ABOUT_HERO.primaryCta}
      secondaryCta={ABOUT_HERO.secondaryCta}
    />
  );
}
