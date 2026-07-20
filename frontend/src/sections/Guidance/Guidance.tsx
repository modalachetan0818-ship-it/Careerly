import { motion, useReducedMotion } from "framer-motion";
import styles from "./Guidance.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    title: "Career clarity",
    text: "Map your strengths to IT or Non-IT roles with honest, mentor-backed guidance.",
  },
  {
    title: "Resume & profile",
    text: "Polish your story so recruiters see impact — not just a list of tasks.",
  },
  {
    title: "Interview readiness",
    text: "Practice role-focused conversations until confidence feels natural.",
  },
] as const;

export function Guidance() {
  const reduce = useReducedMotion();

  return (
    <section
      className={`section ${styles.guidance}`}
      aria-labelledby="guidance-heading"
    >
      <div className={styles.bgLayer} aria-hidden>
        <img
          src="/brand/sections/guidance-bg.jpg"
          alt=""
          className={styles.bgImage}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className={styles.overlay} aria-hidden />
      <div className={styles.edgeTop} aria-hidden />
      <div className={styles.edgeBottom} aria-hidden />

      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.head}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.65, ease }}
        >
          <p className={styles.eyebrow}>Guidance</p>
          <h2 id="guidance-heading" className="section-title">
            Coaching that moves you forward
          </h2>
          <div className="gold-rule" />
          <p className="section-lead">
            From first conversation to interview day — practical steps shaped
            for Bengaluru careers.
          </p>
        </motion.div>

        <div className={styles.ribbon} aria-hidden>
          <span />
        </div>

        <div className={styles.stepGrid}>
          {steps.map((step, i) => (
            <motion.article
              key={step.title}
              className={styles.stepCard}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
            >
              <span className={styles.stepIndex}>{`0${i + 1}`}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
