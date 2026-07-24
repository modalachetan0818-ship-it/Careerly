import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { OUTCOME_PILLARS, OUTCOME_SECTION } from "../../data/outcomeLedger";
import { SectionHeader } from "../../shared/SectionHeader";
import { springSoft, STAGGER, VIEWPORT } from "../../motion/springs";
import { hoverSafe } from "../../motion/reducedMotion";
import styles from "./OutcomesAtelier.module.css";

export function OutcomesAtelier() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const spread = useTransform(scrollYProgress, [0.15, 0.55], [18, 0]);

  return (
    <section
      ref={ref}
      id="outcomes-atelier"
      className={styles.section}
      aria-labelledby="outcomes-title"
    >
      <div className={styles.bgPlate} aria-hidden />
      <div className={styles.scrim} aria-hidden />
      <div className="container">
        <SectionHeader
          id="outcomes-title"
          eyebrow={OUTCOME_SECTION.eyebrow}
          title={OUTCOME_SECTION.title}
          lead={OUTCOME_SECTION.lead}
        />

        <motion.div
          className={styles.ledger}
          style={reduce ? undefined : { rotateX: spread }}
        >
          {OUTCOME_PILLARS.map((pillar, i) => (
            <motion.article
              key={pillar.id}
              className={styles.pillar}
              initial={
                reduce
                  ? false
                  : {
                      opacity: 0,
                      y: 30,
                      rotateX: pillar.rotateX,
                      rotateY: pillar.rotateY,
                      z: -pillar.translateZ * 0.4,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: reduce ? 0 : pillar.rotateX * 0.2,
                rotateY: reduce ? 0 : pillar.rotateY * 0.2,
                z: reduce ? 0 : pillar.translateZ * 0.25,
              }}
              viewport={VIEWPORT}
              transition={{ ...springSoft, delay: i * STAGGER.normal }}
              whileHover={hoverSafe(reduce, {
                z: pillar.translateZ * 0.45,
                rotateX: pillar.rotateX * 0.1,
                rotateY: pillar.rotateY * 0.1,
                scale: 1.02,
              })}
              style={{ transformStyle: "preserve-3d" }}
            >
              <span className={styles.index}>{pillar.index}</span>
              <h3>{pillar.title}</h3>
              <p className={styles.lead}>{pillar.lead}</p>
              <p className={styles.body}>{pillar.body}</p>
              <ul className={styles.list}>
                {pillar.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <div className={styles.pillarShadow} aria-hidden />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
