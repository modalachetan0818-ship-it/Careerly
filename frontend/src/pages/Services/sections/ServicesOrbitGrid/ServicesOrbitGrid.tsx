import { LayoutGroup } from "framer-motion";
import { CAREERLY_SERVICES } from "../../data/servicesCatalog";
import { SectionHeader } from "../../shared/SectionHeader";
import { ExpandableBentoGrid } from "./ExpandableBentoGrid";
import styles from "./ServicesOrbitGrid.module.css";

export function ServicesOrbitGrid() {
  return (
    <section
      id="services-orbit"
      className={styles.section}
      aria-labelledby="services-orbit-title"
    >
      <div className={styles.bgPlate} aria-hidden />
      <div className={styles.scrim} aria-hidden />
      <div className={styles.bg} aria-hidden>
        <span className={styles.orbA} />
        <span className={styles.orbB} />
        <span className={styles.gridMesh} />
      </div>
      <div className="container">
        <SectionHeader
          id="services-orbit-title"
          eyebrow="Service lanes"
          title="Six ways Careerly shows up for you"
          lead="Tap a lane to open the full story — what we offer, who it’s for, and what you walk away with."
        />
        <div className={styles.stage}>
          <LayoutGroup>
            <ExpandableBentoGrid services={CAREERLY_SERVICES} />
          </LayoutGroup>
        </div>
      </div>
    </section>
  );
}
