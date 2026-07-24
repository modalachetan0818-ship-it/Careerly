import { SERVICES_HERO } from "../../data/heroContent";
import { CinematicPageHero } from "../../../../components/CinematicPageHero";

export function ServicesHero() {
  return (
    <CinematicPageHero
      titleId="services-hero-title"
      eyebrow={SERVICES_HERO.eyebrow}
      title={SERVICES_HERO.title}
      lead={SERVICES_HERO.lead}
      primaryCta={SERVICES_HERO.primaryCta}
      secondaryCta={SERVICES_HERO.secondaryCta}
    />
  );
}
