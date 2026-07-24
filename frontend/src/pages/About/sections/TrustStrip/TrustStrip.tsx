import { TRUST_STRIP } from "../../data";
import { Reveal } from "../../shared/Reveal";
import styles from "./TrustStrip.module.css";

/** Qualitative trust strip — no invented placement metrics. */
export function TrustStrip() {
  return (
    <section className={styles.strip} aria-labelledby="trust-strip-title">
      <div className={`container ${styles.inner}`}>
        <Reveal>
          <h2 id="trust-strip-title" className={styles.title}>
            {TRUST_STRIP.title}
          </h2>
        </Reveal>

        <ul className={styles.grid}>
          {TRUST_STRIP.pillars.map((pillar, i) => (
            <Reveal
              key={pillar.id}
              as="li"
              delay={0.04 + i * 0.05}
              className={styles.item}
            >
              <p className={styles.label}>{pillar.label}</p>
              <p className={styles.detail}>{pillar.detail}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
