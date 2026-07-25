import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { GOOGLE_FORM_URL } from "../../../../constants/links";
import { springSoft, VIEWPORT } from "../../motion/springs";
import { hoverSafe } from "../../motion/reducedMotion";
import styles from "./ClarityCTA.module.css";

export function ClarityCTA() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.section} aria-labelledby="clarity-cta-title">
      <div className={styles.bgPlate} aria-hidden />
      <div className={styles.scrim} aria-hidden />
      <div className="container">
        <motion.div
          className={styles.panel}
          initial={reduce ? false : { opacity: 0, y: 24, rotateX: 10, z: -30 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
          viewport={VIEWPORT}
          transition={springSoft}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className={styles.glow} aria-hidden />
          <h2 id="clarity-cta-title" className={styles.title}>
            Need help choosing a path?
          </h2>
          <p className={styles.lead}>
            Talk to us — we will help you find clarity and next steps.
          </p>
          <div className={styles.actions}>
            <motion.div whileHover={hoverSafe(reduce, { y: -3, scale: 1.02 })}>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                Talk to Careerly
              </a>
            </motion.div>
            <motion.div whileHover={hoverSafe(reduce, { y: -2 })}>
              <Link to="/about" className={`btn btn-ghost ${styles.ghost}`}>
                About Us
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
