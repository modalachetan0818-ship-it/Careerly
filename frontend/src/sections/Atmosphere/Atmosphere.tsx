import { motion, useReducedMotion } from "framer-motion";
import styles from "./Atmosphere.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

const IMAGES = {
  wash: "/brand/sections/atmosphere-campus.jpg",
  main: "/brand/sections/atmosphere-workspace.jpg",
  float: "/brand/sections/atmosphere-desk.jpg",
  accent: "/brand/sections/atmosphere-campus.jpg",
} as const;

export function Atmosphere() {
  const reduce = useReducedMotion();

  return (
    <section
      className={`section ${styles.atmosphereSection}`}
      aria-labelledby="atmosphere-heading"
    >
      <div className={styles.plainField} aria-hidden />

      <div className={styles.bgWash} aria-hidden>
        <img src={IMAGES.wash} alt="" loading="lazy" decoding="async" />
      </div>
      <div className={styles.veil} aria-hidden />

      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.copy}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease }}
        >
          <p className={styles.label}>Campus to career</p>
          <h2 id="atmosphere-heading" className="section-title">
            Where careers take shape
          </h2>
          <div className="gold-rule" />
          <p className={styles.lead}>
            From first conversations on campus to confident steps in the
            workplace — Careerly builds the atmosphere where clarity and
            ambition meet.
          </p>
        </motion.div>

        <div className={styles.gallery}>
          <motion.div
            className={`${styles.panel} ${styles.panelMain}`}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease }}
          >
            <img
              src={IMAGES.main}
              alt="Bright professional workspace with soft cream and gold light"
              loading="lazy"
              decoding="async"
            />
            <span className={styles.goldEdge} aria-hidden />
          </motion.div>

          <motion.div
            className={`${styles.panel} ${styles.panelFloat}`}
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            <img
              src={IMAGES.float}
              alt="Quiet desk details in warm cream and gold tones"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          <motion.div
            className={`${styles.panel} ${styles.panelAccent}`}
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.16, ease }}
          >
            <img
              src={IMAGES.accent}
              alt=""
              loading="lazy"
              decoding="async"
              aria-hidden
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
