import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./Mission.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

const highlights = [
  { label: "IT & Non-IT", text: "Clear tracks for every profile" },
  { label: "Bengaluru", text: "Local insight, real outcomes" },
  { label: "Human coaching", text: "Clarity before the next step" },
] as const;

export function Mission() {
  const reduce = useReducedMotion();

  return (
    <section
      className={`section ${styles.missionSection}`}
      aria-labelledby="mission-heading"
    >
      <div className={styles.bgLayer} aria-hidden>
        <img
          src="/brand/sections/mission-bg.jpg"
          alt=""
          className={styles.bgImage}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className={styles.overlay} aria-hidden />
      <div className={styles.edgeTop} aria-hidden />
      <div className={styles.edgeBottom} aria-hidden />

      <div className={`container ${styles.missionGrid}`}>
        <motion.div
          className={styles.copy}
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease }}
        >
          <p className={styles.missionLabel}>Our mission</p>
          <h2 id="mission-heading" className="section-title">
            Your career, our mission — success together.
          </h2>
          <div className="gold-rule" />
          <p className={styles.missionText}>
            Careerly opens doors for students and professionals across IT and
            Non-IT. Practical coaching, honest clarity, and a human approach —
            so ambition in Bengaluru turns into outcomes.
          </p>

          <div className={styles.highlightRow}>
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                className={styles.highlight}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.08 + i * 0.06, ease }}
              >
                <strong>{item.label}</strong>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>

          <Link to="/about" className="btn btn-ghost">
            Learn About Us
          </Link>
        </motion.div>

        <div className={styles.perspective}>
          <motion.div
            className={styles.missionCard}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
          >
            <div className={styles.cardGlow} aria-hidden />
            <p className={styles.missionQuote}>
              “Great careers start here — with clarity, confidence, and the
              right guidance.”
            </p>
            <p className={styles.missionBrand}>CAREERLY</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
