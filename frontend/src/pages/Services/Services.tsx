import {
  ServicesHero,
  ServicesOrbitGrid,
  PathwayJourney,
  OutcomesAtelier,
  ServiceDeepDive,
  ClarityCTA,
} from "./sections";
import styles from "./Services.module.css";

/**
 * Careerly Services page — elevated composition with Framer Motion 3D.
 * Sections: hero, service orbit grid, pathway journey,
 * outcomes atelier, service deep dive, clarity CTA.
 */
export function Services() {
  return (
    <div className={styles.page}>
      <ServicesHero />
      <ServicesOrbitGrid />
      <PathwayJourney />
      <OutcomesAtelier />
      <ServiceDeepDive />
      <ClarityCTA />
    </div>
  );
}
