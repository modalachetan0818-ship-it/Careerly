import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CAREERLY_SERVICES } from "../../data/servicesCatalog";
import { SectionHeader } from "../../shared/SectionHeader";
import { DepthStage } from "../../geometry/DepthStage";
import { springSoft, springSnappy, STAGGER, VIEWPORT } from "../../motion/springs";
import { hoverSafe } from "../../motion/reducedMotion";
import styles from "./ServiceDeepDive.module.css";

export function ServiceDeepDive() {
  const reduce = useReducedMotion();
  const [activeId, setActiveId] = useState(CAREERLY_SERVICES[0].id);
  const active =
    CAREERLY_SERVICES.find((s) => s.id === activeId) ?? CAREERLY_SERVICES[0];

  return (
    <section
      id="service-deep-dive"
      className={styles.section}
      aria-labelledby="deep-dive-title"
    >
      <div className={styles.bgPlate} aria-hidden />
      <div className={styles.scrim} aria-hidden />
      <div className="container">
        <SectionHeader
          id="deep-dive-title"
          eyebrow="Service deep dive"
          title="Pick a lane. See the detail."
          lead="Select any Careerly service to explore highlights, outcomes, and how the engagement typically unfolds."
        />

        <div className={styles.layout}>
          <div className={styles.picker} role="listbox" aria-label="Services">
            {CAREERLY_SERVICES.map((service, i) => {
              const on = service.id === activeId;
              return (
                <motion.button
                  key={service.id}
                  type="button"
                  role="option"
                  aria-selected={on}
                  className={`${styles.pick} ${on ? styles.pickOn : ""}`}
                  onClick={() => setActiveId(service.id)}
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VIEWPORT}
                  transition={{ ...springSoft, delay: i * STAGGER.tight }}
                  whileHover={hoverSafe(reduce, { x: 4, z: 8 })}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <span className={styles.pickIndex}>{service.index}</span>
                  <span className={styles.pickMeta}>
                    <strong>{service.title}</strong>
                    <small>{service.short}</small>
                  </span>
                </motion.button>
              );
            })}
          </div>

          <DepthStage perspective={1300}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                className={styles.detail}
                initial={
                  reduce
                    ? false
                    : {
                        opacity: 0,
                        rotateY: 14,
                        z: -50,
                        scale: 0.96,
                      }
                }
                animate={{ opacity: 1, rotateY: 0, z: 0, scale: 1 }}
                exit={
                  reduce
                    ? undefined
                    : { opacity: 0, rotateY: -10, z: -30, transition: { duration: 0.22 } }
                }
                transition={springSnappy}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className={styles.detailHead}>
                  <span className={styles.badge}>{active.index}</span>
                  <h3>{active.title}</h3>
                  <p>{active.summary}</p>
                </div>

                <div className={styles.highlights}>
                  {active.highlights.map((h, i) => (
                    <motion.div
                      key={h.id}
                      className={styles.highlight}
                      initial={reduce ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08 + i * 0.05 }}
                      style={{ transform: `translateZ(${20 + i * 10}px)` }}
                    >
                      <strong>{h.label}</strong>
                      <span>{h.detail}</span>
                    </motion.div>
                  ))}
                </div>

                <div className={styles.blocks}>
                  {active.deepDive.map((block, i) => (
                    <motion.div
                      key={block.id}
                      className={styles.block}
                      initial={reduce ? false : { opacity: 0, rotateX: 8 }}
                      animate={{ opacity: 1, rotateX: 0 }}
                      transition={{ delay: 0.15 + i * 0.08 }}
                      style={{ transform: `translateZ(${12 + i * 8}px)` }}
                    >
                      <h4>{block.heading}</h4>
                      <p>{block.body}</p>
                      <ul>
                        {block.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                <div className={styles.outcomes}>
                  <p className={styles.outcomesLabel}>You walk away with</p>
                  <ul>
                    {active.outcomes.map((o) => (
                      <li key={o.id}>
                        <strong>{o.title}</strong>
                        <span>{o.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </DepthStage>
        </div>
      </div>
    </section>
  );
}
