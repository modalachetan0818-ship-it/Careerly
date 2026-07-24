import { useState, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Transition,
  type TargetAndTransition,
} from "framer-motion";
import { PATHWAY_SECTION, PATHWAY_STEPS } from "../../data/pathwaySteps";
import { SectionHeader } from "../../shared/SectionHeader";
import { PerspectiveFrame } from "../../geometry/PerspectiveFrame";
import {
  springSnappy,
  springSoft,
  springBounceLite,
  tweenElegant,
  STAGGER,
  VIEWPORT,
} from "../../motion/springs";
import { hoverSafe } from "../../motion/reducedMotion";
import styles from "./PathwayJourney.module.css";

type StageTheme = {
  initial: TargetAndTransition;
  animate: TargetAndTransition;
  exit: TargetAndTransition;
  transition: Transition;
};

/** Distinct enter/exit themes per stage — resting pose is always axis-aligned (0°). */
const STAGE_THEMES: StageTheme[] = [
  {
    // 01 — fade + scale up
    initial: { opacity: 0, scale: 0.9, rotate: 0 },
    animate: { opacity: 1, scale: 1, rotate: 0, x: 0, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, scale: 0.96, rotate: 0 },
    transition: { ...springSoft, duration: 0.45 },
  },
  {
    // 02 — slide from right; brief rotate on enter/exit, settle straight
    initial: { opacity: 0, x: 56, rotate: 5 },
    animate: { opacity: 1, x: 0, rotate: 0, y: 0, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, x: 28, rotate: 3 },
    transition: springSnappy,
  },
  {
    // 03 — blur-in / soft morph
    initial: { opacity: 0, filter: "blur(14px)", scale: 1.03, rotate: 0 },
    animate: { opacity: 1, filter: "blur(0px)", scale: 1, rotate: 0, x: 0, y: 0 },
    exit: { opacity: 0, filter: "blur(10px)", scale: 0.99, rotate: 0 },
    transition: tweenElegant,
  },
  {
    // 04 — rise from below with spring
    initial: { opacity: 0, y: 48, rotate: 0 },
    animate: { opacity: 1, y: 0, rotate: 0, x: 0, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, y: 24, rotate: 0 },
    transition: springBounceLite,
  },
];

const REDUCED_THEME: StageTheme = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.22, ease: "easeInOut" },
};

export function PathwayJourney() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(PATHWAY_STEPS[0].id);
  const activeIndex = Math.max(
    0,
    PATHWAY_STEPS.findIndex((s) => s.id === active)
  );
  const activeStep = PATHWAY_STEPS[activeIndex] ?? PATHWAY_STEPS[0];
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const railScale = useTransform(scrollYProgress, [0.1, 0.7], [0.15, 1]);

  const theme = reduce
    ? REDUCED_THEME
    : (STAGE_THEMES[activeIndex] ?? STAGE_THEMES[0]);

  return (
    <section
      ref={sectionRef}
      id="pathway-journey"
      className={styles.section}
      aria-labelledby="pathway-title"
    >
      <div className={styles.bgPlate} aria-hidden />
      <div className={styles.scrim} aria-hidden />
      <div className="container">
        <SectionHeader
          id="pathway-title"
          eyebrow={PATHWAY_SECTION.eyebrow}
          title={PATHWAY_SECTION.title}
          lead={PATHWAY_SECTION.lead}
        />

        <div className={styles.layout}>
          <div className={styles.railCol} aria-hidden={!reduce}>
            <div className={styles.railTrack}>
              <motion.div
                className={styles.railFill}
                style={reduce ? { scaleY: 1 } : { scaleY: railScale }}
              />
            </div>
            <ol className={styles.stepList}>
              {PATHWAY_STEPS.map((step, i) => {
                const isOn = step.id === active;
                return (
                  <motion.li key={step.id} className={styles.stepItem}>
                    <motion.button
                      type="button"
                      className={`${styles.stepBtn} ${isOn ? styles.stepBtnOn : ""}`}
                      onClick={() => setActive(step.id)}
                      initial={reduce ? false : { opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={VIEWPORT}
                      transition={{ ...springSoft, delay: i * STAGGER.normal }}
                      whileHover={hoverSafe(reduce, { x: 4 })}
                      aria-pressed={isOn}
                    >
                      <span className={styles.stepNum}>{step.number}</span>
                      <span className={styles.stepLabel}>
                        <strong>{step.title}</strong>
                        <small>{step.durationHint}</small>
                      </span>
                    </motion.button>
                  </motion.li>
                );
              })}
            </ol>
          </div>

          <div className={styles.detailCol}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                initial={theme.initial}
                animate={theme.animate}
                exit={theme.exit}
                transition={theme.transition}
                style={{ transformOrigin: "center center" }}
              >
                <PerspectiveFrame
                  entrance={false}
                  rotateX={0}
                  rotateY={0}
                  translateZ={activeStep.visual.translateZ * 0.4}
                >
                  <p className={styles.detailEyebrow}>Stage {activeStep.number}</p>
                  <h3 className={styles.detailTitle}>{activeStep.title}</h3>
                  <p className={styles.detailLead}>{activeStep.lead}</p>
                  <p className={styles.detailBody}>{activeStep.body}</p>
                  <ul className={styles.checkpoints}>
                    {activeStep.checkpoints.map((c, i) => (
                      <motion.li
                        key={c.id}
                        className={styles.checkpoint}
                        initial={reduce ? false : { opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.08 + i * 0.06 }}
                      >
                        <span className={styles.cpLabel}>{c.label}</span>
                        <span className={styles.cpHint}>{c.hint}</span>
                      </motion.li>
                    ))}
                  </ul>
                </PerspectiveFrame>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
